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
  renderList as _renderList,
  Fragment as _Fragment,
  createElementBlock as _createElementBlock,
  normalizeClass as _normalizeClass,
  resolveDirective as _resolveDirective,
  withDirectives as _withDirectives,
  createTextVNode as _createTextVNode,
  normalizeStyle as _normalizeStyle,
  withCtx as _withCtx,
  vModelText as _vModelText,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/coin.png";
import _imports_1 from "@/assets/images/community/icon_send_video_tag_find.png";
import _imports_2 from "@/assets/images/community/icon_right.png";
import _imports_3 from "@/assets/images/community/icon_like_tag.png";

import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import BountyList from "./BountyList.vue";
import RecommendVideo from "./RecommendVideo.vue";
export default {
  components: {
    BountyList,
    RecommendVideo,
  },
  props: ["id", "isMy"],

  setup(props) {
    const { askVideoDetailApi } = getGlobalProperties().$api;
    let detailData = ref("");
    let time = ref(0);
    let ask_video_id = ref("");
    const showLoading = ref(false);

    const getAskVideoDetail = () => {
      showLoading.value = true;
      askVideoDetailApi(
        {
          ask_video_id: props.id,
        },
        "get"
      ).then((res) => {
        showLoading.value = false;

        if (res.code === 0) {
          time.value = res.data.end * 1000;
          detailData.value = res.data;
          ask_video_id.value = res.data.id;
        }
      });
    };

    getAskVideoDetail();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-33f2d3bf"), (n = n()), _popScopeId(), n
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
      key: 1,
      class: "video_box",
    };
    const _hoisted_10 = {
      class: "left_img",
    };
    const _hoisted_11 = {
      class: "right_text",
    };
    const _hoisted_12 = {
      class: "flex_row",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "追加打赏", -1)
    );

    const _hoisted_15 = [_hoisted_13, _hoisted_14];

    const _hoisted_16 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_17 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "我要推片", -1)
    );

    const _hoisted_18 = [_hoisted_16, _hoisted_17];
    const _hoisted_19 = {
      key: 0,
      class: "bounty_box",
    };
    const _hoisted_20 = {
      class: "zsj",
    };

    const _hoisted_21 = /*#__PURE__*/ _createTextVNode(" 总赏金 ");

    const _hoisted_22 = {
      class: "bounty_list_box flex",
    };
    const _hoisted_23 = {
      class: "list_left",
    };

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_25 = {
      class: "bounty_timer flex",
    };
    const _hoisted_26 = {
      class: "left_text",
    };

    const _hoisted_27 = /*#__PURE__*/ _createTextVNode(" 剩余打赏金额 ");

    const _hoisted_28 = {
      key: 0,
      class: "right_timer flex",
    };

    const _hoisted_29 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("p", null, "倒计时：", -1)
    );

    const _hoisted_30 = {
      class: "block",
    };

    const _hoisted_31 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "colon",
        },
        "天",
        -1
      )
    );

    const _hoisted_32 = {
      class: "block",
    };

    const _hoisted_33 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "colon",
        },
        "时",
        -1
      )
    );

    const _hoisted_34 = {
      class: "block",
    };

    const _hoisted_35 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "colon",
        },
        "分",
        -1
      )
    );

    const _hoisted_36 = {
      class: "block",
    };

    const _hoisted_37 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "colon",
        },
        "秒",
        -1
      )
    );

    const _hoisted_38 = {
      key: 1,
      class: "right_timer flex",
    };

    const _hoisted_39 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          style: {
            color: "#fff",
            "font-size": "13px",
          },
        },
        "此次求片已经结束",
        -1
      )
    );

    const _hoisted_40 = [_hoisted_39];
    const _hoisted_41 = {
      class: "rxqz_box",
    };
    const _hoisted_42 = {
      class: "rxqz_title",
    };

    const _hoisted_43 = /*#__PURE__*/ _createTextVNode(" 热心群众 ");

    const _hoisted_44 = ["onClick"];
    const _hoisted_45 = {
      class: "left_img_box",
    };
    const _hoisted_46 = {
      class: "right_text",
    };
    const _hoisted_47 = {
      class: "left",
    };

    const _hoisted_48 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "dian",
        },
        "·",
        -1
      )
    );

    const _hoisted_49 = ["onClick"];
    const _hoisted_50 = {
      class: "video_list",
    };
    const _hoisted_51 = ["onClick"];
    const _hoisted_52 = {
      class: "img_box",
    };
    const _hoisted_53 = {
      class: "timer",
    };
    const _hoisted_54 = {
      class: "text_ellipsis",
    };
    const _hoisted_55 = {
      class: "bottom",
    };
    const _hoisted_56 = ["onClick"];
    const _hoisted_57 = {
      key: 1,
    };
    const _hoisted_58 = ["onClick"];

    const _hoisted_59 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_60 = {
      class: "dialog_content",
    };

    const _hoisted_61 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "titles",
        },
        "追加赏金",
        -1
      )
    );

    const _hoisted_62 = {
      class: "details_page_app",
    };
    const _hoisted_63 = {
      class: "head_title",
    };
    const _hoisted_64 = {
      class: "title",
    };
    const _hoisted_65 = {
      class: "cont_body_app",
    };
    const _hoisted_66 = {
      class: "details_page_app",
    };
    const _hoisted_67 = {
      class: "cont_body",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_Loading = _resolveComponent("Loading");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_count_down = _resolveComponent("van-count-down");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_popup = _resolveComponent("van-popup");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_bounty_list = _resolveComponent("bounty-list");

      const _component_recommend_video = _resolveComponent("recommend-video");

      const _component_video_details = _resolveComponent("video-details");

      const _component_hot_author_info = _resolveComponent("hot-author-info");

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
                        _cache[0] ||
                        (_cache[0] = _withModifiers(
                          () => $setup.toAutorDetails($setup.detailData),
                          ["stop"]
                        )),
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
                            _toDisplayString($setup.detailData.want_num) +
                              "人想看",
                            1
                          ),
                        ]),
                        _createElementVNode(
                          "div",
                          _hoisted_5,
                          _toDisplayString(
                            $setup.getMyDate($setup.detailData.created)
                          ),
                          1
                        ),
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
                    $setup.detailData.image.length
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_8, [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList($setup.detailData.image, (item) => {
                              return _withDirectives(
                                (_openBlock(),
                                _createElementBlock(
                                  "div",
                                  {
                                    class: _normalizeClass(
                                      "details_img_" +
                                        $setup.detailData.image.length
                                    ),
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
                                  ],
                                  2
                                )),
                                [[_directive_viewer]]
                              );
                            }),
                            128
                          )),
                        ]))
                      : _createCommentVNode("", true),
                    $setup.detailData.video_title
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_9, [
                          _createElementVNode("div", _hoisted_10, [
                            _createVNode(
                              _component_my_image,
                              {
                                url: $setup.detailData.video_image,
                              },
                              null,
                              8,
                              ["url"]
                            ),
                          ]),
                          _createElementVNode("div", _hoisted_11, [
                            _createElementVNode(
                              "p",
                              null,
                              _toDisplayString($setup.detailData.video_title),
                              1
                            ),
                            _createElementVNode(
                              "p",
                              null,
                              _toDisplayString(
                                $setup.detailData.video_nickname
                              ) +
                                " " +
                                _toDisplayString(
                                  $setup.detailData.video_count
                                ) +
                                "次播放 ",
                              1
                            ),
                          ]),
                        ]))
                      : _createCommentVNode("", true),
                  ]),
                  _createElementVNode("div", _hoisted_12, [
                    $setup.detailData.money > 0
                      ? (_openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            key: 0,
                            class: "tuipian_btn add_coin_btn",
                            onClick:
                              _cache[1] ||
                              (_cache[1] = (...args) =>
                                $setup.showDsPopup &&
                                $setup.showDsPopup(...args)),
                          },
                          _hoisted_15
                        ))
                      : _createCommentVNode("", true),
                    _createElementVNode(
                      "div",
                      {
                        class: "tuipian_btn",
                        onClick:
                          _cache[2] ||
                          (_cache[2] = () => $setup.toBountyList(2)),
                      },
                      _hoisted_18
                    ),
                  ]),
                  $setup.detailData.money > 0
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_19, [
                        _createElementVNode("p", _hoisted_20, [
                          _hoisted_21,
                          _createElementVNode(
                            "span",
                            null,
                            _toDisplayString($setup.detailData.money) + "赏银",
                            1
                          ),
                        ]),
                        _createElementVNode("div", _hoisted_22, [
                          _createElementVNode("div", _hoisted_23, [
                            (_openBlock(),
                            _createElementBlock(
                              _Fragment,
                              null,
                              _renderList(3, (item, index) => {
                                return _createElementVNode(
                                  "div",
                                  {
                                    class: "fans_avatar",
                                    style: _normalizeStyle({
                                      left: index * -8 + "px",
                                    }),
                                    key: index,
                                  },
                                  null,
                                  4
                                );
                              }),
                              64
                            )),
                          ]),
                          _createElementVNode(
                            "div",
                            {
                              class: "list_right",
                              onClick:
                                _cache[3] ||
                                (_cache[3] = () => $setup.toBountyList(1)),
                            },
                            [
                              _createElementVNode(
                                "span",
                                null,
                                _toDisplayString($setup.detailData.award_num) +
                                  "人追加打赏" +
                                  _toDisplayString(
                                    $setup.detailData.award_money
                                  ) +
                                  "赏银",
                                1
                              ),
                              _hoisted_24,
                            ]
                          ),
                        ]),
                        _createElementVNode("div", _hoisted_25, [
                          _createElementVNode("div", _hoisted_26, [
                            _hoisted_27,
                            _createElementVNode(
                              "span",
                              null,
                              _toDisplayString(
                                $setup.detailData.confirm_status === 1
                                  ? 0
                                  : $setup.detailData.money
                              ) + "赏银",
                              1
                            ),
                          ]),
                          $setup.time > 0
                            ? (_openBlock(),
                              _createElementBlock("div", _hoisted_28, [
                                _hoisted_29,
                                _createVNode(
                                  _component_van_count_down,
                                  {
                                    time: $setup.time,
                                  },
                                  {
                                    default: _withCtx((timeData) => [
                                      _createElementVNode(
                                        "span",
                                        _hoisted_30,
                                        _toDisplayString(timeData.days),
                                        1
                                      ),
                                      _hoisted_31,
                                      _createElementVNode(
                                        "span",
                                        _hoisted_32,
                                        _toDisplayString(timeData.hours),
                                        1
                                      ),
                                      _hoisted_33,
                                      _createElementVNode(
                                        "span",
                                        _hoisted_34,
                                        _toDisplayString(timeData.minutes),
                                        1
                                      ),
                                      _hoisted_35,
                                      _createElementVNode(
                                        "span",
                                        _hoisted_36,
                                        _toDisplayString(timeData.seconds),
                                        1
                                      ),
                                      _hoisted_37,
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["time"]
                                ),
                              ]))
                            : (_openBlock(),
                              _createElementBlock(
                                "div",
                                _hoisted_38,
                                _hoisted_40
                              )),
                        ]),
                      ]))
                    : _createCommentVNode("", true),
                  _createVNode(
                    _component_van_list,
                    {
                      loading: $setup.loading,
                      "onUpdate:loading":
                        _cache[4] ||
                        (_cache[4] = ($event) => ($setup.loading = $event)),
                      error: $setup.error,
                      "onUpdate:error":
                        _cache[5] ||
                        (_cache[5] = ($event) => ($setup.error = $event)),
                      finished: $setup.finished,
                      offset: 20,
                      "error-text": "请求失败，点击重新加载",
                      "finished-text": "-我也是有底线的-",
                      "loading-text": "正在获取数据...",
                      onLoad: $setup.onLoad,
                    },
                    {
                      default: _withCtx(() => [
                        _createElementVNode("div", _hoisted_41, [
                          _createElementVNode("div", _hoisted_42, [
                            _hoisted_43,
                            _createElementVNode(
                              "span",
                              null,
                              _toDisplayString($setup.total) + "人",
                              1
                            ),
                          ]),
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList($setup.rxqzList, (item, index) => {
                              return (
                                _openBlock(),
                                _createElementBlock(
                                  "div",
                                  {
                                    class: "item",
                                    key: index,
                                  },
                                  [
                                    _createElementVNode(
                                      "div",
                                      {
                                        class: "user_box",
                                        onClick: _withModifiers(
                                          () => $setup.toAutorDetails(item),
                                          ["stop"]
                                        ),
                                      },
                                      [
                                        _createElementVNode(
                                          "div",
                                          _hoisted_45,
                                          [
                                            _createVNode(
                                              _component_my_image,
                                              {
                                                url: item.user_image,
                                              },
                                              null,
                                              8,
                                              ["url"]
                                            ),
                                          ]
                                        ),
                                        _createElementVNode(
                                          "div",
                                          _hoisted_46,
                                          [
                                            _createElementVNode(
                                              "div",
                                              _hoisted_47,
                                              [
                                                _createElementVNode("p", null, [
                                                  _createTextVNode(
                                                    _toDisplayString(
                                                      item.nickname
                                                    ) + " ",
                                                    1
                                                  ),
                                                  _hoisted_48,
                                                  _createElementVNode(
                                                    "span",
                                                    {
                                                      class: "gz",
                                                      onClick: _withModifiers(
                                                        () =>
                                                          $setup.focusSave(
                                                            item
                                                          ),
                                                        ["stop"]
                                                      ),
                                                      style: _normalizeStyle({
                                                        color: item.isFocus
                                                          ? "#999"
                                                          : "#fd5c18",
                                                      }),
                                                    },
                                                    _toDisplayString(
                                                      item.isFocus
                                                        ? "已关注"
                                                        : "关注"
                                                    ),
                                                    13,
                                                    _hoisted_49
                                                  ),
                                                ]),
                                                _createElementVNode(
                                                  "p",
                                                  null,
                                                  _toDisplayString(item.fans) +
                                                    "粉丝",
                                                  1
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      8,
                                      _hoisted_44
                                    ),
                                    _createElementVNode("div", _hoisted_50, [
                                      (_openBlock(true),
                                      _createElementBlock(
                                        _Fragment,
                                        null,
                                        _renderList(item.video, (elem, ind) => {
                                          return (
                                            _openBlock(),
                                            _createElementBlock(
                                              "div",
                                              {
                                                class: "video_item",
                                                key: index + "-" + ind,
                                                onClick: () =>
                                                  $setup.videoPlay(elem),
                                              },
                                              [
                                                _createElementVNode(
                                                  "div",
                                                  _hoisted_52,
                                                  [
                                                    _createVNode(
                                                      _component_my_image,
                                                      {
                                                        url: elem.image,
                                                      },
                                                      null,
                                                      8,
                                                      ["url"]
                                                    ),
                                                    _createElementVNode(
                                                      "div",
                                                      _hoisted_53,
                                                      _toDisplayString(
                                                        elem.times
                                                      ),
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                _createElementVNode(
                                                  "p",
                                                  _hoisted_54,
                                                  _toDisplayString(elem.title),
                                                  1
                                                ),
                                              ],
                                              8,
                                              _hoisted_51
                                            )
                                          );
                                        }),
                                        128
                                      )),
                                    ]),
                                    _createElementVNode("div", _hoisted_55, [
                                      $setup.detailData.confirm_status !== 1 &&
                                      $setup.detailData.user_id ===
                                        $setup.change_id &&
                                      item.user_id !== $setup.change_id
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "span",
                                            {
                                              key: 0,
                                              class: "caina",
                                              onClick: () =>
                                                $setup.cainaF(item.id),
                                            },
                                            "采纳",
                                            8,
                                            _hoisted_56
                                          ))
                                        : (_openBlock(),
                                          _createElementBlock(
                                            "span",
                                            _hoisted_57
                                          )),
                                      _createElementVNode(
                                        "div",
                                        {
                                          class: _normalizeClass("color"),
                                          onClick: () =>
                                            $setup.getAskVideoCommentLike(item),
                                        },
                                        [
                                          _hoisted_59,
                                          _createTextVNode(
                                            _toDisplayString(item.like_num),
                                            1
                                          ),
                                        ],
                                        8,
                                        _hoisted_58
                                      ),
                                    ]),
                                  ]
                                )
                              );
                            }),
                            128
                          )),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["loading", "error", "finished", "onLoad"]
                  ),
                ]))
              : _createCommentVNode("", true),
            _createVNode(
              _component_van_popup,
              {
                show: $setup.showDialog,
                "onUpdate:show":
                  _cache[8] ||
                  (_cache[8] = ($event) => ($setup.showDialog = $event)),
                round: "",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_60, [
                    _hoisted_61,
                    _withDirectives(
                      _createElementVNode(
                        "input",
                        {
                          "onUpdate:modelValue":
                            _cache[6] ||
                            (_cache[6] = ($event) =>
                              ($setup.moneyValue = $event)),
                          type: "text",
                          "max-length": "8",
                          placeholder: "请输入打赏金额",
                        },
                        null,
                        512
                      ),
                      [[_vModelText, $setup.moneyValue]]
                    ),
                    _createElementVNode(
                      "div",
                      {
                        class: "btns",
                        onClick:
                          _cache[7] ||
                          (_cache[7] = (...args) =>
                            $setup.okBtns && $setup.okBtns(...args)),
                      },
                      "确认"
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
            _createVNode(
              _component_van_popup,
              {
                show: $setup.showDetailsPopul,
                "onUpdate:show":
                  _cache[9] ||
                  (_cache[9] = ($event) => ($setup.showDetailsPopul = $event)),
                class: "popup_coentent",
                overlay: false,
                teleport: "#app",
                position: "right",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_62, [
                    _createElementVNode("div", _hoisted_63, [
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
                      _createElementVNode(
                        "span",
                        _hoisted_64,
                        _toDisplayString(
                          $setup.popupType === 1 ? "追加赏金列表" : "我要推片"
                        ),
                        1
                      ),
                    ]),
                    _createElementVNode("div", _hoisted_65, [
                      $setup.popupType === 1
                        ? (_openBlock(),
                          _createBlock(
                            _component_bounty_list,
                            {
                              key: $setup.key,
                              id: $setup.ask_video_id,
                            },
                            null,
                            8,
                            ["id"]
                          ))
                        : _createCommentVNode("", true),
                      $setup.popupType === 2
                        ? (_openBlock(),
                          _createBlock(
                            _component_recommend_video,
                            {
                              key: $setup.key,
                              id: $setup.ask_video_id,
                            },
                            null,
                            8,
                            ["id"]
                          ))
                        : _createCommentVNode("", true),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
            _createVNode(
              _component_van_popup,
              {
                show: $setup.showVideoDetailsPopul,
                "onUpdate:show":
                  _cache[10] ||
                  (_cache[10] = ($event) =>
                    ($setup.showVideoDetailsPopul = $event)),
                class: "popup_coentent",
                overlay: false,
                teleport: "#app",
                position: "right",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_66, [
                    _createElementVNode("div", _hoisted_67, [
                      $setup.type === 1
                        ? (_openBlock(),
                          _createBlock(
                            _component_video_details,
                            {
                              details_type: 1,
                              key: $setup.videoId,
                              onClose: $setup.close1,
                            },
                            null,
                            8,
                            ["onClose"]
                          ))
                        : _createCommentVNode("", true),
                      $setup.type === 2
                        ? (_openBlock(),
                          _createBlock(
                            _component_hot_author_info,
                            {
                              key: $setup.videoId,
                              onClose: $setup.close1,
                            },
                            null,
                            8,
                            ["onClose"]
                          ))
                        : _createCommentVNode("", true),
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
