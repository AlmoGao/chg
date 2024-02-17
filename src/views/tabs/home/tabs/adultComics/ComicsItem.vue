<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";

export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  setup() {
    const _hoisted_1 = {
      class: "comicsItem",
    };
    const _hoisted_2 = {
      class: "img_cont",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_my_image = _resolveComponent("my-image");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_my_image,
              {
                url: $setup.dataItem.image,
              },
              null,
              8,
              ["url"]
            ),
          ]),
          _createElementVNode(
            "p",
            null,
            _toDisplayString($setup.dataItem.title),
            1
          ),
        ])
      );
    };
  },
};
</script>
