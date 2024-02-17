<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  withModifiers as _withModifiers,
  normalizeStyle as _normalizeStyle,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  normalizeClass as _normalizeClass,
  createTextVNode as _createTextVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/icon_see_num.png";
import _imports_1 from "@/assets/images/community/icon_like_tag.png";

export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-7813b93b"), (n = n()), _popScopeId(), n
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
    const _hoisted_5 = {
      class: "right",
    };
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
      class: "bottom",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
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
                    _toDisplayString($setup.dataItem.day),
                    1
                  ),
                ]),
                _createElementVNode("div", _hoisted_5, [
                  $setup.dataItem.isFocus !== "null"
                    ? (_openBlock(),
                      _createElementBlock(
                        "span",
                        {
                          key: 0,
                          onClick:
                            _cache[0] ||
                            (_cache[0] = _withModifiers(
                              () => $setup.focusSave($setup.dataItem),
                              ["stop"]
                            )),
                          style: _normalizeStyle({
                            color: $setup.dataItem.isFocus ? "#999" : "#fd5c18",
                          }),
                        },
                        _toDisplayString(
                          $setup.dataItem.isFocus ? "已关注" : "关注"
                        ),
                        5
                      ))
                    : _createCommentVNode("", true),
                ]),
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
            $setup.dataItem.images.length
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_8, [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList($setup.dataItem.images, (item) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            class: _normalizeClass(
                              "details_img_" + $setup.dataItem.images.length
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
            _createElementVNode("div", _hoisted_9, [
              _createElementVNode("div", null, [
                _hoisted_10,
                _createTextVNode(
                  " " + _toDisplayString($setup.dataItem.count),
                  1
                ),
              ]),
              _createElementVNode(
                "div",
                {
                  onClick:
                    _cache[2] ||
                    (_cache[2] = _withModifiers(
                      () => $setup.getHeadLineCommentLike($setup.dataItem),
                      ["stop"]
                    )),
                },
                [
                  _hoisted_11,
                  _createTextVNode(
                    " " + _toDisplayString($setup.dataItem.like_num),
                    1
                  ),
                ]
              ),
            ]),
          ]),
        ])
      );
    };
  },
};
</script>
