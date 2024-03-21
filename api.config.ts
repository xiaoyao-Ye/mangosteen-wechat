import { defineConfig } from "initapi";

export default defineConfig({
  importRequest: 'import { request } from "../index";',
  useRequest: "request",
  service: {
    // test: {
    //   url: "https://petstore.swagger.io/v2/swagger.json",
    // },
    // mangosteen: {
    //   url: "http://127.0.0.1:3000/docs-json",
    //   commonPrefix: "/api",
    // },
    mangosteen: {
      url: "http://43.136.108.102:1024/docs-json",
      commonPrefix: "/api/v1",
    },
  },
  multipleFiles: false,
  outputDir: "./src/api",
  outputType: "TypeScript",
});
