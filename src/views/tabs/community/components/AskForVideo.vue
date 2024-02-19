<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withCtx as _withCtx,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  createElementVNode as _createElementVNode,
  createTextVNode as _createTextVNode,
  createElementBlock as _createElementBlock,
  renderList as _renderList,
  Fragment as _Fragment,
  normalizeStyle as _normalizeStyle,
  toDisplayString as _toDisplayString,
  normalizeClass as _normalizeClass,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/icon_fv_choice.png";
import _imports_1 from "@/assets/images/community/icon_fv_rank_one.png";
import _imports_2 from "@/assets/images/community/icon_fv_rank_two.png";
import _imports_3 from "@/assets/images/community/icon_fv_rank_three.png";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
import AskForVideoList from "./AskForVideoList.vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import AskForVideoDetails from "./AskForVideoDetails.vue";
export default {
  name: "AskForVideo",
  components: {
    AskForVideoList,
    AskForVideoDetails,
  },

  setup(props) {
    const store = useStore();
    let active = ref(0);
    let newList = ref([]);
    let hotList = ref([]);
    let recommendList = ref([]);
    let showDetailsPopul = ref(false);
    let ask_video_id = ref("");
    let key = ref(1);
    let finished1 = ref(false);
    let error1 = ref(false);
    let loading1 = ref(false);
    let finished2 = ref(false);
    let error2 = ref(false);
    let loading2 = ref(false);
    let page1 = ref(0);
    let page2 = ref(1);
    const showLoading = ref(false);
    const askSearchData = ref({
      type: "",
      money: "",
      confirm_status: "",
      page: 1,
    });
    const showSearch = ref(false);
    const stopPropagation = ref(true);
    const {
      askVideoNewApi,
      askVideoHotApi,
      askVideoRecommendApi,
      askVideoSearchApi,
    } = getGlobalProperties().$api;
    let isWant = computed(() => {
      return store.state.userInfo.want.split(",");
    });

    const getAskVideoNew = () => {
      askVideoNewApi(
        {
          page: page1.value,
        },
        "get"
      ).then((res) => {
        showLoading.value = false;

        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isWant = isWant.value.includes(item.id + "");
          });
          newList.value = newList.value.concat(res.data.rows);
          loading1.value = false;

          if (res.data.rows.length === 0) {
            finished1.value = true;
          }
        }
      });
    };

    const getAskVideoHot = () => {
      askVideoHotApi(
        {
          page: page2.value,
        },
        "get"
      ).then((res) => {
        showLoading.value = false;
        console.log(res);

        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isWant = isWant.value.includes(item.id + "");
          });
          hotList.value = hotList.value.concat(res.data.rows);
          loading2.value = false;

          if (res.data.rows.length === 0) {
            finished2.value = true;
          }
        }
      });
    };

    const getAskVideoRecommend = () => {
      askVideoRecommendApi("", "get").then((res) => {
        if (res.code === 0) {
          recommendList.value = res.data;
        }
      });
    };

    const close = () => {
      showDetailsPopul.value = false;
    };

    const showDetails = (item) => {
      showDetailsPopul.value = true;
      key.value = Math.random();
      ask_video_id.value = item.id;
    };

    const toAutorDetails = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "HotAuthorInfo",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    getAskVideoHot(); // getAskVideoNew();

    getAskVideoRecommend();

    const change = (index) => {
      stopPropagation.value = true;
      active.value = index;

      if (index === 2) {
        stopPropagation.value = false;
      }
    };

    const showSearchFun = () => {
      showSearch.value = true;
      askSearchData.value.page = 1;
    };

    const askSearchFun = (num, type) => {
      askSearchData.value[type] = num;
    };

    const isSearch = ref(false);

    const askSearch = () => {
      isSearch.value = true;
      showSearch.value = false;
      showLoading.value = true; // loading1.value = true;
      // loading2.value = true;

      if (active.value === 0) {
        if (askSearchData.value.page === 1) {
          newList.value = [];
        }

        if (
          askSearchData.value.money === "" &&
          askSearchData.value.confirm_status === ""
        ) {
          isSearch.value = false;
          newList.value = []; // loading1.value = true;

          page1.value = 1;
          getAskVideoNew();
          return;
        }
      } else {
        if (askSearchData.value.page === 1) {
          hotList.value = [];
        }

        if (
          askSearchData.value.type === "" &&
          askSearchData.value.money === "" &&
          askSearchData.value.confirm_status === ""
        ) {
          isSearch.value = false;
          hotList.value = []; // loading2.value = true;

          page2.value = 1;
          getAskVideoHot();
          return;
        }
      }

      let params = {
        money: askSearchData.value.money,
        confirm_status: askSearchData.value.confirm_status,
        page: askSearchData.value.page,
      };

      if (active.value === 1) {
        params.type = askSearchData.value.type;
      }

      askVideoSearchApi(params, "get").then((res) => {
        showLoading.value = false;

        if (res.code === 0) {
          loading1.value = false;
          loading2.value = false;
          console.log(res);

          if (active.value === 0) {
            res.data.rows.forEach((item) => {
              item.isWant = isWant.value.includes(item.id + "");
            });
            newList.value = newList.value.concat(res.data.rows);

            if (res.data.rows.length === 0) {
              finished1.value = true;
            }
          } else {
            res.data.rows.forEach((item) => {
              item.isWant = isWant.value.includes(item.id + "");
            });
            hotList.value = hotList.value.concat(res.data.rows);

            if (res.data.rows.length === 0) {
              finished2.value = true;
            }
          }
        }
      });
    };

    const reset = () => {
      askSearchData.value = {
        type: "",
        money: "",
        confirm_status: "",
        page: 1,
      };
    };

    const swiper = ref(null);

    const onClickTab = (index) => {
      swiper.value.swipeTo(index);
    };

    const onLoad1 = () => {
      if (!isSearch.value) {
        loading1.value = true;
        page1.value++;
        getAskVideoNew();
      } else {
        askSearchData.value.page++;
        askSearch("fy");
      }
    };

    const onLoad2 = () => {
      if (!isSearch.value) {
        loading2.value = true;
        page2.value++;
        getAskVideoHot();
      } else {
        askSearchData.value.page++;
        askSearch("fy");
      }
    };

    const showBottomBanner = computed(() => {
      return store.state.showBottomBanner;
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-9e6f72b8"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "askForVideo",
    };
    const _hoisted_2 = {
      class: "cont",
    };

    const _hoisted_3 = /*#__PURE__*/ _createTextVNode(" 筛选 ");

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_5 = [_hoisted_3, _hoisted_4];
    const _hoisted_6 = {
      class: "list",
    };
    const _hoisted_7 = {
      class: "list",
    };
    const _hoisted_8 = ["onClick"];
    const _hoisted_9 = {
      class: "num",
    };
    const _hoisted_10 = {
      key: 0,
      src: _imports_1,
      alt: "",
    };
    const _hoisted_11 = {
      key: 1,
      src: _imports_2,
      alt: "",
    };
    const _hoisted_12 = {
      key: 2,
      src: _imports_3,
      alt: "",
    };
    const _hoisted_13 = {
      key: 3,
    };
    const _hoisted_14 = {
      class: "user_box",
    };
    const _hoisted_15 = {
      class: "left_img_box",
    };
    const _hoisted_16 = {
      class: "right_text",
    };
    const _hoisted_17 = {
      class: "left",
    };

    const _hoisted_18 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "right",
        },
        null,
        -1
      )
    );

    const _hoisted_19 = {
      class: "details_page_app",
    };
    const _hoisted_20 = {
      class: "head_title",
    };

    const _hoisted_21 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "详情",
        -1
      )
    );

    const _hoisted_22 = {
      class: "cont_body_app",
    };
    const _hoisted_23 = {
      class: "ask_search",
    };
    const _hoisted_24 = {
      key: 0,
      class: "search_item_title",
    };
    const _hoisted_25 = {
      key: 1,
      class: "search_btns",
    };

    const _hoisted_26 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "search_item_title",
        },
        "赏金",
        -1
      )
    );

    const _hoisted_27 = {
      class: "search_btns",
    };

    const _hoisted_28 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "search_item_title",
        },
        "状态",
        -1
      )
    );

    const _hoisted_29 = {
      class: "search_btns",
    };
    const _hoisted_30 = {
      class: "search_btns bottom_btns",
    };
    console.log({
      props,
      active,
      newList,
      hotList,
      recommendList,
      showDetailsPopul,
      close,
      showDetails,
      ask_video_id,
      toAutorDetails,
      key,
      finished1,
      error1,
      loading1,
      onLoad1,
      finished2,
      error2,
      loading2,
      onLoad2,
      stopPropagation,
      change,
      showSearch,
      showSearchFun,
      askSearchFun,
      askSearchData,
      askSearch,
      reset,
      onClickTab,
      swiper,
      showLoading,
      showBottomBanner,
      Toast,
    });

    return (_ctx, _cache) => {
      const _component_van_tab = _resolveComponent("van-tab");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_Loading = _resolveComponent("Loading");

      const _component_AskForVideoList = _resolveComponent("AskForVideoList");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_swipe_item = _resolveComponent("van-swipe-item");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_swipe = _resolveComponent("van-swipe");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_ask_for_video_details = _resolveComponent(
        "ask-for-video-details"
      );

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_tabs,
              {
                active: active.value,
                "onUpdate:active":
                  _cache[0] ||
                  (_cache[0] = ($event) => (active.value = $event)),
                "line-height": "0",
                swipeable: "",
                animated: "",
                shrink: "",
                onChange: onClickTab,
                "title-active-color": "#fd5c18",
                "title-inactive-color": "#CCCCCC",
                color: "transparent",
                background: "transparent",
              },
              {
                default: _withCtx(() => [
                  _createVNode(_component_van_tab, {
                    title: "最新",
                  }),
                  _createVNode(_component_van_tab, {
                    title: "最热",
                  }),
                  _createVNode(_component_van_tab, {
                    title: "榜单",
                  }),
                ]),
                _: 1,
              },
              8,
              ["active", "onChange"]
            ),
            showLoading.value
              ? (_openBlock(),
                _createBlock(_component_Loading, {
                  key: 0,
                }))
              : _createCommentVNode("", true),
            active.value !== 2
              ? (_openBlock(),
                _createElementBlock(
                  "div",
                  {
                    key: 1,
                    class: "shaix",
                    onClick:
                      _cache[1] ||
                      (_cache[1] = (...args) =>
                        showSearchFun && showSearchFun(...args)),
                  },
                  _hoisted_5
                ))
              : _createCommentVNode("", true),
            _createVNode(
              _component_van_swipe,
              {
                class: "my-swipe",
                onChange: change,
                ref: el => swiper.value = el,
                "stop-propagation": stopPropagation.value,
                loop: false,
                "show-indicators": false,
              },
              {
                default: _withCtx(() => [
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tabs_cont",
                          style: _normalizeStyle({
                            height: showBottomBanner.value
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 180px)",
                          }),
                        },
                        [
                          _createElementVNode("div", _hoisted_6, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: loading1.value,
                                "onUpdate:loading":
                                  _cache[2] ||
                                  (_cache[2] = ($event) =>
                                    (loading1.value = $event)),
                                error: error1.value,
                                "onUpdate:error":
                                  _cache[3] ||
                                  (_cache[3] = ($event) =>
                                    (error1.value = $event)),
                                finished: finished1.value,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": showLoading.value
                                  ? ""
                                  : "-我也是有底线的-",
                                "loading-text": "正在获取数据...",
                                onLoad: onLoad1,
                              },
                              {
                                default: _withCtx(() => [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(
                                      newList.value,
                                      (item, index) => {
                                        return (
                                          _openBlock(),
                                          _createBlock(
                                            _component_AskForVideoList,
                                            {
                                              key: index,
                                              onClick: () =>
                                                showDetails(item),
                                              data: item,
                                            },
                                            null,
                                            8,
                                            ["onClick", "data"]
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
                                "finished-text",
                                "onLoad",
                              ]
                            ),
                          ]),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  }),
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tabs_cont",
                          style: _normalizeStyle({
                            height: showBottomBanner.value
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 180px)",
                          }),
                        },
                        [
                          _createElementVNode("div", _hoisted_7, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: loading2.value,
                                "onUpdate:loading":
                                  _cache[4] ||
                                  (_cache[4] = ($event) =>
                                    (loading2.value = $event)),
                                error: error2.value,
                                "onUpdate:error":
                                  _cache[5] ||
                                  (_cache[5] = ($event) =>
                                    (error2.value = $event)),
                                finished: finished2.value,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": showLoading.value
                                  ? ""
                                  : "-我也是有底线的-",
                                "loading-text": "正在获取数据...",
                                onLoad: onLoad2,
                              },
                              {
                                default: _withCtx(() => [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(
                                      hotList.value,
                                      (item, index) => {
                                        return (
                                          _openBlock(),
                                          _createBlock(
                                            _component_AskForVideoList,
                                            {
                                              key: index,
                                              onClick: () =>
                                                showDetails(item),
                                              data: item,
                                            },
                                            null,
                                            8,
                                            ["onClick", "data"]
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
                                "finished-text",
                                "onLoad",
                              ]
                            ),
                          ]),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  }),
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode(
                        "div",
                        {
                          class: "tabs_cont",
                          style: _normalizeStyle({
                            height: showBottomBanner.value
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 180px)",
                          }),
                        },
                        [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList(recommendList.value, (item, index) => {
                              return (
                                _openBlock(),
                                _createElementBlock(
                                  "div",
                                  {
                                    class: "bd_box",
                                    onClick: () => toAutorDetails(item),
                                    key: index,
                                  },
                                  [
                                    _createElementVNode("div", _hoisted_9, [
                                      index === 0
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "img",
                                            _hoisted_10
                                          ))
                                        : _createCommentVNode("", true),
                                      index === 1
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "img",
                                            _hoisted_11
                                          ))
                                        : _createCommentVNode("", true),
                                      index === 2
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "img",
                                            _hoisted_12
                                          ))
                                        : _createCommentVNode("", true),
                                      index > 2
                                        ? (_openBlock(),
                                          _createElementBlock(
                                            "span",
                                            _hoisted_13,
                                            _toDisplayString(index + 1),
                                            1
                                          ))
                                        : _createCommentVNode("", true),
                                    ]),
                                    _createElementVNode("div", _hoisted_14, [
                                      _createElementVNode("div", _hoisted_15, [
                                        _createVNode(
                                          _component_my_image,
                                          {
                                            url: item.top,
                                          },
                                          null,
                                          8,
                                          ["url"]
                                        ),
                                      ]),
                                      _createElementVNode("div", _hoisted_16, [
                                        _createElementVNode(
                                          "div",
                                          _hoisted_17,
                                          [
                                            _createElementVNode(
                                              "p",
                                              null,
                                              _toDisplayString(item.nickname),
                                              1
                                            ),
                                            _createElementVNode(
                                              "p",
                                              null,
                                              "粉丝" +
                                                _toDisplayString(item.fans),
                                              1
                                            ),
                                          ]
                                        ),
                                        _hoisted_18,
                                      ]),
                                    ]),
                                  ],
                                  8,
                                  _hoisted_8
                                )
                              );
                            }),
                            128
                          )),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["onChange", "stop-propagation"]
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[6] ||
                (_cache[6] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              teleport: "#app",
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_19, [
                  _createElementVNode("div", _hoisted_20, [
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
                    _hoisted_21,
                  ]),
                  _createElementVNode("div", _hoisted_22, [
                    (_openBlock(),
                    _createBlock(
                      _component_ask_for_video_details,
                      {
                        key: key.value,
                        id: ask_video_id.value,
                      },
                      null,
                      8,
                      ["id"]
                    )),
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
              teleport: "#app",
              show: showSearch.value,
              "onUpdate:show":
                _cache[16] ||
                (_cache[16] = ($event) => (showSearch.value = $event)),
              position: "top",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_23, [
                  active.value === 1
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_24, "排序"))
                    : _createCommentVNode("", true),
                  active.value === 1
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_25, [
                        _createElementVNode(
                          "span",
                          {
                            class: _normalizeClass(
                              askSearchData.value.type === 1 ? "active" : ""
                            ),
                            onClick:
                              _cache[7] ||
                              (_cache[7] = () =>
                                askSearchFun(1, "type")),
                          },
                          "想看",
                          2
                        ),
                        _createElementVNode(
                          "span",
                          {
                            class: _normalizeClass(
                              askSearchData.value.type === 2 ? "active" : ""
                            ),
                            onClick:
                              _cache[8] ||
                              (_cache[8] = () =>
                                askSearchFun(2, "type")),
                          },
                          "赏金",
                          2
                        ),
                        _createElementVNode(
                          "span",
                          {
                            class: _normalizeClass(
                              askSearchData.value.type === 3 ? "active" : ""
                            ),
                            onClick:
                              _cache[9] ||
                              (_cache[9] = () =>
                                askSearchFun(3, "type")),
                          },
                          "回复",
                          2
                        ),
                      ]))
                    : _createCommentVNode("", true),
                  _hoisted_26,
                  _createElementVNode("div", _hoisted_27, [
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          askSearchData.value.money === 1 ? "active" : ""
                        ),
                        onClick:
                          _cache[10] ||
                          (_cache[10] = () => askSearchFun(1, "money")),
                      },
                      "有赏金",
                      2
                    ),
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          askSearchData.value.money === 0 ? "active" : ""
                        ),
                        onClick:
                          _cache[11] ||
                          (_cache[11] = () => askSearchFun(0, "money")),
                      },
                      "无赏金",
                      2
                    ),
                  ]),
                  _hoisted_28,
                  _createElementVNode("div", _hoisted_29, [
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          askSearchData.value.confirm_status === 1
                            ? "active"
                            : ""
                        ),
                        onClick:
                          _cache[12] ||
                          (_cache[12] = () =>
                            askSearchFun(1, "confirm_status")),
                      },
                      "已采纳",
                      2
                    ),
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(
                          askSearchData.value.confirm_status === 0
                            ? "active"
                            : ""
                        ),
                        onClick:
                          _cache[13] ||
                          (_cache[13] = () =>
                            askSearchFun(0, "confirm_status")),
                      },
                      "未采纳",
                      2
                    ),
                  ]),
                  _createElementVNode("div", _hoisted_30, [
                    _createElementVNode(
                      "span",
                      {
                        class: "undefined",
                        onClick:
                          _cache[14] ||
                          (_cache[14] = (...args) =>
                            reset && reset(...args)),
                      },
                      "重置"
                    ),
                    _createElementVNode(
                      "span",
                      {
                        class: "sure_btn",
                        onClick:
                          _cache[15] ||
                          (_cache[15] = (...args) =>
                            askSearch && askSearch(...args)),
                      },
                      "确定"
                    ),
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
