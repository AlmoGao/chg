/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-08-25 15:21:54
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-08-25 16:32:39
 * @FilePath: /sex/src/store/state.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from "vuex";
import API from "@/assets/js/api.js";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      showStack: false,
      showLoginPopup: {
        show: false,
        type: "",
      },
      showSharePopup: {
        show: false,
        videoDetails: {},
      },
      videoDetails: localStorage.getItem("_videoDetails")
        ? JSON.parse(localStorage.getItem("_videoDetails"))
        : {},
      recommendVideoList: [],
      userInfo: localStorage.getItem("_userInfo")
        ? JSON.parse(localStorage.getItem("_userInfo"))
        : {
          focus_user: "",
          like_path: "",
          nickname: "",
          want: "",
          comics_like: "",
        },
      bannerList: [],
      hg_oauth_id: localStorage.getItem("hg_oauth_id"),
      directoryList: [],
      showKtVip: false,
      baseUrl: localStorage.getItem("_baseUrl")
        ? JSON.parse(localStorage.getItem("_baseUrl"))
        : {
          download_url: "https://www.huirenkou.com/",
          h5_download_url: "ttps://www.chg8.tv",
          image_url: "ttps://www.chg1.tv",
          urls: ["https://api.yyds1.link/"],
        },
      showBottomBanner: false,
      showDialogIsAdvertis: {
        show: false,
        url: "",
      },
    };
  },
  mutations: {
    SET_STACK_SHOW(state) {
      state.showStack = !state.showStack;
    },
    SET_LOGIN_POPUP(state, value) {
      state.showLoginPopup = value;
    },
    SET_USER_INFO(state, value) {
      // let obj = {
      //   focus_user: "",
      //   like_path: "",
      //   nickname: "",
      //   want: "",
      // };
      let data = {
        ...state.userInfo,
        ...value,
      };
      state.userInfo = data;
      localStorage.setItem("_userInfo", JSON.stringify(state.userInfo));
    },
    SET_VIDEO_DETAILS(state, value) {
      state.videoDetails = value;
      localStorage.setItem("_videoDetails", JSON.stringify(value));
    },
    SET_SHOW_SHARE_POPUP(state, value) {
      state.showSharePopup = value;
    },
    SET_RECOMMEND_VIDEO_LIST(state, value) {
      state.recommendVideoList = value;
    },
    SET_BANNEER_LIST(state, value) {
      state.bannerList = value;
    },
    SET_HG_OAUTH_ID(state, value) {
      state.hg_oauth_id = value;
      localStorage.setItem("hg_oauth_id", value);
    },
    SET_DIRECTORY_LIST(state, value) {
      state.directoryList = value;
    },
    SETSHOE_KT_VIP(state, value) {
      state.showKtVip = value;
    },
    SET_BASE_URL(state, value) {
      state.baseUrl = value;
      localStorage.setItem("_baseUrl", JSON.stringify(value));
    },
    SET_SHOW_BOTTOM_BANNER(state, value) {
      state.showBottomBanner = value;
    },
    setShowDialogIsAdvertis(state, value) {
      state.showDialogIsAdvertis = value;
    },
  },
  actions: {
    dispatchShowStack({ commit }) {
      commit(this.SET_STACK_SHOW);
    },
    getUserInfo({ commit }) {
      API.homePageApi("", "get").then((res) => {
        if (res.code === 0) {
          // let data = state.userInfo;
          // data = {
          //   ...data,
          //   ...res.data,
          // };
          commit("SET_USER_INFO", res.data);
        }
      });
    },
  },
});

export default store;
