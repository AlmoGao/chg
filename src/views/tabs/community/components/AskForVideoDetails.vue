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

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Toast, Dialog } from "vant";
import { getGlobalProperties, getMyDate } from "@/assets/js/utils.js";
import BountyList from "./BountyList.vue";
import RecommendVideo from "./RecommendVideo.vue";
export default {
  components: {
    BountyList,
    RecommendVideo,
  },
  props: ["id", "isMy"],

  setup(props) {
    const store = useStore();
    const {
      askVideoDetailApi,
      askVideoRewardApi,
      askVideoCommentListApi,
      focusSaveApi,
      askVideoCommentLikeApi,
      askVideoConfirmApi,
    } = getGlobalProperties().$api;
    let detailData = ref("");
    let showDialog = ref(false);
    let moneyValue = ref("");
    let time = ref(0);
    let showDetailsPopul = ref(false);
    let popupType = ref(1);
    let ask_video_id = ref("");
    let key = ref(1);
    let rxqzList = ref([]);
    let finished = ref(false);
    let error = ref(false);
    let loading = ref(false);
    let page = ref(0);
    let total = ref(0);
    let showVideoDetailsPopul = ref(false);
    let videoId = ref("");
    let type = ref(1);
    const showLoading = ref(false);
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });
    let change_id = computed(() => {
      console.log(props.isMy);
      return store.state.userInfo.change_id;
    });

    const toAutorDetails = (item) => {
      if (item.isWant === "null") return; // store.commit("SET_LOGIN_POPUP", { show: true, type: "HotAuthorInfo" });

      store.commit("SET_VIDEO_DETAILS", item);
      type.value = 2;
      videoId.value = item.id;
      showVideoDetailsPopul.value = true;
    };

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

    const getAskVideoCommentList = () => {
      askVideoCommentListApi(
        {
          ask_video_id: props.id,
          page: page.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          total.value = res.data.total;
          res.data.rows.forEach((item) => {
            item.isFocus = isFocus.value.includes(item.user_id + "");
          });
          rxqzList.value = rxqzList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    }; // getAskVideoCommentList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getAskVideoCommentList();
    };

    const showDsPopup = () => {
      moneyValue.value = "";
      showDialog.value = true;
    };

    const okBtns = () => {
      if (moneyValue.value === "") {
        Toast("打赏金额不能为空");
        return;
      }

      const params = {
        ask_video_id: props.id,
        money: moneyValue.value,
      };
      askVideoRewardApi(params).then((res) => {
        Toast(res.message);

        if (res.code === 0) {
          getAskVideoDetail();
        }
      });
      showDialog.value = false;
    };

    const toBountyList = (type) => {
      popupType.value = type;
      key.value = Math.random();
      store.commit("SET_RECOMMEND_VIDEO_LIST", []);
      showDetailsPopul.value = true;
    };

    const close = () => {
      showDetailsPopul.value = false;
      getAskVideoDetail();
      page.value = 1;
      rxqzList.value = [];
      getAskVideoCommentList();
    };

    const focusSave = (item) => {
      // if (item.isFocus) {
      //   return;
      // }
      const params = {
        user_id: item.user_id,
      };
      focusSaveApi(params, "get").then((res) => {
        // Toast(res.message);
        if (res.code === 0) {
          item.isFocus = !item.isFocus;
          store.dispatch("getUserInfo");
        }
      });
    };

    const getAskVideoCommentLike = (item) => {
      askVideoCommentLikeApi(
        {
          ask_video_id: item.id,
        },
        "get"
      ).then((res) => {
        Toast(res.message);

        if (res.code === 0) {
          item.like_num++;
        }
      });
    };

    const cainaF = (id) => {
      Dialog.confirm({
        theme: "round-button",
        className: "myconfirm",
        title: "采纳推荐者视频",
        message: "赏金将会分给该推荐者",
      })
        .then(() => {
          askVideoConfirmApi(
            {
              comment_id: id,
            },
            "get"
          ).then((res) => {
            Toast(res.message);

            if (res.code === 0) {
              getAskVideoDetail();
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    };

    const videoPlay = (item) => {
      // store.commit("SET_LOGIN_POPUP", { show: true, type: "VideoDetails" });
      store.commit("SET_VIDEO_DETAILS", item);
      type.value = 1;
      videoId.value = item.id;
      showVideoDetailsPopul.value = true;
    };

    const close1 = () => {
      showVideoDetailsPopul.value = false;
    };

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
    console.log({
      props,
      toAutorDetails,
      detailData,
      getMyDate,
      okBtns,
      showDialog,
      moneyValue,
      showDsPopup,
      time,
      close1,
      showDetailsPopul,
      showVideoDetailsPopul,
      videoId,
      type,
      close,
      toBountyList,
      popupType,
      ask_video_id,
      key,
      rxqzList,
      total,
      focusSave,
      videoPlay,
      finished,
      error,
      loading,
      onLoad,
      getAskVideoCommentLike,
      change_id,
      cainaF,
      showLoading,
    });

    return (_ctx, _cache) => {
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
                        _cache[0] ||
                        (_cache[0] = _withModifiers(
                          () => toAutorDetails(detailData.value),
                          ["stop"]
                        )),
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
                            _toDisplayString(detailData.value.want_num) +
                              "人想看",
                            1
                          ),
                        ]),
                        _createElementVNode(
                          "div",
                          _hoisted_5,
                          _toDisplayString(
                            getMyDate(detailData.value.created)
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
                      _toDisplayString(detailData.value.content),
                      1
                    ),
                    detailData.value.image.length
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_8, [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList(detailData.value.image, (item) => {
                              return _withDirectives(
                                (_openBlock(),
                                _createElementBlock(
                                  "div",
                                  {
                                    class: _normalizeClass(
                                      "details_img_" +
                                        detailData.value.image.length
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
                    detailData.value.video_title
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_9, [
                          _createElementVNode("div", _hoisted_10, [
                            _createVNode(
                              _component_my_image,
                              {
                                url: detailData.value.video_image,
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
                              _toDisplayString(detailData.value.video_title),
                              1
                            ),
                            _createElementVNode(
                              "p",
                              null,
                              _toDisplayString(
                                detailData.value.video_nickname
                              ) +
                                " " +
                                _toDisplayString(
                                  detailData.value.video_count
                                ) +
                                "次播放 ",
                              1
                            ),
                          ]),
                        ]))
                      : _createCommentVNode("", true),
                  ]),
                  _createElementVNode("div", _hoisted_12, [
                    detailData.value.money > 0
                      ? (_openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            key: 0,
                            class: "tuipian_btn add_coin_btn",
                            onClick:
                              _cache[1] ||
                              (_cache[1] = (...args) =>
                                showDsPopup &&
                                showDsPopup(...args)),
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
                          (_cache[2] = () => toBountyList(2)),
                      },
                      _hoisted_18
                    ),
                  ]),
                  detailData.value.money > 0
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_19, [
                        _createElementVNode("p", _hoisted_20, [
                          _hoisted_21,
                          _createElementVNode(
                            "span",
                            null,
                            _toDisplayString(detailData.value.money) + "赏银",
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
                                (_cache[3] = () =>
                                  toBountyList(1)),
                            },
                            [
                              _createElementVNode(
                                "span",
                                null,
                                _toDisplayString(detailData.value.award_num) +
                                  "人追加打赏" +
                                  _toDisplayString(
                                    detailData.value.award_money
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
                                detailData.value.confirm_status === 1
                                  ? 0
                                  : detailData.value.money
                              ) + "赏银",
                              1
                            ),
                          ]),
                          time.value > 0
                            ? (_openBlock(),
                              _createElementBlock("div", _hoisted_28, [
                                _hoisted_29,
                                _createVNode(
                                  _component_van_count_down,
                                  {
                                    time: time.value,
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
                      loading: loading.value,
                      "onUpdate:loading":
                        _cache[4] ||
                        (_cache[4] = ($event) => (loading.value = $event)),
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
                        _createElementVNode("div", _hoisted_41, [
                          _createElementVNode("div", _hoisted_42, [
                            _hoisted_43,
                            _createElementVNode(
                              "span",
                              null,
                              _toDisplayString(total.value) + "人",
                              1
                            ),
                          ]),
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList(rxqzList.value, (item, index) => {
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
                                          () =>
                                            toAutorDetails(item),
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
                                                          focusSave(
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
                                                  videoPlay(elem),
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
                                      detailData.value.confirm_status !== 1 &&
                                      detailData.value.user_id ===
                                        change_id.value &&
                                      item.user_id !== change_id.value
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "span",
                                            {
                                              key: 0,
                                              class: "caina",
                                              onClick: () =>
                                                cainaF(item.id),
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
                                          class: _normalizeClass(
                                            // eslint-disable-next-line
                                            true ? "color" : ""
                                          ),
                                          onClick: () =>
                                            getAskVideoCommentLike(item),
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
                show: showDialog.value,
                "onUpdate:show":
                  _cache[8] ||
                  (_cache[8] = ($event) => (showDialog.value = $event)),
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
                              (moneyValue.value = $event)),
                          type: "text",
                          "max-length": "8",
                          placeholder: "请输入打赏金额",
                        },
                        null,
                        512
                      ),
                      [[_vModelText, moneyValue.value]]
                    ),
                    _createElementVNode(
                      "div",
                      {
                        class: "btns",
                        onClick:
                          _cache[7] ||
                          (_cache[7] = (...args) =>
                            okBtns && okBtns(...args)),
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
                show: showDetailsPopul.value,
                "onUpdate:show":
                  _cache[9] ||
                  (_cache[9] = ($event) => (showDetailsPopul.value = $event)),
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
                          onClick: close.value,
                        },
                        null,
                        8,
                        ["onClick"]
                      ),
                      _createElementVNode(
                        "span",
                        _hoisted_64,
                        _toDisplayString(
                          popupType.value === 1 ? "追加赏金列表" : "我要推片"
                        ),
                        1
                      ),
                    ]),
                    _createElementVNode("div", _hoisted_65, [
                      popupType.value === 1
                        ? (_openBlock(),
                          _createBlock(
                            _component_bounty_list,
                            {
                              key: key.value,
                              id: ask_video_id.value,
                            },
                            null,
                            8,
                            ["id"]
                          ))
                        : _createCommentVNode("", true),
                      popupType.value === 2
                        ? (_openBlock(),
                          _createBlock(
                            _component_recommend_video,
                            {
                              key: key.value,
                              id: ask_video_id.value,
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
                show: showVideoDetailsPopul.value,
                "onUpdate:show":
                  _cache[10] ||
                  (_cache[10] = ($event) =>
                    (showVideoDetailsPopul.value = $event)),
                class: "popup_coentent",
                overlay: false,
                teleport: "#app",
                position: "right",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_66, [
                    _createElementVNode("div", _hoisted_67, [
                      type.value === 1
                        ? (_openBlock(),
                          _createBlock(
                            _component_video_details,
                            {
                              details_type: 1,
                              key: videoId.value,
                              onClose: close1,
                            },
                            null,
                            8,
                            ["onClose"]
                          ))
                        : _createCommentVNode("", true),
                      type.value === 2
                        ? (_openBlock(),
                          _createBlock(
                            _component_hot_author_info,
                            {
                              key: videoId.value,
                              onClose: close1,
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
