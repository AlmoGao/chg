<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  normalizeClass as _normalizeClass,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import ComicsItem from "./ComicsItem.vue";
import ComicsItemDetails from "./ComicsItemDetails.vue";
export default {
  components: {
    ComicsItem,
    ComicsItemDetails,
  },

  setup() {
    const { comicsHotApi } = getGlobalProperties().$api;
    const comicsHotList = ref([]);
    const page1 = ref(1);
    const finished1 = ref(false);
    const loading1 = ref(false);

    const getComicsHot = () => {
      comicsHotApi(
        {
          page: page1.value,
        },
        "get"
      ).then((res) => {
        console.log(res);

        if (res.code === 0) {
          comicsHotList.value = comicsHotList.value.concat(res.data.rows);
          loading1.value = false;

          if (res.data.rows.length === 0) {
            finished1.value = true;
          }
        }
      });
    }; // getComicsNew();

    getComicsHot();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-4feda0f8"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "audltComics",
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
        "成人漫画",
        -1
      )
    );

    const _hoisted_4 = {
      class: "cont",
    };
    const _hoisted_5 = {
      class: "top_nav",
    };
    const _hoisted_6 = {
      class: "crmh_cont",
    };
    const _hoisted_7 = {
      class: "list",
    };
    const _hoisted_8 = ["onClick"];
    const _hoisted_9 = {
      key: 0,
      class: "item",
    };
    const _hoisted_10 = {
      class: "crmh_cont",
    };
    const _hoisted_11 = {
      class: "list",
    };
    const _hoisted_12 = ["onClick"];
    const _hoisted_13 = {
      key: 0,
      class: "item",
    };
    const _hoisted_14 = {
      class: "details_page",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_comics_item = _resolveComponent("comics-item");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_swipe_item = _resolveComponent("van-swipe-item");

      const _component_van_swipe = _resolveComponent("van-swipe");

      const _component_comics_item_details = _resolveComponent(
        "comics-item-details"
      );

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
                onClick: $setup.close,
              },
              null,
              8,
              ["onClick"]
            ),
            _hoisted_3,
          ]),
          _createElementVNode("div", _hoisted_4, [
            _createElementVNode("div", _hoisted_5, [
              _createElementVNode(
                "div",
                {
                  class: _normalizeClass([
                    "top_nav_item",
                    $setup.topNavIndex === 0 ? "active" : "",
                  ]),
                  onClick:
                    _cache[0] || (_cache[0] = () => $setup.topNavClick(0)),
                },
                " 最新排序 ",
                2
              ),
              _createElementVNode(
                "div",
                {
                  class: _normalizeClass([
                    "top_nav_item",
                    $setup.topNavIndex === 1 ? "active" : "",
                  ]),
                  onClick:
                    _cache[1] || (_cache[1] = () => $setup.topNavClick(1)),
                },
                " 最热排序 ",
                2
              ),
            ]),
            _createVNode(
              _component_van_swipe,
              {
                class: "my-swipe",
                onChange: $setup.change,
                loop: false,
                ref: "swiper",
                "show-indicators": false,
              },
              {
                default: _withCtx(() => [
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_6, [
                        _createVNode(
                          _component_van_list,
                          {
                            loading: $setup.loading,
                            "onUpdate:loading":
                              _cache[2] ||
                              (_cache[2] = ($event) =>
                                ($setup.loading = $event)),
                            error: $setup.error,
                            "onUpdate:error":
                              _cache[3] ||
                              (_cache[3] = ($event) => ($setup.error = $event)),
                            finished: $setup.finished,
                            "error-text": "请求失败，点击重新加载",
                            "finished-text": "-我也是有底线的-",
                            "loading-text": "正在获取数据...",
                            onLoad: $setup.onLoad,
                          },
                          {
                            default: _withCtx(() => [
                              _createElementVNode("div", _hoisted_7, [
                                (_openBlock(true),
                                _createElementBlock(
                                  _Fragment,
                                  null,
                                  _renderList($setup.comicsNewList, (item) => {
                                    return (
                                      _openBlock(),
                                      _createElementBlock(
                                        "div",
                                        {
                                          class: "item",
                                          key: item.id,
                                          onClick: () => $setup.toDetails(item),
                                        },
                                        [
                                          _createVNode(
                                            _component_comics_item,
                                            {
                                              data: item,
                                            },
                                            null,
                                            8,
                                            ["data"]
                                          ),
                                        ],
                                        8,
                                        _hoisted_8
                                      )
                                    );
                                  }),
                                  128
                                )),
                                $setup.comicsNewList.length % 3 === 2
                                  ? (_openBlock(),
                                    _createElementBlock("div", _hoisted_9))
                                  : _createCommentVNode("", true),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["loading", "error", "finished", "onLoad"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }),
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_10, [
                        _createVNode(
                          _component_van_list,
                          {
                            loading: $setup.loading,
                            "onUpdate:loading":
                              _cache[4] ||
                              (_cache[4] = ($event) =>
                                ($setup.loading = $event)),
                            error: $setup.error,
                            "onUpdate:error":
                              _cache[5] ||
                              (_cache[5] = ($event) => ($setup.error = $event)),
                            finished: $setup.finished,
                            "error-text": "请求失败，点击重新加载",
                            "finished-text": "-我也是有底线的-",
                            "loading-text": "正在获取数据...",
                            onLoad: $setup.onLoad,
                          },
                          {
                            default: _withCtx(() => [
                              _createElementVNode("div", _hoisted_11, [
                                (_openBlock(true),
                                _createElementBlock(
                                  _Fragment,
                                  null,
                                  _renderList($setup.comicsHotList, (item) => {
                                    return (
                                      _openBlock(),
                                      _createElementBlock(
                                        "div",
                                        {
                                          class: "item",
                                          key: item.id,
                                          onClick: () => $setup.toDetails(item),
                                        },
                                        [
                                          _createVNode(
                                            _component_comics_item,
                                            {
                                              data: item,
                                            },
                                            null,
                                            8,
                                            ["data"]
                                          ),
                                        ],
                                        8,
                                        _hoisted_12
                                      )
                                    );
                                  }),
                                  128
                                )),
                                $setup.comicsHotList.length % 3 === 2
                                  ? (_openBlock(),
                                    _createElementBlock("div", _hoisted_13))
                                  : _createCommentVNode("", true),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["loading", "error", "finished", "onLoad"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["onChange"]
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: $setup.showDetailsPopul,
              "onUpdate:show":
                _cache[6] ||
                (_cache[6] = ($event) => ($setup.showDetailsPopul = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_14, [
                  (_openBlock(),
                  _createBlock(
                    _component_comics_item_details,
                    {
                      comics_id: $setup.comics_id,
                      onClose: $setup.close,
                      key: $setup.key,
                    },
                    null,
                    8,
                    ["comics_id", "onClose"]
                  )),
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
