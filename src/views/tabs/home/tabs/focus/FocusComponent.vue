<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/play.png";
import _imports_1 from "@/assets/images/like.png";
import _imports_2 from "@/assets/images/comment.png";
import _imports_3 from "@/assets/images/share.png";

import { ref } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  setup(props) {
    const store = useStore();
    const { fansApi } = getGlobalProperties().$api;
    let videoList = ref([]);
    let page = ref(0);
    const error = ref(false);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getVideoList();
    };

    videoList.value = localStorage.getItem("FocusComponent")
      ? JSON.parse(localStorage.getItem("FocusComponent"))
      : [];

    const getVideoList = () => {
      fansApi(
        {
          page: page.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          refreshing.value = false;

          if (page.value === 1) {
            localStorage.setItem(
              "FocusComponent",
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
      _pushScopeId("data-v-c1056348"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      key: 0,
      style: {
        height: "100px",
      },
    };
    const _hoisted_2 = {
      key: 0,
      class: "video_list",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "thin-line",
        },
        null,
        -1
      )
    );

    const _hoisted_4 = ["onClick"];
    const _hoisted_5 = {
      class: "featured-avItem-avatar",
    };
    const _hoisted_6 = {
      class: "featured-avItem-name",
    };
    const _hoisted_7 = ["onClick"];

    const _hoisted_8 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-linear",
        },
        null,
        -1
      )
    );

    const _hoisted_9 = {
      class: "avItem-cover",
    };
    const _hoisted_10 = {
      class: "box",
    };
    const _hoisted_11 = {
      class: "avItem-layer",
    };
    const _hoisted_12 = {
      class: "avItem-time",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-layerCenter",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
            alt: "",
            srcset: "",
          }),
        ],
        -1
      )
    );

    const _hoisted_14 = {
      class: "featured-avItem-bottom",
    };
    const _hoisted_15 = {
      class: "avItem-bottom-item",
    };

    const _hoisted_16 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
        },
        null,
        -1
      )
    );

    const _hoisted_17 = {
      class: "avItem-bottom-item",
    };

    const _hoisted_18 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_2,
        },
        null,
        -1
      )
    );

    const _hoisted_19 = ["onClick"];

    const _hoisted_20 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_3,
        },
        null,
        -1
      )
    );

    const _hoisted_21 = [_hoisted_20];
    const _hoisted_22 = {
      key: 1,
      class: "no-data",
    };
    console.log({
      props,
      videoList,
      loading,
      onLoad,
      error,
      videoPlay,
      finished,
      toAutorDetails,
      showShare,
      onRefresh,
      refreshing,
    });

    return (_ctx, _cache) => {
      const _component_loading = _resolveComponent("loading");

      const _component_my_image = _resolveComponent("my-image");

      const _component_no_data = _resolveComponent("no-data");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_pull_refresh = _resolveComponent("van-pull-refresh");

      return (
        _openBlock(),
        _createBlock(
          _component_van_pull_refresh,
          {
            modelValue: refreshing.value,
            "onUpdate:modelValue":
              _cache[2] ||
              (_cache[2] = ($event) => (refreshing.value = $event)),
            "head-height": 80,
            onRefresh: onRefresh,
          },
          {
            loading: _withCtx(() => [_createVNode(_component_loading)]),
            default: _withCtx(() => [
              refreshing.value
                ? (_openBlock(), _createElementBlock("div", _hoisted_1))
                : _createCommentVNode("", true),
              _createVNode(
                _component_van_list,
                {
                  loading: loading.value,
                  "onUpdate:loading":
                    _cache[0] ||
                    (_cache[0] = ($event) => (loading.value = $event)),
                  error: error.value,
                  "onUpdate:error":
                    _cache[1] ||
                    (_cache[1] = ($event) => (error.value = $event)),
                  finished: finished.value,
                  "error-text": "请求失败，点击重新加载",
                  "finished-text": "-我也是有底线的-",
                  "loading-text": "正在获取数据...",
                  onLoad: onLoad,
                },
                {
                  default: _withCtx(() => [
                    videoList.value && videoList.value.length
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_2, [
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
                                    class: "featured-avItem",
                                    key: item.id,
                                  },
                                  [
                                    _hoisted_3,
                                    _createElementVNode(
                                      "div",
                                      {
                                        class: "featured-avItem-header",
                                        onClick: () =>
                                          toAutorDetails(item),
                                      },
                                      [
                                        _createElementVNode("div", _hoisted_5, [
                                          _createVNode(
                                            _component_my_image,
                                            {
                                              url: item.top_image || "123.png",
                                            },
                                            null,
                                            8,
                                            ["url"]
                                          ),
                                        ]),
                                        _createElementVNode("div", _hoisted_6, [
                                          _createElementVNode(
                                            "p",
                                            null,
                                            _toDisplayString(item.nickname),
                                            1
                                          ),
                                          _createElementVNode(
                                            "span",
                                            null,
                                            _toDisplayString(item.day),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      _hoisted_4
                                    ),
                                    _createElementVNode(
                                      "div",
                                      {
                                        class: "featured-avItem-cover",
                                        onClick: () =>
                                          videoPlay(item),
                                      },
                                      [
                                        _hoisted_8,
                                        _createElementVNode("div", _hoisted_9, [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_10,
                                            [
                                              _createVNode(
                                                _component_my_image,
                                                {
                                                  url: item.image,
                                                },
                                                null,
                                                8,
                                                ["url"]
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _createElementVNode(
                                          "div",
                                          _hoisted_11,
                                          [
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
                                                _toDisplayString(item.count) +
                                                  "次播放",
                                                1
                                              ),
                                              _createElementVNode(
                                                "span",
                                                _hoisted_12,
                                                _toDisplayString(item.times),
                                                1
                                              ),
                                            ]),
                                          ]
                                        ),
                                        _hoisted_13,
                                      ],
                                      8,
                                      _hoisted_7
                                    ),
                                    _createElementVNode("div", _hoisted_14, [
                                      _createElementVNode("div", _hoisted_15, [
                                        _hoisted_16,
                                        _createElementVNode(
                                          "span",
                                          null,
                                          _toDisplayString(item.like_num),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode("div", _hoisted_17, [
                                        _hoisted_18,
                                        _createElementVNode(
                                          "span",
                                          null,
                                          _toDisplayString(item.comment_num),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode(
                                        "div",
                                        {
                                          class: "avItem-bottom-item",
                                          onClick: () =>
                                            showShare(item),
                                        },
                                        _hoisted_21,
                                        8,
                                        _hoisted_19
                                      ),
                                    ]),
                                  ]
                                )
                              );
                            }),
                            128
                          )),
                        ]))
                      : !loading.value
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_22, [
                          _createVNode(_component_no_data, {
                            color: "#ffffff",
                          }),
                        ]))
                      : _createCommentVNode("", true),
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
