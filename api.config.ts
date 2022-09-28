// import { defineConfig } from 'initapi'

// export default defineConfig({
//   importAxios: 'import axios from "../index";',
//   useAxios: 'axios.request',
//   swagger: {
//     mangosteen: 'http://127.0.0.1:3000/api-json',
//   },
// })

export default {
  outputDir: './src/api',
  importAxios: 'import axios from "../index";',
  useAxios: 'axios.request',
  swagger: {
    mangosteen: 'http://127.0.0.1:3000/api-json',
  },
}
