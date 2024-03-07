import axios from "axios";
import { showToast } from "vant";

const instance = axios.create({
  baseURL: "/api",
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.sslVerify = false;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    let res = response.data;
    const custom = response.config?.custom;
    if (res.code !== 1) {
      if (res.code === 401) {
        // 退出
      }
      if (!custom.toast) {
        setTimeout(() => {
          showToast(res.msg || "服务端异常");
        }, 600);
      }
    }
    return res || {};
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
