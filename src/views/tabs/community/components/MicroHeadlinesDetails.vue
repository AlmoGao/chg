<script>
import {
  resolveComponent as _resolveComponent,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  withModifiers as _withModifiers,
  normalizeStyle as _normalizeStyle,
  createElementBlock as _createElementBlock,
  renderList as _renderList,
  Fragment as _Fragment,
  resolveDirective as _resolveDirective,
  withDirectives as _withDirectives,
  createTextVNode as _createTextVNode,
  vModelText as _vModelText,
  vShow as _vShow,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/icon_see_num.png";
import _imports_1 from "@/assets/images/community/icon_like_tag.png";
import _imports_4 from "@/assets/images/mine/video_detail_send.png";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  props: ["id"],

  setup(props) {
    const store = useStore();
    const { headLineDetailApi } = getGlobalProperties().$api;
    let detailData = ref("");
    const showLoading = ref(false);

    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });

    const getHeadLineDetail = () => {
      showLoading.value = true;
      headLineDetailApi(
        {
          head_lines_id: props.id,
        },
        "get"
      ).then((res) => {
        showLoading.value = false;

        if (res.code === 0) {
          res.data.isFocus = isFocus.value.includes(res.data.user_id + "");

          if (res.data.user_id === store.state.userInfo.uid) {
            res.data.isFocus = "null";
          }

          detailData.value = res.data;
        }
      });
    };

    getHeadLineDetail();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-2a993d4a"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      key: 1,
      class: "item",
    };
    const _hoisted_2 = {
      class: "left_img_box",
    };
    const _hoisted_3 = {
      class: "right_text",
    };
    const _hoisted_4 = {
      class: "left",
    };
    const _hoisted_5 = {
      class: "right",
    };
    const _hoisted_6 = {
      class: "cont_details",
    };
    const _hoisted_7 = {
      class: "cont_text",
    };
    const _hoisted_8 = {
      key: 0,
      class: "details_img",
    };
    const _hoisted_9 = {
      class: "bottom",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_27 = {
      class: "video-detail-input",
    };
    const _hoisted_28 = {
      class: "input-box",
    };

    const _hoisted_29 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_4,
        },
        null,
        -1
      )
    );
    return (ctx, _cache, $props, $setup) => {
      const _component_Loading = _resolveComponent("Loading");

      const _component_my_image = _resolveComponent("my-image");

      const _directive_viewer = _resolveDirective("viewer");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            $setup.showLoading
              ? (_openBlock(),
                _createBlock(_component_Loading, {
                  key: 0,
                }))
              : _createCommentVNode("", true),
            $setup.detailData
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_1, [
                  _createElementVNode(
                    "div",
                    {
                      class: "user_box",
                      onClick:
                        _cache[1] ||
                        (_cache[1] = () =>
                          $setup.toAutorDetails($setup.detailData)),
                    },
                    [
                      _createElementVNode("div", _hoisted_2, [
                        _createVNode(
                          _component_my_image,
                          {
                            url: $setup.detailData.user_image,
                          },
                          null,
                          8,
                          ["url"]
                        ),
                      ]),
                      _createElementVNode("div", _hoisted_3, [
                        _createElementVNode("div", _hoisted_4, [
                          _createElementVNode(
                            "p",
                            null,
                            _toDisplayString($setup.detailData.nickname),
                            1
                          ),
                          _createElementVNode(
                            "p",
                            null,
                            _toDisplayString(
                              $setup.getMyDate($setup.detailData.created, 2)
                            ),
                            1
                          ),
                        ]),
                        _createElementVNode("div", _hoisted_5, [
                          $setup.detailData.isFocus !== "null"
                            ? (_openBlock(),
                              _createElementBlock(
                                "span",
                                {
                                  key: 0,
                                  onClick:
                                    _cache[0] ||
                                    (_cache[0] = _withModifiers(
                                      () => $setup.focusSave($setup.detailData),
                                      ["stop"]
                                    )),
                                  style: _normalizeStyle({
                                    color: $setup.detailData.isFocus
                                      ? "#999"
                                      : "#fd5c18",
                                  }),
                                },
                                _toDisplayString(
                                  $setup.detailData.isFocus ? "已关注" : "关注"
                                ),
                                5
                              ))
                            : _createCommentVNode("", true),
                        ]),
                      ]),
                    ]
                  ),
                  _createElementVNode("div", _hoisted_6, [
                    _createElementVNode(
                      "p",
                      _hoisted_7,
                      _toDisplayString($setup.detailData.content),
                      1
                    ),
                    $setup.detailData.images.length
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_8, [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList($setup.detailData.images, (item) => {
                              return _withDirectives(
                                (_openBlock(),
                                _createElementBlock(
                                  "div",
                                  {
                                    class: "details_img_1",
                                    key: item,
                                  },
                                  [
                                    _createVNode(
                                      _component_my_image,
                                      {
                                        url: item,
                                      },
                                      null,
                                      8,
                                      ["url"]
                                    ),
                                  ]
                                )),
                                [[_directive_viewer]]
                              );
                            }),
                            128
                          )),
                        ]))
                      : _createCommentVNode("", true),
                    _createElementVNode("div", _hoisted_9, [
                      _createElementVNode("div", null, [
                        _hoisted_10,
                        _createTextVNode(
                          " " + _toDisplayString($setup.detailData.count),
                          1
                        ),
                      ]),
                      _createElementVNode(
                        "div",
                        {
                          onClick:
                            _cache[2] ||
                            (_cache[2] = () =>
                              $setup.getHeadLineCommentLike($setup.detailData)),
                        },
                        [
                          _hoisted_11,
                          _createTextVNode(
                            " " + _toDisplayString($setup.detailData.like_num),
                            1
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]))
              : _createCommentVNode("", true),
            _createCommentVNode("", true),
            _withDirectives(
              _createElementVNode(
                "div",
                _hoisted_27,
                [
                  _createElementVNode("div", _hoisted_28, [
                    _hoisted_29,
                    _withDirectives(
                      _createElementVNode(
                        "input",
                        {
                          id: "inputId",
                          type: "text",
                          "onUpdate:modelValue":
                            _cache[5] ||
                            (_cache[5] = ($event) => ($setup.message = $event)),
                          placeholder: "优质评论优先展示",
                        },
                        null,
                        512
                      ),
                      [[_vModelText, $setup.message]]
                    ),
                  ]),
                  _createElementVNode(
                    "span",
                    {
                      class: "input-sub",
                      onClick:
                        _cache[6] ||
                        (_cache[6] = (...args) =>
                          $setup.send && $setup.send(...args)),
                    },
                    "确定"
                  ),
                ],
                512
              ),
              [[_vShow, $setup.showInput]]
            ),
          ],
          64
        )
      );
    };
  },
};
</script>
