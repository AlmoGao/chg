<script>
import {
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  openBlock as _openBlock,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/logoBg.png";

import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "MyImage",
  props: {
    url: {
      type: String,
      default: "",
    },
    round: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const store = useStore();
    const baseUrl = computed(() => {
      return store.state.baseUrl;
    });
    const imgUrl = computed(() => {
      return props.url;
    });

    const load = (e) => {
      console.log(e);
      let oImg = document.getElementsByClassName("van-image__img");
      Array.prototype.forEach.call(oImg, function (item) {
        item.setAttribute("class", "animation");
      });
    };

    console.log({
      props,
      imgUrl,
      baseUrl,
      load,
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-e0461e04"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "error",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
          }),
        ],
        -1
      )
    );

    const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "error",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
          }),
        ],
        -1
      )
    );

    console.log(ref)
    return (_ctx, _cache, $props) => {
      const _component_van_image = _resolveComponent("van-image");

      return (
        _openBlock(),
        _createBlock(
          _component_van_image,
          {
            "lazy-load": "",
            key: imgUrl.value,
            round: $props.round,
            src: baseUrl.value.image_url + imgUrl.value,
          },
          {
            loading: _withCtx(() => [_hoisted_1]),
            error: _withCtx(() => [_hoisted_2]),
            _: 1,
          },
          8,
          ["round", "src"]
        )
      );
    };
  },
};
</script>
