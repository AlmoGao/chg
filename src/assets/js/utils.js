/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-08-23 17:27:02
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-08-25 11:57:36
 * @FilePath: /sex/src/assets/js/utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CryptoJS from "crypto-js";
// import { useRouter } from "vue-router";
let Base64 = require("js-base64").Base64;
import router from "@/router";
import { Toast } from "vant";
import { getCurrentInstance } from "vue";
import store from "@/store";
import API from "./api";
// import { nickname } from "./nickname.js";
/**
 * @describe 跳转路由
 * @param {*} path
 */
export const navigateTo = (path) => {
  router.push({
    path,
  });
};
export const advertiseDetails = (link) => {
  API.countApi({ url: link }, "get");
  // window.open(item.link);
  store.commit("setShowDialogIsAdvertis", {
    show: true,
    url: link,
  });
  // navigateTo("/dialogIsAdvertis");
  window.open(link, "_blank");
};
/**
 * @describe 获取图片路径
 * @param {*} name
 * @returns
 */
export const getImageUrl = (name) => {
  // return new URL(`/src/${name}`, import.meta.url).href;
  return require(`/src/${name}`);
};
/**
 * @describe 提示信息
 * @param {*} message
 * @param {*} type
 */

export const showMessage = (message, type) => {
  Toast({
    type,
    message,
  });
};
/**
 *
 * @returns vue的全局变量
 */

export const getGlobalProperties = () => {
  const {
    appContext: {
      config: { globalProperties },
    },
  } = getCurrentInstance();
  return globalProperties;
};

const getzf = (num) => {
  if (parseInt(num) < 10) {
    num = "0" + num;
  }
  return num;
};
export const getMyDate = (str, status) => {
  if (str.toString().length === 10) {
    str = str * 1000;
  }
  let oDate = new Date(str),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMin = oDate.getMinutes(),
    oSen = oDate.getSeconds(),
    oTime =
      oYear +
      "-" +
      getzf(oMonth) +
      "-" +
      getzf(oDay) +
      " " +
      getzf(oHour) +
      ":" +
      getzf(oMin) +
      ":" +
      getzf(oSen); //最后拼接时间
  if (status === 1) {
    oTime = getzf(oMonth) + "月" + getzf(oDay) + "日";
  }
  if (status === 2) {
    oTime = oYear + "-" + getzf(oMonth) + "-" + getzf(oDay);
  }
  if (status === 3) {
    oTime = getzf(oHour) + ":" + getzf(oMin);
  }
  return oTime;
};

export const decrypt = (word, keyStr, ivStr) => {
  keyStr = keyStr ? keyStr : "AJ2sn@SA!SNsn23g";
  ivStr = ivStr ? ivStr : "04mg@na1asAfnLM!";
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  let iv = CryptoJS.enc.Utf8.parse(ivStr);

  var decrypt = CryptoJS.AES.decrypt(word, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
};
// const isBase64 = (str) => {
//   if (str === "" || str.trim() === "") {
//     return false;
//   }
//   try {
//     return btoa(atob(str)) == str;
//   } catch (err) {
//     return false;
//   }
// };
export const getBase64 = (str) => {
  // if (!isBase64(str)) {
  //   return str;
  // }
  return Base64.decode(str);
};

export const getRandomName = () => {
  // let a = nickname.length - 1;
  // return nickname[Math.floor(Math.random() * a)];
  return 123;
};
