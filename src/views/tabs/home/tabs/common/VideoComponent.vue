<script>
import {
  createElementVNode as _createElementVNode,
  createStaticVNode as _createStaticVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/avatar.jpeg";
import _imports_1 from "@/assets/images/chuang.png";
import _imports_2 from "@/assets/images/av.jpeg";
import _imports_3 from "@/assets/images/play.png";
import _imports_4 from "@/assets/images/like.png";
import _imports_5 from "@/assets/images/comment.png";
import _imports_6 from "@/assets/images/share.png";

const _withScopeId = (n) => (
  _pushScopeId("data-v-680a296b"), (n = n()), _popScopeId(), n
);

const _hoisted_1 = {
  class: "featured-avItem",
};

const _hoisted_2 = /*#__PURE__*/ _createStaticVNode(
  '<div class="thin-line" data-v-680a296b></div><div class="featured-avItem-header" data-v-680a296b><div class="featured-avItem-avatar" data-v-680a296b><img src="' +
    _imports_0 +
    '" alt="" srcset="" data-v-680a296b><img class="chuang" src="' +
    _imports_1 +
    '" alt="" srcset="" data-v-680a296b></div><div class="featured-avItem-name" data-v-680a296b><p data-v-680a296b>六蜀黍</p><span data-v-680a296b>2021-07-30</span></div></div>',
  2
);

const _hoisted_4 = /*#__PURE__*/ _createStaticVNode(
  '<div class="avItem-linear" data-v-680a296b></div><div class="avItem-cover" data-v-680a296b><div class="box" data-v-680a296b><img src="' +
    _imports_2 +
    '" alt="" srcset="" data-v-680a296b></div></div><div class="avItem-layer" data-v-680a296b><p data-v-680a296b>3/8日本极限另类变态SMの变态公众肉便所【朝桐 光】</p><div data-v-680a296b><span data-v-680a296b>1万次播放</span><span class="avItem-time" data-v-680a296b>13:31</span></div></div>',
  3
);

const _hoisted_7 = /*#__PURE__*/ _createStaticVNode(
  '<div class="featured-avItem-bottom" data-v-680a296b><div class="featured-avItem-bottom-layer" data-v-680a296b></div><div class="avItem-bottom-item" data-v-680a296b><img src="' +
    _imports_4 +
    '" data-v-680a296b><span data-v-680a296b>264</span></div><div class="avItem-bottom-item" data-v-680a296b><img src="' +
    _imports_5 +
    '" data-v-680a296b><span data-v-680a296b>264</span></div><div class="avItem-bottom-item" data-v-680a296b><img src="' +
    _imports_6 +
    '" data-v-680a296b><span data-v-680a296b>264</span></div></div>',
  1
);

import { useStore } from "vuex";
export default {
  __name: "VideoComponent",

  setup() {
    const store = useStore();

    const videoPlay = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "VideoDetails",
      });
    };

    console.log(_withScopeId);
    return () => {
      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          _createElementVNode(
            "div",
            {
              class: "featured-avItem-cover",
            },
            [
              _hoisted_4,
              _createElementVNode(
                "div",
                {
                  class: "avItem-layerCenter",
                },
                [
                  _createElementVNode("img", {
                    src: _imports_3,
                    alt: "",
                    srcset: "",
                    onClick: videoPlay,
                  }),
                ]
              ),
            ]
          ),
          _hoisted_7,
        ])
      );
    };
  },
};
</script>
