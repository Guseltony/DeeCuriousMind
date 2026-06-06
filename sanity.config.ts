import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "nvxzbd4e",
  dataset: dataset || "production",
  plugins: [structureTool()],
  schema: {
    types: schema.types,
  },
});
