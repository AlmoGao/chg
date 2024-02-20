<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createBlock as _createBlock,
  withCtx as _withCtx,
  createCommentVNode as _createCommentVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref, computed } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { useStore } from "vuex";
import AskForVideoList from "@/views/tabs/community/components/AskForVideoList.vue";
import AskForVideoDetails from "@/views/tabs/community/components/AskForVideoDetails.vue";
import MicroHeadlinesList from "@/views/tabs/community/components/MicroHeadlinesList.vue";
import MicroHeadlinesDetails from "@/views/tabs/community/components/MicroHeadlinesDetails.vue";
export default {
  name: "MyMicropost",
  components: {
    AskForVideoList,
    AskForVideoDetails,
    MicroHeadlinesList,
    MicroHeadlinesDetails,
  },

  setup(props, { emit }) {
    const store = useStore();
    const {
      userAskVideoApi,
      userAskVideoLikeApi,
      userAskVideoSubmitApi,
      userHeadLinesApi,
      userHeadLineLikesApi,
    } = getGlobalProperties().$api;
    let showDetailsPopul = ref(false);
    let myQpList = ref([]);
    let myLikeList = ref([]);
    let myTjList = ref([]);
    let wfbdList = ref([]);
    let wxhdList = ref([]);
    let page1 = ref(0);
    let finished1 = ref(false);
    let error1 = ref(false);
    let loading1 = ref(false);
    let page2 = ref(0);
    let finished2 = ref(false);
    let error2 = ref(false);
    let loading2 = ref(false);
    let page3 = ref(0);
    let finished3 = ref(false);
    let error3 = ref(false);
    let loading3 = ref(false);
    let page4 = ref(0);
    let finished4 = ref(false);
    let error4 = ref(false);
    let loading4 = ref(false);
    let page5 = ref(0);
    let finished5 = ref(false);
    let error5 = ref(false);
    let loading5 = ref(false);
    let isWant = computed(() => {
      return store.state.userInfo.want.split(",");
    });
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });

    const close = (type) => {
      if (type === 1) {
        emit("close");
      } else {
        showDetailsPopul.value = false;
      }
    };

    const getUserAskVideo = () => {
      userAskVideoApi(
        {
          page: page1.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isWant = "null";
          });
          myQpList.value = myQpList.value.concat(res.data.rows);
          loading1.value = false;

          if (res.data.rows.length === 0) {
            finished1.value = true;
          }
        }
      });
    };

    const getUserAskVideoLike = () => {
      userAskVideoLikeApi(
        {
          page: page2.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isWant = isWant.value.includes(
              (item.ask_video_id || item.id) + ""
            );
          });
          myLikeList.value = myLikeList.value.concat(res.data.rows);
          loading2.value = false;

          if (res.data.rows.length === 0) {
            finished2.value = true;
          }
        }
      });
    };

    const getUserAskVideoSubmit = () => {
      userAskVideoSubmitApi(
        {
          page: page3.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isWant = isWant.value.includes(
              (item.ask_video_id || item.id) + ""
            );
          });
          myTjList.value = myTjList.value.concat(res.data.rows);
          loading3.value = false;

          if (res.data.rows.length === 0) {
            finished3.value = true;
          }
        }
      });
    };

    const getUserHeadLines = () => {
      userHeadLinesApi(
        {
          page: page4.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isFocus = "null";
          });
          wfbdList.value = wfbdList.value.concat(res.data.rows);
          loading4.value = false;

          if (res.data.rows.length === 0) {
            finished4.value = true;
          }
        }
      });
    };

    const getUserHeadLineLikes = () => {
      userHeadLineLikesApi(
        {
          page: page5.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isFocus = isFocus.value.includes(item.user_id + "");
          });
          wxhdList.value = wxhdList.value.concat(res.data.rows);
          loading5.value = false;

          if (res.data.rows.length === 0) {
            finished5.value = true;
          }
        }
      });
    }; // getUserAskVideo();
    // getUserAskVideoLike();
    // getUserAskVideoSubmit();
    // getUserHeadLines();
    // getUserHeadLineLikes();

    const onLoad1 = () => {
      loading1.value = true;
      page1.value++;
      getUserAskVideo();
    };

    const onLoad2 = () => {
      loading2.value = true;
      page2.value++;
      getUserAskVideoLike();
    };

    const onLoad3 = () => {
      loading3.value = true;
      page3.value++;
      getUserAskVideoSubmit();
    };

    const onLoad4 = () => {
      loading4.value = true;
      page4.value++;
      getUserHeadLines();
    };

    const onLoad5 = () => {
      loading5.value = true;
      page5.value++;
      getUserHeadLineLikes();
    };

    let key = ref("");
    let ask_video_id = ref("");
    let head_lines_id = ref("");
    let type = ref("");
    let isMy = ref("");

    const showDetails = (item, ty, my) => {
      key.value = Math.random();
      isMy.value = my || "";
      type.value = ty;

      if (ty === "qp") {
        ask_video_id.value = item.ask_video_id || item.id;
      } else if (ty === "tt") {
        head_lines_id.value = item.head_lines_id || item.id;
      }

      showDetailsPopul.value = true;
    };

    const videoPlay = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "VideoDetails",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-4527226b"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "myLike",
    };
    const _hoisted_2 = {
      class: "cont",
    };
    const _hoisted_3 = {
      class: "cont_body",
    };
    const _hoisted_4 = {
      class: "tabs_cont",
    };
    const _hoisted_5 = {
      key: 0,
      class: "recharge_box_item",
    };
    const _hoisted_6 = {
      class: "tabs_cont",
    };
    const _hoisted_7 = {
      key: 0,
      class: "recharge_box_item",
    };
    const _hoisted_8 = {
      class: "tabs_cont",
    };
    const _hoisted_9 = {
      key: 0,
      class: "recharge_box_item",
    };
    const _hoisted_10 = {
      class: "cont_body",
    };
    const _hoisted_11 = {
      class: "tabs_cont",
    };
    const _hoisted_12 = {
      key: 0,
      class: "recharge_box_item",
    };
    const _hoisted_13 = {
      class: "tabs_cont",
    };
    const _hoisted_14 = {
      key: 0,
      class: "recharge_box_item",
    };
    const _hoisted_15 = {
      class: "details_page_app",
    };
    const _hoisted_16 = {
      class: "head_title",
    };

    const _hoisted_17 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "详情",
        -1
      )
    );

    const _hoisted_18 = {
      class: "cont_body_app",
    };

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_AskForVideoList = _resolveComponent("AskForVideoList");

      const _component_van_list = _resolveComponent("van-list");

      const _component_no_data = _resolveComponent("no-data");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_MicroHeadlinesList =
        _resolveComponent("MicroHeadlinesList");

      const _component_ask_for_video_details = _resolveComponent(
        "ask-for-video-details"
      );

      const _component_microHeadlines_details = _resolveComponent(
        "microHeadlines-details"
      );

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            _createElementVNode("div", _hoisted_1, [
              _createElementVNode(
                "div",
                {
                  class: "head_titles head_top_20",
                  onClick:
                    _cache[0] || (_cache[0] = () => close(1)),
                },
                [
                  _createVNode(_component_van_icon, {
                    size: "22",
                    name: "arrow-left",
                  }),
                ]
              ),
              _createElementVNode("div", _hoisted_2, [
                _createVNode(
                  _component_van_tabs,
                  {
                    active: _ctx.active,
                    "onUpdate:active":
                      _cache[11] ||
                      (_cache[11] = ($event) => (_ctx.active = $event)),
                    "line-height": "0",
                    swipeable: "",
                    animated: "",
                    "title-active-color": "#fd5c18",
                    "title-inactive-color": "#CCCCCC",
                    color: "transparent",
                    onClickTab: _ctx.onClickTab,
                    background: "transparent",
                  },
                  {
                    default: _withCtx(() => [
                      _createVNode(
                        _component_van_tab,
                        {
                          title: "求片",
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode("div", _hoisted_3, [
                              _createVNode(
                                _component_van_tabs,
                                {
                                  shrink: "",
                                  "line-height": "0",
                                  swipeable: "",
                                  animated: "",
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
                                        title: "我的求片",
                                      },
                                      {
                                        default: _withCtx(() => [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_4,
                                            [
                                              _createVNode(
                                                _component_van_list,
                                                {
                                                  loading: loading1.value,
                                                  "onUpdate:loading":
                                                    _cache[1] ||
                                                    (_cache[1] = ($event) =>
                                                      (loading1.value =
                                                        $event)),
                                                  error: error1.value,
                                                  "onUpdate:error":
                                                    _cache[2] ||
                                                    (_cache[2] = ($event) =>
                                                      (error1.value = $event)),
                                                  finished: finished1.value,
                                                  offset: 20,
                                                  "error-text":
                                                    "请求失败，点击重新加载",
                                                  "finished-text":
                                                    "-我也是有底线的-",
                                                  "loading-text":
                                                    "正在获取数据...",
                                                  onLoad: onLoad1,
                                                },
                                                {
                                                  default: _withCtx(() => [
                                                    (_openBlock(true),
                                                    _createElementBlock(
                                                      _Fragment,
                                                      null,
                                                      _renderList(
                                                        myQpList.value,
                                                        (item, index) => {
                                                          return (
                                                            _openBlock(),
                                                            _createBlock(
                                                              _component_AskForVideoList,
                                                              {
                                                                key: index,
                                                                onClick: () =>
                                                                  showDetails(
                                                                    item,
                                                                    "qp",
                                                                    "my"
                                                                  ),
                                                                data: item,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "onClick",
                                                                "data",
                                                              ]
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
                                                [
                                                  "loading",
                                                  "error",
                                                  "finished",
                                                  "onLoad",
                                                ]
                                              ),
                                              myQpList.value.length === 0 &&
                                              !loading1.value
                                                ? (_openBlock(),
                                                  _createElementBlock(
                                                    "div",
                                                    _hoisted_5,
                                                    [
                                                      _createVNode(
                                                        _component_no_data,
                                                        {
                                                          color: "#ffffff",
                                                        }
                                                      ),
                                                    ]
                                                  ))
                                                : _createCommentVNode("", true),
                                            ]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    _createVNode(
                                      _component_van_tab,
                                      {
                                        title: "我的喜欢",
                                      },
                                      {
                                        default: _withCtx(() => [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_6,
                                            [
                                              _createVNode(
                                                _component_van_list,
                                                {
                                                  loading: loading2.value,
                                                  "onUpdate:loading":
                                                    _cache[3] ||
                                                    (_cache[3] = ($event) =>
                                                      (loading2.value =
                                                        $event)),
                                                  error: error2.value,
                                                  "onUpdate:error":
                                                    _cache[4] ||
                                                    (_cache[4] = ($event) =>
                                                      (error2.value = $event)),
                                                  finished: finished2.value,
                                                  offset: 20,
                                                  "error-text":
                                                    "请求失败，点击重新加载",
                                                  "finished-text":
                                                    "-我也是有底线的-",
                                                  "loading-text":
                                                    "正在获取数据...",
                                                  onLoad: onLoad2,
                                                },
                                                {
                                                  default: _withCtx(() => [
                                                    (_openBlock(true),
                                                    _createElementBlock(
                                                      _Fragment,
                                                      null,
                                                      _renderList(
                                                        myLikeList.value,
                                                        (item, index) => {
                                                          return (
                                                            _openBlock(),
                                                            _createBlock(
                                                              _component_AskForVideoList,
                                                              {
                                                                key: index,
                                                                onClick: () =>
                                                                  showDetails(
                                                                    item,
                                                                    "qp"
                                                                  ),
                                                                data: item,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "onClick",
                                                                "data",
                                                              ]
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
                                                [
                                                  "loading",
                                                  "error",
                                                  "finished",
                                                  "onLoad",
                                                ]
                                              ),
                                              myLikeList.value.length === 0 &&
                                              !loading2.value
                                                ? (_openBlock(),
                                                  _createElementBlock(
                                                    "div",
                                                    _hoisted_7,
                                                    [
                                                      _createVNode(
                                                        _component_no_data,
                                                        {
                                                          color: "#ffffff",
                                                        }
                                                      ),
                                                    ]
                                                  ))
                                                : _createCommentVNode("", true),
                                            ]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    _createVNode(
                                      _component_van_tab,
                                      {
                                        title: "我的推荐",
                                      },
                                      {
                                        default: _withCtx(() => [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_8,
                                            [
                                              _createVNode(
                                                _component_van_list,
                                                {
                                                  loading: loading3.value,
                                                  "onUpdate:loading":
                                                    _cache[5] ||
                                                    (_cache[5] = ($event) =>
                                                      (loading3.value =
                                                        $event)),
                                                  error: error3.value,
                                                  "onUpdate:error":
                                                    _cache[6] ||
                                                    (_cache[6] = ($event) =>
                                                      (error3.value = $event)),
                                                  finished: finished3.value,
                                                  offset: 20,
                                                  "error-text":
                                                    "请求失败，点击重新加载",
                                                  "finished-text":
                                                    "-我也是有底线的-",
                                                  "loading-text":
                                                    "正在获取数据...",
                                                  onLoad: onLoad3,
                                                },
                                                {
                                                  default: _withCtx(() => [
                                                    (_openBlock(true),
                                                    _createElementBlock(
                                                      _Fragment,
                                                      null,
                                                      _renderList(
                                                        myTjList.value,
                                                        (item, index) => {
                                                          return (
                                                            _openBlock(),
                                                            _createBlock(
                                                              _component_AskForVideoList,
                                                              {
                                                                key: index,
                                                                onClick: () =>
                                                                  showDetails(
                                                                    item,
                                                                    "qp"
                                                                  ),
                                                                data: item,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "onClick",
                                                                "data",
                                                              ]
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
                                                [
                                                  "loading",
                                                  "error",
                                                  "finished",
                                                  "onLoad",
                                                ]
                                              ),
                                              myTjList.value.length === 0 &&
                                              !loading3.value
                                                ? (_openBlock(),
                                                  _createElementBlock(
                                                    "div",
                                                    _hoisted_9,
                                                    [
                                                      _createVNode(
                                                        _component_no_data,
                                                        {
                                                          color: "#ffffff",
                                                        }
                                                      ),
                                                    ]
                                                  ))
                                                : _createCommentVNode("", true),
                                            ]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      _createVNode(
                        _component_van_tab,
                        {
                          title: "微头条",
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode("div", _hoisted_10, [
                              _createVNode(
                                _component_van_tabs,
                                {
                                  shrink: "",
                                  "line-height": "0",
                                  swipeable: "",
                                  animated: "",
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
                                        title: "我发布的",
                                      },
                                      {
                                        default: _withCtx(() => [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_11,
                                            [
                                              _createVNode(
                                                _component_van_list,
                                                {
                                                  loading: loading4.value,
                                                  "onUpdate:loading":
                                                    _cache[7] ||
                                                    (_cache[7] = ($event) =>
                                                      (loading4.value =
                                                        $event)),
                                                  error: error4.value,
                                                  "onUpdate:error":
                                                    _cache[8] ||
                                                    (_cache[8] = ($event) =>
                                                      (error4.value = $event)),
                                                  finished: finished4.value,
                                                  offset: 20,
                                                  "error-text":
                                                    "请求失败，点击重新加载",
                                                  "finished-text":
                                                    "-我也是有底线的-",
                                                  "loading-text":
                                                    "正在获取数据...",
                                                  onLoad: onLoad4,
                                                },
                                                {
                                                  default: _withCtx(() => [
                                                    (_openBlock(true),
                                                    _createElementBlock(
                                                      _Fragment,
                                                      null,
                                                      _renderList(
                                                        wfbdList.value,
                                                        (item, index) => {
                                                          return (
                                                            _openBlock(),
                                                            _createBlock(
                                                              _component_MicroHeadlinesList,
                                                              {
                                                                key: index,
                                                                onClick: () =>
                                                                  showDetails(
                                                                    item,
                                                                    "tt"
                                                                  ),
                                                                data: item,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "onClick",
                                                                "data",
                                                              ]
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
                                                [
                                                  "loading",
                                                  "error",
                                                  "finished",
                                                  "onLoad",
                                                ]
                                              ),
                                              wfbdList.value.length === 0 &&
                                              !loading4.value
                                                ? (_openBlock(),
                                                  _createElementBlock(
                                                    "div",
                                                    _hoisted_12,
                                                    [
                                                      _createVNode(
                                                        _component_no_data,
                                                        {
                                                          color: "#ffffff",
                                                        }
                                                      ),
                                                    ]
                                                  ))
                                                : _createCommentVNode("", true),
                                            ]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    _createVNode(
                                      _component_van_tab,
                                      {
                                        title: "我喜欢的",
                                      },
                                      {
                                        default: _withCtx(() => [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_13,
                                            [
                                              _createVNode(
                                                _component_van_list,
                                                {
                                                  loading: loading5.value,
                                                  "onUpdate:loading":
                                                    _cache[9] ||
                                                    (_cache[9] = ($event) =>
                                                      (loading5.value =
                                                        $event)),
                                                  error: error5.value,
                                                  "onUpdate:error":
                                                    _cache[10] ||
                                                    (_cache[10] = ($event) =>
                                                      (error5.value = $event)),
                                                  finished: finished5.value,
                                                  offset: 20,
                                                  "error-text":
                                                    "请求失败，点击重新加载",
                                                  "finished-text":
                                                    "-我也是有底线的-",
                                                  "loading-text":
                                                    "正在获取数据...",
                                                  onLoad: onLoad5,
                                                },
                                                {
                                                  default: _withCtx(() => [
                                                    (_openBlock(true),
                                                    _createElementBlock(
                                                      _Fragment,
                                                      null,
                                                      _renderList(
                                                        wxhdList.value,
                                                        (item, index) => {
                                                          return (
                                                            _openBlock(),
                                                            _createBlock(
                                                              _component_MicroHeadlinesList,
                                                              {
                                                                key: index,
                                                                onClick: () =>
                                                                  showDetails(
                                                                    item,
                                                                    "tt"
                                                                  ),
                                                                data: item,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "onClick",
                                                                "data",
                                                              ]
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
                                                [
                                                  "loading",
                                                  "error",
                                                  "finished",
                                                  "onLoad",
                                                ]
                                              ),
                                              wxhdList.value.length === 0 &&
                                              !loading5.value
                                                ? (_openBlock(),
                                                  _createElementBlock(
                                                    "div",
                                                    _hoisted_14,
                                                    [
                                                      _createVNode(
                                                        _component_no_data,
                                                        {
                                                          color: "#ffffff",
                                                        }
                                                      ),
                                                    ]
                                                  ))
                                                : _createCommentVNode("", true),
                                            ]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["active", "onClickTab"]
                ),
              ]),
            ]),
            _createVNode(
              _component_van_popup,
              {
                show: showDetailsPopul.value,
                "onUpdate:show":
                  _cache[12] ||
                  (_cache[12] = ($event) => (showDetailsPopul.value = $event)),
                class: "popup_coentent",
                overlay: false,
                teleport: "#app",
                position: "right",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_15, [
                    _createElementVNode("div", _hoisted_16, [
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
                      _hoisted_17,
                    ]),
                    _createElementVNode("div", _hoisted_18, [
                      type.value === "qp"
                        ? (_openBlock(),
                          _createBlock(
                            _component_ask_for_video_details,
                            {
                              isMy: isMy.value,
                              key: key.value,
                              id: ask_video_id.value,
                            },
                            null,
                            8,
                            ["isMy", "id"]
                          ))
                        : _createCommentVNode("", true),
                      type.value === "tt"
                        ? (_openBlock(),
                          _createBlock(
                            _component_microHeadlines_details,
                            {
                              key: key.value,
                              id: head_lines_id.value,
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
          ],
          64
        )
      );
    };
  },
};
</script>
