<script>
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  createTextVNode as _createTextVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withModifiers as _withModifiers,
  createCommentVNode as _createCommentVNode,
  createBlock as _createBlock,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/icon_add_work.png";
import _imports_1 from "@/assets/images/community/icon_add_50.png";
import _imports_2 from "@/assets/images/community/icon_replay_fv_delete.png";

import SelectVideo from "./SelectVideo.vue";
export default {
  props: ["id"],
  components: {
    SelectVideo,
  },

  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-c43f2caa"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "recommendVideo",
    };
    const _hoisted_2 = {
      class: "full-column",
    };
    const _hoisted_3 = {
      class: "head_content",
    };

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "titles",
        },
        "可在作品库或从平台上传,最多添加10个",
        -1
      )
    );

    const _hoisted_5 = {
      class: "btn_list",
    };

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_7 = [_hoisted_6];

    const _hoisted_8 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_9 = [_hoisted_8];
    const _hoisted_10 = {
      class: "add_num",
    };

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "已添加", -1)
    );

    const _hoisted_12 = {
      class: "video_box",
    };
    const _hoisted_13 = ["onClick"];
    const _hoisted_14 = {
      class: "info-videoCover",
    };
    const _hoisted_15 = {
      class: "info-videoCover-img",
    };
    const _hoisted_16 = {
      class: "info-videoInfo",
    };
    const _hoisted_17 = ["onClick"];

    const _hoisted_18 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_2,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_19 = [_hoisted_18];
    const _hoisted_20 = {
      key: 0,
      class: "noData",
    };
    const _hoisted_21 = {
      class: "details_page_app",
    };
    const _hoisted_22 = {
      class: "cont_body_app",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_no_data = _resolveComponent("no-data");

      const _component_select_video = _resolveComponent("select-video");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode("div", _hoisted_3, [
              _hoisted_4,
              _createElementVNode("div", _hoisted_5, [
                _createElementVNode(
                  "div",
                  {
                    class: "work_btn",
                    onClick:
                      _cache[0] || (_cache[0] = () => $setup.showDetails(1)),
                  },
                  _hoisted_7
                ),
                _createElementVNode(
                  "div",
                  {
                    class: "pt_btn",
                    onClick:
                      _cache[1] || (_cache[1] = () => $setup.showDetails(2)),
                  },
                  _hoisted_9
                ),
              ]),
              _createElementVNode("div", _hoisted_10, [
                _hoisted_11,
                _createTextVNode(
                  " " +
                    _toDisplayString($setup.recommendVideoList.length) +
                    "个 ",
                  1
                ),
              ]),
            ]),
            _createElementVNode("div", _hoisted_12, [
              (_openBlock(true),
              _createElementBlock(
                _Fragment,
                null,
                _renderList($setup.recommendVideoList, (item, index) => {
                  return (
                    _openBlock(),
                    _createElementBlock(
                      "div",
                      {
                        key: index + "-" + item.id,
                        class: "info-videoItem",
                        onClick: () => $setup.videoPlay(item),
                      },
                      [
                        _createElementVNode("div", _hoisted_14, [
                          _createElementVNode("div", _hoisted_15, [
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
                        _createElementVNode("div", _hoisted_16, [
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
                        _createElementVNode(
                          "div",
                          {
                            class: "delete",
                            onClick: _withModifiers(
                              () => $setup.deleteF(item),
                              ["stop"]
                            ),
                          },
                          _hoisted_19,
                          8,
                          _hoisted_17
                        ),
                      ],
                      8,
                      _hoisted_13
                    )
                  );
                }),
                128
              )),
              $setup.recommendVideoList.length === 0
                ? (_openBlock(),
                  _createElementBlock("div", _hoisted_20, [
                    _createVNode(_component_no_data, {
                      text: "快去选择作品吧",
                      color: "#999",
                    }),
                  ]))
                : _createCommentVNode("", true),
            ]),
            _createElementVNode(
              "div",
              {
                class: "sure_btn",
                onClick:
                  _cache[2] ||
                  (_cache[2] = (...args) =>
                    $setup.submit && $setup.submit(...args)),
              },
              "确定"
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: $setup.showDetailsPopul,
              "onUpdate:show":
                _cache[3] ||
                (_cache[3] = ($event) => ($setup.showDetailsPopul = $event)),
              class: "popup_coentent",
              overlay: false,
              teleport: "#app",
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_21, [
                  _createElementVNode("div", _hoisted_22, [
                    (_openBlock(),
                    _createBlock(
                      _component_select_video,
                      {
                        key: $setup.key,
                        type: $setup.type,
                        onClose: $setup.close,
                      },
                      null,
                      8,
                      ["type", "onClose"]
                    )),
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
