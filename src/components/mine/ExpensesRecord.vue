<script>
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  createTextVNode as _createTextVNode,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref } from "vue";
import { getGlobalProperties, getMyDate } from "@/assets/js/utils.js";
export default {
  name: "ExpensesRecord",

  setup(props) {
    const { payLogApi } = getGlobalProperties().$api;
    const payLogList = ref([]);
    let page = ref(1);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);
    const showPopover = ref(false);
    let showDetailsPopul = ref(false);
    let typeText = ref("全部明细");
    let type = ref("");

    const getPayLogList = () => {
      const params = {
        page: page.value,
        type: type.value,
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

    const search = () => {
      showPopover.value = true;
    }; // 通过 actions 属性来定义菜单选项

    const actions = [
      {
        text: "全部明细",
        value: "",
      },
      {
        text: "收入",
        value: 1,
      },
      {
        text: "支出",
        value: 2,
      },
    ];

    const onSelect = (action) => {
      typeText.value = action.text;
      type.value = action.value;
      page.value = 1;
      payLogList.value = [];
      getPayLogList();
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

    console.log({
      props,
      payLogList,
      loading,
      onLoad,
      error,
      finished,
      getMyDate,
      actions,
      onSelect,
      showPopover,
      typeText,
      search,
      showDetailsPopul,
      close,
      toDetails,
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-12f3b031"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "promotion",
    };
    const _hoisted_2 = {
      class: "user-income-expenses-filter-inner",
    };
    const _hoisted_3 = {
      class: "user-income-expenses-filter-value",
    };

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "header flex",
        },
        [
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "item",
            },
            "时间"
          ),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "item",
            },
            "明细"
          ),
        ],
        -1
      )
    );

    const _hoisted_5 = {
      key: 0,
      class: "tbody",
    };
    const _hoisted_6 = {
      class: "item",
    };
    const _hoisted_7 = {
      class: "item",
    };
    const _hoisted_8 = {
      class: "details_page",
    };
    const _hoisted_9 = {
      key: 0,
      class: "head_title",
    };
    const _hoisted_10 = {
      class: "",
    };
    return (_ctx, _cache) => {
      const _component_van_popover = _resolveComponent("van-popover");

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
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode(
              "div",
              {
                class: "user-income-expenses-filter-key",
                onClick:
                  _cache[1] ||
                  (_cache[1] = (...args) =>
                    search && search(...args)),
              },
              "筛选"
            ),
            _createElementVNode("div", _hoisted_3, [
              _createVNode(
                _component_van_popover,
                {
                  show: showPopover.value,
                  "onUpdate:show":
                    _cache[2] ||
                    (_cache[2] = ($event) => (showPopover.value = $event)),
                  actions: actions.value,
                  theme: "dark",
                  placement: "bottom-end",
                  onSelect: onSelect,
                },
                {
                  reference: _withCtx(() => [
                    _createTextVNode(_toDisplayString(typeText.value), 1),
                  ]),
                  _: 1,
                },
                8,
                ["show", "actions", "onSelect"]
              ),
            ]),
          ]),
          _hoisted_4,
          payLogList.value.length
            ? (_openBlock(),
              _createElementBlock("div", _hoisted_5, [
                _createVNode(
                  _component_van_list,
                  {
                    loading: loading.value,
                    "onUpdate:loading":
                      _cache[3] ||
                      (_cache[3] = ($event) => (loading.value = $event)),
                    error: error.value,
                    "onUpdate:error":
                      _cache[4] ||
                      (_cache[4] = ($event) => (error.value = $event)),
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
                                class: "flex",
                                key: index,
                              },
                              [
                                _createElementVNode(
                                  "div",
                                  _hoisted_6,
                                  _toDisplayString(
                                    getMyDate(item.created)
                                  ),
                                  1
                                ),
                                _createElementVNode(
                                  "div",
                                  _hoisted_7,
                                  _toDisplayString(item.remark),
                                  1
                                ),
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
                color: "#ffffff",
              })),
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
                _createElementVNode("div", _hoisted_8, [
                  _ctx.showHeader
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_9, [
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
                      ]))
                    : _createCommentVNode("", true),
                  _createElementVNode("div", _hoisted_10, [
                    _createVNode(
                      _component_share_freeWatch,
                      {
                        onClose: close,
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
