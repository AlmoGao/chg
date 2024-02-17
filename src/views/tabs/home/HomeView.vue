<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  normalizeStyle as _normalizeStyle,
  withCtx as _withCtx,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/home_logo.png";
import _imports_1 from "@/assets/images/everyday.png";

import FocusComponent from "./tabs/focus/FocusComponent.vue";
import RecommondComponent from "./tabs/recommond/RecommondComponent.vue";
import LatestComponent from "./tabs/latest/LatestComponent.vue";
import StudioVideo from "./tabs/studio/StudioVideo.vue";
import todaysHeadlines from "./tabs/todays/todaysHeadlines.vue";
import AdultComics from "./tabs/adultComics/AdultComics.vue";
export default {
  components: {
    FocusComponent,
    RecommondComponent,
    LatestComponent,
    StudioVideo,
    todaysHeadlines,
    AdultComics,
  },
  name: "HomeView",

  setup() {
    const _withScopeId = (n) => (
      _pushScopeId("data-v-0dbb8f3f"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      id: "home",
      class: "home",
    };
    const _hoisted_2 = {
      class: "header",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "li",
        {
          class: "logo",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
            alt: "",
            srcset: "",
          }),
        ],
        -1
      )
    );

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
          alt: "",
          srcset: "",
        },
        null,
        -1
      )
    );

    const _hoisted_5 = [_hoisted_4];
    const _hoisted_6 = {
      class: "tab_box webkit-overflow-scrolling-touch",
    };
    const _hoisted_7 = {
      class: "details_page",
    };
    return (_ctx, _cache, $props, $setup) => {
      const _component_van_skeleton = _resolveComponent("van-skeleton");

      const _component_van_search = _resolveComponent("van-search");

      const _component_focus_component = _resolveComponent("focus-component");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_recommond_component = _resolveComponent(
        "recommond-component"
      );

      const _component_studio_video = _resolveComponent("studio-video");

      const _component_todays_headlines = _resolveComponent("todays-headlines");

      const _component_latest_component = _resolveComponent("latest-component");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_AdultComics = _resolveComponent("AdultComics");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            _createVNode(
              _component_van_skeleton,
              {
                title: "",
                row: 10,
                loading: $setup.skeletonLoading,
              },
              null,
              8,
              ["loading"]
            ),
            _createElementVNode("div", _hoisted_1, [
              _createElementVNode("ul", _hoisted_2, [
                _hoisted_3,
                _createElementVNode("li", null, [
                  _createVNode(_component_van_search, {
                    background: "transparent",
                    shape: "round",
                    disabled: "",
                    placeholder: "视频｜创作",
                    onClick:
                      _cache[0] ||
                      (_cache[0] = () => $setup.handleShowStack("VideoSearch")),
                  }),
                ]),
                _createElementVNode(
                  "li",
                  {
                    class: "everyday",
                    onClick:
                      _cache[1] ||
                      (_cache[1] = () => $setup.handleShowStack("VideoMrtj")),
                  },
                  _hoisted_5
                ),
              ]),
              _createElementVNode("div", _hoisted_6, [
                _createVNode(
                  _component_van_tabs,
                  {
                    active: $setup.active,
                    "onUpdate:active":
                      _cache[2] ||
                      (_cache[2] = ($event) => ($setup.active = $event)),
                    swipeable: "",
                    animated: "",
                    background: "#282828",
                    "title-active-color": "#fd5c18",
                    "title-inactive-color": "#fff",
                    "line-height": "0px",
                  },
                  {
                    default: _withCtx(() => [
                      _createVNode(
                        _component_van_tab,
                        {
                          "title-class": "nav_title",
                          title: "关注",
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode(
                              "div",
                              {
                                class: "cont_body",
                                style: _normalizeStyle({
                                  height: $setup.showBottomBanner
                                    ? "calc(100vh - 220px)"
                                    : "calc(100vh - 150px)",
                                }),
                              },
                              [_createVNode(_component_focus_component)],
                              4
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      _createVNode(
                        _component_van_tab,
                        {
                          "title-class": "nav_title",
                          title: "推荐",
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode(
                              "div",
                              {
                                class: "cont_body",
                                style: _normalizeStyle({
                                  height: $setup.showBottomBanner
                                    ? "calc(100vh - 220px)"
                                    : "calc(100vh - 150px)",
                                }),
                              },
                              [
                                _createVNode(
                                  _component_recommond_component,
                                  {
                                    onToManhua: $setup.toManhua,
                                    onSkeletonF: $setup.skeletonF,
                                  },
                                  null,
                                  8,
                                  ["onToManhua", "onSkeletonF"]
                                ),
                              ],
                              4
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      _createVNode(
                        _component_van_tab,
                        {
                          "title-class": "nav_title",
                          title: "制片厂",
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode(
                              "div",
                              {
                                class: "cont_body",
                                style: _normalizeStyle({
                                  height: $setup.showBottomBanner
                                    ? "calc(100vh - 220px)"
                                    : "calc(100vh - 150px)",
                                }),
                              },
                              [_createVNode(_component_studio_video)],
                              4
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      _createVNode(
                        _component_van_tab,
                        {
                          "title-class": "nav_title",
                          title: "今日头条",
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode(
                              "div",
                              {
                                class: "cont_body",
                                style: _normalizeStyle({
                                  height: $setup.showBottomBanner
                                    ? "calc(100vh - 220px)"
                                    : "calc(100vh - 150px)",
                                }),
                              },
                              [_createVNode(_component_todays_headlines)],
                              4
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      _createVNode(
                        _component_van_tab,
                        {
                          "title-class": "nav_title",
                          title: "最新",
                        },
                        {
                          default: _withCtx(() => [
                            _createElementVNode(
                              "div",
                              {
                                class: "cont_body",
                                style: _normalizeStyle({
                                  height: $setup.showBottomBanner
                                    ? "calc(100vh - 220px)"
                                    : "calc(100vh - 150px)",
                                }),
                              },
                              [_createVNode(_component_latest_component)],
                              4
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["active"]
                ),
                _createVNode(
                  _component_van_icon,
                  {
                    name: "wap-nav",
                    onClick: $setup.toFaxian,
                  },
                  null,
                  8,
                  ["onClick"]
                ),
              ]),
              _createVNode(
                _component_van_popup,
                {
                  show: $setup.showAdultComicsPopul,
                  "onUpdate:show":
                    _cache[3] ||
                    (_cache[3] = ($event) =>
                      ($setup.showAdultComicsPopul = $event)),
                  class: "popup_coentent",
                  overlay: false,
                  position: "right",
                },
                {
                  default: _withCtx(() => [
                    _createElementVNode("div", _hoisted_7, [
                      _createVNode(
                        _component_AdultComics,
                        {
                          onClose: $setup.close,
                        },
                        null,
                        8,
                        ["onClose"]
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
            ]),
          ],
          64
        )
      );
    };
  },
};
</script>
