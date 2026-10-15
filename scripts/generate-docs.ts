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

// Mark the section as its own docs tree so the sidebar scopes to /docs/api.
const meta = JSON.parse(await readFile(`${output}/meta.json`, "utf8"));
await writeFile(
  `${output}/meta.json`,
  `${JSON.stringify({ title: "API Reference", root: true, pages: ["index", ...meta.pages] }, null, 2)}\n`,
);

// Collect the generated tags and their slugs for the legacy redirects below.
const groupSlugs = new Map<string, string[]>();
for (const tag of meta.pages as string[]) {
  const folder = JSON.parse(
    await readFile(`${output}/${tag}/meta.json`, "utf8"),
  );
  groupSlugs.set(
    tag,
    (folder.pages as string[]).map((page) => kebab(page)),
  );
}

await writeFile(
  `${output}/index.mdx`,
  `---
title: API Reference
description: Integrate your applications with CtrlPanel.
---

The CtrlPanel REST API covers users, servers, products, roles, vouchers and notifications. Every endpoint is documented here from the OpenAPI specification.

## Authentication

Create a bearer token in your panel and send it with every request:

\`\`\`http
Authorization: Bearer YOUR_TOKEN
Accept: application/json
\`\`\`

The base URL is your own panel installation.

[Download the complete OpenAPI specification](/openapi/openapi.yaml).
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

// Map every endpoint URL to its HTTP method (plus webhook flag) for the
// sidebar method badges. Read back from frontmatter so slugs always match.
const methods: Record<string, { method: string; webhook: boolean }> = {};
for (const group of await readdir(output)) {
  if (group === "index.mdx" || group === "meta.json" || group.endsWith(".mdx"))
    continue;
  for (const file of await readdir(`${output}/${group}`)) {
    if (!file.endsWith(".mdx")) continue;
    const front = await readFile(`${output}/${group}/${file}`, "utf8");
    const method = front.match(/^ {2}method: ([A-Z]+)$/m)?.[1];
    const webhook = front.match(/^ {2}webhook: (true|false)$/m)?.[1] === "true";
    if (method)
      methods[`/docs/api/${group}/${file.replace(/\.mdx$/, "")}`] = {
        method,
        webhook,
      };
  }
}
await writeFile(
  "lib/api-methods.json",
  `${JSON.stringify(methods, null, 2)}\n`,
);

console.log("Generated API reference from public/openapi/openapi.yaml.");
