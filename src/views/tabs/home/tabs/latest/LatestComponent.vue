<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  createTextVNode as _createTextVNode,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/coin.png";
import _imports_1 from "@/assets/images/play.png";
import _imports_2 from "@/assets/images/eyeopen.png";
import _imports_3 from "@/assets/images/zan.png";

import { getGlobalProperties } from "@/assets/js/utils.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
export default {
  setup(props) {
    const store = useStore();
    const { newApi, focusSaveApi } = getGlobalProperties().$api;
    let page = ref(1);
    const finished = ref(false);
    let videoList = ref([]);
    const error = ref(false);
    const loading = ref(false);
    const refreshing = ref(false);
    videoList.value = localStorage.getItem("LatestComponent")
      ? JSON.parse(localStorage.getItem("LatestComponent"))
      : [];
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user
        ? store.state.userInfo.focus_user.split(",")
        : [];
    });

    const getVideoList = () => {
      newApi(
        {
          page: page.value,
        },
        "get"
      ).then((res) => {
        refreshing.value = false; // videoList.value = [];
        // res.data.forEach((item) => {
        //   item.isFocus = isFocus.value.includes(item.author_id + "");
        // });

        if (res.code === 0) {
          if (res.data.length) {
            localStorage.setItem(
              "LatestComponent",
              JSON.stringify(res.data.rows.slice(0, 3))
            );
          }

          videoList.value = videoList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    getVideoList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getVideoList();
    };

    const focusSave = (item) => {
      // if (userInfo.value.focus_user.indexOf(item.author_id) !== -1) {
      //   return;
      // }
      const params = {
        user_id: item.author_id,
      };
      focusSaveApi(params, "get").then((res) => {
        // Toast(res.message);
        if (res.code === 0) {
          item.isFocus = !item.isFocus;
          store.dispatch("getUserInfo");
          getVideoList();
        }
      });
    };

    const videoPlay = (item) => {
      store.commit("SET_VIDEO_DETAILS", item);
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "VideoDetails",
      });
    };

    let userInfo = computed(() => {
      return store.state.userInfo;
    });

    const toAutorDetails = (item) => {
      item.user_id = item.author_id;
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "HotAuthorInfo",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const onRefresh = () => {
      videoList.value = [];
      loading.value = true;
      page.value = 1;
      getVideoList();
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-5d3bb09f"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      key: 0,
      style: {
        height: "100px",
      },
    };
    const _hoisted_2 = {
      class: "featured-avItem TwoColumnsVideo",
    };
    const _hoisted_3 = {
      class: "TwoColumnsVideo-cover-wrap",
    };
    const _hoisted_4 = ["onClick"];
    const _hoisted_5 = {
      class: "avItem-cover",
    };

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-linear",
        },
        null,
        -1
      )
    );

    const _hoisted_7 = {
      class: "coin_timer",
    };
    const _hoisted_8 = {
      class: "coin",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_10 = {
      class: "timer",
    };

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-layerCenter",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_1,
          }),
        ],
        -1
      )
    );

    const _hoisted_12 = {
      class: "avItem-layer",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          class: "TwoColumnsVideo-icon",
          src: _imports_2,
        },
        null,
        -1
      )
    );

    const _hoisted_14 = {
      class: "avItem-time",
    };

    const _hoisted_15 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          class: "TwoColumnsVideo-icon",
          src: _imports_3,
        },
        null,
        -1
      )
    );
    console.log({
      props,
      videoList,
      videoPlay,
      focusSave,
      userInfo,
      loading,
      onLoad,
      error,
      finished,
      toAutorDetails,
      onRefresh,
      refreshing,
      Toast,
      isFocus,
    });

    return (_ctx, _cache) => {
      const _component_loading = _resolveComponent("loading");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_pull_refresh = _resolveComponent("van-pull-refresh");

      return (
        _openBlock(),
        _createBlock(
          _component_van_pull_refresh,
          {
            modelValue: refreshing.value,
            "onUpdate:modelValue":
              _cache[2] ||
              (_cache[2] = ($event) => (refreshing.value = $event)),
            "head-height": 80,
            onRefresh: onRefresh,
          },
          {
            loading: _withCtx(() => [_createVNode(_component_loading)]),
            default: _withCtx(() => [
              refreshing.value
                ? (_openBlock(), _createElementBlock("div", _hoisted_1))
                : _createCommentVNode("", true),
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
                    _createElementVNode("div", _hoisted_2, [
                      _createElementVNode("div", _hoisted_3, [
                        (_openBlock(true),
                        _createElementBlock(
                          _Fragment,
                          null,
                          _renderList(videoList.value, (elem) => {
                            return (
                              _openBlock(),
                              _createElementBlock(
                                "div",
                                {
                                  class: "featured-avItem-cover",
                                  key: elem.id,
                                  onClick: () => videoPlay(elem),
                                },
                                [
                                  _createElementVNode("div", _hoisted_5, [
                                    _hoisted_6,
                                    _createElementVNode("div", null, [
                                      _createVNode(
                                        _component_my_image,
                                        {
                                          url: elem.image,
                                        },
                                        null,
                                        8,
                                        ["url"]
                                      ),
                                    ]),
                                    _createElementVNode("div", _hoisted_7, [
                                      _createElementVNode("div", _hoisted_8, [
                                        _hoisted_9,
                                        _createTextVNode(
                                          " " + _toDisplayString(elem.money),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode(
                                        "div",
                                        _hoisted_10,
                                        _toDisplayString(elem.times),
                                        1
                                      ),
                                    ]),
                                    _hoisted_11,
                                  ]),
                                  _createElementVNode("div", _hoisted_12, [
                                    _createElementVNode(
                                      "p",
                                      null,
                                      _toDisplayString(elem.title),
                                      1
                                    ),
                                    _createElementVNode("div", null, [
                                      _createElementVNode("span", null, [
                                        _hoisted_13,
                                        _createTextVNode(
                                          _toDisplayString(elem.count),
                                          1
                                        ),
                                      ]),
                                      _createElementVNode("span", _hoisted_14, [
                                        _hoisted_15,
                                        _createTextVNode(
                                          _toDisplayString(elem.like_num),
                                          1
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ],
                                8,
                                _hoisted_4
                              )
                            );
                          }),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["loading", "error", "finished", "onLoad"]
              ),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "onRefresh"]
        )
      );
    };
  },
};
</script>
