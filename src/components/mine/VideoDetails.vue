<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  vShow as _vShow,
  withDirectives as _withDirectives,
  normalizeClass as _normalizeClass,
  openBlock as _openBlock,
  createBlock as _createBlock,
  toDisplayString as _toDisplayString,
  normalizeStyle as _normalizeStyle,
  createTextVNode as _createTextVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  vModelText as _vModelText,
  withCtx as _withCtx,
  withModifiers as _withModifiers,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/loading.gif";
import _imports_1 from "@/assets/images/coin.png";
import _imports_2 from "@/assets/images/video_detail_like_red.png";
import _imports_3 from "@/assets/images/mine/video_detail_like.png";
import _imports_4 from "@/assets/images/mine/video_detail_more.png";
import _imports_5 from "@/assets/images/mine/video_detail_send.png";

import { useStore } from "vuex";
import { ref, nextTick, watch, computed } from "vue"; // import Hls from "hls.js";
// import DPlayer from "dplayer";
// import Videojs from "video.js/dist/video.min";

import {
  getGlobalProperties,
  getMyDate,
  advertiseDetails,
} from "@/assets/js/utils.js";
import { Toast, Dialog } from "vant";
import AskForVideoDetails from "@/views/tabs/community/components/AskForVideoDetails.vue";
export default {
  name: "VideoDetails",
  components: {
    AskForVideoDetails,
  },
  props: ["details_type"],

  setup(props, { emit }) {
    const store = useStore();
    const {
      videoDetailsApi,
      similarApi,
      likeApi,
      commentApi,
      commentSaveApi,
      focusSaveApi,
      advertiseApi,
      payApi,
      feedbackSaveApi,
      askVideoContinuationApi,
    } = getGlobalProperties().$api;
    const detailsData = ref({});
    let bannerList = ref([]);
    let page = ref(1);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);
    const commentList = ref([]);
    let active = ref(0);
    const isPay = ref(false);
    const showDialog = ref(false); // let hls = null;

    let player = null;
    const showSearchPopup = ref(false);
    const searchText = ref("");
    const key = ref("");
    const label_name = ref("");
    const isFullscreen = ref(false);
    const videoBoxId = ref("videoBox");
    const options = ref({
      autoplay: true,
      muted: false,
      preload: "auto",
      // 预加载
      controls: true,
      poster: "",
      url: "",
      type: "application/x-mpegURL",
    });
    detailsData.value = localStorage.getItem("__detailsData")
      ? JSON.parse(localStorage.getItem("__detailsData"))
      : {};
    const showLoading = ref(true);
    let isLike = computed(() => {
      return store.state.userInfo.like_path.split(",");
    });
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });

    const getBanner = () => {
      advertiseApi(
        {
          type: 2,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          bannerList.value = res.data.rows;
        }
      });
    };

    getBanner();

    const toBannerDetails = (item) => {
      if (item.link) {
        advertiseDetails(item.link);
      }
    };

    const initVideo = () => {
      document.getElementById("videoBox").innerHTML = `<video
      class="player-container-id"
        id="player-container-id-lb"
        width="100%"
        height="100%"
        preload="auto"
        playsinline
        webkit-playsinline
        x5-playsinline
      ></video>`;
      const length = detailsData.value.url.indexOf("sign=");
      let url = "";

      if (detailsData.value.play === 0 && detailsData.value.has_buy === 0) {
        url =
          detailsData.value.url.slice(0, length + 5) +
          detailsData.value.url.slice(length + 15) +
          `&start=${detailsData.value.start}&end=${detailsData.value.end}`;
      } else {
        url =
          detailsData.value.url.slice(0, length + 5) +
          detailsData.value.url.slice(length + 15);
      }

      if (player) {
        console.log(player);
        player.dispose();
      } // options.value.poster = detailsData.value.image;
      // poster="${options.value.poster}"

      // eslint-disable-next-line
      player = TCPlayer("player-container-id-lb", {
        autoplay: true,
        //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
        //"poster" : "https://web.huihong8.xyz/images/no_live.jpg",
        width: "100%",
        //视频的显示宽度，请尽量使用视频分辨率宽度
        height: "100%", //视频的显示高度，请尽量使用视频分辨率高度
      }); // player-container-id 为播放器容器 ID，必须与 html 中一致

      player.src(url); // url 播放地址

      if (player) {
        player.on("playing", () => {
          showLoading.value = false;
        }); // let num = 1;
        // player.on("fullscreenchange", () => {
        //   if (num === 1) {
        //     isFullscreen.value = !isFullscreen.value;
        //     num = 2;
        //   } else {
        //     num = 1;
        //   }
        //   player.exitFullscreen();
        // });

        if (detailsData.value.end > 0 && store.state.userInfo.im_id) {
          player.on("timeupdate", function () {
            const currentTime = parseInt(this.currentTime()); // console.log(currentTime, detailsData.value.end);

            if (currentTime >= detailsData.value.end) {
              Dialog.alert({
                title: "温馨提示",
                className: "videoDialog",
                message: `试看已结束！`,
              }).then(() => {
                close();
              });
              player.currentTime(detailsData.value.end);
              player.pause();
            }
          });
        }

        player.on("ended", () => {
          if (detailsData.value.play === 0 && detailsData.value.has_buy === 0) {
            Dialog.confirm({
              title: "温馨提示",
              className: "videoDialog",
              message: `试看已结束，${detailsData.value.money}赏银，即可解锁完整视频哦！`,
            })
              .then(() => {
                const params = {
                  video_id: store.state.videoDetails.id,
                };
                payApi(params, "get").then((res) => {
                  if (res.code === 0) {
                    Toast(res.message);
                    setTimeout(() => {
                      videoDetails(store.state.videoDetails.id);
                    }, 2000);
                  } else {
                    Toast(res.message);
                  }
                });
              })
              .catch(() => {
                // on cancel
              });
          }
        });
      }
    };

    const getSimilar = () => {
      const params = {
        video_id: store.state.videoDetails.id,
      };
      similarApi(params, "get").then((res) => {
        if (res.code === 0) {
          tjList.value = res.data;
        }
      });
    };

    const videoDetails = (id) => {
      const params = {
        video_id: id,
      };
      showLoading.value = true; // options.value.poster = store.state.videoDetails.image;
      // detailsData.value = {};

      commentList.value = [];
      active.value = 0;
      isPay.value = false;
      getSimilar();
      videoDetailsApi(params, "get").then((res) => {
        if (res.code === 0) {
          res.data.isLike = isLike.value.includes(
            res.data.id ? res.data.id + "" : store.state.videoDetails.id + ""
          );
          res.data.isFocus = isFocus.value.includes(res.data.user_id + "");
          detailsData.value = res.data;
          localStorage.setItem("__detailsData", JSON.stringify(res.data));
          nextTick(() => {
            initVideo(id);
          });
        }
      });
    };

    videoDetails(store.state.videoDetails.id);

    const videoPlay = (item) => {
      videoDetails(item.id);
    };

    const tjList = ref([
      // {
      //   time: "11:00",
      //   title: "纹身女拳交道具插逼2",
      //   pd: "",
      //   num: "104",
      // }
    ]);
    const showAskVideo = ref(false);
    const showAskVideoDetails = ref(false);
    const ask_video_id = ref("12");

    const askVideo = () => {
      const params = {
        video_id: detailsData.value.id || store.state.videoDetails.id,
      };

      if (player) {
        player.pause();
      }

      askVideoContinuationApi(params, "get")
        .then((res) => {
          if (res.code === 0) {
            if (!res.data.ask_video_id) {
              showAskVideo.value = true;
            } else {
              ask_video_id.value = res.data.ask_video_id;
              showAskVideoDetails.value = true;
            }
          } else {
            showAskVideo.value = true;
          }
        })
        .catch(() => {
          showAskVideo.value = true;
        });
    };

    const close3 = () => {
      showAskVideoDetails.value = false;
    };

    const close2 = () => {
      showAskVideo.value = false;
    };

    const likeVideo = () => {
      // if (detailsData.value.isLike) {
      //   return;
      // }
      const params = {
        video_id: detailsData.value.id || store.state.videoDetails.id,
      };
      likeApi(params, "get").then((res) => {
        if (res.code === 0) {
          if (!detailsData.value.isLike) {
            Toast("添加喜欢成功！");
          } else {
            Toast("取消喜欢成功！");
          }

          detailsData.value.isLike = !detailsData.value.isLike;
          store.dispatch("getUserInfo");
        } else {
          Toast("添加失败！");
        }
      });
    };

    const getCommentList = () => {
      const params = {
        video_id: store.state.videoDetails.id,
        page: page.value,
      };
      commentApi(params, "get").then((res) => {
        if (res.code === 0) {
          commentList.value = commentList.value.concat(res.data.data);
          loading.value = false;

          if (res.data.data.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getCommentList();
    };

    const change = () => {
      if (active.value === 1) {
        commentList.value = [];
        page.value = 1;
        finished.value = false;
        getCommentList();
      }
    }; // getCommentList();

    const message = ref("");

    const commentSave = () => {
      const params = {
        video_id: store.state.videoDetails.id,
        message: message.value,
      };
      commentSaveApi(params).then((res) => {
        Toast(res.message);
      });
    };

    const showInput = ref(false);

    const inputSend = () => {
      message.value = "";
      showInput.value = true;
    };

    const send = () => {
      showInput.value = false;
      commentSave();
    };

    let userInfo = computed(() => {
      return store.state.userInfo;
    });

    const focusSave = () => {
      // if (detailsData.value.isFocus) {
      //   return;
      // }
      const params = {
        user_id: detailsData.value.user_id,
      };
      focusSaveApi(params, "get").then((res) => {
        // Toast(res.message);
        if (res.code === 0) {
          detailsData.value.isFocus = !detailsData.value.isFocus;
          store.dispatch("getUserInfo");
        }
      });
    };

    const showDetailsPopul = computed(() => {
      // 计算属性初始化加10
      return store.state.showLoginPopup;
    });
    watch(showDetailsPopul, () => {
      if (
        showDetailsPopul.value.show &&
        showDetailsPopul.value.type === "VideoDetails"
      ) {
        videoDetails(store.state.videoDetails.id);
      }
    });

    const close = () => {
      if (player.dispose) {
        player.pause();
        player.dispose();
      }

      player = null; // if (hls) {
      //   hls.dispose();
      // }

      options.value.url = "";
      emit("close");

      if (
        showDetailsPopul.value.type !== "VideoMrtj" &&
        showDetailsPopul.value.type !== "VideoSearch" &&
        showDetailsPopul.value.type !== "HotAuthorInfo" &&
        props.details_type !== 1
      ) {
        store.commit("SET_LOGIN_POPUP", {
          show: false,
          type: "VideoDetails",
        });
      }
    };

    const labelSearch = (item) => {
      searchText.value = item;
      key.value = Math.random();
      label_name.value = item;

      if (player.dispose) {
        player.pause();
        player.dispose();
      }

      player = null;
      showSearchPopup.value = true;
    };

    const close1 = () => {
      showSearchPopup.value = false;
      videoDetails(store.state.videoDetails.id);
    };

    const checked = ref("");
    const fkMessage = ref("");
    const list = ref([
      {
        label: "点击播放后中断",
        value: 1,
      },
      {
        label: "加载失败，无法观看",
        value: 2,
      },
      {
        label: "其它",
        value: 3,
      },
    ]);

    const toggle = (item) => {
      checked.value = item.value;
    };

    const noPlayOk = () => {
      showDialog.value = false;
      if (checked.value === "") return;
      let params = {
        type: checked.value,
        video_id: detailsData.value.id,
      };

      if (checked.value === 3) {
        params.message = fkMessage.value;
      }

      feedbackSaveApi(params).then((res) => {
        Toast(res.message);
      });
      console.log(checked);
    };

    const noPlay = () => {
      showDialog.value = true;
      fkMessage.value = "";
      checked.value = "";
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-09f51574"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "videoDetails",
    };
    const _hoisted_2 = {
      class: "head_title head_top_20",
    };
    const _hoisted_3 = {
      class: "video_box",
    };
    const _hoisted_4 = {
      class: "loading",
    };

    const _hoisted_5 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_6 = [_hoisted_5];

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "video",
        {
          class: "player-container-id",
          id: "player-container-id-lb",
          width: "100%",
          height: "100%",
          preload: "auto",
          playsinline: "",
          "webkit-playsinline": "",
        },
        null,
        -1
      )
    );

    const _hoisted_8 = [_hoisted_7];
    const _hoisted_9 = {
      class: "cont webkit-overflow-scrolling-touch",
    };
    const _hoisted_10 = {
      class: "tab_cont",
    };
    const _hoisted_11 = {
      class: "user_top",
    };
    const _hoisted_12 = {
      class: "img_box",
    };
    const _hoisted_13 = {
      class: "text_box",
    };
    const _hoisted_14 = {
      class: "text_ellipsis",
    };
    const _hoisted_15 = {
      class: "text_ellipsis",
    };
    const _hoisted_16 = {
      class: "btn_box",
    };
    const _hoisted_17 = {
      class: "info-title",
    };
    const _hoisted_18 = {
      key: 0,
      class: "info-tagList",
    };
    const _hoisted_19 = {
      class: "coin tag_item",
    };

    const _hoisted_20 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_21 = ["onClick"];

    const _hoisted_22 = /*#__PURE__*/ _createTextVNode("无法播放? ");

    const _hoisted_23 = {
      class: "info-time",
    };

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "dian",
        },
        "·",
        -1
      )
    );

    const _hoisted_25 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "dian",
        },
        "·",
        -1
      )
    );

    const _hoisted_26 = {
      class: "info-btn-box",
    };
    const _hoisted_27 = {
      key: 0,
      src: _imports_2,
    };
    const _hoisted_28 = {
      key: 1,
      src: _imports_3,
      alt: "",
    };

    const _hoisted_29 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_4,
        },
        null,
        -1
      )
    );

    const _hoisted_30 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "求续集", -1)
    );

    const _hoisted_31 = [_hoisted_29, _hoisted_30];
    const _hoisted_32 = {
      class: "advertse",
    };
    const _hoisted_33 = ["onClick"];
    const _hoisted_34 = {
      class: "info-recommend",
    };

    const _hoisted_35 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "info-recommend-title",
        },
        "为你推荐",
        -1
      )
    );

    const _hoisted_36 = ["onClick"];
    const _hoisted_37 = {
      class: "info-videoCover",
    };
    const _hoisted_38 = {
      class: "info-videoCover-img",
    };
    const _hoisted_39 = {
      class: "info-videoInfo",
    };
    const _hoisted_40 = {
      key: 0,
      class: "bottom",
    };

    const _hoisted_41 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_5,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_42 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("p", null, "优质评论优先展示", -1)
    );

    const _hoisted_43 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_3,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_44 = [_hoisted_41, _hoisted_42, _hoisted_43];
    const _hoisted_45 = {
      class: "video-detail-input",
    };
    const _hoisted_46 = {
      class: "input-box",
    };

    const _hoisted_47 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_5,
        },
        null,
        -1
      )
    );

    const _hoisted_48 = {
      class: "details_page",
    };
    const _hoisted_49 = {
      class: "details_page",
    };
    const _hoisted_50 = {
      class: "dialog_content",
    };

    const _hoisted_51 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "title",
        },
        "无法播放原因",
        -1
      )
    );

    const _hoisted_52 = {
      class: "details_page_app",
    };
    const _hoisted_53 = {
      class: "head_title",
    };

    const _hoisted_54 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "详情",
        -1
      )
    );

    const _hoisted_55 = {
      class: "cont_body_app",
    };
    console.log({
      props,
      close,
      tjList,
      inputSend,
      showInput,
      send,
      detailsData,
      likeVideo,
      message,
      focusSave,
      getMyDate,
      videoPlay,
      bannerList,
      toBannerDetails,
      userInfo,
      commentList,
      isLike,
      isFocus,
      loading,
      onLoad,
      error,
      finished,
      change,
      active,
      options,
      showSearchPopup,
      close1,
      label_name,
      key,
      labelSearch,
      searchText,
      showLoading,
      showDialog,
      list,
      toggle,
      checked,
      fkMessage,
      noPlayOk,
      noPlay,
      showAskVideo,
      showAskVideoDetails,
      ask_video_id,
      askVideo,
      close2,
      close3,
      videoBoxId,
      store,
      isFullscreen,
    });

    return (_ctx, _cache) => {
      const _component_my_header = _resolveComponent("my-header");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      const _component_search_popup = _resolveComponent("search-popup");

      const _component_van_popup = _resolveComponent("van-popup");

      const _component_ask_video = _resolveComponent("ask-video");

      const _component_van_radio = _resolveComponent("van-radio");

      const _component_van_cell = _resolveComponent("van-cell");

      const _component_van_cell_group = _resolveComponent("van-cell-group");

      const _component_van_radio_group = _resolveComponent("van-radio-group");

      const _component_ask_for_video_details = _resolveComponent(
        "ask-for-video-details"
      );

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createVNode(_component_my_header),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_icon,
              {
                size: "22",
                name: "arrow-left",
                onClick: close.value,
              },
              null,
              8,
              ["onClick"]
            ),
          ]),
          _createElementVNode("div", _hoisted_3, [
            _withDirectives(
              _createElementVNode("div", _hoisted_4, _hoisted_6, 512),
              [[_vShow, showLoading.value]]
            ),
            _withDirectives(
              _createElementVNode(
                "div",
                {
                  id: "videoBox",
                  class: _normalizeClass(
                    isFullscreen.value ? "fullscreen" : ""
                  ),
                },
                _hoisted_8,
                2
              ),
              [[_vShow, !showLoading.value]]
            ),
          ]),
          _createElementVNode("div", _hoisted_9, [
            _createElementVNode("div", _hoisted_10, [
              _createElementVNode("div", _hoisted_11, [
                _createElementVNode("div", _hoisted_12, [
                  (_openBlock(),
                  _createBlock(
                    _component_my_image,
                    {
                      key: detailsData.value.id,
                      url: detailsData.value.top_image || "/123.png",
                    },
                    null,
                    8,
                    ["url"]
                  )),
                ]),
                _createElementVNode("div", _hoisted_13, [
                  _createElementVNode(
                    "p",
                    _hoisted_14,
                    _toDisplayString(detailsData.value.nickname),
                    1
                  ),
                  _createElementVNode(
                    "p",
                    _hoisted_15,
                    _toDisplayString(detailsData.value.user_label) +
                      "- " +
                      _toDisplayString(detailsData.value.fans || 0) +
                      "粉丝 ·" +
                      _toDisplayString(detailsData.value.video_num) +
                      "视频 ",
                    1
                  ),
                ]),
                _createElementVNode("div", _hoisted_16, [
                  _createElementVNode(
                    "p",
                    {
                      onClick:
                        _cache[0] ||
                        (_cache[0] = (...args) =>
                          focusSave && focusSave(...args)),
                      style: _normalizeStyle({
                        background: detailsData.value.isFocus
                          ? "#5B5B5B"
                          : "#FF5026",
                      }),
                    },
                    _toDisplayString(
                      detailsData.value.isFocus ? "已关注" : "关注"
                    ),
                    5
                  ),
                ]),
              ]),
              _createElementVNode(
                "p",
                _hoisted_17,
                _toDisplayString(detailsData.value.title),
                1
              ),
              detailsData.value.label
                ? (_openBlock(),
                  _createElementBlock("div", _hoisted_18, [
                    _createElementVNode("span", _hoisted_19, [
                      _hoisted_20,
                      _createTextVNode(
                        " " + _toDisplayString(detailsData.value.money),
                        1
                      ),
                    ]),
                    (_openBlock(true),
                    _createElementBlock(
                      _Fragment,
                      null,
                      _renderList(detailsData.value.label, (item) => {
                        return (
                          _openBlock(),
                          _createElementBlock(
                            "span",
                            {
                              onClick: () => labelSearch(item),
                              key: item,
                              class: "tag_item",
                            },
                            "#" + _toDisplayString(item),
                            9,
                            _hoisted_21
                          )
                        );
                      }),
                      128
                    )),
                  ]))
                : _createCommentVNode("", true),
              _createElementVNode(
                "p",
                {
                  class: "no-play",
                  onClick:
                    _cache[1] ||
                    (_cache[1] = (...args) =>
                      noPlay && noPlay(...args)),
                },
                [
                  _createVNode(_component_van_icon, {
                    name: "warning-o",
                  }),
                  _hoisted_22,
                ]
              ),
              _createElementVNode("p", _hoisted_23, [
                _createTextVNode(
                  _toDisplayString(detailsData.value.count) + "次播放",
                  1
                ),
                _hoisted_24,
                _createTextVNode(
                  _toDisplayString(detailsData.value.like_num) + "赞",
                  1
                ),
                _hoisted_25,
                _createTextVNode(
                  _toDisplayString(detailsData.value.day || "") + "发布 ",
                  1
                ),
              ]),
              _createElementVNode("div", _hoisted_26, [
                _createElementVNode(
                  "div",
                  {
                    class: "info-btn-item",
                    onClick:
                      _cache[2] ||
                      (_cache[2] = (...args) =>
                        likeVideo && likeVideo(...args)),
                  },
                  [
                    detailsData.value.isLike
                      ? (_openBlock(), _createElementBlock("img", _hoisted_27))
                      : (_openBlock(), _createElementBlock("img", _hoisted_28)),
                    _createElementVNode(
                      "span",
                      {
                        style: _normalizeStyle({
                          color: detailsData.value.isLike
                            ? "#FC5B17"
                            : "#e6e6e6",
                        }),
                      },
                      "喜欢",
                      4
                    ),
                  ]
                ),
                _createElementVNode(
                  "div",
                  {
                    class: "info-btn-item",
                    onClick:
                      _cache[3] ||
                      (_cache[3] = (...args) =>
                        askVideo && askVideo(...args)),
                  },
                  _hoisted_31
                ),
              ]),
              _createElementVNode("div", _hoisted_32, [
                (_openBlock(true),
                _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(bannerList.value, (item, index) => {
                    return (
                      _openBlock(),
                      _createElementBlock(
                        "div",
                        {
                          class: "img_banner",
                          onClick: () => toBannerDetails(item),
                          key: index,
                        },
                        [
                          _createVNode(
                            _component_my_image,
                            {
                              url: item.url,
                            },
                            null,
                            8,
                            ["url"]
                          ),
                        ],
                        8,
                        _hoisted_33
                      )
                    );
                  }),
                  128
                )),
              ]),
              _createElementVNode("div", _hoisted_34, [
                _hoisted_35,
                (_openBlock(true),
                _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(tjList.value, (item) => {
                    return (
                      _openBlock(),
                      _createElementBlock(
                        "div",
                        {
                          key: item.id,
                          class: "info-videoItem",
                          onClick: () => videoPlay(item),
                        },
                        [
                          _createElementVNode("div", _hoisted_37, [
                            _createElementVNode("div", _hoisted_38, [
                              _createElementVNode("div", null, [
                                _createVNode(
                                  _component_my_image,
                                  {
                                    url: item.image,
                                  },
                                  null,
                                  8,
                                  ["url"]
                                ),
                              ]),
                            ]),
                            _createElementVNode(
                              "span",
                              null,
                              _toDisplayString(
                                getMyDate(item.created, 2)
                              ),
                              1
                            ),
                          ]),
                          _createElementVNode("div", _hoisted_39, [
                            _createElementVNode(
                              "p",
                              null,
                              _toDisplayString(item.title),
                              1
                            ),
                            _createElementVNode("div", null, [
                              _createElementVNode(
                                "span",
                                null,
                                _toDisplayString(item.context),
                                1
                              ),
                              _createElementVNode(
                                "span",
                                null,
                                _toDisplayString(item.count) + "次播放",
                                1
                              ),
                            ]),
                          ]),
                        ],
                        8,
                        _hoisted_36
                      )
                    );
                  }),
                  128
                )),
              ]),
            ]),
          ]),
          // eslint-disable-next-line
          false
            ? (_openBlock(),
              _createElementBlock("div", _hoisted_40, [
                _createElementVNode(
                  "div",
                  {
                    class: "input_box",
                    onClick:
                      _cache[4] ||
                      (_cache[4] = (...args) =>
                        inputSend && inputSend(...args)),
                  },
                  _hoisted_44
                ),
              ]))
            : _createCommentVNode("", true),
          _withDirectives(
            _createElementVNode(
              "div",
              _hoisted_45,
              [
                _createElementVNode("div", _hoisted_46, [
                  _hoisted_47,
                  _withDirectives(
                    _createElementVNode(
                      "input",
                      {
                        id: "inputId",
                        type: "text",
                        "onUpdate:modelValue":
                          _cache[5] ||
                          (_cache[5] = ($event) => (message.value = $event)),
                        placeholder: "优质评论优先展示",
                      },
                      null,
                      512
                    ),
                    [[_vModelText, message.value]]
                  ),
                ]),
                _createElementVNode(
                  "span",
                  {
                    class: "input-sub",
                    onClick:
                      _cache[6] ||
                      (_cache[6] = (...args) =>
                        send && send(...args)),
                  },
                  "确定"
                ),
              ],
              512
            ),
            [[_vShow, showInput.value]]
          ),
          _createVNode(
            _component_van_popup,
            {
              show: showSearchPopup.value,
              "onUpdate:show":
                _cache[7] ||
                (_cache[7] = ($event) => (showSearchPopup.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_48, [
                  (_openBlock(),
                  _createBlock(
                    _component_search_popup,
                    {
                      searchText: searchText.value,
                      key: key.value,
                      type: "details",
                      label_name: label_name.value,
                      onClose: close1,
                    },
                    null,
                    8,
                    ["searchText", "label_name", "onClose"]
                  )),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
          _createVNode(
            _component_van_popup,
            {
              show: showAskVideo.value,
              "onUpdate:show":
                _cache[8] ||
                (_cache[8] = ($event) => (showAskVideo.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_49, [
                  (_openBlock(),
                  _createBlock(
                    _component_ask_video,
                    {
                      detailsData: detailsData.value,
                      key: detailsData.value.id,
                      onClose: close2,
                    },
                    null,
                    8,
                    ["detailsData", "onClose"]
                  )),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
          _createVNode(
            _component_van_popup,
            {
              show: showDialog.value,
              "onUpdate:show":
                _cache[12] ||
                (_cache[12] = ($event) => (showDialog.value = $event)),
              round: "",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_50, [
                  _hoisted_51,
                  _createVNode(
                    _component_van_radio_group,
                    {
                      modelValue: checked.value,
                      "onUpdate:modelValue":
                        _cache[9] ||
                        (_cache[9] = ($event) => (checked.value = $event)),
                      "checked-color": "#FF551D",
                    },
                    {
                      default: _withCtx(() => [
                        _createVNode(
                          _component_van_cell_group,
                          {
                            inset: "",
                          },
                          {
                            default: _withCtx(() => [
                              (_openBlock(true),
                              _createElementBlock(
                                _Fragment,
                                null,
                                _renderList(list.value, (item) => {
                                  return (
                                    _openBlock(),
                                    _createBlock(
                                      _component_van_cell,
                                      {
                                        clickable: "",
                                        key: item,
                                        title: item.label,
                                        onClick: () => toggle(item),
                                      },
                                      {
                                        "right-icon": _withCtx(() => [
                                          _createVNode(
                                            _component_van_radio,
                                            {
                                              name: item.value,
                                            },
                                            null,
                                            8,
                                            ["name"]
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["title", "onClick"]
                                    )
                                  );
                                }),
                                128
                              )),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"]
                  ),
                  checked.value === 3
                    ? _withDirectives(
                        (_openBlock(),
                        _createElementBlock(
                          "input",
                          {
                            key: 0,
                            "onUpdate:modelValue":
                              _cache[10] ||
                              (_cache[10] = ($event) =>
                                (fkMessage.value = $event)),
                            type: "text",
                            "max-length": "8",
                            placeholder: "请输入反馈内容",
                          },
                          null,
                          512
                        )),
                        [[_vModelText, fkMessage.value]]
                      )
                    : _createCommentVNode("", true),
                  _createElementVNode(
                    "div",
                    {
                      class: "btns",
                      onClick:
                        _cache[11] ||
                        (_cache[11] = (...args) =>
                          noPlayOk && noPlayOk(...args)),
                    },
                    "确认"
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
          _createVNode(
            _component_van_popup,
            {
              show: showAskVideoDetails.value,
              "onUpdate:show":
                _cache[13] ||
                (_cache[13] = ($event) =>
                  (showAskVideoDetails.value = $event)),
              class: "popup_coentent",
              overlay: false,
              teleport: "#app",
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_52, [
                  _createElementVNode("div", _hoisted_53, [
                    _createVNode(
                      _component_van_icon,
                      {
                        size: "22",
                        name: "arrow-left",
                        onClick: _withModifiers(close3, ["stop"]),
                      },
                      null,
                      8,
                      ["onClick"]
                    ),
                    _hoisted_54,
                  ]),
                  _createElementVNode("div", _hoisted_55, [
                    (_openBlock(),
                    _createBlock(
                      _component_ask_for_video_details,
                      {
                        key: ask_video_id.value,
                        id: ask_video_id.value,
                      },
                      null,
                      8,
                      ["id"]
                    )),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
        ])
      );
    };
  },
};
</script>
