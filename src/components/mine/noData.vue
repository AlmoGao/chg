<script>
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  normalizeStyle as _normalizeStyle,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/noData.webp";

import { ref } from "vue";
export default {
  name: "NoData",
  props: {
    text: {
      type: String,
      default: "什么都没有，好空虚啊",
    },
    color: {
      type: String,
      default: "#000",
    },
  },

  setup(props) {
    const noDataText = ref(props.text);
    const color = ref(props.color);

    const _withScopeId = (n) => (
      _pushScopeId("data-v-cc191f4a"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "noData",
    };

    const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "img_bo",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
            alt: "",
          }),
        ],
        -1
      )
    );

    return () => {
      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          _createElementVNode(
            "p",
            {
              style: _normalizeStyle({
                color: color.value,
              }),
            },
            _toDisplayString(noDataText.value),
            5
          ),
        ])
      );
    };
  },
};
</script>
