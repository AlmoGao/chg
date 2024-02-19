const { defineConfig } = require("@vue/cli-service");
const CompressionPlugin = require("compression-webpack-plugin");
const { VantResolver } = require("@vant/auto-import-resolver");
const ComponentsPlugin = require("unplugin-vue-components/webpack");

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
        threshold: 10240, // 文件大小大于等于 10kb 时启用压缩
        minRatio: 0.8, // 压缩比例达到 0.8 时启用压缩
      }),
      ComponentsPlugin.default({ resolvers: [VantResolver()] }),
    ],
  },
  publicPath: "/",
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "https://fzx.gucigdab.top/",
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
});
