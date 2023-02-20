// import { defineConfig } from 'initapi'

// export default defineConfig({
//   importAxios: 'import { request } from "../index";',
//   useAxios: 'request',
//   swagger: {
//     mangosteen: 'http://127.0.0.1:3000/api-json',
//   },
//   outputDir: './src/api',
//   outputType: 'TypeScript'
// })

export default {
  outputDir: './src/api',
  outputType: 'TypeScript',
  importAxios: 'import { request } from "../index";',
  useAxios: 'request',
  swagger: {
    mangosteen: 'http://127.0.0.1:3000/api-json',
  },
}
