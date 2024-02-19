/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-08-19 18:59:38
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-09-02 01:12:30
 * @FilePath: /sex/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import router from "./router";
import { install } from "./assets/js/registComponents";
// import { installDirective } from "./directive";
import api from "@/assets/js/api.js";
import store from "@/store";
import "./registerServiceWorker";
import "./assets/css/index.css"
// import "video.js/dist/video-js.css"; // 引入video.js的css
// import hls from "videojs-contrib-hls"; // 播放hls流需要的插件
const app = createApp(App);
install(app);
// installDirective(app);
app.config.globalProperties.$api = api;
app.use(router);
app.use(store);
// app.use(hls);
app.use(VueViewer, {
  defaultOptions: {
    zIndex: 3000,
    fullscreen: false,
    loop: false,
  },
});
app.mount("#app");
