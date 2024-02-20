<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref, computed } from "vue";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  setup(props, { emit }) {
    const dataItem = computed(() => {
      
      return props.data;
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-a9b9c138"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "comicsItem",
    };
    const _hoisted_2 = {
      class: "img_cont",
    };

    return () => {
      const _component_my_image = _resolveComponent("my-image");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_my_image,
              {
                url: dataItem.value.image,
              },
              null,
              8,
              ["url"]
            ),
          ]),
          _createElementVNode(
            "p",
            null,
            _toDisplayString(dataItem.value.title),
            1
          ),
        ])
      );
    };
  },
};
</script>
