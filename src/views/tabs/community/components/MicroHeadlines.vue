<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withCtx as _withCtx,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createBlock as _createBlock,
  createElementVNode as _createElementVNode,
  normalizeStyle as _normalizeStyle,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref, computed } from "vue";
import { Toast } from "vant";
import MicroHeadlinesList from "./MicroHeadlinesList.vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import MicroHeadlinesDetails from "./MicroHeadlinesDetails.vue";
import { useStore } from "vuex";
export default {
  name: "AskForVideo",
  components: {
    MicroHeadlinesList,
    MicroHeadlinesDetails,
  },

  setup(props) {
    const store = useStore();
    let active = ref(0);
    let newList = ref([]);
    let hotList = ref([]);
    let head_lines_id = ref("");
    let showDetailsPopul = ref(false);
    let finished1 = ref(false);
    let error1 = ref(false);
    let loading1 = ref(false);
    let finished2 = ref(false);
    let error2 = ref(false);
    let loading2 = ref(false);
    let page1 = ref(0);
    let page2 = ref(1);
    const { headLineNewApi, headLineHotApi } = getGlobalProperties().$api;
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });

    const getHeadLineNew = () => {
      headLineNewApi(
        {
          page: page1.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isFocus = isFocus.value.includes(item.user_id + "");
          });
          newList.value = newList.value.concat(res.data.rows);
          loading1.value = false;

          if (res.data.rows.length === 0) {
            finished1.value = true;
          }
        }
      });
    };

    const getHeadLineHot = () => {
      headLineHotApi(
        {
          page: page2.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          res.data.rows.forEach((item) => {
            item.isFocus = isFocus.value.includes(item.user_id + "");
          });
          hotList.value = hotList.value.concat(res.data.rows);
          loading2.value = false;

          if (res.data.rows.length === 0) {
            finished2.value = true;
          }
        }
      });
    };

    getHeadLineHot(); // getHeadLineNew();

    const onLoad1 = () => {
      loading1.value = true;
      page1.value++;
      getHeadLineNew();
    };

    const onLoad2 = () => {
      loading2.value = true;
      page2.value++;
      getHeadLineHot();
    };

    const childGetList = () => {
      page1.value = 1;
      page2.value = 1;
      newList.value = [];
      hotList.value = [];
      getHeadLineNew();
      getHeadLineHot();
    };

    const close = () => {
      showDetailsPopul.value = false;
      childGetList();
    };

    const showDetails = (item) => {
      showDetailsPopul.value = true;
      head_lines_id.value = item.id;
    };

    const stopPropagation = ref(false);

    const change = (index) => {
      stopPropagation.value = true;
      active.value = index;

      if (index === 0) {
        stopPropagation.value = false;
      }
    };

    const swiper = ref(null);

    const onClickTab = (index) => {
      swiper.value.swipeTo(index);
    };

    const showBottomBanner = computed(() => {
      return store.state.showBottomBanner;
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-6257ccc2"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "askForVideo",
    };
    const _hoisted_2 = {
      class: "cont",
    };
    const _hoisted_3 = {
      class: "list",
    };
    const _hoisted_4 = {
      class: "list",
    };
    const _hoisted_5 = {
      class: "details_page_app",
    };
    const _hoisted_6 = {
      class: "head_title",
    };

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "微头条",
        -1
      )
    );

    const _hoisted_8 = {
      class: "cont_body_app",
    };

    return (_ctx, _cache) => {
      const _component_van_tab = _resolveComponent("van-tab");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_MicroHeadlinesList =
        _resolveComponent("MicroHeadlinesList");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_swipe_item = _resolveComponent("van-swipe-item");

      const _component_van_swipe = _resolveComponent("van-swipe");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_microHeadlines_details = _resolveComponent(
        "microHeadlines-details"
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
                ]),
                _: 1,
              },
              8,
              ["active", "onChange"]
            ),
            _createVNode(
              _component_van_swipe,
              {
                class: "my-swipe",
                onChange: change,
                "stop-propagation": stopPropagation.value,
                loop: false,
                ref: el => swiper.value = el,
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
                          _createElementVNode("div", _hoisted_3, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: loading1.value,
                                "onUpdate:loading":
                                  _cache[1] ||
                                  (_cache[1] = ($event) =>
                                    (loading1.value = $event)),
                                error: error1.value,
                                "onUpdate:error":
                                  _cache[2] ||
                                  (_cache[2] = ($event) =>
                                    (error1.value = $event)),
                                finished: finished1.value,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": "-我也是有底线的-",
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
                                            _component_MicroHeadlinesList,
                                            {
                                              key: index,
                                              data: item,
                                              onClick: () =>
                                                showDetails(item),
                                            },
                                            null,
                                            8,
                                            ["data", "onClick"]
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
                          _createElementVNode("div", _hoisted_4, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: loading2.value,
                                "onUpdate:loading":
                                  _cache[3] ||
                                  (_cache[3] = ($event) =>
                                    (loading2.value = $event)),
                                error: error2.value,
                                "onUpdate:error":
                                  _cache[4] ||
                                  (_cache[4] = ($event) =>
                                    (error2.value = $event)),
                                finished: finished2.value,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": "-我也是有底线的-",
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
                                            _component_MicroHeadlinesList,
                                            {
                                              key: index,
                                              data: item,
                                              onClick: () =>
                                                showDetails(item),
                                            },
                                            null,
                                            8,
                                            ["data", "onClick"]
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
                          ]),
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
                _cache[5] ||
                (_cache[5] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              teleport: "#app",
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_5, [
                  _createElementVNode("div", _hoisted_6, [
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
                    _hoisted_7,
                  ]),
                  _createElementVNode("div", _hoisted_8, [
                    (_openBlock(),
                    _createBlock(
                      _component_microHeadlines_details,
                      {
                        onChildGetList: childGetList.value,
                        key: head_lines_id.value,
                        id: head_lines_id.value,
                      },
                      null,
                      8,
                      ["onChildGetList", "id"]
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
