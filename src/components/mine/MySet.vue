<script>
import {
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

export default {
  name: "MySet",

  setup(props) {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-69993025"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "mySet",
    };

    const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-set-list",
        },
        [
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "user-set-item",
            },
            [
              /*#__PURE__*/ _createElementVNode(
                "div",
                {
                  class: "user-set-key",
                },
                "当前版本"
              ),
              /*#__PURE__*/ _createElementVNode(
                "div",
                {
                  class: "user-set-value",
                },
                "v1.2.0"
              ),
            ]
          ),
        ],
        -1
      )
    );

    const _hoisted_3 = [_hoisted_2];
    console.log(props);
    return () => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, _hoisted_3);
    };
  },
};
</script>
