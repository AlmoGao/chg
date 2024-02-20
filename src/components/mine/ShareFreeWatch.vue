<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  createTextVNode as _createTextVNode,
  openBlock as _openBlock,
  createBlock as _createBlock,
  withCtx as _withCtx,
  createStaticVNode as _createStaticVNode,
  Fragment as _Fragment,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/shareHead.png";

import { ref, computed } from "vue";
import QrcodeVue from "qrcode.vue";
import Clipboard from "clipboard";
import { showToast } from "vant";
import { useStore } from "vuex";
export default {
  name: "ShareFreeWatch",
  components: {
    QrcodeVue,
  },

  setup(props, { emit }) {
    const showDetailsPopul = ref(false);
    const store = useStore();

    const close = (type) => {
      if (type === 1) {
        emit("close");

        if (store.state.showLoginPopup.type === "ShareFreeWatch") {
          store.commit("SET_LOGIN_POPUP", {
            show: false,
            type: "ShareFreeWatch",
          });
        }
      } else if (type === 2) {
        showDetailsPopul.value = false;
      }
    };

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
      showToast("请自行截图分享二维码！");
    };

    const toDetails = () => {
      showDetailsPopul.value = true;
    };

    const userInfo = computed(() => {
      return store.state.userInfo;
    });
    const qrUrl = computed(() => {
      return store.state.userInfo.share_url;
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-6c3ba3e8"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "shareFreeWatch",
    };
    const _hoisted_2 = {
      class: "head_titles_2",
    };
    const _hoisted_3 = {
      class: "cont webkit-overflow-scrolling-touch",
    };
    const _hoisted_4 = {
      class: "img_text",
    };

    const _hoisted_5 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          class: "shareHead",
          src: _imports_0,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_6 = {
      class: "rwm_box",
    };

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "user-share-qrcode-prompt",
        },
        " *好友也可在个人中心直接填写你的邀请码 ",
        -1
      )
    );

    const _hoisted_8 = {
      class: "user-share-btn-box",
    };
    const _hoisted_9 = ["data-clipboard-text"];

    const _hoisted_10 = /*#__PURE__*/ _createStaticVNode(
      '<div class="user-share-describe" data-v-6c3ba3e8><div class="user-share-describ-title" data-v-6c3ba3e8>推广福利</div><div class="user-share-describ-text" data-v-6c3ba3e8>邀请好友看片赚钱</div><div class="user-share-describ-title" data-v-6c3ba3e8>推广说明</div><div class="user-share-describ-text" data-v-6c3ba3e8> 问：怎样才算邀请成功？<br data-v-6c3ba3e8>答：发送推广链接给其他新用户，用户第一次安装并打开app后算 邀请成功，或在个人中心输入您的推广码。<br data-v-6c3ba3e8>问：为什么推广链接别人打不开？<br data-v-6c3ba3e8>答：请勿使用微信或者QQ等第三方内置浏览器打开，因为包含 色情内容导致被屏蔽，推荐使用自带浏览器或UC等浏览器打开。 <br data-v-6c3ba3e8> 问：如何分享无限看 <br data-v-6c3ba3e8> 答：推广邀请好友或者群发链接推广，有3个下级注册，即可领取【3天VIP】， 可无限叠加！ </div></div>',
      1
    );

    const _hoisted_11 = {
      class: "promotionRecord",
    };
    const _hoisted_12 = {
      class: "head_titles",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "推广记录",
        -1
      )
    );

    const _hoisted_14 = {
      class: "cont_body",
    };
    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_qrcode_vue = _resolveComponent("qrcode-vue");

      const _component_promotion_record = _resolveComponent("promotion-record");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            _createElementVNode("div", _hoisted_1, [
              _createElementVNode("div", _hoisted_2, [
                _createVNode(_component_van_icon, {
                  size: "22",
                  name: "arrow-left",
                  onClick:
                    _cache[0] || (_cache[0] = () => close(1)),
                }),
                _createElementVNode(
                  "span",
                  {
                    class: "title",
                    onClick:
                      _cache[1] ||
                      (_cache[1] = (...args) =>
                        toDetails && toDetails(...args)),
                  },
                  "邀请记录"
                ),
              ]),
              _createElementVNode("div", _hoisted_3, [
                _createElementVNode("div", _hoisted_4, [
                  _hoisted_5,
                  _createElementVNode("div", _hoisted_6, [
                    _createVNode(
                      _component_qrcode_vue,
                      {
                        value: qrUrl.value,
                        size: 170,
                        level: "H",
                      },
                      null,
                      8,
                      ["value"]
                    ),
                    _createElementVNode(
                      "p",
                      null,
                      "我的推广码：" +
                        _toDisplayString(userInfo.value.invite_code),
                      1
                    ),
                  ]),
                  _hoisted_7,
                ]),
                _createElementVNode("div", _hoisted_8, [
                  _createElementVNode(
                    "div",
                    {
                      class: "user-share-btn-link copy",
                      "data-clipboard-text": qrUrl.value,
                      onClick:
                        _cache[2] ||
                        (_cache[2] = (...args) =>
                          copy && copy(...args)),
                    },
                    " 复制链接分享 ",
                    8,
                    _hoisted_9
                  ),
                  _createElementVNode(
                    "div",
                    {
                      class: "user-share-btn-img",
                      onClick:
                        _cache[3] ||
                        (_cache[3] = (...args) =>
                          downImg && downImg(...args)),
                    },
                    "保存图片分享"
                  ),
                ]),
                _hoisted_10,
              ]),
            ]),
            _createVNode(
              _component_van_popup,
              {
                show: showDetailsPopul.value,
                "onUpdate:show":
                  _cache[5] ||
                  (_cache[5] = ($event) => (showDetailsPopul.value = $event)),
                class: "popup_coentent",
                overlay: false,
                position: "right",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_11, [
                    _createElementVNode("div", _hoisted_12, [
                      _createVNode(_component_van_icon, {
                        size: "22",
                        name: "arrow-left",
                        onClick:
                          _cache[4] ||
                          (_cache[4] = () => close(2)),
                      }),
                      _hoisted_13,
                    ]),
                    _createElementVNode("div", _hoisted_14, [
                      (_openBlock(),
                      _createBlock(_component_promotion_record, {
                        key: new Date().getTime(),
                      })),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
          ],
          64
        )
      );
    };
  },
};
</script>
