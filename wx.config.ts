import { defineConfig } from "wechat-ci";

export default defineConfig({
  appid: "wxfcc00bea75b14cab",
  type: "miniProgram",
  projectPath: "./dist/build/mp-weixin",
  privateKeyPath: "./key/private.wxfcc00bea75b14cab.key",
  packageJsonPath: "./package.json",
  previewOptions: {
    qrcodeFormat: "image",
    qrcodeOutputDest: "./qrcode.jpg",
  },
  settings: {
    "urlCheck": false,
    "es6": true,
    "postcss": false,
    "minified": false,
    "newFeature": true,
    "bigPackageSizeSupport": true,
  },
});
