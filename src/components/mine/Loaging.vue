<script>
import {
  resolveComponent as _resolveComponent,
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
      _pushScopeId("data-v-454216b0"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "loaging",
    };
    const _hoisted_2 = {
      class: "cont",
    };
    return () => {
      const _component_van_loading = _resolveComponent("van-loading");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_van_loading, {
              type: "spinner",
              color: "#FD5C18",
              size: "50px",
            }),
          ]),
        ])
      );
    };
  },
};
</script>
