<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withCtx as _withCtx,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  createElementVNode as _createElementVNode,
  createTextVNode as _createTextVNode,
  createElementBlock as _createElementBlock,
  renderList as _renderList,
  Fragment as _Fragment,
  normalizeStyle as _normalizeStyle,
  toDisplayString as _toDisplayString,
  normalizeClass as _normalizeClass,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/icon_fv_choice.png";
import _imports_1 from "@/assets/images/community/icon_fv_rank_one.png";
import _imports_2 from "@/assets/images/community/icon_fv_rank_two.png";
import _imports_3 from "@/assets/images/community/icon_fv_rank_three.png";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import AskForVideoList from "./AskForVideoList.vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import AskForVideoDetails from "./AskForVideoDetails.vue";
export default {
  name: "AskForVideo",
  components: {
    AskForVideoList,
    AskForVideoDetails,
  },

  setup() {
    const store = useStore();
    let hotList = ref([]);
    let recommendList = ref([]);
    let finished2 = ref(false);
    let loading2 = ref(false);
    let page2 = ref(1);
    const showLoading = ref(false);
    const { askVideoHotApi, askVideoRecommendApi } = getGlobalProperties().$api;
    let isWant = computed(() => {
      return store.state.userInfo.want.split(",");
    });

    const getAskVideoHot = () => {
      askVideoHotApi(
        {
          page: page2.value,
        },
        "get"
      ).then((res) => {
        showLoading.value = false;
        console.log(res);

        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isWant = isWant.value.includes(item.id + "");
          });
          hotList.value = hotList.value.concat(res.data.rows);
          loading2.value = false;

          if (res.data.rows.length === 0) {
            finished2.value = true;
          }
        }
      });
    };

    const getAskVideoRecommend = () => {
      askVideoRecommendApi("", "get").then((res) => {
        if (res.code === 0) {
          recommendList.value = res.data;
        }
      });
    };

    getAskVideoHot(); // getAskVideoNew();

    getAskVideoRecommend();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-9e6f72b8"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "askForVideo",
    };
    const _hoisted_2 = {
      class: "cont",
    };

    const _hoisted_3 = /*#__PURE__*/ _createTextVNode(" 筛选 ");

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_5 = [_hoisted_3, _hoisted_4];
    const _hoisted_6 = {
      class: "list",
    };
    const _hoisted_7 = {
      class: "list",
    };
    const _hoisted_8 = ["onClick"];
    const _hoisted_9 = {
      class: "num",
    };
    const _hoisted_10 = {
      key: 0,
      src: _imports_1,
      alt: "",
    };
    const _hoisted_11 = {
      key: 1,
      src: _imports_2,
      alt: "",
    };
    const _hoisted_12 = {
      key: 2,
      src: _imports_3,
      alt: "",
    };
    const _hoisted_13 = {
      key: 3,
    };
    const _hoisted_14 = {
      class: "user_box",
    };
    const _hoisted_15 = {
      class: "left_img_box",
    };
    const _hoisted_16 = {
      class: "right_text",
    };
    const _hoisted_17 = {
      class: "left",
    };

    const _hoisted_18 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "right",
        },
        null,
        -1
      )
    );

    const _hoisted_19 = {
      class: "details_page_app",
    };
    const _hoisted_20 = {
      class: "head_title",
    };

    const _hoisted_21 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "详情",
        -1
      )
    );

    const _hoisted_22 = {
      class: "cont_body_app",
    };
    const _hoisted_23 = {
      class: "ask_search",
    };
    const _hoisted_24 = {
      key: 0,
      class: "search_item_title",
    };
    const _hoisted_25 = {
      key: 1,
      class: "search_btns",
    };

    const _hoisted_26 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "search_item_title",
        },
        "赏金",
        -1
      )
    );

    const _hoisted_27 = {
      class: "search_btns",
    };

    const _hoisted_28 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "search_item_title",
        },
        "状态",
        -1
      )
    );

    const _hoisted_29 = {
      class: "search_btns",
    };
    const _hoisted_30 = {
      class: "search_btns bottom_btns",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_van_tab = _resolveComponent("van-tab");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_Loading = _resolveComponent("Loading");

      const _component_AskForVideoList = _resolveComponent("AskForVideoList");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_swipe_item = _resolveComponent("van-swipe-item");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_swipe = _resolveComponent("van-swipe");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_ask_for_video_details = _resolveComponent(
        "ask-for-video-details"
      );

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_tabs,
              {
                active: $setup.active,
                "onUpdate:active":
                  _cache[0] ||
                  (_cache[0] = ($event) => ($setup.active = $event)),
                "line-height": "0",
                swipeable: "",
                animated: "",
                shrink: "",
                onChange: $setup.onClickTab,
                "title-active-color": "#fd5c18",
                "title-inactive-color": "#CCCCCC",
                color: "transparent",
                background: "transparent",
              },
              {
                default: _withCtx(() => [
                  _createVNode(_component_van_tab, {
                    title: "最新",
                  }),
                  _createVNode(_component_van_tab, {
                    title: "最热",
                  }),
                  _createVNode(_component_van_tab, {
                    title: "榜单",
                  }),
                ]),
                _: 1,
              },
              8,
              ["active", "onChange"]
            ),
            $setup.showLoading
              ? (_openBlock(),
                _createBlock(_component_Loading, {
                  key: 0,
                }))
              : _createCommentVNode("", true),
            $setup.active !== 2
              ? (_openBlock(),
                _createElementBlock(
                  "div",
                  {
                    key: 1,
                    class: "shaix",
                    onClick:
                      _cache[1] ||
                      (_cache[1] = (...args) =>
                        $setup.showSearchFun && $setup.showSearchFun(...args)),
                  },
                  _hoisted_5
                ))
              : _createCommentVNode("", true),
            _createVNode(
              _component_van_swipe,
              {
                class: "my-swipe",
                onChange: $setup.change,
                ref: "swiper",
                "stop-propagation": $setup.stopPropagation,
                loop: false,
                "show-indicators": false,
              },
              {
                default: _withCtx(() => [
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tabs_cont",
                          style: _normalizeStyle({
                            height: $setup.showBottomBanner
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 312px)",
                          }),
                        },
                        [
                          _createElementVNode("div", _hoisted_6, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: $setup.loading1,
                                "onUpdate:loading":
                                  _cache[2] ||
                                  (_cache[2] = ($event) =>
                                    ($setup.loading1 = $event)),
                                error: $setup.error1,
                                "onUpdate:error":
                                  _cache[3] ||
                                  (_cache[3] = ($event) =>
                                    ($setup.error1 = $event)),
                                finished: $setup.finished1,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": $setup.showLoading
                                  ? ""
                                  : "-我也是有底线的-",
                                "loading-text": "正在获取数据...",
                                onLoad: $setup.onLoad1,
                              },
                              {
                                default: _withCtx(() => [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(
                                      $setup.newList,
                                      (item, index) => {
                                        return (
                                          _openBlock(),
                                          _createBlock(
                                            _component_AskForVideoList,
                                            {
                                              key: index,
                                              onClick: () =>
                                                $setup.showDetails(item),
                                              data: item,
                                            },
                                            null,
                                            8,
                                            ["onClick", "data"]
                                          )
                                        );
                                      }
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              [
                                "loading",
                                "error",
                                "finished",
                                "finished-text",
                                "onLoad",
                              ]
                            ),
                          ]),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  }),
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tabs_cont",
                          style: _normalizeStyle({
                            height: $setup.showBottomBanner
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 312px)",
                          }),
                        },
                        [
                          _createElementVNode("div", _hoisted_7, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: $setup.loading2,
                                "onUpdate:loading":
                                  _cache[4] ||
                                  (_cache[4] = ($event) =>
                                    ($setup.loading2 = $event)),
                                error: $setup.error2,
                                "onUpdate:error":
                                  _cache[5] ||
                                  (_cache[5] = ($event) =>
                                    ($setup.error2 = $event)),
                                finished: $setup.finished2,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": $setup.showLoading
                                  ? ""
                                  : "-我也是有底线的-",
                                "loading-text": "正在获取数据...",
                                onLoad: $setup.onLoad2,
                              },
                              {
                                default: _withCtx(() => [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(
                                      $setup.hotList,
                                      (item, index) => {
                                        return (
                                          _openBlock(),
                                          _createBlock(
                                            _component_AskForVideoList,
                                            {
                                              key: index,
                                              onClick: () =>
                                                $setup.showDetails(item),
                                              data: item,
                                            },
                                            null,
                                            8,
                                            ["onClick", "data"]
                                          )
                                        );
                                      }
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              [
                                "loading",
                                "error",
                                "finished",
                                "finished-text",
                                "onLoad",
                              ]
                            ),
                          ]),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  }),
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tabs_cont",
                          style: _normalizeStyle({
                            height: $setup.showBottomBanner
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 312px)",
                          }),
                        },
                        [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList($setup.recommendList, (item, index) => {
                              return (
                                _openBlock(),
                                _createElementBlock(
                                  "div",
                                  {
                                    class: "bd_box",
                                    onClick: () => $setup.toAutorDetails(item),
                                    key: index,
                                  },
                                  [
                                    _createElementVNode("div", _hoisted_9, [
                                      index === 0
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "img",
                                            _hoisted_10
                                          ))
                                        : _createCommentVNode("", true),
                                      index === 1
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "img",
                                            _hoisted_11
                                          ))
                                        : _createCommentVNode("", true),
                                      index === 2
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "img",
                                            _hoisted_12
                                          ))
                                        : _createCommentVNode("", true),
                                      index > 2
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "span",
                                            _hoisted_13,
                                            _toDisplayString(index + 1),
                                            1
                                          ))
                                        : _createCommentVNode("", true),
                                    ]),
                                    _createElementVNode("div", _hoisted_14, [
                                      _createElementVNode("div", _hoisted_15, [
                                        _createVNode(
                                          _component_my_image,
                                          {
                                            url: item.top,
                                          },
                                          null,
                                          8,
                                          ["url"]
                                        ),
                                      ]),
                                      _createElementVNode("div", _hoisted_16, [
                                        _createElementVNode(
                                          "div",
                                          _hoisted_17,
                                          [
                                            _createElementVNode(
                                              "p",
                                              null,
                                              _toDisplayString(item.nickname),
                                              1
                                            ),
                                            _createElementVNode(
                                              "p",
                                              null,
                                              "粉丝" +
                                                _toDisplayString(item.fans),
                                              1
                                            ),
                                          ]
                                        ),
                                        _hoisted_18,
                                      ]),
                                    ]),
                                  ],
                                  8,
                                  _hoisted_8
                                )
                              );
                            }),
                            128
                          )),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["onChange", "stop-propagation"]
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: $setup.showDetailsPopul,
              "onUpdate:show":
                _cache[6] ||
                (_cache[6] = ($event) => ($setup.showDetailsPopul = $event)),
              class: "popup_coentent",
              overlay: false,
              teleport: "#app",
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_19, [
                  _createElementVNode("div", _hoisted_20, [
                    _createVNode(
                      _component_van_icon,
                      {
                        size: "22",
                        name: "arrow-left",
                        onClick: $setup.close,
                      },
                      null,
                      8,
                      ["onClick"]
                    ),
                    _hoisted_21,
                  ]),
                  _createElementVNode("div", _hoisted_22, [
                    (_openBlock(),
                    _createBlock(
                      _component_ask_for_video_details,
                      {
                        key: $setup.key,
                        id: $setup.ask_video_id,
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
          _createVNode(
            _component_van_popup,
            {
              teleport: "#app",
              show: $setup.showSearch,
              "onUpdate:show":
                _cache[16] ||
                (_cache[16] = ($event) => ($setup.showSearch = $event)),
              position: "top",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_23, [
                  $setup.active === 1
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_24, "排序"))
                    : _createCommentVNode("", true),
                  $setup.active === 1
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_25, [
                        _createElementVNode(
                          "span",
                          {
                            class: _normalizeClass(
                              $setup.askSearchData.type === 1 ? "active" : ""
                            ),
                            onClick:
                              _cache[7] ||
                              (_cache[7] = () =>
                                $setup.askSearchFun(1, "type")),
                          },
                          "想看",
                          2
                        ),
                        _createElementVNode(
                          "span",
                          {
                            class: _normalizeClass(
                              $setup.askSearchData.type === 2 ? "active" : ""
                            ),
                            onClick:
                              _cache[8] ||
                              (_cache[8] = () =>
                                $setup.askSearchFun(2, "type")),
                          },
                          "赏金",
                          2
                        ),
                        _createElementVNode(
                          "span",
                          {
                            class: _normalizeClass(
                              $setup.askSearchData.type === 3 ? "active" : ""
                            ),
                            onClick:
                              _cache[9] ||
                              (_cache[9] = () =>
                                $setup.askSearchFun(3, "type")),
                          },
                          "回复",
                          2
                        ),
                      ]))
                    : _createCommentVNode("", true),
                  _hoisted_26,
                  _createElementVNode("div", _hoisted_27, [
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          $setup.askSearchData.money === 1 ? "active" : ""
                        ),
                        onClick:
                          _cache[10] ||
                          (_cache[10] = () => $setup.askSearchFun(1, "money")),
                      },
                      "有赏金",
                      2
                    ),
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          $setup.askSearchData.money === 0 ? "active" : ""
                        ),
                        onClick:
                          _cache[11] ||
                          (_cache[11] = () => $setup.askSearchFun(0, "money")),
                      },
                      "无赏金",
                      2
                    ),
                  ]),
                  _hoisted_28,
                  _createElementVNode("div", _hoisted_29, [
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          $setup.askSearchData.confirm_status === 1
                            ? "active"
                            : ""
                        ),
                        onClick:
                          _cache[12] ||
                          (_cache[12] = () =>
                            $setup.askSearchFun(1, "confirm_status")),
                      },
                      "已采纳",
                      2
                    ),
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          $setup.askSearchData.confirm_status === 0
                            ? "active"
                            : ""
                        ),
                        onClick:
                          _cache[13] ||
                          (_cache[13] = () =>
                            $setup.askSearchFun(0, "confirm_status")),
                      },
                      "未采纳",
                      2
                    ),
                  ]),
                  _createElementVNode("div", _hoisted_30, [
                    _createElementVNode(
                      "span",
                      {
                        class: "undefined",
                        onClick:
                          _cache[14] ||
                          (_cache[14] = (...args) =>
                            $setup.reset && $setup.reset(...args)),
                      },
                      "重置"
                    ),
                    _createElementVNode(
                      "span",
                      {
                        class: "sure_btn",
                        onClick:
                          _cache[15] ||
                          (_cache[15] = (...args) =>
                            $setup.askSearch && $setup.askSearch(...args)),
                      },
                      "确定"
                    ),
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
