<script>
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, unref as _unref, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

const _withScopeId = n => (_pushScopeId("data-v-65abb25c"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "details_page_if"
};
const _hoisted_2 = {
  class: "head_title"
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("span", {
  class: "title"
}, "详情", -1));

const _hoisted_4 = {
  class: "cont_body_if"
};
const _hoisted_5 = ["src"];
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  __name: 'DialogIsAdvertis',

  setup() {
    const store = useStore();
    const router = useRouter();
    const showDialogIsAdvertis = computed(() => {
      // 计算属性初始化加10
      return store.state.showDialogIsAdvertis;
    });

    const closeAdvertis = () => {
      router.push("/");
    };

    return () => {
      const _component_van_icon = _resolveComponent("van-icon");

      return _openBlock(), _createElementBlock("div", _hoisted_1, [_createElementVNode("div", _hoisted_2, [_createVNode(_component_van_icon, {
        size: "22",
        name: "arrow-left",
        onClick: closeAdvertis
      }), _hoisted_3]), _createElementVNode("div", _hoisted_4, [_createElementVNode("iframe", {
        src: _unref(showDialogIsAdvertis).url,
        frameborder: "0"
      }, null, 8, _hoisted_5)])]);
    };
  }

};
</script>