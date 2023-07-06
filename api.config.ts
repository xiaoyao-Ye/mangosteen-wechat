import { defineConfig } from "initapi";

export default defineConfig({
  importRequest: 'import { request } from "../index";',
  useRequest: "request",
  service: {
    test: {
      url: "https://petstore.swagger.io/v2/swagger.json",
    },
    mangosteen: {
      url: "http://127.0.0.1:3000/api-json",
      commonPrefix: "/api",
    },
  },
  outputDir: "./src/api",
  outputType: "TypeScript",
});
