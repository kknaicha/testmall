const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))

  }
}

// const path = require('path')

// export function configureWebpack(config) {
//   config.resolve = {
//     // 配置解析别名
//     extensions: [".js", ".json", ".vue"],
//     alias: {
//       // vue: "vue/dist/vue.js",
//       components: path.resolve(__dirname, "./src/components"),
//       common: path.resolve(__dirname, "./src/common"),
//       views: path.resolve(__dirname, "./src/views"),
//       assets: path.resolve(__dirname, "./src/assets"),
//       network: path.resolve(__dirname, "./src/network")
//     }
//   };
// }