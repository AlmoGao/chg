<script>
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/icon_see_more_share_header.png";
import _imports_1 from "@/assets/images/icon_see_all_d.png";
import _imports_2 from "@/assets/images/logo.png";
import _imports_3 from "@/assets/images/icon_share_show_d.png";
import _imports_4 from "@/assets/images/icon_share_fg_bg.png";

import { useStore } from "vuex";
import QrcodeVue from "qrcode.vue";
import Clipboard from "clipboard";
import { showToast } from "vant";
import { ref, computed, watch } from "vue";
export default {
  name: "SharePopup",
  components: {
    QrcodeVue,
  },

  setup() {
    const store = useStore();
    let showDetailsPopul = ref(false);
    let videoDetails = ref({});
    const qrUrl = computed(() => {
      return store.state.userInfo.share_url;
    });
    const showSharePopup = computed(() => {
      return store.state.showSharePopup;
    });
    watch(showSharePopup, () => {
      if (showSharePopup.value.show) {
        showDetailsPopul.value = true;
        videoDetails.value = showSharePopup.value.videoDetails;
      } else {
        showDetailsPopul.value = false;
      }
    });

    const copy = () => {
      let clipboard = new Clipboard(".copy");
      clipboard.on("success", () => {
        showToast("复制成功，快去分享吧！"); // 释放内存

        clipboard.destroy();
      });
      clipboard.on("error", () => {
        // 不支持复制
        showToast("该浏览器不支持自动复制"); // 释放内存

        clipboard.destroy();
      });
    };

    const downImg = () => {
      showToast("请自行在本页面截图保存");
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-0603ed0a"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "shareLayer-body",
    };

    const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
        },
        null,
        -1
      )
    );

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
        },
        null,
        -1
      )
    );

    const _hoisted_4 = {
      class: "shareLayer-video",
    };
    const _hoisted_5 = {
      class: "shareLayer-video-cover",
    };
    const _hoisted_6 = {
      class: "shareLayer-video-cover-img",
    };
    const _hoisted_7 = {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "align-items": "center",
        background: "rgb(77, 77, 77)",
      },
    };

    const _hoisted_8 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "10:06", -1)
    );

    const _hoisted_9 = {
      class: "shareLayer-video-info",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("div", null, null, -1)
    );

    const _hoisted_11 = {
      class: "shareLayer-body-bottom",
    };

    const _hoisted_12 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_2,
          height: "40px",
        },
        null,
        -1
      )
    );

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_3,
        },
        null,
        -1
      )
    );

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_4,
        },
        null,
        -1
      )
    );

    const _hoisted_15 = {
      class: "shareLayer-avatar",
    };

    const _hoisted_16 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("p", null, "我要和你一起看片！", -1)
    );

    const _hoisted_17 = {
      class: "shareLayer-avatar-img",
    };
    const _hoisted_18 = {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "align-items": "center",
        background: "rgb(77, 77, 77)",
      },
    };
    const _hoisted_19 = {
      class: "pinduoduo-vd-shareLayer-btn",
    };
    const _hoisted_20 = ["data-clipboard-text"];

    return (_ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_qrcode_vue = _resolveComponent("qrcode-vue");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createBlock(
          _component_van_popup,
          {
            show: showDetailsPopul.value,
            "onUpdate:show":
              _cache[2] ||
              (_cache[2] = ($event) => (showDetailsPopul.value = $event)),
            class: "popup_coentent",
          },
          {
            default: _withCtx(() => [
              (_openBlock(),
              _createElementBlock(
                "div",
                {
                  class: "pinduoduo-vd-shareLayer-body",
                  key: videoDetails.value.id,
                },
                [
                  _createElementVNode("div", _hoisted_1, [
                    _hoisted_2,
                    _createElementVNode(
                      "p",
                      null,
                      _toDisplayString(videoDetails.value.nickname),
                      1
                    ),
                    _hoisted_3,
                    _createElementVNode("div", _hoisted_4, [
                      _createElementVNode("div", _hoisted_5, [
                        _createElementVNode("div", _hoisted_6, [
                          _createElementVNode("div", _hoisted_7, [
                            _createVNode(
                              _component_my_image,
                              {
                                url: videoDetails.value.image,
                              },
                              null,
                              8,
                              ["url"]
                            ),
                          ]),
                        ]),
                        _hoisted_8,
                      ]),
                      _createElementVNode("div", _hoisted_9, [
                        _createElementVNode(
                          "p",
                          null,
                          _toDisplayString(videoDetails.value.title),
                          1
                        ),
                        _hoisted_10,
                        _createElementVNode("div", null, [
                          _createElementVNode(
                            "span",
                            null,
                            _toDisplayString(videoDetails.value.count) +
                              "次播放",
                            1
                          ),
                          _createElementVNode(
                            "span",
                            null,
                            _toDisplayString(videoDetails.value.like_num) +
                              "次赞",
                            1
                          ),
                        ]),
                      ]),
                    ]),
                    _createElementVNode("div", _hoisted_11, [
                      _createElementVNode("div", null, [
                        _hoisted_12,
                        _hoisted_13,
                        _createElementVNode(
                          "span",
                          null,
                          _toDisplayString(qrUrl.value),
                          1
                        ),
                      ]),
                      _createElementVNode("div", null, [
                        _hoisted_14,
                        _createElementVNode("div", null, [
                          _createVNode(
                            _component_qrcode_vue,
                            {
                              value: qrUrl.value,
                              size: 65,
                              level: "H",
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]),
                      ]),
                    ]),
                    _createElementVNode("div", _hoisted_15, [
                      _hoisted_16,
                      _createElementVNode("div", _hoisted_17, [
                        _createElementVNode("div", _hoisted_18, [
                          _createVNode(
                            _component_my_image,
                            {
                              url: videoDetails.value.top_image,
                            },
                            null,
                            8,
                            ["url"]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _createElementVNode("div", _hoisted_19, [
                    _createElementVNode(
                      "div",
                      {
                        "data-clipboard-text": qrUrl.value,
                        class: "copy",
                        onClick:
                          _cache[0] ||
                          (_cache[0] = (...args) =>
                            copy && copy(...args)),
                      },
                      " 复制链接分享 ",
                      8,
                      _hoisted_20
                    ),
                    _createElementVNode(
                      "div",
                      {
                        onClick:
                          _cache[1] ||
                          (_cache[1] = (...args) =>
                            downImg && downImg(...args)),
                      },
                      "保存图片分享"
                    ),
                  ]),
                ]
              )),
            ]),
            _: 1,
          },
          8,
          ["show"]
        )
      );
    };
  },
};
</script>
