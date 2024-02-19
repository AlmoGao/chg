<script>
import {
  createElementVNode as _createElementVNode,
  createStaticVNode as _createStaticVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

const _withScopeId = (n) => (
  _pushScopeId("data-v-6f0c0c85"), (n = n()), _popScopeId(), n
);

const _hoisted_1 = /*#__PURE__*/ _createStaticVNode(
  "<li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li><li data-v-6f0c0c85>妈妈</li>",
  11
);

const _hoisted_12 = [_hoisted_1];

console.log(_createElementVNode, _withScopeId);

export default {
  setup() {
    return _openBlock(), _createElementBlock("ul", null, _hoisted_12);
  }
}
</script>
