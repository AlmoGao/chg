<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  withModifiers as _withModifiers,
  normalizeClass as _normalizeClass,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  createTextVNode as _createTextVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/xk_icon.png";
import _imports_1 from "@/assets/images/coin.png";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-70b88005"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "item",
    };
    const _hoisted_2 = {
      class: "left_img_box",
    };
    const _hoisted_3 = {
      class: "right_text",
    };
    const _hoisted_4 = {
      class: "left",
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

    const _hoisted_6 = {
      class: "cont_details",
    };
    const _hoisted_7 = {
      class: "cont_text",
    };
    const _hoisted_8 = {
      key: 0,
      class: "details_img",
    };
    const _hoisted_9 = {
      key: 1,
      class: "video_box",
    };
    const _hoisted_10 = {
      class: "left_img",
    };
    const _hoisted_11 = {
      class: "right_text",
    };
    const _hoisted_12 = {
      class: "bottom",
    };
    const _hoisted_13 = {
      key: 0,
      class: "coin",
    };

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_15 = {
      key: 1,
      class: "coin",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_my_image = _resolveComponent("my-image");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "div",
            {
              class: "user_box",
              onClick:
                _cache[1] ||
                (_cache[1] = _withModifiers(
                  () => $setup.toAutorDetails($setup.dataItem),
                  ["stop"]
                )),
            },
            [
              _createElementVNode("div", _hoisted_2, [
                _createVNode(
                  _component_my_image,
                  {
                    url: $setup.dataItem.user_image,
                  },
                  null,
                  8,
                  ["url"]
                ),
              ]),
              _createElementVNode("div", _hoisted_3, [
                _createElementVNode("div", _hoisted_4, [
                  _createElementVNode(
                    "p",
                    null,
                    _toDisplayString($setup.dataItem.nickname),
                    1
                  ),
                  _createElementVNode(
                    "p",
                    null,
                    _toDisplayString($setup.dataItem.want_num) + "人想看",
                    1
                  ),
                ]),
                $setup.dataItem.isWant !== "null"
                  ? (_openBlock(),
                    _createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: _normalizeClass([
                          "right",
                          $setup.dataItem.isWant ? "active" : "",
                        ]),
                        onClick:
                          _cache[0] ||
                          (_cache[0] = _withModifiers(
                            () => $setup.getaskVideoWant($setup.dataItem),
                            ["stop"]
                          )),
                      },
                      [
                        _hoisted_5,
                        _createElementVNode(
                          "span",
                          null,
                          _toDisplayString(
                            $setup.dataItem.isWant ? "已求" : "想看"
                          ),
                          1
                        ),
                      ],
                      2
                    ))
                  : _createCommentVNode("", true),
              ]),
            ]
          ),
          _createElementVNode("div", _hoisted_6, [
            _createElementVNode(
              "p",
              _hoisted_7,
              _toDisplayString($setup.dataItem.content),
              1
            ),
            $setup.dataItem.image && $setup.dataItem.image.length
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_8, [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList($setup.dataItem.image, (item) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            class: _normalizeClass(
                              "details_img_" + $setup.dataItem.image.length
                            ),
                            key: item,
                          },
                          [
                            _createVNode(
                              _component_my_image,
                              {
                                url: item,
                              },
                              null,
                              8,
                              ["url"]
                            ),
                          ],
                          2
                        )
                      );
                    }),
                    128
                  )),
                ]))
              : _createCommentVNode("", true),
            $setup.dataItem.video_title
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_9, [
                  _createElementVNode("div", _hoisted_10, [
                    _createVNode(
                      _component_my_image,
                      {
                        url: $setup.dataItem.video_image,
                      },
                      null,
                      8,
                      ["url"]
                    ),
                  ]),
                  _createElementVNode("div", _hoisted_11, [
                    _createElementVNode(
                      "p",
                      null,
                      _toDisplayString($setup.dataItem.video_title),
                      1
                    ),
                    _createElementVNode(
                      "p",
                      null,
                      _toDisplayString($setup.dataItem.video_nickname) +
                        " " +
                        _toDisplayString($setup.dataItem.video_count) +
                        "次播放",
                      1
                    ),
                  ]),
                ]))
              : _createCommentVNode("", true),
            _createElementVNode("div", _hoisted_12, [
              $setup.dataItem.money > 0
                ? (_openBlock(),
                  _createElementBlock("div", _hoisted_13, [
                    _hoisted_14,
                    _createTextVNode(
                      " " + _toDisplayString($setup.dataItem.money) + "赏银 ",
                      1
                    ),
                  ]))
                : (_openBlock(), _createElementBlock("div", _hoisted_15)),
            ]),
          ]),
        ])
      );
    };
  },
};
</script>
