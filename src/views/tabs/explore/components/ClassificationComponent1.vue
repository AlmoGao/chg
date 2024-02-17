<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  withCtx as _withCtx,
  createBlock as _createBlock,
} from "vue";

import SwiperCore, { Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import { ref } from "vue";
SwiperCore.use([Scrollbar, Autoplay]);
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    let menuList = ref([]);
    let labelList = ref([]);
    let hotAuthorList = ref([]);
    const { homeMenuApi, labelApi, hotAuthorApi } = getGlobalProperties().$api;

    const getMenuList = () => {
      homeMenuApi("", "get").then((res) => {
        if (res.code === 0) {
          menuList.value = res.data;
        }
      });
    };

    getMenuList();

    const getLabel = () => {
      labelApi("", "get").then((res) => {
        if (res.code === 0) {
          labelList.value = res.data;
        }
      });
    };

    getLabel();

    const getHotAuthor = () => {
      hotAuthorApi("", "get").then((res) => {
        if (res.code === 0) {
          hotAuthorList.value = res.data;
        }
      });
    };

    getHotAuthor();

    const _hoisted_1 = {
      class: "classification",
    };
    const _hoisted_2 = {
      class: "img",
    };
    const _hoisted_3 = {
      class: "text_ellipsis",
    };
    const _hoisted_4 = {
      class: "search_details_page",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_swiper_slide = _resolveComponent("swiper-slide");

      const _component_swiper = _resolveComponent("swiper");

      const _component_search_popup = _resolveComponent("search-popup");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createVNode(
            _component_swiper,
            {
              "slides-per-view": 4,
              autoplay: {
                disableOnInteraction: false,
              },
              scrollbar: {
                draggable: true,
              },
              class: "teacher_ul",
            },
            {
              default: _withCtx(() => [
                (_openBlock(true),
                _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($setup.hotAuthorList, (a, index) => {
                    return (
                      _openBlock(),
                      _createBlock(
                        _component_swiper_slide,
                        {
                          class: "teacher_li",
                          key: index,
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode("li", null, [
                              _createElementVNode("div", _hoisted_2, [
                                _createVNode(
                                  _component_my_image,
                                  {
                                    url: a.top || "123.png",
                                  },
                                  null,
                                  8,
                                  ["url"]
                                ),
                              ]),
                              _createElementVNode(
                                "p",
                                _hoisted_3,
                                _toDisplayString(a.nickname),
                                1
                              ),
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
            }
          ),
          _createVNode(
            _component_van_popup,
            {
              show: $setup.showDetailsPopul,
              "onUpdate:show":
                _cache[0] ||
                (_cache[0] = ($event) => ($setup.showDetailsPopul = $event)),
              class: "popup_coentent",
              teleport: "#app",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_4, [
                  _createVNode(
                    _component_search_popup,
                    {
                      searchText: $setup.searchText,
                      onClose: $setup.close,
                    },
                    null,
                    8,
                    ["searchText", "onClose"]
                  ),
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
