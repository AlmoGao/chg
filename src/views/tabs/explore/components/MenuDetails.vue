<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createTextVNode as _createTextVNode,
  normalizeStyle as _normalizeStyle,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/coin.png";
import _imports_1 from "@/assets/images/play.png";
import _imports_2 from "@/assets/images/eyeopen.png";
import _imports_3 from "@/assets/images/zan.png";

import { getGlobalProperties } from "@/assets/js/utils.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    searchText: {
      type: String,
      default: "",
    },
    menu_id: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const store = useStore();
    const menu_id = computed(() => {
      // 计算属性初始化加10
      return ref(props.menu_id);
    });
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });
    const { newApi } = getGlobalProperties().$api;
    let page = ref(1);
    const finished = ref(false);
    let videoList = ref([]);
    const loading = ref(false);

    const getVideoList = () => {
      newApi(
        {
          page: page.value,
          menu_id: menu_id.value.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.forEach((item) => {
            item.isFocus = isFocus.value.includes(item.user_id + "");
          });
          videoList.value = res.data;
          loading.value = false;

          if (res.data.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    getVideoList();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-e1b81ffc"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "head_title",
    };
    const _hoisted_2 = {
      class: "title",
    };
    const _hoisted_3 = {
      class: "cont_body",
    };
    const _hoisted_4 = {
      class: "featured-avItem-header recommendItem-header",
    };
    const _hoisted_5 = {
      class: "recommendItem-header-row",
    };
    const _hoisted_6 = {
      class: "featured-avItem-avatar",
    };
    const _hoisted_7 = {
      class: "avItem-avatar",
    };
    const _hoisted_8 = {
      class: "featured-avItem-name",
    };
    const _hoisted_9 = {
      class: "TwoColumnsVideo-tag-name",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "recommendItem-point",
        },
        null,
        -1
      )
    );

    const _hoisted_11 = ["onClick"];
    const _hoisted_12 = {
      class: "TwoColumnsVideo-cover-wrap",
    };
    const _hoisted_13 = ["onClick"];
    const _hoisted_14 = {
      class: "avItem-cover",
    };

    const _hoisted_15 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-linear",
        },
        null,
        -1
      )
    );

    const _hoisted_16 = {
      class: "coin_timer",
    };
    const _hoisted_17 = {
      class: "coin",
    };

    const _hoisted_18 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_19 = {
      class: "timer",
    };

    const _hoisted_20 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_21 = {
      class: "avItem-layer",
    };

    const _hoisted_22 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_23 = {
      class: "avItem-time",
    };

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
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
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            _createElementVNode("div", _hoisted_1, [
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
              _createElementVNode(
                "span",
                _hoisted_2,
                _toDisplayString($setup.detailsTitle),
                1
              ),
            ]),
            _createElementVNode("div", _hoisted_3, [
              (_openBlock(true),
              _createElementBlock(
                _Fragment,
                null,
                _renderList($setup.videoList, (item, index) => {
                  return (
                    _openBlock(),
                    _createElementBlock(
                      "div",
                      {
                        class: "featured-avItem TwoColumnsVideo",
                        key: index,
                      },
                      [
                        _createElementVNode("div", _hoisted_4, [
                          _createElementVNode("div", _hoisted_5, [
                            _createElementVNode("div", _hoisted_6, [
                              _createElementVNode("div", _hoisted_7, [
                                _createElementVNode("div", null, [
                                  _createVNode(
                                    _component_my_image,
                                    {
                                      url: item.top_image,
                                    },
                                    null,
                                    8,
                                    ["url"]
                                  ),
                                ]),
                              ]),
                            ]),
                            _createElementVNode("div", _hoisted_8, [
                              _createElementVNode(
                                "p",
                                null,
                                _toDisplayString(item.nickname),
                                1
                              ),
                              _createElementVNode("span", null, [
                                _createElementVNode(
                                  "span",
                                  _hoisted_9,
                                  _toDisplayString(item.user_label),
                                  1
                                ),
                                _hoisted_10,
                                _createTextVNode(
                                  _toDisplayString(item.fans) + "粉丝 ",
                                  1
                                ),
                              ]),
                            ]),
                            _createElementVNode(
                              "div",
                              {
                                class: "recommendItem-focus",
                                style: _normalizeStyle({
                                  background:
                                    $setup.userInfo.focus_user.indexOf(
                                      item.author_id
                                    ) !== -1
                                      ? "#5B5B5B"
                                      : "#FF5026",
                                }),
                                onClick: () => $setup.focusSave(item),
                              },
                              _toDisplayString(
                                $setup.userInfo.focus_user.indexOf(
                                  item.author_id
                                ) === -1
                                  ? "关注"
                                  : "已关注"
                              ),
                              13,
                              _hoisted_11
                            ),
                          ]),
                        ]),
                        _createElementVNode("div", _hoisted_12, [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList(item.rows, (elem) => {
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
                                    _createElementVNode("div", _hoisted_14, [
                                      _hoisted_15,
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
                                      _createElementVNode("div", _hoisted_16, [
                                        _createElementVNode(
                                          "div",
                                          _hoisted_17,
                                          [
                                            _hoisted_18,
                                            _createTextVNode(
                                              " " +
                                                _toDisplayString(elem.money),
                                              1
                                            ),
                                          ]
                                        ),
                                        _createElementVNode(
                                          "div",
                                          _hoisted_19,
                                          _toDisplayString(elem.times),
                                          1
                                        ),
                                      ]),
                                      _hoisted_20,
                                    ]),
                                    _createElementVNode("div", _hoisted_21, [
                                      _createElementVNode(
                                        "p",
                                        null,
                                        _toDisplayString(elem.title),
                                        1
                                      ),
                                      _createElementVNode("div", null, [
                                        _createElementVNode("span", null, [
                                          _hoisted_22,
                                          _createTextVNode(
                                            _toDisplayString(elem.count),
                                            1
                                          ),
                                        ]),
                                        _createElementVNode(
                                          "span",
                                          _hoisted_23,
                                          [
                                            _hoisted_24,
                                            _createTextVNode(
                                              _toDisplayString(elem.like_num),
                                              1
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ],
                                  8,
                                  _hoisted_13
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
            ]),
          ],
          64
        )
      );
    };
  },
};
</script>
