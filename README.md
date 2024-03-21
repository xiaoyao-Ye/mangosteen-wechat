# wechat

A miniProgram

## 注意

项目虽然是 uniapp 的项目, 但是后续 wechat-ci 等都是为微信小程序准备的,
所以完全当做微信小程序来避免未考虑的边界情况

`miniprogram-ci` 仅支持 npm 安装进行上传, 使用其他方式安装打包上传会报错.

## todo

- [x] 金额使用分进行存储, 前端显示和新增\*100/100 处理
- [ ] bill 列表改成一次请求所有 tab, 切换 tab 时不再请求数据
- [x] bill 列表分页功能
- [ ] unplugin-vue-components
- [ ] unocss
- [ ] 路由守卫(拦截未登录)
- [ ] 请求时 loading 状态
