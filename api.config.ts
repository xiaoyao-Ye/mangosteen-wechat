import { defineConfig } from "initapi";

export default defineConfig({
  importAxios: 'import { request } from "../index";',
  useAxios: "request",
  service: {
    test: "https://petstore.swagger.io/v2/swagger.json",
    mangosteen: "http://127.0.0.1:3000/api-json",
  },
  outputDir: "./src/api",
  outputType: "TypeScript",
});
