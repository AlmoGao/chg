<script>
import {
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  normalizeStyle as _normalizeStyle,
  withCtx as _withCtx,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/everyday.png";

import Featured from "./components/FeaturedComponent.vue";
import Classification from "./components/ClassificationComponent.vue";
import { ref, nextTick } from "vue";
export default {
  name: "NoData",
  components: {
    Featured,
    Classification,
  },
  props: {
    fxActive: {
      type: Number,
      default: 0,
    },
  },

  setup() {
    let shoeLoading = ref(true);

    nextTick(() => {
      shoeLoading.value = false;
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-30594bc6"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      id: "explore",
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
    const _hoisted_4 = {
      class: "search",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_featured = _resolveComponent("featured");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_classification = _resolveComponent("classification");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_van_search = _resolveComponent("van-search");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "div",
            {
              class: "everyday",
              onClick:
                _cache[0] ||
                (_cache[0] = () => $setup.handleShowStack("VideoMrtj")),
            },
            _hoisted_3
          ),
          _createVNode(
            _component_van_tabs,
            {
              active: $setup.active,
              "onUpdate:active":
                _cache[1] || (_cache[1] = ($event) => ($setup.active = $event)),
              "line-height": "0",
              animated: "",
              swipeable: "",
              "title-active-color": "#fd5c18",
              "title-inactive-color": "#CCCCCC",
              color: "transparent",
              background: "transparent",
            },
            {
              default: _withCtx(() => [
                _createVNode(
                  _component_van_tab,
                  {
                    title: "精选",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tab_cont webkit-overflow-scrolling-touch",
                          style: _normalizeStyle({
                            height: $setup.showBottomBanner
                              ? "calc(100vh - 172px)"
                              : "calc(100vh - 102px)",
                          }),
                        },
                        [_createVNode(_component_featured)],
                        4
                      ),
                    ]),
                    _: 1,
                  }
                ),
                _createVNode(
                  _component_van_tab,
                  {
                    title: "分类",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tab_cont webkit-overflow-scrolling-touch",
                          style: _normalizeStyle({
                            height: $setup.showBottomBanner
                              ? "calc(100vh - 172px)"
                              : "calc(100vh - 102px)",
                          }),
                        },
                        [_createVNode(_component_classification)],
                        4
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            },
            8,
            ["active"]
          ),
          _createElementVNode("div", _hoisted_4, [
            _createVNode(_component_van_search, {
              background: "transparent",
              shape: "round",
              disabled: "",
              placeholder: "搜索",
              onClick:
                _cache[2] ||
                (_cache[2] = () => $setup.handleShowStack("VideoSearch")),
            }),
          ]),
        ])
      );
    };
  },
};
</script>
