<script>
import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withModifiers as _withModifiers,
  withCtx as _withCtx,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

export default {
  props: ["id"],

  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-3a0cce2c"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "bounty_list",
    };
    const _hoisted_2 = {
      class: "add_total",
    };
    const _hoisted_3 = {
      class: "bonuty_box",
    };
    const _hoisted_4 = ["onClick"];
    const _hoisted_5 = {
      class: "left_img_box",
    };
    const _hoisted_6 = {
      class: "right_text",
    };
    const _hoisted_7 = {
      class: "left",
    };
    const _hoisted_8 = {
      class: "right",
    };
    const _hoisted_9 = {
      class: "dialog_content",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "titles",
        },
        "追加赏金",
        -1
      )
    );
    return (_ctx, _cache, $props, $setup) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            _createElementVNode("div", _hoisted_1, [
              _createElementVNode(
                "div",
                _hoisted_2,
                "共追加了" + _toDisplayString($setup.total_money) + "赏银",
                1
              ),
              _createElementVNode("div", _hoisted_3, [
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
                    offset: 20,
                    "error-text": "请求失败，点击重新加载",
                    "finished-text": "-我也是有底线的-",
                    "loading-text": "正在获取数据...",
                    onLoad: $setup.onLoad,
                  },
                  {
                    default: _withCtx(() => [
                      (_openBlock(true),
                      _createElementBlock(
                        _Fragment,
                        null,
                        _renderList($setup.rewardList, (item, index) => {
                          return (
                            _openBlock(),
                            _createElementBlock(
                              "div",
                              {
                                class: "item",
                                key: index,
                              },
                              [
                                _createElementVNode(
                                  "div",
                                  {
                                    class: "user_box",
                                    onClick: _withModifiers(
                                      () => $setup.toAutorDetails(item),
                                      ["stop"]
                                    ),
                                  },
                                  [
                                    _createElementVNode("div", _hoisted_5, [
                                      _createVNode(
                                        _component_my_image,
                                        {
                                          url: item.user_image,
                                        },
                                        null,
                                        8,
                                        ["url"]
                                      ),
                                    ]),
                                    _createElementVNode("div", _hoisted_6, [
                                      _createElementVNode("div", _hoisted_7, [
                                        _createElementVNode(
                                          "p",
                                          null,
                                          _toDisplayString(item.nickname),
                                          1
                                        ),
                                        _createElementVNode(
                                          "p",
                                          null,
                                          _toDisplayString(item.fans) + "粉丝",
                                          1
                                        ),
                                      ]),
                                      _createElementVNode(
                                        "div",
                                        _hoisted_8,
                                        "追加了" +
                                          _toDisplayString(item.money) +
                                          "赏银",
                                        1
                                      ),
                                    ]),
                                  ],
                                  8,
                                  _hoisted_4
                                ),
                              ]
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["loading", "error", "finished", "onLoad"]
                ),
              ]),
              _createElementVNode(
                "div",
                {
                  class: "append_btn",
                  onClick:
                    _cache[2] ||
                    (_cache[2] = (...args) =>
                      $setup.showDsPopup && $setup.showDsPopup(...args)),
                },
                "追加赏金"
              ),
            ]),
            _createVNode(
              _component_van_popup,
              {
                show: $setup.showDialog,
                "onUpdate:show":
                  _cache[5] ||
                  (_cache[5] = ($event) => ($setup.showDialog = $event)),
                round: "",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_9, [
                    _hoisted_10,
                    _withDirectives(
                      _createElementVNode(
                        "input",
                        {
                          "onUpdate:modelValue":
                            _cache[3] ||
                            (_cache[3] = ($event) =>
                              ($setup.moneyValue = $event)),
                          type: "text",
                          "max-length": "8",
                          placeholder: "请输入打赏金额",
                        },
                        null,
                        512
                      ),
                      [[_vModelText, $setup.moneyValue]]
                    ),
                    _createElementVNode(
                      "div",
                      {
                        class: "btns",
                        onClick:
                          _cache[4] ||
                          (_cache[4] = (...args) =>
                            $setup.okBtns && $setup.okBtns(...args)),
                      },
                      "确认"
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
          ],
          64
        )
      );
    };
  },
};
</script>
