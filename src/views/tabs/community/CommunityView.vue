<script>
import {
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withCtx as _withCtx,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/everyday.png";
import _imports_1 from "@/assets/images/publishIcon.png";

import { ref } from "vue";
import { useStore } from "vuex";
import { showDialog } from "vant";
import SwipeComponent from "../home/tabs/common/SwipeComponent.vue";
import AskForVideo from "./components/AskForVideo.vue";
import MicroHeadlines from "./components/MicroHeadlines.vue";
export default {
  name: "CommunityView",
  components: {
    SwipeComponent,
    AskForVideo,
    MicroHeadlines,
  },

  setup(props) {
    let active = ref(1);
    const store = useStore();

    const handleShowStack = (path) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: path,
      });
    };

    const releaseValue = () => {
      showDialog({
        title: "温馨提示",
        showCancelButton: true,
        confirmButtonText: "下载APP",
        cancelButtonText: "确认",
        className: "okAlertPopup",
        message: "请下载采花阁APP使用上传功能！",
      }).then(() => {
        window.open(store.state.baseUrl.h5_download_url);
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-52af4b28"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "communityView",
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

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
          alt: "",
          srcset: "",
        },
        null,
        -1
      )
    );

    const _hoisted_5 = [_hoisted_4];
    const _hoisted_6 = {
      class: "tab_cont webkit-overflow-scrolling-touch",
    };
    const _hoisted_7 = {
      class: "tab_cont webkit-overflow-scrolling-touch",
    };
    return (_ctx, _cache) => {
      const _component_SwipeComponent = _resolveComponent("SwipeComponent");

      const _component_AskForVideo = _resolveComponent("AskForVideo");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_MicroHeadlines = _resolveComponent("MicroHeadlines");

      const _component_van_tabs = _resolveComponent("van-tabs");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "div",
            {
              class: "everyday",
              onClick:
                _cache[0] ||
                (_cache[0] = () => handleShowStack("VideoMrtj")),
            },
            _hoisted_3
          ),
          _createElementVNode(
            "div",
            {
              class: "publishIcon",
              onClick:
                _cache[1] ||
                (_cache[1] = (...args) =>
                  releaseValue && releaseValue(...args)),
            },
            _hoisted_5
          ),
          _createVNode(
            _component_van_tabs,
            {
              active: active.value,
              "onUpdate:active":
                _cache[2] || (_cache[2] = ($event) => (active.value = $event)),
              "line-height": "0",
              swipeable: "",
              animated: "",
              "title-active-color": "#fd5c18",
              "title-inactive-color": "#CCCCCC",
              color: "transparent",
              background: "transparent",
            },
            {
              default: _withCtx(() => [
                // _createVNode(
                //   _component_van_tab,
                //   {
                //     title: "求片",
                //   },
                //   {
                //     default: _withCtx(() => [
                //       _createElementVNode("div", _hoisted_6, [
                //         // _createVNode(_component_SwipeComponent),
                //         _createVNode(_component_AskForVideo),
                //       ]),
                //     ]),
                //     _: 1,
                //   }
                // ),
                _createVNode(
                  _component_van_tab,
                  {
                    title: "微头条",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_7, [
                        // _createVNode(_component_SwipeComponent),
                        _createVNode(_component_MicroHeadlines),
                      ]),
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
        ])
      );
    };
  },
};
</script>
