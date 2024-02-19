<script>
import {
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  name: "OnlineService",

  setup(props) {
    const showDetailsPopul = ref(false);
    const detailsTitle = ref("");
    const content = ref("");
    const list = ref([
      {
        title: "如何获得赏银？",
        content:
          "在【我的】-【钱包】-【充值赏银】选择需要充值赏银的数量，在弹出的支付页面选择支付方式后支付后即可获得赏银。",
      },
      {
        title: "如何推广？",
        content:
          "在「我的」-「分享推广」中,「保存二维码图片」,或「复制链接」,分享给好友。新用户下载安装APP后,即可绑定推送关系,用户的全部消费,您都可以获得返利,最高比例可返 30%。",
      },
      {
        title: "怎样才算邀请成功？",
        content:
          "发送推广链接给其他新用户，用户第一次安装并打开app后算 邀请成功，或在个人中心输入您的推广码。",
      },
      {
        title: "为什么推广链接别人打不开？",
        content:
          "请勿使用微信或者QQ等第三方内置浏览器打开，因为包含 色情内容导致被屏蔽，推荐使用自带浏览器或UC等浏览器打开。",
      },
    ]);

    const toDetails = (item) => {
      detailsTitle.value = item.titlex;
      content.value = item.content;
      showDetailsPopul.value = true;
    };

    const kefuUrl = ref("");

    const toKefu = () => {
      // window.open(kefuUrl.value);
      location.href = kefuUrl.value;
    };

    const { customerApi } = getGlobalProperties().$api;

    const getCustomer = () => {
      customerApi("", "get").then((res) => {
        if (res.code === 0) {
          kefuUrl.value = res.data.customer_service;
        }
      });
    };

    getCustomer();

    const close = () => {
      showDetailsPopul.value = false;
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-44a444c4"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "onlineService",
    };
    const _hoisted_2 = {
      class: "onlinekefu-questionItem",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("p", null, "热点问题", -1)
    );

    const _hoisted_4 = ["onClick"];
    const _hoisted_5 = {
      class: "onlinekefu-btn-box",
    };
    const _hoisted_6 = {
      class: "details_page",
    };
    const _hoisted_7 = {
      class: "head_title",
    };

    const _hoisted_8 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "问题详情",
        -1
      )
    );

    const _hoisted_9 = {
      class: "cont_body",
    };
    const _hoisted_10 = {
      class: "questionDetail",
    };

    console.log({
      props,
      showDetailsPopul,
      toDetails,
      close,
      detailsTitle,
      content,
      list,
      toKefu,
    });

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _hoisted_3,
            (_openBlock(true),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(list.value, (item, index) => {
                return (
                  _openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      key: index,
                      class: "onlinekefu-questionItem-item",
                      onClick: () => toDetails(item),
                    },
                    _toDisplayString(item.title) + " >> ",
                    9,
                    _hoisted_4
                  )
                );
              }),
              128
            )),
          ]),
          _createElementVNode("div", _hoisted_5, [
            _createElementVNode(
              "div",
              {
                class: "onlinekefu-btn",
                onClick:
                  _cache[0] ||
                  (_cache[0] = (...args) =>
                    toKefu && toKefu(...args)),
              },
              "在线客服"
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[1] ||
                (_cache[1] = ($event) => (showDetailsPopul.value = $event)),
              overlay: false,
              position: "right",
              class: "popup_coentent",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_6, [
                  _createElementVNode("div", _hoisted_7, [
                    _createVNode(
                      _component_van_icon,
                      {
                        size: "22",
                        name: "arrow-left",
                        onClick: close,
                      },
                      null,
                      8,
                      ["onClick"]
                    ),
                    _hoisted_8,
                  ]),
                  _createElementVNode("div", _hoisted_9, [
                    _createElementVNode("div", _hoisted_10, [
                      _createElementVNode(
                        "p",
                        null,
                        _toDisplayString(detailsTitle.value),
                        1
                      ),
                      _createElementVNode(
                        "p",
                        null,
                        _toDisplayString(content.value),
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
        ])
      );
    };
  },
};
</script>
