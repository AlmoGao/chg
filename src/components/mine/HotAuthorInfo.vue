<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  createElementBlock as _createElementBlock,
  normalizeStyle as _normalizeStyle,
  renderList as _renderList,
  Fragment as _Fragment,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { Toast } from "vant";
export default {
  name: "HotAuthorInfo",

  setup(props, { emit }) {
    const { autoerVideoApi, focusSaveApi } = getGlobalProperties().$api;
    const store = useStore();
    let page = ref(1);
    let finished = ref(false);
    let error = ref(false);
    let loading = ref(false);
    let videoList = ref([]);
    let authorInfo = ref({});
    let detailsTitle = ref("");
    let videoId = ref("");
    let showDetailsPopul = ref(false);
    const showLoading = ref(true);
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });

    const getAuthorInfo = () => {
      if (page.value === 1) {
        showLoading.value = true;
        finished.value = false;
      }

      detailsTitle.value = store.state.videoDetails.nickname;
      autoerVideoApi(
        {
          user_id: store.state.videoDetails.user_id,
          page: page.value,
        },
        "get"
      ).then((res) => {
        showLoading.value = false;

        if (res.code === 0) {
          res.data.isFocus = isFocus.value.includes(
            store.state.videoDetails.user_id + ""
          );
          authorInfo.value = res.data;
          videoList.value = videoList.value.concat(res.data.rows.rows);
          loading.value = false;

          if (!res.data.rows || res.data.rows.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    getAuthorInfo();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getAuthorInfo();
    };

    const videoPlay = (item) => {
      store.commit("SET_VIDEO_DETAILS", item);
      videoId.value = item.id;
      showDetailsPopul.value = true;
    };

    const focusSave = () => {
      // if (authorInfo.value.isFocus) {
      //   return;
      // }
      const params = {
        user_id: store.state.videoDetails.user_id,
      };
      focusSaveApi(params, "get").then((res) => {
        // Toast(res.message);
        if (res.code === 0) {
          authorInfo.value.isFocus = !authorInfo.value.isFocus;
          store.dispatch("getUserInfo");
        }
      });
    };

    const close = () => {
      emit("close");

      if (
        store.state.showLoginPopup.type !== "VideoMrtj" &&
        store.state.showLoginPopup.type !== "VideoDetails"
      ) {
        store.commit("SET_LOGIN_POPUP", {
          show: false,
          type: "HotAuthorInfo",
        });
      }
    };

    const close1 = () => {
      showDetailsPopul.value = false;
    };

    const showDetailsPopuls = computed(() => {
      
      return store.state.showLoginPopup;
    });
    watch(showDetailsPopuls, () => {
      if (showDetailsPopuls.value.show) {
        page.value = 1;
        videoList.value = [];
        getAuthorInfo();
      }
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-c2a4778c"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      style: {
        color: "#ccc",
      },
    };
    const _hoisted_2 = {
      class: "head_title",
    };
    const _hoisted_3 = {
      class: "title",
    };
    const _hoisted_4 = {
      key: 1,
      class: "cont_body",
    };
    const _hoisted_5 = {
      class: "info-recommend",
    };
    const _hoisted_6 = {
      class: "user_info_box",
    };
    const _hoisted_7 = {
      class: "thumb",
    };
    const _hoisted_8 = {
      class: "user_thumb",
    };
    const _hoisted_9 = {
      key: 0,
      style: {
        width: "100%",
        height: "100%",
      },
    };
    const _hoisted_10 = {
      class: "user_info_right",
    };
    const _hoisted_11 = {
      class: "number_info",
    };
    const _hoisted_12 = {
      class: "number_item",
    };
    const _hoisted_13 = {
      class: "number",
    };

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "titless",
        },
        "粉丝",
        -1
      )
    );

    const _hoisted_15 = {
      class: "number_item",
    };
    const _hoisted_16 = {
      class: "number",
    };

    const _hoisted_17 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "titless",
        },
        "关注",
        -1
      )
    );

    const _hoisted_18 = {
      class: "number_item",
    };
    const _hoisted_19 = {
      class: "number",
    };

    const _hoisted_20 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "titless",
        },
        "视频",
        -1
      )
    );

    const _hoisted_21 = {
      key: 0,
      style: {
        padding: "0px 12px",
        "font-size": "12px",
      },
    };
    const _hoisted_22 = {
      key: 0,
      class: "video_box",
    };
    const _hoisted_23 = ["onClick"];
    const _hoisted_24 = {
      class: "info-videoCover",
    };
    const _hoisted_25 = {
      class: "info-videoCover-img",
    };
    const _hoisted_26 = {
      class: "info-videoInfo",
    };
    const _hoisted_27 = {
      key: 1,
      class: "no-data",
    };
    const _hoisted_28 = {
      class: "details_page",
    };
    const _hoisted_29 = {
      class: "cont_body",
    };
    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_Loading = _resolveComponent("Loading");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_video_details = _resolveComponent("video-details");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
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
            _createElementVNode(
              "span",
              _hoisted_3,
              _toDisplayString(detailsTitle.value || "个人信息"),
              1
            ),
          ]),
          showLoading.value
            ? (_openBlock(),
              _createBlock(_component_Loading, {
                key: 0,
              }))
            : (_openBlock(),
              _createElementBlock("div", _hoisted_4, [
                _createElementVNode("div", _hoisted_5, [
                  _createElementVNode("div", _hoisted_6, [
                    _createElementVNode("div", _hoisted_7, [
                      _createElementVNode("div", _hoisted_8, [
                        authorInfo.value.top_image
                          ? (_openBlock(),
                            _createElementBlock("div", _hoisted_9, [
                              (_openBlock(),
                              _createBlock(
                                _component_my_image,
                                {
                                  key: authorInfo.value.top_image,
                                  url: authorInfo.value.top_image,
                                },
                                null,
                                8,
                                ["url"]
                              )),
                            ]))
                          : _createCommentVNode("", true),
                      ]),
                    ]),
                    _createElementVNode("div", _hoisted_10, [
                      _createElementVNode("div", _hoisted_11, [
                        _createElementVNode("div", _hoisted_12, [
                          _createElementVNode(
                            "div",
                            _hoisted_13,
                            _toDisplayString(authorInfo.value.fans),
                            1
                          ),
                          _hoisted_14,
                        ]),
                        _createElementVNode("div", _hoisted_15, [
                          _createElementVNode(
                            "div",
                            _hoisted_16,
                            _toDisplayString(authorInfo.value.focus),
                            1
                          ),
                          _hoisted_17,
                        ]),
                        _createElementVNode("div", _hoisted_18, [
                          _createElementVNode(
                            "div",
                            _hoisted_19,
                            _toDisplayString(authorInfo.value.video_num),
                            1
                          ),
                          _hoisted_20,
                        ]),
                      ]),
                      _createElementVNode(
                        "div",
                        {
                          class: "gz_btn",
                          onClick:
                            _cache[0] ||
                            (_cache[0] = (...args) =>
                              focusSave && focusSave(...args)),
                          style: _normalizeStyle({
                            background: authorInfo.value.isFocus
                              ? "#5B5B5B"
                              : "#FF5026",
                          }),
                        },
                        _toDisplayString(
                          authorInfo.value.isFocus ? "已关注" : "关注"
                        ),
                        5
                      ),
                    ]),
                  ]),
                  authorInfo.value.user_label
                    ? (_openBlock(),
                      _createElementBlock(
                        "div",
                        _hoisted_21,
                        " 采花阁官方.优质" +
                          _toDisplayString(
                            authorInfo.value.user_label || "创作者"
                          ),
                        1
                      ))
                    : _createCommentVNode("", true),
                  _createVNode(
                    _component_van_tabs,
                    {
                      shrink: "",
                      "line-height": "3px",
                      animated: "",
                      "title-active-color": "#fd5c18",
                      "title-inactive-color": "#CCCCCC",
                      background: "transparent",
                    },
                    {
                      default: _withCtx(() => [
                        _createVNode(
                          _component_van_tab,
                          {
                            title: "视频",
                          },
                          {
                            default: _withCtx(() => [
                              videoList.value.length
                                ? (_openBlock(),
                                  _createElementBlock("div", _hoisted_22, [
                                    _createVNode(
                                      _component_van_list,
                                      {
                                        loading: loading.value,
                                        "onUpdate:loading":
                                          _cache[1] ||
                                          (_cache[1] = ($event) =>
                                            (loading.value = $event)),
                                        error: error.value,
                                        "onUpdate:error":
                                          _cache[2] ||
                                          (_cache[2] = ($event) =>
                                            (error.value = $event)),
                                        finished: finished.value,
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
                                            _renderList(
                                              videoList.value,
                                              (item, index) => {
                                                return (
                                                  _openBlock(),
                                                  _createElementBlock(
                                                    "div",
                                                    {
                                                      key: index,
                                                      class: "info-videoItem",
                                                      onClick: () =>
                                                        videoPlay(item),
                                                    },
                                                    [
                                                      _createElementVNode(
                                                        "div",
                                                        _hoisted_24,
                                                        [
                                                          _createElementVNode(
                                                            "div",
                                                            _hoisted_25,
                                                            [
                                                              _createElementVNode(
                                                                "div",
                                                                null,
                                                                [
                                                                  _createVNode(
                                                                    _component_my_image,
                                                                    {
                                                                      url: item.image,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ["url"]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _createElementVNode(
                                                            "span",
                                                            null,
                                                            _toDisplayString(
                                                              item.times
                                                            ),
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      _createElementVNode(
                                                        "div",
                                                        _hoisted_26,
                                                        [
                                                          _createElementVNode(
                                                            "p",
                                                            null,
                                                            _toDisplayString(
                                                              item.title
                                                            ),
                                                            1
                                                          ),
                                                          _createElementVNode(
                                                            "div",
                                                            null,
                                                            [
                                                              _createElementVNode(
                                                                "span",
                                                                null,
                                                                _toDisplayString(
                                                                  item.count
                                                                ) + "次播放",
                                                                1
                                                              ),
                                                              _createElementVNode(
                                                                "span",
                                                                null,
                                                                _toDisplayString(
                                                                  item.like_num
                                                                ) + "次点赞",
                                                                1
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    8,
                                                    _hoisted_23
                                                  )
                                                );
                                              }
                                            ),
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
                                  _createElementBlock("div", _hoisted_27, [
                                    _createVNode(_component_no_data, {
                                      color: "#ffffff",
                                    }),
                                  ])),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ])),
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
                _createElementVNode("div", _hoisted_28, [
                  _createElementVNode("div", _hoisted_29, [
                    (_openBlock(),
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
