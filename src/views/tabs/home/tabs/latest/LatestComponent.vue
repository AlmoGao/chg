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
  createTextVNode as _createTextVNode,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/coin.png";
import _imports_1 from "@/assets/images/play.png";
import _imports_2 from "@/assets/images/eyeopen.png";
import _imports_3 from "@/assets/images/zan.png";

import { getGlobalProperties } from "@/assets/js/utils.js";
import { ref } from "vue";
export default {
  setup() {
    const { newApi } = getGlobalProperties().$api;
    let page = ref(1);
    const finished = ref(false);
    let videoList = ref([]);
    const loading = ref(false);
    const refreshing = ref(false);
    videoList.value = localStorage.getItem("LatestComponent")
      ? JSON.parse(localStorage.getItem("LatestComponent"))
      : [];

    const getVideoList = () => {
      newApi(
        {
          page: page.value,
        },
        "get"
      ).then((res) => {
        refreshing.value = false; // videoList.value = [];
        // res.data.forEach((item) => {
        //   item.isFocus = isFocus.value.includes(item.author_id + "");
        // });

        if (res.code === 0) {
          if (res.data.length) {
            localStorage.setItem(
              "LatestComponent",
              JSON.stringify(res.data.rows.slice(0, 3))
            );
          }

          videoList.value = videoList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    getVideoList();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-5d3bb09f"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      key: 0,
      style: {
        height: "100px",
      },
    };
    const _hoisted_2 = {
      class: "featured-avItem TwoColumnsVideo",
    };
    const _hoisted_3 = {
      class: "TwoColumnsVideo-cover-wrap",
    };
    const _hoisted_4 = ["onClick"];
    const _hoisted_5 = {
      class: "avItem-cover",
    };

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-linear",
        },
        null,
        -1
      )
    );

    const _hoisted_7 = {
      class: "coin_timer",
    };
    const _hoisted_8 = {
      class: "coin",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_10 = {
      class: "timer",
    };

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-layerCenter",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_1,
          }),
        ],
        -1
      )
    );

    const _hoisted_12 = {
      class: "avItem-layer",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          class: "TwoColumnsVideo-icon",
          src: _imports_2,
        },
        null,
        -1
      )
    );

    const _hoisted_14 = {
      class: "avItem-time",
    };

    const _hoisted_15 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          class: "TwoColumnsVideo-icon",
          src: _imports_3,
        },
        null,
        -1
      )
    );
    return (_ctx, _cache, $props, $setup) => {
      const _component_loading = _resolveComponent("loading");

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
              $setup.refreshing
                ? (_openBlock(), _createElementBlock("div", _hoisted_1))
                : _createCommentVNode("", true),
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
                    _createElementVNode("div", _hoisted_2, [
                      _createElementVNode("div", _hoisted_3, [
                        (_openBlock(true),
                        _createElementBlock(
                          _Fragment,
                          null,
                          _renderList($setup.videoList, (elem) => {
                            return (
                              _openBlock(),
                              _createElementBlock(
                                "div",
                                {
                                  class: "featured-avItem-cover",
                                  key: elem.id,
                                  onClick: () => $setup.videoPlay(elem),
                                },
                                [
                                  _createElementVNode("div", _hoisted_5, [
                                    _hoisted_6,
                                    _createElementVNode("div", null, [
                                      _createVNode(
                                        _component_my_image,
                                        {
                                          url: elem.image,
                                        },
                                        null,
                                        8,
                                        ["url"]
                                      ),
                                    ]),
                                    _createElementVNode("div", _hoisted_7, [
                                      _createElementVNode("div", _hoisted_8, [
                                        _hoisted_9,
                                        _createTextVNode(
                                          " " + _toDisplayString(elem.money),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode(
                                        "div",
                                        _hoisted_10,
                                        _toDisplayString(elem.times),
                                        1
                                      ),
                                    ]),
                                    _hoisted_11,
                                  ]),
                                  _createElementVNode("div", _hoisted_12, [
                                    _createElementVNode(
                                      "p",
                                      null,
                                      _toDisplayString(elem.title),
                                      1
                                    ),
                                    _createElementVNode("div", null, [
                                      _createElementVNode("span", null, [
                                        _hoisted_13,
                                        _createTextVNode(
                                          _toDisplayString(elem.count),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode("span", _hoisted_14, [
                                        _hoisted_15,
                                        _createTextVNode(
                                          _toDisplayString(elem.like_num),
                                          1
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ],
                                8,
                                _hoisted_4
                              )
                            );
                          }),
                          128
                        )),
                      ]),
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
