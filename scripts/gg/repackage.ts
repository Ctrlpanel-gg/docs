// GG REPACKAGER
// REPACK ALL GG MODULES
// REBUILD PROJECT ON DEFAULT SETTINGS
// Good guess

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import path from "node:path";

// Configuration
// Tune this if anything goes wrong.
const root = process.cwd();
const target = path.join(root, "public/gg-nadhi.dev/gg.jsonc");

interface GGData {
  sha256: string;
  "opt:message": string;
  last_update: string;
  "opt:version": string;
}

interface GGMetadata {
  $format: number;
  description: string;
  data: GGData;
}

// Load environment variables from .env
async function loadEnv(): Promise<void> {
  try {
    process.loadEnvFile(path.join(root, ".env"));
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }
}

// SHA-256 fingerprint of the current Git commit
function getSHA256(): string {
  const commit = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: root,
    encoding: "utf8",
  }).trim();

  return createHash("sha256").update(commit).digest("hex");
}

async function main(): Promise<void> {
  await loadEnv();

  const metadata: GGMetadata = {
    $format: 1,
    description: "Basic telementary after deployment.",
    data: {
      sha256: getSHA256(),
      "opt:message": process.env.MESSAGE ?? "",
      last_update: new Date().toISOString(),
      "opt:version": process.env.VERSION ?? "",
    },
  };

  const json = JSON.stringify(metadata, null, 2);

  const output = `{
  // GG
  // Guess good, is a way to get project data using an endpoint.
  // Its made to check projects after deployment easier.
  // Thank you!
  // Nadhi.dev

${json.slice(2)}
`;

  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, output, "utf8");

  console.log("✓ GG deployment metadata updated");
  console.log(`  SHA256: ${metadata.data.sha256}`);
  console.log(`  Updated: ${metadata.data.last_update}`);
  console.log(`  Message: ${metadata.data["opt:message"]}`);
  console.log(`  Version: ${metadata.data["opt:version"]}`);
}

main().catch((error: unknown) => {
  console.error("Failed to update GG metadata:", error);
  process.exitCode = 1;
});
