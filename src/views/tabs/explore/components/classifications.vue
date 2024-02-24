<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  createTextVNode as _createTextVNode,
  normalizeClass as _normalizeClass,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withCtx as _withCtx,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import SwiperCore, { Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import { ref } from "vue";

import { getGlobalProperties } from "@/assets/js/utils.js";
import { useStore } from "vuex";

SwiperCore.use([Scrollbar, Autoplay]);
export default {
  name: "classificationComponent",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup(props) {
    const store = useStore();
    let activeIndex = ref(0);
    let showDetailsPopul = ref(false);
    let searchText = ref("");
    let menuList = ref([]);
    let labelList = ref([]);
    let hotAuthorList = ref([]);
    let popupType = ref(1); // let user_id = ref("");

    let menu_id = ref("");
    let label_id = ref("");
    let menuTetx = ref("");
    const { homeMenuApi, hotAuthorApi } = getGlobalProperties().$api;
    let swipe = ref(null);

    const tabItemClick = (item, index) => {
      activeIndex.value = index;
      menu_id.value = item.id;
      label_id.value = "";
      menuTetx.value = item.name;
      swipe.value.swipeTo(index);
    };

    const getMenuList = () => {
      homeMenuApi("", "get").then((res) => {
        if (res.code === 0) {
          menuList.value = res.data;

          if (res.data.length) {
            menu_id.value = res.data[0].id;
            menuTetx.value = res.data[0].name;
          }
        }
      });
    };

    getMenuList();

    const getHotAuthor = () => {
      hotAuthorApi("", "get").then((res) => {
        if (res.code === 0) {
          hotAuthorList.value = res.data;
        }
      });
    };

    getHotAuthor();

    const labelSearch = (item) => {
      searchText.value = item.name;
      label_id.value = item.id;
      popupType.value = 1;
      showDetailsPopul.value = true;
    };

    const toAutorDetails = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "HotAuthorInfo",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const menuAll = () => {
      popupType.value = 1;
      label_id.value = "";
      searchText.value = menuTetx.value;
      showDetailsPopul.value = true;
    };

    const close = () => {
      showDetailsPopul.value = false; // searchText.value = "";
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-0a300d23"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "classification",
    };
    const _hoisted_2 = {
      class: "left_tab",
    };
    const _hoisted_3 = ["onClick"];

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "line",
        },
        null,
        -1
      )
    );

    const _hoisted_5 = {
      class: "right_cont",
    };
    const _hoisted_6 = {
      class: "swiper_cont",
    };
    const _hoisted_7 = {
      class: "top",
    };
    const _hoisted_8 = {
      class: "title",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "热门创作者", -1)
    );

    const _hoisted_10 = ["onClick"];
    const _hoisted_11 = {
      class: "img",
    };
    const _hoisted_12 = {
      class: "text_ellipsis",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "label_title",
        },
        "全部标签",
        -1
      )
    );

    const _hoisted_14 = {
      class: "label_list",
    };
    const _hoisted_15 = ["onClick"];
    const _hoisted_16 = {
      key: 0,
      class: "label_item label_item_null",
    };
    const _hoisted_17 = {
      class: "search_details_page",
    };

    const _component_my_image = _resolveComponent("my-image");

    const _component_swiper_slide = _resolveComponent("swiper-slide");

    const _component_swiper = _resolveComponent("swiper");

    const _component_van_swipe_item = _resolveComponent("van-swipe-item");

    const _component_van_swipe = _resolveComponent("van-swipe");

    const _component_search_popup = _resolveComponent("search-popup");

    const _component_van_popup = _resolveComponent("van-popup");
    return (_ctx, _cache) => {
      const _class_list = {
        key: 0,
        class: "class_list",
      };
      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            (_openBlock(true),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(menuList.value, (item, index) => {
                return (
                  _openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      key: index,
                      class: _normalizeClass([
                        "tab_item",
                        index === activeIndex.value ? "active" : "",
                      ]),
                      onClick: () => tabItemClick(item, index),
                    },
                    [
                      _hoisted_4,
                      _createTextVNode(" " + _toDisplayString(item.name), 1),
                    ],
                    10,
                    _hoisted_3
                  )
                );
              }),
              128
            )),
          ]),
          _createElementVNode("div", _hoisted_5, [
            _createVNode(
              _component_van_swipe,
              {
                ref: (el) => (swipe.value = el),
                class: "class-swiper2",
                loop: false,
                vertical: "",
                touchable: false,
              },
              {
                default: _withCtx(() => [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(menuList.value, (i, d) => {
                      return (
                        _openBlock(),
                        _createBlock(
                          _component_van_swipe_item,
                          {
                            key: d,
                          },
                          {
                            default: _withCtx(() => [
                              _createElementVNode("div", _hoisted_6, [
                                _createElementVNode("div", _hoisted_7, [
                                  _createElementVNode("p", _hoisted_8, [
                                    _hoisted_9,
                                    _createElementVNode(
                                      "span",
                                      {
                                        class: "look_all",
                                        onClick:
                                          _cache[0] ||
                                          (_cache[0] = (...args) =>
                                            menuAll && menuAll(...args)),
                                      },
                                      "查看全部"
                                    ),
                                  ]),
                                  _createElementVNode("ul", null, [
                                    (_openBlock(),
                                    _createBlock(
                                      _component_swiper,
                                      {
                                        "slides-per-view": 4,
                                        "space-between": 15,
                                        key: d,
                                        autoplay: false,
                                        touchStartForcePreventDefault: true,
                                        touchMoveStopPropagation: true,
                                        scrollbar: {
                                          draggable: true,
                                          stopPropagation: true,
                                          touchMoveStopPropagation: true,
                                          touchStartForcePreventDefault: true,
                                        },
                                        class: "teacher_ul",
                                        id: "teacher_ul",
                                      },
                                      {
                                        default: _withCtx(() => [
                                          (_openBlock(true),
                                          _createElementBlock(
                                            _Fragment,
                                            null,
                                            _renderList(
                                              hotAuthorList.value,
                                              (a) => {
                                                return (
                                                  _openBlock(),
                                                  _createBlock(
                                                    _component_swiper_slide,
                                                    {
                                                      class: "teacher_li",
                                                      key: a.id,
                                                    },
                                                    {
                                                      default: _withCtx(() => [
                                                        _createElementVNode(
                                                          "li",
                                                          {
                                                            onClick: () =>
                                                              toAutorDetails(a),
                                                          },
                                                          [
                                                            _createElementVNode(
                                                              "div",
                                                              _hoisted_11,
                                                              [
                                                                _createVNode(
                                                                  _component_my_image,
                                                                  {
                                                                    url:
                                                                      a.top ||
                                                                      "123.png",
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["url"]
                                                                ),
                                                              ]
                                                            ),
                                                            _createElementVNode(
                                                              "p",
                                                              _hoisted_12,
                                                              _toDisplayString(
                                                                a.nickname
                                                              ),
                                                              1
                                                            ),
                                                          ],
                                                          8,
                                                          _hoisted_10
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  )
                                                );
                                              }
                                            ),
                                            128
                                          )),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    )),
                                  ]),
                                ]),
                                // _hoisted_13,
                                // _createElementVNode("div", _hoisted_14, [
                                //   (_openBlock(true),
                                //   _createElementBlock(
                                //     _Fragment,
                                //     null,
                                //     _renderList(i.label, (b, c) => {
                                //       return (
                                //         _openBlock(),
                                //         _createElementBlock(
                                //           "div",
                                //           {
                                //             key: c,
                                //             onClick: () =>
                                //               labelSearch(b),
                                //             class: "label_item",
                                //           },
                                //           _toDisplayString(b.name),
                                //           9,
                                //           _hoisted_15
                                //         )
                                //       );
                                //     }),
                                //     128
                                //   )),
                                //   // eslint-disable-next-line
                                //   50 % 3 === 2
                                //     ? (_openBlock(),
                                //       _createElementBlock("div", _hoisted_16))
                                //     : _createCommentVNode("", true),
                                // ]),
                                // menu_id.value = activeIndex.value
                                activeIndex.value == d ? 
                                _createBlock(
                                  _component_search_popup,
                                  {
                                    key: 0,
                                    mini: true,
                                    searchText: searchText.value,
                                    menu_id: menu_id.value,
                                    label_id: label_id.value,
                                    onClose: close,
                                  },
                                  null,
                                  8,
                                  [
                                    "mini",
                                    "searchText",
                                    "menu_id",
                                    "label_id",
                                    "onClose",
                                  ]
                                ) : _createCommentVNode("", true),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      );
                    }),
                    128
                  )),
                ]),
                _: 1,
              },
              512
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[1] ||
                (_cache[1] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              teleport: "#app",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_17, [
                  popupType.value === 1
                    ? (_openBlock(),
                      _createBlock(
                        _component_search_popup,
                        {
                          key: 0,
                          searchText: searchText.value,
                          menu_id: menu_id.value,
                          label_id: label_id.value,
                          onClose: close,
                        },
                        null,
                        8,
                        ["searchText", "menu_id", "label_id", "onClose"]
                      ))
                    : _createCommentVNode("", true),
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
