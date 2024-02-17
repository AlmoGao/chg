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

  setup() {
    const store = useStore();
    let hotList = ref([]);
    let finished2 = ref(false);
    let loading2 = ref(false);
    let page2 = ref(1);
    const { headLineHotApi } = getGlobalProperties().$api;
    let isFocus = computed(() => {
      return store.state.userInfo.focus_user.split(",");
    });

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
    return (_ctx, _cache, $props, $setup) => {
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
                active: $setup.active,
                "onUpdate:active":
                  _cache[0] ||
                  (_cache[0] = ($event) => ($setup.active = $event)),
                "line-height": "0",
                swipeable: "",
                animated: "",
                shrink: "",
                onChange: $setup.onClickTab,
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
                onChange: $setup.change,
                "stop-propagation": $setup.stopPropagation,
                loop: false,
                ref: "swiper",
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
                            height: $setup.showBottomBanner
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 312px)",
                          }),
                        },
                        [
                          _createElementVNode("div", _hoisted_3, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: $setup.loading1,
                                "onUpdate:loading":
                                  _cache[1] ||
                                  (_cache[1] = ($event) =>
                                    ($setup.loading1 = $event)),
                                error: $setup.error1,
                                "onUpdate:error":
                                  _cache[2] ||
                                  (_cache[2] = ($event) =>
                                    ($setup.error1 = $event)),
                                finished: $setup.finished1,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": "-我也是有底线的-",
                                "loading-text": "正在获取数据...",
                                onLoad: $setup.onLoad1,
                              },
                              {
                                default: _withCtx(() => [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(
                                      $setup.newList,
                                      (item, index) => {
                                        return (
                                          _openBlock(),
                                          _createBlock(
                                            _component_MicroHeadlinesList,
                                            {
                                              key: index,
                                              data: item,
                                              onClick: () =>
                                                $setup.showDetails(item),
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
                            height: $setup.showBottomBanner
                              ? "calc(100vh - 382px)"
                              : "calc(100vh - 312px)",
                          }),
                        },
                        [
                          _createElementVNode("div", _hoisted_4, [
                            _createVNode(
                              _component_van_list,
                              {
                                loading: $setup.loading2,
                                "onUpdate:loading":
                                  _cache[3] ||
                                  (_cache[3] = ($event) =>
                                    ($setup.loading2 = $event)),
                                error: $setup.error2,
                                "onUpdate:error":
                                  _cache[4] ||
                                  (_cache[4] = ($event) =>
                                    ($setup.error2 = $event)),
                                finished: $setup.finished2,
                                offset: 20,
                                "error-text": "请求失败，点击重新加载",
                                "finished-text": "-我也是有底线的-",
                                "loading-text": "正在获取数据...",
                                onLoad: $setup.onLoad2,
                              },
                              {
                                default: _withCtx(() => [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(
                                      $setup.hotList,
                                      (item, index) => {
                                        return (
                                          _openBlock(),
                                          _createBlock(
                                            _component_MicroHeadlinesList,
                                            {
                                              key: index,
                                              data: item,
                                              onClick: () =>
                                                $setup.showDetails(item),
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
              show: $setup.showDetailsPopul,
              "onUpdate:show":
                _cache[5] ||
                (_cache[5] = ($event) => ($setup.showDetailsPopul = $event)),
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
                        onClick: $setup.close,
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
                        onChildGetList: $setup.childGetList,
                        key: $setup.head_lines_id,
                        id: $setup.head_lines_id,
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
