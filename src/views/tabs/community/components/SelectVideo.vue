<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  normalizeClass as _normalizeClass,
  toDisplayString as _toDisplayString,
  withCtx as _withCtx,
  createCommentVNode as _createCommentVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
export default {
  props: ["type"],

  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-917e0bb6"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "select_video",
    };
    const _hoisted_2 = {
      class: "head_title",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "选择视频",
        -1
      )
    );

    const _hoisted_4 = {
      class: "seach_input_box",
    };
    const _hoisted_5 = {
      class: "video_list",
    };
    const _hoisted_6 = ["onClick"];
    const _hoisted_7 = {
      class: "info-videoCover",
    };
    const _hoisted_8 = {
      class: "info-videoCover-img",
    };
    const _hoisted_9 = {
      class: "info-videoInfo",
    };
    const _hoisted_10 = {
      key: 0,
      class: "noData",
    };
    const _hoisted_11 = {
      class: "select_fot",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_icon,
              {
                size: "22",
                name: "arrow-left",
                onClick: $setup.close,
              },
              null,
              8,
              ["onClick"]
            ),
            _hoisted_3,
            _createElementVNode(
              "div",
              {
                class: "search",
                onClick:
                  _cache[0] ||
                  (_cache[0] = (...args) =>
                    $setup.reach && $setup.reach(...args)),
              },
              "搜索"
            ),
          ]),
          _createElementVNode("div", _hoisted_4, [
            _withDirectives(
              _createElementVNode(
                "input",
                {
                  "onUpdate:modelValue":
                    _cache[1] ||
                    (_cache[1] = ($event) => ($setup.video_title = $event)),
                  placeholder: "输入标题名称搜索",
                },
                null,
                512
              ),
              [[_vModelText, $setup.video_title]]
            ),
          ]),
          _createElementVNode("div", _hoisted_5, [
            _createVNode(
              _component_van_list,
              {
                loading: $setup.loading,
                "onUpdate:loading":
                  _cache[2] ||
                  (_cache[2] = ($event) => ($setup.loading = $event)),
                error: $setup.error,
                "onUpdate:error":
                  _cache[3] ||
                  (_cache[3] = ($event) => ($setup.error = $event)),
                finished: $setup.finished,
                offset: 20,
                "error-text": "请求失败，点击重新加载",
                "finished-text": "-我也是有底线的-",
                "loading-text": "正在获取数据...",
                onLoad: $setup.onLoad,
              },
              {
                default: _withCtx(() => [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList($setup.videoList, (item) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            key: item.id,
                            onClick: () => $setup.selectVideo(item),
                            class: "info-videoItem",
                          },
                          [
                            _createElementVNode(
                              "div",
                              {
                                class: _normalizeClass([
                                  "select_box",
                                  item.isSelect ? "select" : "",
                                ]),
                              },
                              null,
                              2
                            ),
                            _createElementVNode("div", _hoisted_7, [
                              _createElementVNode("div", _hoisted_8, [
                                _createElementVNode("div", null, [
                                  _createVNode(
                                    _component_my_image,
                                    {
                                      url: item.image,
                                    },
                                    null,
                                    8,
                                    ["url"]
                                  ),
                                ]),
                              ]),
                              _createElementVNode(
                                "span",
                                null,
                                _toDisplayString(item.times),
                                1
                              ),
                            ]),
                            _createElementVNode("div", _hoisted_9, [
                              _createElementVNode(
                                "p",
                                null,
                                _toDisplayString(item.title),
                                1
                              ),
                              _createElementVNode("div", null, [
                                _createElementVNode(
                                  "span",
                                  null,
                                  _toDisplayString(item.count) + "次播放",
                                  1
                                ),
                              ]),
                            ]),
                          ],
                          8,
                          _hoisted_6
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
            $setup.videoList.length === 0
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_10, [
                  _createVNode(_component_no_data, {
                    text: "暂无数据",
                    color: "#999",
                  }),
                ]))
              : _createCommentVNode("", true),
          ]),
          _createElementVNode("div", _hoisted_11, [
            _createElementVNode(
              "span",
              null,
              "已选择" +
                _toDisplayString($setup.selectVideoList.length) +
                "个视频",
              1
            ),
            _createElementVNode(
              "div",
              {
                class: "undefined",
                onClick:
                  _cache[4] ||
                  (_cache[4] = (...args) =>
                    $setup.setVideo && $setup.setVideo(...args)),
              },
              "完成"
            ),
          ]),
        ])
      );
    };
  },
};
</script>
