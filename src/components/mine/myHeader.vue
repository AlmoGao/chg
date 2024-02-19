<script>
import {
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/home_logo.png";

const _withScopeId = (n) => (
  _pushScopeId("data-v-ec99ca5e"), (n = n()), _popScopeId(), n
);

const _hoisted_1 = {
  class: "my-header",
};

const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
  /*#__PURE__*/ _createElementVNode(
    "img",
    {
      src: _imports_0,
      alt: "",
      srcset: "",
    },
    null,
    -1
  )
);

const _hoisted_3 = [_hoisted_2];
export default {
  setup() {
    return () => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, _hoisted_3);
    }
  }
}
</script>
