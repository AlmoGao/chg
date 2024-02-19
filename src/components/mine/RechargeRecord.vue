<script>
import {
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
  normalizeClass as _normalizeClass,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  createCommentVNode as _createCommentVNode,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref } from "vue";
import { getGlobalProperties, getMyDate } from "@/assets/js/utils.js";
import { Toast } from "vant";
import Clipboard from "clipboard";
export default {
  name: "RechargeRecord",

  setup(props) {
    const { payLogApi } = getGlobalProperties().$api;
    const payLogList = ref([]);
    let page = ref(1);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);
    let showDetailsPopul = ref(false);

    const getPayLogList = () => {
      const params = {
        page: page.value,
        type: 3,
      };
      payLogApi(params, "get").then((res) => {
        if (res.code === 0) {
          payLogList.value = payLogList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    getPayLogList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getPayLogList();
    };

    const toDetails = () => {
      showDetailsPopul.value = true;
    };

    const close = () => {
      showDetailsPopul.value = false;
    };

    const copy = (id) => {
      let clipboard = new Clipboard(".copy" + id);
      clipboard.on("success", () => {
        Toast("复制成功！"); // 释放内存

        clipboard.destroy();
      });
      clipboard.on("error", () => {
        // 不支持复制
        Toast("该浏览器不支持自动复制"); // 释放内存

        clipboard.destroy();
      });
    };

    const statusText = (status) => {
      let text = "";

      switch (status) {
        case 0:
          text = "待支付";
          break;

        case 1:
          text = "审核中  ";
          break;

        case 2:
          text = "已完成";
          break;

        case 3:
          text = "拒绝";
          break;

        default:
          text = "失败";
          break;
      }

      return text;
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-12ac509f"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "promotion",
    };
    const _hoisted_2 = {
      key: 0,
      class: "tbody",
    };
    const _hoisted_3 = {
      class: "user-recharg-list-row",
    };
    const _hoisted_4 = {
      class: "user-recharg-list-row-left",
    };
    const _hoisted_5 = {
      class: "user-recharg-list-title",
    };
    const _hoisted_6 = {
      class: "user-recharg-list-row-right",
    };
    const _hoisted_7 = {
      class: "user-recharg-list-title-color",
    };
    const _hoisted_8 = {
      class: "user-recharg-list-row",
    };
    const _hoisted_9 = {
      class: "user-recharg-list-row-left",
    };
    const _hoisted_10 = {
      class: "user-recharg-list-title-light",
    };
    const _hoisted_11 = {
      class: "user-recharg-list-row-right",
    };
    const _hoisted_12 = {
      class: "user-recharg-list-subtitle",
    };
    const _hoisted_13 = {
      class: "user-recharg-list-row",
    };
    const _hoisted_14 = {
      class: "user-recharg-list-row-left",
    };
    const _hoisted_15 = {
      class: "user-recharg-list-title-small",
    };
    const _hoisted_16 = {
      class: "user-recharg-list-row-right",
    };
    const _hoisted_17 = ["data-clipboard-text", "onClick"];
    const _hoisted_18 = {
      class: "details_page",
    };
    const _hoisted_19 = {
      key: 0,
      class: "head_title",
    };
    const _hoisted_20 = {
      class: "cont_body",
    };

    console.log({
      props,
      payLogList,
      loading,
      onLoad,
      error,
      finished,
      getMyDate,
      showDetailsPopul,
      close,
      toDetails,
      copy,
      statusText,
      _withScopeId,
    });

    return (_ctx, _cache) => {
      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_share_freeWatch = _resolveComponent("share-freeWatch");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "span",
            {
              class: "right_text",
              onClick:
                _cache[0] ||
                (_cache[0] = (...args) =>
                  toDetails && toDetails(...args)),
            },
            "马上赚钱"
          ),
          payLogList.value.length
            ? (_openBlock(),
              _createElementBlock("div", _hoisted_2, [
                _createVNode(
                  _component_van_list,
                  {
                    loading: loading.value,
                    "onUpdate:loading":
                      _cache[1] ||
                      (_cache[1] = ($event) => (loading.value = $event)),
                    error: error.value,
                    "onUpdate:error":
                      _cache[2] ||
                      (_cache[2] = ($event) => (error.value = $event)),
                    finished: finished.value,
                    offset: 20,
                    "error-text": "请求失败，点击重新加载",
                    "finished-text": "-我也是有底线的-",
                    "loading-text": "正在获取数据...",
                    onLoad: onLoad,
                  },
                  {
                    default: _withCtx(() => [
                      (_openBlock(true),
                      _createElementBlock(
                        _Fragment,
                        null,
                        _renderList(payLogList.value, (item, index) => {
                          return (
                            _openBlock(),
                            _createElementBlock(
                              "div",
                              {
                                class: "user-recharg-list-item",
                                key: index,
                              },
                              [
                                _createElementVNode("div", _hoisted_3, [
                                  _createElementVNode("div", _hoisted_4, [
                                    _createElementVNode(
                                      "div",
                                      _hoisted_5,
                                      _toDisplayString(item.channel_name),
                                      1
                                    ),
                                  ]),
                                  _createElementVNode("div", _hoisted_6, [
                                    _createElementVNode(
                                      "div",
                                      _hoisted_7,
                                      _toDisplayString(
                                        statusText(item.status)
                                      ),
                                      1
                                    ),
                                  ]),
                                ]),
                                _createElementVNode("div", _hoisted_8, [
                                  _createElementVNode("div", _hoisted_9, [
                                    _createElementVNode(
                                      "div",
                                      _hoisted_10,
                                      " 订单编号：" +
                                        _toDisplayString(item.bill_no),
                                      1
                                    ),
                                  ]),
                                  _createElementVNode("div", _hoisted_11, [
                                    _createElementVNode(
                                      "div",
                                      _hoisted_12,
                                      "¥" + _toDisplayString(item.money),
                                      1
                                    ),
                                  ]),
                                ]),
                                _createElementVNode("div", _hoisted_13, [
                                  _createElementVNode("div", _hoisted_14, [
                                    _createElementVNode(
                                      "div",
                                      _hoisted_15,
                                      _toDisplayString(
                                        getMyDate(item.created)
                                      ),
                                      1
                                    ),
                                  ]),
                                  _createElementVNode("div", _hoisted_16, [
                                    _createElementVNode(
                                      "div",
                                      {
                                        class: _normalizeClass([
                                          "user-recharg-list-item-btn",
                                          "copy" + item.id,
                                        ]),
                                        "data-clipboard-text": item.bill_no,
                                        onClick: () => copy(item.id),
                                      },
                                      " 复制编号 ",
                                      10,
                                      _hoisted_17
                                    ),
                                  ]),
                                ]),
                              ]
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["loading", "error", "finished", "onLoad"]
                ),
              ]))
            : (_openBlock(),
              _createBlock(_component_no_data, {
                key: 1,
              })),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[3] ||
                (_cache[3] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_18, [
                  _ctx.showHeader
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_19, [
                        _createVNode(
                          _component_van_icon,
                          {
                            size: "22",
                            name: "arrow-left",
                            onClick: close.value,
                          },
                          null,
                          8,
                          ["onClick"]
                        ),
                      ]))
                    : _createCommentVNode("", true),
                  _createElementVNode("div", _hoisted_20, [
                    _createVNode(
                      _component_share_freeWatch,
                      {
                        onClose: close.value,
                      },
                      null,
                      8,
                      ["onClose"]
                    ),
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
