<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
  createCommentVNode as _createCommentVNode,
  withModifiers as _withModifiers,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/play.png";
import _imports_1 from "../../assets/images/mine/share.png";

import { ref } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties, getMyDate } from "@/assets/js/utils.js";
export default {
  name: "VideoMrtj",

  setup(props) {
    const store = useStore();
    const { dailyConcentrationApi } = getGlobalProperties().$api;
    let page = ref(0);
    const finished = ref(false);
    let videoList = ref([]);
    const error = ref(false);
    const loading = ref(false);
    let showDetailsPopul = ref(false);
    let videoId = ref("");
    let type = ref(1);

    const getVideoList = () => {
      dailyConcentrationApi(
        {
          page: page.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          // videoList.value = res.data.rows;
          res.data.rows.forEach((item, index) => {
            item.titleTime = getMyDate(item.created, 1);

            if (
              index !== 0 &&
              getMyDate(item.created, 1) ===
                getMyDate(res.data.rows[index - 1].created, 1)
            ) {
              item.titleTime = "";
            }
          });
          videoList.value = videoList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    }; // getVideoList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getVideoList();
    };

    const close = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: false,
        type: "VideoMrtj",
      });
    };

    const close1 = () => {
      showDetailsPopul.value = false;
    };

    const videoPlay = (item) => {
      store.commit("SET_VIDEO_DETAILS", item);
      videoId.value = item.id;
      type.value = 1;
      showDetailsPopul.value = true;
    };

    const toAutorDetails = (item) => {
      store.commit("SET_VIDEO_DETAILS", item);
      videoId.value = item.id;
      type.value = 2;
      showDetailsPopul.value = true;
    };

    const showShare = (item) => {
      store.commit("SET_SHOW_SHARE_POPUP", {
        show: true,
        videoDetails: item,
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-5678164c"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "videoMrtj",
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
        "每日精选",
        -1
      )
    );

    const _hoisted_4 = {
      class: "cont webkit-overflow-scrolling-touch",
    };
    const _hoisted_5 = {
      key: 0,
      class: "title",
    };
    const _hoisted_6 = {
      class: "video_list",
    };
    const _hoisted_7 = ["onClick"];
    const _hoisted_8 = {
      class: "video_box",
    };
    const _hoisted_9 = {
      class: "times",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "video-box-play",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
          }),
        ],
        -1
      )
    );

    const _hoisted_11 = ["onClick"];
    const _hoisted_12 = {
      class: "user_img",
    };
    const _hoisted_13 = {
      class: "user_text",
    };
    const _hoisted_14 = {
      class: "user_title text_ellipsis",
    };
    const _hoisted_15 = {
      class: "details text_ellipsis",
    };
    const _hoisted_16 = ["onClick"];

    const _hoisted_17 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_18 = [_hoisted_17];
    const _hoisted_19 = {
      class: "details_page",
    };
    const _hoisted_20 = {
      class: "cont_body",
    };
    console.log({
      props,
      close,
      videoList,
      loading,
      onLoad,
      error,
      videoPlay,
      finished,
      getMyDate,
      showDetailsPopul,
      close1,
      videoId,
      type,
      toAutorDetails,
      showShare,
    });

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_video_details = _resolveComponent("video-details");

      const _component_hot_author_info = _resolveComponent("hot-author-info");

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
                onClick: close.value,
              },
              null,
              8,
              ["onClick"]
            ),
            _hoisted_3,
          ]),
          _createElementVNode("div", _hoisted_4, [
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
                    _renderList(videoList.value, (item) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          _Fragment,
                          {
                            key: item.id,
                          },
                          [
                            item.titleTime
                              ? (_openBlock(),
                                _createElementBlock(
                                  "div",
                                  _hoisted_5,
                                  _toDisplayString(item.titleTime) + "精选 ",
                                  1
                                ))
                              : _createCommentVNode("", true),
                            _createElementVNode("div", _hoisted_6, [
                              _createElementVNode(
                                "div",
                                {
                                  class: "video_item",
                                  onClick: () => videoPlay(item),
                                },
                                [
                                  _createElementVNode("div", _hoisted_8, [
                                    _createVNode(
                                      _component_my_image,
                                      {
                                        url: item.image,
                                      },
                                      null,
                                      8,
                                      ["url"]
                                    ),
                                    _createElementVNode(
                                      "span",
                                      _hoisted_9,
                                      _toDisplayString(item.times),
                                      1
                                    ),
                                    _hoisted_10,
                                  ]),
                                  _createElementVNode(
                                    "div",
                                    {
                                      class: "vider_user",
                                      onClick: _withModifiers(
                                        () => toAutorDetails(item),
                                        ["stop"]
                                      ),
                                    },
                                    [
                                      _createElementVNode("div", _hoisted_12, [
                                        _createVNode(
                                          _component_my_image,
                                          {
                                            url: item.top_image,
                                          },
                                          null,
                                          8,
                                          ["url"]
                                        ),
                                      ]),
                                      _createElementVNode("div", _hoisted_13, [
                                        _createElementVNode(
                                          "p",
                                          _hoisted_14,
                                          _toDisplayString(item.title),
                                          1
                                        ),
                                        _createElementVNode(
                                          "p",
                                          _hoisted_15,
                                          _toDisplayString(
                                            item.nickname || _ctx.username
                                          ),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode(
                                        "div",
                                        {
                                          class: "fenxian",
                                          onClick: _withModifiers(
                                            () => showShare(item),
                                            ["stop"]
                                          ),
                                        },
                                        _hoisted_18,
                                        8,
                                        _hoisted_16
                                      ),
                                    ],
                                    8,
                                    _hoisted_11
                                  ),
                                ],
                                8,
                                _hoisted_7
                              ),
                            ]),
                          ],
                          64
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
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[2] ||
                (_cache[2] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_19, [
                  _createElementVNode("div", _hoisted_20, [
                    type.value === 1
                      ? (_openBlock(),
                        _createBlock(
                          _component_video_details,
                          {
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
        ])
      );
    };
  },
};
</script>
