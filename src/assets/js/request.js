/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-08-24 19:37:56
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-09-01 18:08:33
 * @FilePath: /sex/src/assets/js/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
import store from "../../store/index.js";
import { decrypt } from "./utils.js";
// const jcApi = ['https://api.chinahongzhai.com/api/v1/index/ping', 'https://app.al18s.com/api/v1/index/ping', 'https://app.el18s.com/api/v1/index/ping', 'https://app.il18s.com/api/v1/index/ping']
const service = axios.create({
  // baseURL: 'https://api.xvideos.pusta.click/',
  timeout: 30000,
  retryDelay: 100,
  shouldRetry: (error) => true,
});

service.interceptors.request.use(
  (config) => {
    // let retry = (store.state.baseUrl.urls.length || 1) - 1
    // if (!config.pathUrl) {
    //   config.pathUrl = config.url
    // }

    // config.url =
    //   config.url.indexOf("http") > -1
    //     ? config.url
    //     : store.state.baseUrl.urls[0] + config.url;
    config.retry = 2;

    let userInfo = localStorage.getItem("_userInfo");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      config.headers.authorization = userInfo.token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (res) => {
    res.data = decrypt(res.data);
    res.data = JSON.parse(res.data);
    document.getElementById("loading").style.display = "none";
    if (res.data.code !== 0) {
      // Toast(res.data.message);
      if (res.data.message === "无效请求" || res.code === 501) {
        store.commit("SET_LOGIN_POPUP", { show: true, type: "Login" });
        store.commit("SET_USER_INFO", {
          focus_user: "",
          like_path: "",
          want: "",
          comics_like: "",
        });
      }
    }
    return res.data;
  },
  (err) => {
    var config = err.config;
    // 判断是否配置了重试
    if (!config || !config.retry) return Promise.reject(err);

    if (!config.shouldRetry || typeof config.shouldRetry != "function") {
      return Promise.reject(err);
    }

    //判断是否满足重试条件
    if (!config.shouldRetry(err)) {
      return Promise.reject(err);
    }

    // 设置重置次数，默认为0
    config.__retryCount = config.__retryCount || 0;

    // 判断是否超过了重试次数
    if (config.__retryCount >= config.retry) {
      return Promise.reject(err);
    }

    //重试次数自增
    config.__retryCount += 1;

    //延时处理
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1);
    });
    // config.url =
    //   config.pathUrl.indexOf("http") > -1
    //     ? config.pathUrl
    //     : store.state.baseUrl.urls[config.__retryCount] + config.pathUrl;
    // config.pathUrl = config.pathUrl
    //重新发起axios请求
    return backoff.then(function () {
      // if (config.url.indexOf('v1/index/ping') > -1) {
      //   config.retry = jcApi.length - 1
      //   config.url = jcApi[config.__retryCount]
      // }
      return service(config);
    });
  }
);

export default service;
