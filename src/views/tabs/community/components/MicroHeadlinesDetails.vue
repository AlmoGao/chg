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
  normalizeClass as _normalizeClass,
  vModelText as _vModelText,
  vShow as _vShow,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/icon_see_num.png";
import _imports_1 from "@/assets/images/community/icon_like_tag.png";
import _imports_2 from "@/assets/images/community/icon_text_like_red.png";
import _imports_3 from "@/assets/images/community/icon_message_num.png";
import _imports_4 from "@/assets/images/mine/video_detail_send.png";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { showToast } from "vant";
import { getGlobalProperties, getMyDate } from "@/assets/js/utils.js";
export default {
  props: ["id"],

  setup(props, { emit }) {
    const store = useStore();
    const { headLineDetailApi, focusSaveApi, headLineCommentLikeApi } =
      getGlobalProperties().$api;
    let detailData = ref("");
    let showInput = ref(false);
    let message = ref("");
    const showLoading = ref(false);

    const toAutorDetails = (item) => {
      if (item.isFocus === "null") return;
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "HotAuthorInfo",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });
    const fileUrl = computed(() => {
      return store.state.userInfo.top_image;
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

    const inputSend = () => {
      message.value = "";
      showInput.value = true;
    };

    const send = () => {
      showInput.value = false;
    };

    const focusSave = (item) => {
      // if (item.isFocus) {
      //   return;
      // }
      const params = {
        user_id: item.user_id,
      };
      focusSaveApi(params, "get").then((res) => {
        // showToast(res.message);
        if (res.code === 0) {
          detailData.value.isFocus = !detailData.value.isFocus;
          store.dispatch("getUserInfo");
        }
      });
    };

    const getHeadLineCommentLike = (item) => {
      headLineCommentLikeApi(
        {
          head_lines_id: item.id,
        },
        "get"
      ).then((res) => {
        showToast(res.message);

        if (res.code === 0) {
          item.like_num++; // emit("childGetList");
        }
      });
    };

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

    const _hoisted_12 = {
      key: 2,
      class: "pl_box",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "pl_title",
        },
        "评论 8",
        -1
      )
    );

    const _hoisted_14 = {
      class: "pl_top",
    };
    const _hoisted_15 = {
      class: "img_box",
    };
    const _hoisted_16 = ["onClick"];
    const _hoisted_17 = {
      class: "left_img_box",
    };

    const _hoisted_18 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "right_text",
        },
        [
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "left",
            },
            [
              /*#__PURE__*/ _createElementVNode("p", null, "烂漫笑冬瓜"),
              /*#__PURE__*/ _createElementVNode("p", null, "0粉丝"),
            ]
          ),
        ],
        -1
      )
    );

    const _hoisted_19 = {
      class: "cont_details",
    };

    const _hoisted_20 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "cont_text",
        },
        " 城市，联系方式城市，联系方式城市，联系方式城市，联系方式城市，联系方式城市，联系方式城市，联系方式城市，联系方式城市，联系方式 ",
        -1
      )
    );

    const _hoisted_21 = {
      class: "bottom",
    };

    const _hoisted_22 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("div", null, "4天前", -1)
    );

    const _hoisted_23 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          // eslint-disable-next-line
          class: /*#__PURE__*/ _normalizeClass(true ? "color" : ""),
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_2,
            alt: "",
          }),
          /*#__PURE__*/ _createTextVNode(
            " " + /*#__PURE__*/ _toDisplayString(0)
          ),
        ],
        -1
      )
    );

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_3,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_25 = /*#__PURE__*/ _createTextVNode(
      " " + /*#__PURE__*/ _toDisplayString(0)
    );

    const _hoisted_26 = [_hoisted_24, _hoisted_25];
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

    return (_ctx, _cache) => {
      const _component_Loading = _resolveComponent("Loading");

      const _component_my_image = _resolveComponent("my-image");

      const _directive_viewer = _resolveDirective("viewer");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            showLoading.value
              ? (_openBlock(),
                _createBlock(_component_Loading, {
                  key: 0,
                }))
              : _createCommentVNode("", true),
            detailData.value
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_1, [
                  _createElementVNode(
                    "div",
                    {
                      class: "user_box",
                      onClick:
                        _cache[1] ||
                        (_cache[1] = () =>
                          toAutorDetails(detailData.value)),
                    },
                    [
                      _createElementVNode("div", _hoisted_2, [
                        _createVNode(
                          _component_my_image,
                          {
                            url: detailData.value.user_image,
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
                            _toDisplayString(detailData.value.nickname),
                            1
                          ),
                          _createElementVNode(
                            "p",
                            null,
                            _toDisplayString(
                              getMyDate(detailData.value.created, 2)
                            ),
                            1
                          ),
                        ]),
                        _createElementVNode("div", _hoisted_5, [
                          detailData.value.isFocus !== "null"
                            ? (_openBlock(),
                              _createElementBlock(
                                "span",
                                {
                                  key: 0,
                                  onClick:
                                    _cache[0] ||
                                    (_cache[0] = _withModifiers(
                                      () =>
                                        focusSave(detailData.value),
                                      ["stop"]
                                    )),
                                  style: _normalizeStyle({
                                    color: detailData.value.isFocus
                                      ? "#999"
                                      : "#fd5c18",
                                  }),
                                },
                                _toDisplayString(
                                  detailData.value.isFocus ? "已关注" : "关注"
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
                      _toDisplayString(detailData.value.content),
                      1
                    ),
                    detailData.value.images.length
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_8, [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList(detailData.value.images, (item) => {
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
                          " " + _toDisplayString(detailData.value.count),
                          1
                        ),
                      ]),
                      _createElementVNode(
                        "div",
                        {
                          onClick:
                            _cache[2] ||
                            (_cache[2] = () =>
                              getHeadLineCommentLike(detailData.value)),
                        },
                        [
                          _hoisted_11,
                          _createTextVNode(
                            " " + _toDisplayString(detailData.value.like_num),
                            1
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]))
              : _createCommentVNode("", true),
              // eslint-disable-next-line
            false
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_12, [
                  _hoisted_13,
                  _createElementVNode("div", _hoisted_14, [
                    _createElementVNode("div", _hoisted_15, [
                      _createVNode(
                        _component_my_image,
                        {
                          url: fileUrl.value,
                        },
                        null,
                        8,
                        ["url"]
                      ),
                    ]),
                    _createElementVNode(
                      "div",
                      {
                        class: "input_box",
                        onClick:
                          _cache[3] ||
                          (_cache[3] = (...args) =>
                            inputSend && inputSend(...args)),
                      },
                      "是不是你的最爱，快来说两句"
                    ),
                  ]),
                  (_openBlock(),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(4, (item, index) => {
                      return _createElementVNode(
                        "div",
                        {
                          class: "pl_item item",
                          key: index,
                        },
                        [
                          _createElementVNode(
                            "div",
                            {
                              class: "user_box",
                              onClick: () => toAutorDetails(item),
                            },
                            [
                              _createElementVNode("div", _hoisted_17, [
                                _createVNode(
                                  _component_my_image,
                                  {
                                    url: item,
                                  },
                                  null,
                                  8,
                                  ["url"]
                                ),
                              ]),
                              _hoisted_18,
                            ],
                            8,
                            _hoisted_16
                          ),
                          _createElementVNode("div", _hoisted_19, [
                            _hoisted_20,
                            _createElementVNode("div", _hoisted_21, [
                              _hoisted_22,
                              _hoisted_23,
                              _createElementVNode(
                                "div",
                                {
                                  onClick:
                                    _cache[4] ||
                                    (_cache[4] = (...args) =>
                                      inputSend &&
                                      inputSend(...args)),
                                },
                                _hoisted_26
                              ),
                            ]),
                          ]),
                        ]
                      );
                    }),
                    64
                  )),
                ]))
              : _createCommentVNode("", true),
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
                            (_cache[5] = ($event) => (message.value = $event)),
                          placeholder: "优质评论优先展示",
                        },
                        null,
                        512
                      ),
                      [[_vModelText, message.value]]
                    ),
                  ]),
                  _createElementVNode(
                    "span",
                    {
                      class: "input-sub",
                      onClick:
                        _cache[6] ||
                        (_cache[6] = (...args) =>
                          send && send(...args)),
                    },
                    "确定"
                  ),
                ],
                512
              ),
              [[_vShow, showInput.value]]
            ),
          ],
          64
        )
      );
    };
  },
};
</script>
