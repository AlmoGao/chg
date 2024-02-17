<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createElementVNode as _createElementVNode,
  createTextVNode as _createTextVNode,
  normalizeClass as _normalizeClass,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/video.jpg";

export default {
  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-63d5e596"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "classification",
    };
    const _hoisted_2 = {
      class: "left_tab",
    };
    const _hoisted_3 = ["onClick"];

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "line",
        },
        null,
        -1
      )
    );

    const _hoisted_5 = /*#__PURE__*/ _createTextVNode(" 少女 ");

    const _hoisted_6 = [_hoisted_4, _hoisted_5];
    const _hoisted_7 = {
      class: "right_cont",
    };
    const _hoisted_8 = {
      class: "swiper_cont",
    };
    const _hoisted_9 = {
      class: "top",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "title",
        },
        [
          /*#__PURE__*/ _createElementVNode("span", null, "热门创作者"),
          /*#__PURE__*/ _createElementVNode(
            "span",
            {
              class: "look_all",
            },
            "查看全部"
          ),
        ],
        -1
      )
    );

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
        },
        null,
        -1
      )
    );

    const _hoisted_12 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "text_ellipsis",
        },
        "纯真大叔纯真大叔",
        -1
      )
    );

    const _hoisted_13 = [_hoisted_11, _hoisted_12];

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "label_title",
        },
        "全部标签",
        -1
      )
    );

    const _hoisted_15 = {
      class: "label_list",
    };
    const _hoisted_16 = {
      key: 0,
      class: "label_item label_item_null",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_van_swipe_item = _resolveComponent("van-swipe-item");

      const _component_van_swipe = _resolveComponent("van-swipe");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            (_openBlock(),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(15, (item, index) => {
                return _createElementVNode(
                  "div",
                  {
                    class: _normalizeClass([
                      "tab_item",
                      index === $setup.activeIndex ? "active" : "",
                    ]),
                    onClick: () => $setup.tabItemClick(item, index),
                    key: index,
                  },
                  _hoisted_6,
                  10,
                  _hoisted_3
                );
              }),
              64
            )),
          ]),
          _createElementVNode("div", _hoisted_7, [
            _createVNode(
              _component_van_swipe,
              {
                loop: false,
                ref: "swipe",
                vertical: true,
                touchable: false,
              },
              {
                default: _withCtx(() => [
                  (_openBlock(),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(15, (i) => {
                      return _createVNode(
                        _component_van_swipe_item,
                        {
                          key: i,
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode("div", _hoisted_8, [
                              _createElementVNode("div", _hoisted_9, [
                                _hoisted_10,
                                _createElementVNode("ul", null, [
                                  (_openBlock(),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(10, (a) => {
                                      return _createElementVNode(
                                        "li",
                                        {
                                          key: a,
                                        },
                                        _hoisted_13
                                      );
                                    }),
                                    64
                                  )),
                                ]),
                              ]),
                              _hoisted_14,
                              _createElementVNode("div", _hoisted_15, [
                                (_openBlock(),
                                _createElementBlock(
                                  _Fragment,
                                  null,
                                  _renderList(50, (c) => {
                                    return _createElementVNode(
                                      "div",
                                      {
                                        class: "label_item",
                                        key: c,
                                      },
                                      "标签"
                                    );
                                  }),
                                  64
                                )),
                                (_openBlock(),
                                _createElementBlock("div", _hoisted_16)),
                              ]),
                            ]),
                          ]),
                          _: 2,
                        },
                        1024
                      );
                    }),
                    64
                  )),
                ]),
                _: 1,
              },
              512
            ),
          ]),
        ])
      );
    };
  },
};
</script>
