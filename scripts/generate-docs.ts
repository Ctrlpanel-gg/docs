import { generateFiles } from "fumadocs-openapi";
import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import { openapi } from "../lib/openapi";

const output = "./content/docs/api";

/** `listUserNotifications` -> `list-user-notifications`, matching the old URLs. */
const kebab = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

// Intro copy for each tag's index page. Verified against the spec's request
// bodies (roles: name/color/power/permissions, vouchers: code/credits/uses/…).
const groupIntros: Record<string, string> = {
  notifications:
    "Send notifications to individual users or to everyone, and manage existing notifications.",
  "product-management":
    "Manage store products: pricing, resource allocation, and billing periods.",
  "role-management": "Manage roles: name, color, power, and permissions.",
  "server-management":
    "Create, update, and delete servers, adjust their resources, and suspend or unsuspend them.",
  "user-management":
    "Create, update, and delete users, adjust their balances and server limits, and suspend or unsuspend accounts.",
  "voucher-management":
    "Manage vouchers: codes, credit amounts, usage limits, and expiry.",
};

await rm(output, { recursive: true, force: true });

await generateFiles({
  input: openapi,
  output,
  // One page per endpoint, grouped by OpenAPI tag so the sidebar stays tidy.
  per: "operation",
  groupBy: "tag",
  includeDescription: true,
  meta: true,
  name(this: any, entry: any) {
    const operation = this.document.paths[entry.item.path][entry.item.method];
    return kebab(operation.operationId ?? operation.summary ?? "endpoint");
  },
});

// Mark the section as its own docs tree so the sidebar scopes to /docs/api,
// and point each folder at its index page instead of a bare list.
const meta = JSON.parse(await readFile(`${output}/meta.json`, "utf8"));
await writeFile(
  `${output}/meta.json`,
  `${JSON.stringify(
    { title: "API Reference", root: true, pagesIndex: "index", pages: meta.pages },
    null,
    2,
  )}\n`,
);

// Collect tags, link folders to their index page, and gather per-endpoint
// data (title + method + path) for the index cards and sidebar badges.
const groupSlugs = new Map<string, string[]>();
const endpoints = new Map<
  string,
  { slug: string; title: string; method: string; path: string }[]
>();
const methods: Record<string, { method: string; webhook: boolean }> = {};
for (const tag of meta.pages as string[]) {
  const dir = `${output}/${tag}`;
  const folder = JSON.parse(await readFile(`${dir}/meta.json`, "utf8"));
  await writeFile(
    `${dir}/meta.json`,
    `${JSON.stringify({ title: folder.title, pagesIndex: "index", ...folder }, null, 2)}\n`,
  );
  const pages = folder.pages as string[];
  groupSlugs.set(tag, pages.map((page) => kebab(page)));

  const list: { slug: string; title: string; method: string; path: string }[] = [];
  for (const slug of pages) {
    const front = await readFile(`${dir}/${slug}.mdx`, "utf8");
    const method = front.match(/^ {2}method: ([A-Z]+)$/m)?.[1];
    const webhook = front.match(/^ {2}webhook: (true|false)$/m)?.[1] === "true";
    const title = front.match(/^title: (.+)$/m)?.[1].trim() ?? slug;
    const path = front.match(/operations=\{\[\{"path":"([^"]+)"/)?.[1];
    if (method) {
      list.push({ slug, title, method, path: path ?? "" });
      methods[`/docs/api/${tag}/${slug}`] = { method, webhook };
    }
  }
  endpoints.set(tag, list);

  const cards = list
    .map(
      (e) =>
        `  <Card href="/docs/api/${tag}/${e.slug}" title="${e.title}">\n` +
        `    \`${e.method} ${e.path}\`\n` +
        `  </Card>`,
    )
    .join("\n");
  const intro = groupIntros[tag] ?? "";
  await writeFile(
    `${dir}/index.mdx`,
    `---
title: ${JSON.stringify(folder.title)}
description: ${JSON.stringify(intro)}
---

<Cards>
${cards}
</Cards>
`,
  );
}

await writeFile(
  `${output}/index.mdx`,
  `---
title: API Reference
description: Integrate your applications with CtrlPanel.
---

import { Bell, Package, ShieldCheck, Server, Users, Ticket } from 'lucide-react';

The CtrlPanel REST API covers users, servers, products, roles, vouchers and notifications. Every endpoint is documented here from the OpenAPI specification.

<Cards>
  <Card href="/docs/api/user-management" title="User Management" icon={<Users />}>
    Create, update, suspend, and delete users, plus balances and server limits.
  </Card>
  <Card href="/docs/api/server-management" title="Server Management" icon={<Server />}>
    Create, update, suspend, and delete servers, including resources.
  </Card>
  <Card href="/docs/api/product-management" title="Product Management" icon={<Package />}>
    Create, update, and delete store products.
  </Card>
  <Card href="/docs/api/role-management" title="Role Management" icon={<ShieldCheck />}>
    Create, update, and delete roles.
  </Card>
  <Card href="/docs/api/voucher-management" title="Voucher Management" icon={<Ticket />}>
    Create, update, and delete vouchers.
  </Card>
  <Card href="/docs/api/notifications" title="Notifications" icon={<Bell />}>
    Send, list, read, and delete user notifications.
  </Card>
</Cards>

## Authentication

Create a bearer token in your panel and send it with every request:

\`\`\`http
Authorization: Bearer YOUR_TOKEN
Accept: application/json
\`\`\`

The base URL is your own panel installation.

<a href="/openapi/openapi.yaml" download>Download the complete OpenAPI specification</a>.
`,
);

// The previous flat API pages lived at /docs/api/<slug>; keep those URLs
// working now that each endpoint sits under its tag folder.
const aliasesPath = "lib/aliases.json";
const aliases = JSON.parse(await readFile(aliasesPath, "utf8"));
for (const old of Object.keys(aliases)) {
  if (
    old.startsWith("/docs/api/") &&
    old !== "/docs/api/ctrlpanel-gg-api-documentation"
  ) {
    delete aliases[old];
  }
}
for (const [tag, slugs] of groupSlugs) {
  for (const slug of slugs)
    aliases[`/docs/api/${slug}`] = `/docs/api/${tag}/${slug}`;
}
await writeFile(aliasesPath, `${JSON.stringify(aliases, null, 2)}\n`);

// Sidebar method badges, keyed by endpoint URL (index pages have no method
// frontmatter, so they never land here).
await writeFile(
  "lib/api-methods.json",
  `${JSON.stringify(methods, null, 2)}\n`,
);

console.log("Generated API reference from public/openapi/openapi.yaml.");
