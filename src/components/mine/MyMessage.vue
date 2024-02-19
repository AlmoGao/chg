<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  createCommentVNode as _createCommentVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { getGlobalProperties, getMyDate } from "@/assets/js/utils.js";
import { ref } from "vue";
export default {
  name: "MyMessage",

  setup(props) {
    const active = ref(0);
    const messageList = ref([]);
    const noData = ref(false);
    let page = ref(1);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);
    const { messageApi } = getGlobalProperties().$api;

    const getMessageList = () => {
      loading.value = true;
      const params = {
        type: active.value,
        page: page.value,
      };
      messageApi(params, "get").then((res) => {
        if (res.code === 0) {
          messageList.value = messageList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.rows.length === 0) {
            noData.value = true;
            finished.value = true;
          }
        } else {
          noData.value = true;
        }
      });
    };

    const change = () => {
      noData.value = false;
      finished.value = false;
      page.value = 0;
      messageList.value = [];
      onLoad();
    };

    const onLoad = () => {
      page.value++;
      getMessageList();
    };

    getMessageList();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-4f41c117"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "myMessage",
    };
    const _hoisted_2 = {
      class: "message_list",
    };
    const _hoisted_3 = {
      class: "content",
    };
    const _hoisted_4 = {
      class: "time",
    };
    const _hoisted_5 = {
      key: 0,
      class: "no-data",
    };
    const _hoisted_6 = {
      class: "message_list",
    };
    const _hoisted_7 = {
      class: "content",
    };
    const _hoisted_8 = {
      class: "time",
    };
    const _hoisted_9 = {
      key: 0,
      class: "no-data",
    };
    const _hoisted_10 = {
      class: "message_list",
    };
    const _hoisted_11 = {
      class: "content",
    };
    const _hoisted_12 = {
      class: "time",
    };
    const _hoisted_13 = {
      key: 0,
      class: "no-data",
    };
    const _hoisted_14 = {
      class: "message_list",
    };
    const _hoisted_15 = {
      class: "content",
    };
    const _hoisted_16 = {
      class: "time",
    };
    const _hoisted_17 = {
      key: 0,
      class: "no-data",
    };
    console.log({
      props,
      active,
      messageList,
      getMyDate,
      getMessageList,
      noData,
      loading,
      onLoad,
      error,
      finished,
      change,
      _withScopeId,
    });

    return (_ctx, _cache) => {
      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_van_tabs = _resolveComponent("van-tabs");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createVNode(
            _component_van_tabs,
            {
              active: active.value,
              "onUpdate:active":
                _cache[8] || (_cache[8] = ($event) => (active.value = $event)),
              "line-height": "0",
              swipeable: "",
              animated: "",
              onChange: change,
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
                    title: "获赞",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_2, [
                        _createVNode(
                          _component_van_list,
                          {
                            loading: loading.value,
                            "onUpdate:loading":
                              _cache[0] ||
                              (_cache[0] = ($event) =>
                                (loading.value = $event)),
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
                                _renderList(messageList.value, (item) => {
                                  return (
                                    _openBlock(),
                                    _createElementBlock(
                                      "div",
                                      {
                                        class: "message_item",
                                        key: item.id,
                                      },
                                      [
                                        _createElementVNode(
                                          "p",
                                          _hoisted_3,
                                          _toDisplayString(item.content),
                                          1
                                        ),
                                        _createElementVNode(
                                          "p",
                                          _hoisted_4,
                                          _toDisplayString(
                                            getMyDate(item.created)
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
                      ]),
                      noData.value && messageList.value.length === 0
                        ? (_openBlock(),
                          _createElementBlock("div", _hoisted_5, [
                            _createVNode(_component_no_data, {
                              color: "#ffffff",
                            }),
                          ]))
                        : _createCommentVNode("", true),
                    ]),
                    _: 1,
                  }
                ),
                _createVNode(
                  _component_van_tab,
                  {
                    title: "关注",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_6, [
                        _createVNode(
                          _component_van_list,
                          {
                            loading: loading.value,
                            "onUpdate:loading":
                              _cache[2] ||
                              (_cache[2] = ($event) =>
                                (loading.value = $event)),
                            error: error.value,
                            "onUpdate:error":
                              _cache[3] ||
                              (_cache[3] = ($event) => (error.value = $event)),
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
                                _renderList(messageList.value, (item) => {
                                  return (
                                    _openBlock(),
                                    _createElementBlock(
                                      "div",
                                      {
                                        class: "message_item",
                                        key: item.id,
                                      },
                                      [
                                        _createElementVNode(
                                          "p",
                                          _hoisted_7,
                                          _toDisplayString(item.content),
                                          1
                                        ),
                                        _createElementVNode(
                                          "p",
                                          _hoisted_8,
                                          _toDisplayString(
                                            getMyDate(item.created)
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
                      ]),
                      noData.value && messageList.value.length === 0
                        ? (_openBlock(),
                          _createElementBlock("div", _hoisted_9, [
                            _createVNode(_component_no_data, {
                              color: "#ffffff",
                            }),
                          ]))
                        : _createCommentVNode("", true),
                    ]),
                    _: 1,
                  }
                ),
                _createVNode(
                  _component_van_tab,
                  {
                    title: "系统",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_10, [
                        _createVNode(
                          _component_van_list,
                          {
                            loading: loading.value,
                            "onUpdate:loading":
                              _cache[4] ||
                              (_cache[4] = ($event) =>
                                (loading.value = $event)),
                            error: error.value,
                            "onUpdate:error":
                              _cache[5] ||
                              (_cache[5] = ($event) => (error.value = $event)),
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
                                _renderList(messageList.value, (item) => {
                                  return (
                                    _openBlock(),
                                    _createElementBlock(
                                      "div",
                                      {
                                        class: "message_item",
                                        key: item.id,
                                      },
                                      [
                                        _createElementVNode(
                                          "p",
                                          _hoisted_11,
                                          _toDisplayString(item.content),
                                          1
                                        ),
                                        _createElementVNode(
                                          "p",
                                          _hoisted_12,
                                          _toDisplayString(
                                            getMyDate(item.created)
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
                      ]),
                      noData.value && messageList.value.length === 0
                        ? (_openBlock(),
                          _createElementBlock("div", _hoisted_13, [
                            _createVNode(_component_no_data, {
                              color: "#ffffff",
                            }),
                          ]))
                        : _createCommentVNode("", true),
                    ]),
                    _: 1,
                  }
                ),
                _createVNode(
                  _component_van_tab,
                  {
                    title: "评论",
                  },
                  {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_14, [
                        _createVNode(
                          _component_van_list,
                          {
                            loading: loading.value,
                            "onUpdate:loading":
                              _cache[6] ||
                              (_cache[6] = ($event) =>
                                (loading.value = $event)),
                            error: error.value,
                            "onUpdate:error":
                              _cache[7] ||
                              (_cache[7] = ($event) => (error.value = $event)),
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
                                _renderList(messageList.value, (item) => {
                                  return (
                                    _openBlock(),
                                    _createElementBlock(
                                      "div",
                                      {
                                        class: "message_item",
                                        key: item.id,
                                      },
                                      [
                                        _createElementVNode(
                                          "p",
                                          _hoisted_15,
                                          _toDisplayString(item.content),
                                          1
                                        ),
                                        _createElementVNode(
                                          "p",
                                          _hoisted_16,
                                          _toDisplayString(
                                            getMyDate(item.created)
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
                      ]),
                      noData.value && messageList.value.length === 0
                        ? (_openBlock(),
                          _createElementBlock("div", _hoisted_17, [
                            _createVNode(_component_no_data, {
                              color: "#ffffff",
                            }),
                          ]))
                        : _createCommentVNode("", true),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            },
            8,
            ["active", "onChange"]
          ),
        ])
      );
    };
  },
};
</script>
