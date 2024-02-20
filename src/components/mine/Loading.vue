<script>
import {
  createTextVNode as _createTextVNode,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Loading",
  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-3353fdcd"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "loaging",
    };
    const _hoisted_2 = {
      class: "cont",
    };

    const _hoisted_3 = /*#__PURE__*/ _createTextVNode(" 正在获取数据...");
    return () => {
      const _component_van_loading = _resolveComponent("van-loading");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_loading,
              {
                color: "#FD5C18",
                size: "30px",
              },
              {
                default: _withCtx(() => [_hoisted_3]),
                _: 1,
              }
            ),
          ]),
        ])
      );
    };
  },
};
</script>
