const path = require("path");

// 在vue.config.js中没有配置 resolve 方法， 需要自定义一个

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  outputDir: "dist", // build输出目录
  assetsDir: "assets", // 静态资源目录（js, css, img）
  lintOnSave: false, // 是否开启eslint
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: "localhost",
    port: "8081",
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://118.190.39.123:8877/", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete("svg"); // 重点:删除默认配置中处理svg

    config.module

      .rule("svg-sprite-loader") // rule 匹配规则

      .test(/\.svg$/) // 用正则匹配 文件

      .include // 包含 包括
      .add(resolve("src/icon")) // 处理svg目录

      .end()

      .use("svg-sprite-loader") // 配置loader  use() 使用哪个loader

      .loader("svg-sprite-loader") // 加载loader

      .options({
        // [name] 变量。一般表示匹配到的文件名 xxx.svg

        // 注意： symbolId  在  <use xlink:href="#dl-icon-svg文件名" />

        symbolId: "dl-icon-[name]", // 将所有的.svg 集成到 symbol中，当使用 类名 icon-文件名
      });
  },
};
