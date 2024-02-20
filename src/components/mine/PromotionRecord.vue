<script>
import {
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
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
export default {
  name: "PromotionRecord",

  setup(props) {
    const { inviteLogApi } = getGlobalProperties().$api;
    const inviteLogList = ref([]);
    let page = ref(1);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);

    const getinviteLogList = () => {
      const params = {
        page: page.value,
      };
      inviteLogApi(params, "get").then((res) => {
        if (res.code === 0) {
          inviteLogList.value = inviteLogList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    getinviteLogList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getinviteLogList();
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-f50cfd0c"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "promotion",
    };

    const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
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
            "用户名"
          ),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "item",
            },
            "推广级别"
          ),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "item",
            },
            "加入时间"
          ),
        ],
        -1
      )
    );

    const _hoisted_3 = {
      key: 0,
      class: "tbody",
    };
    const _hoisted_4 = {
      class: "item",
    };
    const _hoisted_5 = {
      class: "item",
    };
    const _hoisted_6 = {
      class: "item",
    };

    return (_ctx, _cache) => {
      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          inviteLogList.value.length
            ? (_openBlock(),
              _createElementBlock("div", _hoisted_3, [
                _createVNode(
                  _component_van_list,
                  {
                    loading: loading.value,
                    "onUpdate:loading":
                      _cache[0] ||
                      (_cache[0] = ($event) => (loading.value = $event)),
                    error: error.value,
                    "onUpdate:error":
                      _cache[1] ||
                      (_cache[1] = ($event) => (error.value = $event)),
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
                        _renderList(inviteLogList.value, (item, index) => {
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
                                  _hoisted_4,
                                  _toDisplayString(item.username),
                                  1
                                ),
                                _createElementVNode(
                                  "div",
                                  _hoisted_5,
                                  _toDisplayString(item.level),
                                  1
                                ),
                                _createElementVNode(
                                  "div",
                                  _hoisted_6,
                                  _toDisplayString(
                                    getMyDate(item.created, 2)
                                  ),
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
              })),
        ])
      );
    };
  },
};
</script>
