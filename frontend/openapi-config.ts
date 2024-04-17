import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://127.0.0.1:8000/openapi.json",
  apiFile: "./src/AppApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./src/features/authentication/api.ts",
  exportName: "petApi",
  hooks: true,
};

export default config;
