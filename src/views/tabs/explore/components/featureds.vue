<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  createTextVNode as _createTextVNode,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createCommentVNode as _createCommentVNode,
  createBlock as _createBlock,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/more.png";
import _imports_1 from "@/assets/images/play.png";
import _imports_2 from "@/assets/images/coin.png";
import _imports_3 from "@/assets/images/eye-open.png";
import _imports_4 from "@/assets/images/zan.png";

import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import SwipeComponent from "../../home/tabs/common/SwipeComponent.vue";
import { useStore } from "vuex";
export default {
  components: {
    SwipeComponent,
  },

  setup(props) {
    let page = ref(1);
    let showDetailsPopul = ref(false);
    let menu_id = ref("");
    let menuTetx = ref("");
    const finished = ref(false);
    let videoList = ref([]);
    const error = ref(false);
    const loading = ref(false);
    const store = useStore();
    let showLoding = ref(true);
    const { concentrationApi } = getGlobalProperties().$api;
    videoList.value = localStorage.getItem("FeaturedComponent")
      ? JSON.parse(localStorage.getItem("FeaturedComponent"))
      : [];

    const getVideoList = () => {
      concentrationApi({}, "get").then((res) => {
        showLoding.value = false;
        videoList.value = [];

        if (res.code === 0) {
          if (res.data.length) {
            localStorage.setItem(
              "FeaturedComponent",
              JSON.stringify([res.data[0]])
            );
          }

          videoList.value = res.data;
          loading.value = false; // if (res.data.length === 0) {

          finished.value = true; // }
        }
      });
    };

    getVideoList();

    const onLoad = () => {
      // loading.value = true;
      // page.value++;
      // getVideoList();
    };

    const menuAll = (item) => {
      menu_id.value = item.category_id;
      menuTetx.value = item.name;
      showDetailsPopul.value = true;
    };

    const videoPlay = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "VideoDetails",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const close = () => {
      showDetailsPopul.value = false;
      menuTetx.value = "";
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-2a78bb55"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "featured",
    };
    const _hoisted_2 = {
      key: 0,
      class: "video_cont",
    };
    const _hoisted_3 = {
      class: "item_title",
    };
    const _hoisted_4 = ["onClick"];

    const _hoisted_5 = /*#__PURE__*/ _createTextVNode(" 更多");

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_7 = [_hoisted_5, _hoisted_6];
    const _hoisted_8 = ["onClick"];
    const _hoisted_9 = {
      class: "img_box",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "video-box-play",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_1,
          }),
        ],
        -1
      )
    );

    const _hoisted_11 = {
      class: "coin_timer",
    };
    const _hoisted_12 = {
      class: "coin",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_2,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_14 = {
      class: "timer",
    };
    const _hoisted_15 = {
      class: "title",
    };
    const _hoisted_16 = {
      class: "bottom",
    };
    const _hoisted_17 = {
      class: "look",
    };

    const _hoisted_18 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_19 = {
      class: "awesome",
    };

    const _hoisted_20 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_4,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_21 = {
      class: "flex video_box",
    };
    const _hoisted_22 = ["onClick"];
    const _hoisted_23 = {
      class: "img_box",
    };

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "video-box-play video-box-play-smail",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_1,
          }),
        ],
        -1
      )
    );

    const _hoisted_25 = {
      class: "coin_timer",
    };
    const _hoisted_26 = {
      class: "coin",
    };

    const _hoisted_27 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_2,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_28 = {
      class: "timer",
    };
    const _hoisted_29 = {
      class: "title",
    };
    const _hoisted_30 = {
      class: "bottom",
    };
    const _hoisted_31 = {
      class: "look",
    };

    const _hoisted_32 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_33 = {
      class: "awesome",
    };

    const _hoisted_34 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_4,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_35 = {
      class: "search_details_page",
    };
    console.log({
      props,
      videoList,
      loading,
      onLoad,
      error,
      videoPlay,
      finished,
      showLoding,
      showDetailsPopul,
      menu_id,
      menuAll,
      menuTetx,
      close,
      page,
    });

    return (_ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_search_popup = _resolveComponent("search-popup");

      const _component_van_popup = _resolveComponent("van-popup");

      const _component_van_list = _resolveComponent("van-list");

      return (
        _openBlock(),
        _createBlock(
          _component_van_list,
          {
            loading: loading.value,
            "onUpdate:loading":
              _cache[1] || (_cache[1] = ($event) => (loading.value = $event)),
            error: error.value,
            "onUpdate:error":
              _cache[2] || (_cache[2] = ($event) => (error.value = $event)),
            finished: finished.value,
            "error-text": "请求失败，点击重新加载",
            "finished-text": "-我也是有底线的-",
            "loading-text": "正在获取数据...",
            onLoad: onLoad,
          },
          {
            default: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                videoList.value.length
                  ? (_openBlock(),
                    _createElementBlock("div", _hoisted_2, [
                      (_openBlock(true),
                      _createElementBlock(
                        _Fragment,
                        null,
                        _renderList(videoList.value, (item, index) => {
                          return (
                            _openBlock(),
                            _createElementBlock(
                              "div",
                              {
                                class: "video_item",
                                key: index + "-" + item.author_id,
                              },
                              [
                                _createElementVNode("div", _hoisted_3, [
                                  _createTextVNode(
                                    _toDisplayString(item.name) + " ",
                                    1
                                  ),
                                  _createElementVNode(
                                    "div",
                                    {
                                      class: "more",
                                      onClick: () => menuAll(item),
                                    },
                                    _hoisted_7,
                                    8,
                                    _hoisted_4
                                  ),
                                ]),
                                item.rows.length
                                  ? (_openBlock(),
                                    _createElementBlock(
                                      "div",
                                      {
                                        key: 0,
                                        class: "video_box",
                                        onClick: () =>
                                          videoPlay(item.rows[0]),
                                      },
                                      [
                                        _createElementVNode("div", _hoisted_9, [
                                          _createVNode(
                                            _component_my_image,
                                            {
                                              url: item.rows[0].image,
                                            },
                                            null,
                                            8,
                                            ["url"]
                                          ),
                                          _hoisted_10,
                                          _createElementVNode(
                                            "div",
                                            _hoisted_11,
                                            [
                                              _createElementVNode(
                                                "div",
                                                _hoisted_12,
                                                [
                                                  _hoisted_13,
                                                  _createTextVNode(
                                                    " " +
                                                      _toDisplayString(
                                                        item.rows[0].money
                                                      ),
                                                    1
                                                  ),
                                                ]
                                              ),
                                              _createElementVNode(
                                                "div",
                                                _hoisted_14,
                                                _toDisplayString(
                                                  item.rows[0].times
                                                ),
                                                1
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _createElementVNode(
                                          "div",
                                          _hoisted_15,
                                          _toDisplayString(item.rows[0].title),
                                          1
                                        ),
                                        _createElementVNode(
                                          "div",
                                          _hoisted_16,
                                          [
                                            _createElementVNode(
                                              "div",
                                              _hoisted_17,
                                              [
                                                _hoisted_18,
                                                _createTextVNode(
                                                  _toDisplayString(
                                                    item.rows[0].count
                                                  ),
                                                  1
                                                ),
                                              ]
                                            ),
                                            _createElementVNode(
                                              "div",
                                              _hoisted_19,
                                              [
                                                _hoisted_20,
                                                _createTextVNode(
                                                  _toDisplayString(
                                                    item.rows[0].fans
                                                  ),
                                                  1
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      8,
                                      _hoisted_8
                                    ))
                                  : _createCommentVNode("", true),
                                _createElementVNode("div", _hoisted_21, [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(item.rows.slice(1), (elem) => {
                                      return (
                                        _openBlock(),
                                        _createElementBlock(
                                          "div",
                                          {
                                            onClick: () =>
                                              videoPlay(elem),
                                            key: elem.id,
                                          },
                                          [
                                            _createElementVNode(
                                              "div",
                                              _hoisted_23,
                                              [
                                                _createVNode(
                                                  _component_my_image,
                                                  {
                                                    url: elem.image,
                                                  },
                                                  null,
                                                  8,
                                                  ["url"]
                                                ),
                                                _hoisted_24,
                                                _createElementVNode(
                                                  "div",
                                                  _hoisted_25,
                                                  [
                                                    _createElementVNode(
                                                      "div",
                                                      _hoisted_26,
                                                      [
                                                        _hoisted_27,
                                                        _createTextVNode(
                                                          " " +
                                                            _toDisplayString(
                                                              elem.money
                                                            ),
                                                          1
                                                        ),
                                                      ]
                                                    ),
                                                    _createElementVNode(
                                                      "div",
                                                      _hoisted_28,
                                                      _toDisplayString(
                                                        elem.times
                                                      ),
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _createElementVNode(
                                              "div",
                                              _hoisted_29,
                                              _toDisplayString(elem.title),
                                              1
                                            ),
                                            _createElementVNode(
                                              "div",
                                              _hoisted_30,
                                              [
                                                _createElementVNode(
                                                  "div",
                                                  _hoisted_31,
                                                  [
                                                    _hoisted_32,
                                                    _createTextVNode(
                                                      _toDisplayString(
                                                        elem.count
                                                      ),
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                _createElementVNode(
                                                  "div",
                                                  _hoisted_33,
                                                  [
                                                    _hoisted_34,
                                                    _createTextVNode(
                                                      _toDisplayString(
                                                        elem.fans
                                                      ),
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ],
                                          8,
                                          _hoisted_22
                                        )
                                      );
                                    }),
                                    128
                                  )),
                                ]),
                              ]
                            )
                          );
                        }),
                        128
                      )),
                    ]))
                  : _createCommentVNode("", true),
                _createVNode(
                  _component_van_popup,
                  {
                    show: showDetailsPopul.value,
                    "onUpdate:show":
                      _cache[0] ||
                      (_cache[0] = ($event) =>
                        (showDetailsPopul.value = $event)),
                    class: "popup_coentent",
                    teleport: "#app",
                    overlay: false,
                    position: "right",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_35, [
                        (_openBlock(),
                        _createBlock(
                          _component_search_popup,
                          {
                            searchText: menuTetx.value,
                            menu_id: menu_id.value,
                            label_id: "",
                            key: menu_id.value,
                            onClose: close,
                          },
                          null,
                          8,
                          ["searchText", "menu_id", "onClose"]
                        )),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["show"]
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ["loading", "error", "finished", "onLoad"]
        )
      );
    };
  },
};
</script>
