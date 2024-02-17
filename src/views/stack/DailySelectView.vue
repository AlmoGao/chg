<script>
import { openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, Transition as _Transition, withCtx as _withCtx, createVNode as _createVNode, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

// const _withScopeId = n => (_pushScopeId("data-v-22f47dec"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "stack-pages-container"
};
const _hoisted_2 = {
  key: 0,
  class: "stack-pages"
};
/**
 * 定义属性
 */

export default {
  __name: 'DailySelectView',
  props: {
    isShowStack: Boolean
  },

  setup(__props) {
    // const showStack = isShowStack;
    return () => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [_createVNode(_Transition, {
        name: "slide"
      }, {
        default: _withCtx(() => [__props.isShowStack ? (_openBlock(), _createElementBlock("div", _hoisted_2)) : _createCommentVNode("", true)]),
        _: 1
      })]);
    };
  }

};
</script>