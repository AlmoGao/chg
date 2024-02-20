<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
  createCommentVNode as _createCommentVNode,
  withModifiers as _withModifiers,
  normalizeStyle as _normalizeStyle,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/play.png";
import _imports_1 from "@/assets/images/talk.png";
import _imports_2 from "@/assets/images/mine/share.png";

import { getGlobalProperties } from "@/assets/js/utils.js";
import SwipeComponent from "../common/SwipeComponent.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
export default {
  components: {
    SwipeComponent,
  },

  setup(props, { emit }) {
    const store = useStore();
    const { recommendApi, focusSaveApi } = getGlobalProperties().$api;
    let page = ref(0);
    let videoList = ref([]);
    const error = ref(false);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user
        ? store.state.userInfo.focus_user.split(",")
        : [];
    });
    videoList.value = localStorage.getItem("RecommondComponent")
      ? JSON.parse(localStorage.getItem("RecommondComponent"))
      : [];

    const getVideoList = () => {
      recommendApi(
        {
          page: page.value,
        },
        "get"
      ).then((res) => {
        if (page.value === 1) {
          videoList.value = [];
        }

        refreshing.value = false;

        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isFocus = isFocus.value.includes(item.user_id + "");
          });
          emit("skeletonF");

          if (page.value === 1) {
            localStorage.setItem(
              "RecommondComponent",
              JSON.stringify(res.data.rows.slice(0, 3))
            );
          }

          videoList.value = videoList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    const focusSave = async (item) => {
      // if (item.isFocus) {
      //   return;
      // }
      const params = {
        user_id: item.user_id,
      };
      focusSaveApi(params, "get").then((res) => {
        // Toast(res.message);
        if (res.code === 0) {
          item.isFocus = !item.isFocus;
          store.dispatch("getUserInfo");
          page.value = 1;
          getVideoList();
        }
      });
    };

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getVideoList(); //   error.value = true;
    };

    if (page.value === 0 && videoList.value.length !== 0) {
      page.value++;
      getVideoList();
    }

    const toManhua = () => {
      // Toast("正在收集，敬请期待！");
      emit("toManhua");
    }; // getVideoList();

    const videoPlay = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "VideoDetails",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const toAutorDetails = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "HotAuthorInfo",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const toDetails = (type) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: type,
      });
    };

    const showShare = (item) => {
      store.commit("SET_SHOW_SHARE_POPUP", {
        show: true,
        videoDetails: item,
      });
    };

    const onRefresh = () => {
      videoList.value = [];
      loading.value = true;
      page.value = 1;
      getVideoList();
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-091de83b"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      style: {
        "margin-top": "10px",
      },
    };
    const _hoisted_2 = {
      class: "featured-part",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        null,
        [/*#__PURE__*/ _createElementVNode("span", null, "分享好友，获得VIP")],
        -1
      )
    );

    const _hoisted_4 = [_hoisted_3];

    const _hoisted_5 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        null,
        [/*#__PURE__*/ _createElementVNode("span", null, "海量视频免费看")],
        -1
      )
    );

    const _hoisted_6 = [_hoisted_5];

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        null,
        [/*#__PURE__*/ _createElementVNode("span", null, "精品漫画连载")],
        -1
      )
    );

    const _hoisted_8 = [_hoisted_7];
    const _hoisted_9 = {
      class: "video_list",
    };
    const _hoisted_10 = ["onClick"];
    const _hoisted_11 = {
      class: "video_box video_box_home",
    };
    const _hoisted_12 = {
      class: "text_title text_ellipsis",
    };
    const _hoisted_13 = {
      class: "btm_text",
    };
    const _hoisted_14 = {
      class: "count",
    };
    const _hoisted_15 = {
      key: 0,
      class: "times",
    };

    const _hoisted_16 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "video-box-play",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
          }),
        ],
        -1
      )
    );

    const _hoisted_17 = ["onClick"];
    const _hoisted_18 = {
      class: "user_img",
    };
    const _hoisted_19 = {
      class: "user_text",
    };
    const _hoisted_20 = {
      class: "user_title text_ellipsis",
    };
    const _hoisted_21 = {
      class: "details text_ellipsis",
    };
    const _hoisted_22 = {
      class: "fenxian",
    };
    const _hoisted_23 = ["onClick"];

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_25 = ["onClick"];


    return (_ctx, _cache) => {
      const _component_loading = _resolveComponent("loading");

      const _component_SwipeComponent = _resolveComponent("SwipeComponent");

      const _component_advertise_swipe = _resolveComponent("advertise-swipe");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_pull_refresh = _resolveComponent("van-pull-refresh");

      return (
        _openBlock(),
        _createBlock(
          _component_van_pull_refresh,
          {
            modelValue: refreshing.value,
            "onUpdate:modelValue":
              _cache[5] ||
              (_cache[5] = ($event) => (refreshing.value = $event)),
            "head-height": 80,
            onRefresh: onRefresh,
          },
          {
            loading: _withCtx(() => [_createVNode(_component_loading)]),
            default: _withCtx(() => [
              _createVNode(
                _component_van_list,
                {
                  loading: loading.value,
                  "onUpdate:loading":
                    _cache[3] ||
                    (_cache[3] = ($event) => (loading.value = $event)),
                  error: error.value,
                  "onUpdate:error":
                    _cache[4] ||
                    (_cache[4] = ($event) => (error.value = $event)),
                  finished: finished.value,
                  "error-text": "请求失败，点击重新加载",
                  "finished-text": "-我也是有底线的-",
                  "loading-text": "正在获取数据...",
                  onLoad: onLoad,
                },
                {
                  default: _withCtx(() => [
                    _createVNode(_component_SwipeComponent),
                    _createElementVNode("div", _hoisted_1, [
                      _createVNode(_component_advertise_swipe),
                    ]),
                    _createElementVNode("div", _hoisted_2, [
                      _createElementVNode(
                        "div",
                        {
                          onClick:
                            _cache[0] ||
                            (_cache[0] = () =>
                              toDetails("ShareFreeWatch")),
                          class: "featured-part-item column fensiruan",
                        },
                        _hoisted_4
                      ),
                      _createElementVNode(
                        "div",
                        {
                          onClick:
                            _cache[1] ||
                            (_cache[1] = () =>
                              toDetails("Recharge")),
                          class: "featured-part-item column heji",
                        },
                        _hoisted_6
                      ),
                      _createElementVNode(
                        "div",
                        {
                          onClick:
                            _cache[2] ||
                            (_cache[2] = (...args) =>
                              toManhua && toManhua(...args)),
                          class: "featured-part-item column chengrenmanhua",
                        },
                        _hoisted_8
                      ),
                    ]),
                    _createElementVNode("div", _hoisted_9, [
                      (_openBlock(true),
                      _createElementBlock(
                        _Fragment,
                        null,
                        _renderList(videoList.value, (item) => {
                          return (
                            _openBlock(),
                            _createElementBlock(
                              "div",
                              {
                                key: item.id,
                                onClick: () => videoPlay(item),
                                class: "video_item",
                              },
                              [
                                _createElementVNode("div", _hoisted_11, [
                                  _createVNode(
                                    _component_my_image,
                                    {
                                      url: item.image,
                                    },
                                    null,
                                    8,
                                    ["url"]
                                  ),
                                  _createElementVNode(
                                    "p",
                                    _hoisted_12,
                                    _toDisplayString(item.title),
                                    1
                                  ),
                                  _createElementVNode("p", _hoisted_13, [
                                    _createElementVNode(
                                      "span",
                                      _hoisted_14,
                                      _toDisplayString(item.count) + "次播放",
                                      1
                                    ),
                                    item.times
                                      ? (_openBlock(),
                                        _createElementBlock(
                                          "span",
                                          _hoisted_15,
                                          _toDisplayString(item.times),
                                          1
                                        ))
                                      : _createCommentVNode("", true),
                                  ]),
                                  _hoisted_16,
                                ]),
                                _createElementVNode(
                                  "div",
                                  {
                                    class: "vider_user",
                                    onClick: _withModifiers(
                                      () => toAutorDetails(item),
                                      ["stop"]
                                    ),
                                  },
                                  [
                                    _createElementVNode("div", _hoisted_18, [
                                      _createVNode(
                                        _component_my_image,
                                        {
                                          round: true,
                                          url: item.top_image,
                                        },
                                        null,
                                        8,
                                        ["url"]
                                      ),
                                    ]),
                                    _createElementVNode("div", _hoisted_19, [
                                      _createElementVNode(
                                        "p",
                                        _hoisted_20,
                                        _toDisplayString(item.nickname),
                                        1
                                      ),
                                      _createElementVNode(
                                        "p",
                                        _hoisted_21,
                                        _toDisplayString(
                                          item.user_label || "创作者"
                                        ) +
                                          "·" +
                                          _toDisplayString(item.fans) +
                                          "粉丝 ",
                                        1
                                      ),
                                    ]),
                                    _createElementVNode("div", _hoisted_22, [
                                      _createElementVNode(
                                        "span",
                                        {
                                          onClick: _withModifiers(
                                            () => focusSave(item),
                                            ["stop"]
                                          ),
                                          style: _normalizeStyle({
                                            color: item.isFocus
                                              ? "#999"
                                              : "#fd5c18",
                                          }),
                                        },
                                        _toDisplayString(
                                          item.isFocus ? "已关注" : "关注"
                                        ),
                                        13,
                                        _hoisted_23
                                      ),
                                      _createElementVNode("div", null, [
                                        _hoisted_24,
                                        _createElementVNode(
                                          "span",
                                          null,
                                          _toDisplayString(item.comment_num),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode(
                                        "img",
                                        {
                                          onClick: _withModifiers(
                                            () => showShare(item),
                                            ["stop"]
                                          ),
                                          src: _imports_2,
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        _hoisted_25
                                      ),
                                    ]),
                                  ],
                                  8,
                                  _hoisted_17
                                ),
                              ],
                              8,
                              _hoisted_10
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["loading", "error", "finished", "onLoad"]
              ),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "onRefresh"]
        )
      );
    };
  },
};
</script>

<style>
.video_box_home {
  overflow-y: hidden;
  padding: 0;
  position: relative;
}
</style>
