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
export default {
  components: {
    SwipeComponent,
  },

  setup() {
    const store = useStore();
    const { emphasisApi } = getGlobalProperties().$api;
    let page = ref(0);
    const finished = ref(false);
    let videoList = ref([{}, {}]);
    const loading = ref(false);
    const refreshing = ref(false);
    videoList.value = localStorage.getItem("todaysHeadlines")
      ? JSON.parse(localStorage.getItem("todaysHeadlines"))
      : [];
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });

    const getVideoList = () => {
      emphasisApi(
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

          if (page.value === 1) {
            localStorage.setItem(
              "todaysHeadlines",
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

    if (page.value === 0 && videoList.value.length !== 0) {
      page.value++;
      getVideoList();
    }

    const _withScopeId = (n) => (
      _pushScopeId("data-v-54537e13"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      style: {
        "margin-top": "10px",
      },
    };
    const _hoisted_2 = {
      class: "video_list",
    };
    const _hoisted_3 = ["onClick"];
    const _hoisted_4 = {
      class: "video_box",
    };
    const _hoisted_5 = {
      class: "text_title text_ellipsis",
    };
    const _hoisted_6 = {
      class: "btm_text",
    };
    const _hoisted_7 = {
      class: "count",
    };
    const _hoisted_8 = {
      key: 0,
      class: "times",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_10 = ["onClick"];
    const _hoisted_11 = {
      class: "user_img",
    };
    const _hoisted_12 = {
      class: "user_text",
    };
    const _hoisted_13 = {
      class: "user_title text_ellipsis",
    };
    const _hoisted_14 = {
      class: "details text_ellipsis",
    };
    const _hoisted_15 = {
      class: "fenxian",
    };
    const _hoisted_16 = ["onClick"];

    const _hoisted_17 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_18 = ["onClick"];
    return (_ctx, _cache, $props, $setup) => {
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
            modelValue: $setup.refreshing,
            "onUpdate:modelValue":
              _cache[2] ||
              (_cache[2] = ($event) => ($setup.refreshing = $event)),
            "head-height": 80,
            onRefresh: $setup.onRefresh,
          },
          {
            loading: _withCtx(() => [_createVNode(_component_loading)]),
            default: _withCtx(() => [
              _createVNode(
                _component_van_list,
                {
                  loading: $setup.loading,
                  "onUpdate:loading":
                    _cache[0] ||
                    (_cache[0] = ($event) => ($setup.loading = $event)),
                  error: $setup.error,
                  "onUpdate:error":
                    _cache[1] ||
                    (_cache[1] = ($event) => ($setup.error = $event)),
                  finished: $setup.finished,
                  "error-text": "请求失败，点击重新加载",
                  "finished-text": "-我也是有底线的-",
                  "loading-text": "正在获取数据...",
                  onLoad: $setup.onLoad,
                },
                {
                  default: _withCtx(() => [
                    _createVNode(_component_SwipeComponent),
                    _createElementVNode("div", _hoisted_1, [
                      _createVNode(_component_advertise_swipe),
                    ]),
                    _createElementVNode("div", _hoisted_2, [
                      (_openBlock(true),
                      _createElementBlock(
                        _Fragment,
                        null,
                        _renderList($setup.videoList, (item) => {
                          return (
                            _openBlock(),
                            _createElementBlock(
                              "div",
                              {
                                key: item.id,
                                class: "video_item",
                                onClick: _withModifiers(
                                  () => $setup.videoPlay(item),
                                  ["stop"]
                                ),
                              },
                              [
                                _createElementVNode("div", _hoisted_4, [
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
                                    _hoisted_5,
                                    _toDisplayString(item.title),
                                    1
                                  ),
                                  _createElementVNode("p", _hoisted_6, [
                                    _createElementVNode(
                                      "span",
                                      _hoisted_7,
                                      _toDisplayString(item.count) + "次播放",
                                      1
                                    ),
                                    item.times
                                      ? (_openBlock(),
                                        _createElementBlock(
                                          "span",
                                          _hoisted_8,
                                          _toDisplayString(item.times),
                                          1
                                        ))
                                      : _createCommentVNode("", true),
                                  ]),
                                  _hoisted_9,
                                ]),
                                _createElementVNode(
                                  "div",
                                  {
                                    class: "vider_user",
                                    onClick: _withModifiers(
                                      () => $setup.toAutorDetails(item),
                                      ["stop"]
                                    ),
                                  },
                                  [
                                    _createElementVNode("div", _hoisted_11, [
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
                                    _createElementVNode("div", _hoisted_12, [
                                      _createElementVNode(
                                        "p",
                                        _hoisted_13,
                                        _toDisplayString(item.nickname),
                                        1
                                      ),
                                      _createElementVNode(
                                        "p",
                                        _hoisted_14,
                                        _toDisplayString(
                                          item.user_label || "创作者"
                                        ) +
                                          "·" +
                                          _toDisplayString(item.fans) +
                                          "粉丝 ",
                                        1
                                      ),
                                    ]),
                                    _createElementVNode("div", _hoisted_15, [
                                      _createElementVNode(
                                        "span",
                                        {
                                          onClick: _withModifiers(
                                            () => $setup.focusSave(item),
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
                                        _hoisted_16
                                      ),
                                      _createElementVNode("div", null, [
                                        _hoisted_17,
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
                                            () => $setup.showShare(item),
                                            ["stop"]
                                          ),
                                          src: _imports_2,
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        _hoisted_18
                                      ),
                                    ]),
                                  ],
                                  8,
                                  _hoisted_10
                                ),
                              ],
                              8,
                              _hoisted_3
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
