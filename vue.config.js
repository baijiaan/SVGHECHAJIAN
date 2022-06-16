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
};
