import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";
import path from "node:path";
// import Components from 'unplugin-vue-components/vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'
// import Unocss from 'unocss/vite'
// import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ["vue", "uni-app"],
      dts: "src/auto-imports.d.ts",
    }),
    // Components({
    //   resolvers: [VantResolver()],
    //   dts: 'src/components.d.ts',
    // }),
    // Unocss({
    // presets: [
    //   presetAttributify({
    //     /* preset options */
    //   }),
    //   presetUno(),
    //   // ...custom presets
    // ],
    // }),
  ],
  css: {
    preprocessorOptions: {
      scss: { additionalData: '@import "@/styles/_variable.scss";' },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
});
