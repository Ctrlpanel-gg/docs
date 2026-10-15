import { createOpenAPI } from "fumadocs-openapi/server";

// Server-side OpenAPI loader. Reads the spec that ships with the site,
// the same file users can download at /openapi/openapi.yaml.
export const openapi = createOpenAPI({
  input: ["./public/openapi/openapi.yaml"],
});
