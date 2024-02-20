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
  createTextVNode as _createTextVNode,
  withCtx as _withCtx,
  createCommentVNode as _createCommentVNode,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/play.png";
import _imports_1 from "@/assets/images/eye-open.png";
import _imports_2 from "@/assets/images/zan.png";

import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { useStore } from "vuex";
import ComicsItem from "../../views/tabs/home/tabs/adultComics/ComicsItem.vue";
import ComicsItemDetails from "../../views/tabs/home/tabs/adultComics/ComicsItemDetails.vue";
export default {
  name: "MyLike",
  components: {
    ComicsItem,
    ComicsItemDetails,
  },

  setup(props, { emit }) {
    const store = useStore();
    const showDetailsPopul = ref(false);
    const { likeListApi } = getGlobalProperties().$api;
    const likeList = ref([]);
    let page = ref(0);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);
    const active = ref(0);
    const type = ref(1);
    const showDetailsPopul1 = ref(false);
    const key = ref("");

    const close = (type) => {
      if (type === 1) {
        emit("close");
      } else {
        showDetailsPopul.value = false;
      }
    };

    const close1 = () => {
      showDetailsPopul1.value = false;
    };

    const activeIndex1 = ref(0);
    const activeIndex2 = ref(0);
    const labelLists = ref([
      {
        label: "全部",
      },
      {
        label: "自定义",
      },
    ]);

    const labelItemClick = (item, index, type) => {
      if (item.label !== "自定义") {
        if (type === 1) {
          activeIndex1.value = index;
        } else if (type === 2) {
          activeIndex2.value = index;
        }
      } else {
        showDetailsPopul.value = true;
      }
    };

    const getLikeList = () => {
      const params = {
        type: type.value,
        all: 2,
        page: page.value,
      };
      likeListApi(params, "get").then((res) => {

        if (res.code === 0) {
          loading.value = false;
          likeList.value = likeList.value.concat(res.data.rows);

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    }; // getLikeList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getLikeList();
    };

    const onClickTab = () => {
      if (active.value === 0) {
        type.value = 1;
      } else {
        type.value = 2;
      }

      finished.value = false;
      likeList.value = [];
      page.value = 1;
      getLikeList();
    };

    const videoPlay = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "VideoDetails",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const comics_id = ref("");

    const toDetails = (item) => {
      comics_id.value = item.id;
      key.value = Math.random();
      showDetailsPopul1.value = true;
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-3c2c68ab"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "myLike",
    };
    const _hoisted_2 = {
      class: "cont",
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

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "avItem-layerCenter",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
          }),
        ],
        -1
      )
    );

    const _hoisted_8 = {
      class: "TwoColumnsVideo-cover-bottom-row",
    };
    const _hoisted_9 = {
      class: "avItem-time",
    };
    const _hoisted_10 = {
      class: "avItem-layer",
    };

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          class: "TwoColumnsVideo-icon",
          src: _imports_1,
        },
        null,
        -1
      )
    );

    const _hoisted_12 = {
      class: "avItem-time",
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
      class: "crmh_cont",
    };
    const _hoisted_15 = {
      class: "list",
    };
    const _hoisted_16 = ["onClick"];
    const _hoisted_17 = {
      key: 0,
      class: "item",
    };
    const _hoisted_18 = {
      class: "promotionRecord",
    };
    const _hoisted_19 = {
      class: "cont_body",
    };
    const _hoisted_20 = {
      class: "details_page",
    };

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_comics_item = _resolveComponent("comics-item");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_tag_management = _resolveComponent("tag-management");

      const _component_van_popup = _resolveComponent("van-popup");

      const _component_comics_item_details = _resolveComponent(
        "comics-item-details"
      );

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "div",
            {
              class: "head_titles head_top_20",
              onClick: _cache[0] || (_cache[0] = () => close(1)),
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
                active: active.value,
                "onUpdate:active":
                  _cache[5] ||
                  (_cache[5] = ($event) => (active.value = $event)),
                "line-height": "0",
                animated: "",
                "title-active-color": "#fd5c18",
                "title-inactive-color": "#CCCCCC",
                color: "transparent",
                onClickTab: onClickTab,
                background: "transparent",
              },
              {
                default: _withCtx(() => [
                  _createVNode(
                    _component_van_tab,
                    {
                      title: "视频",
                    },
                    {
                      default: _withCtx(() => [
                        _createElementVNode("div", _hoisted_3, [
                          _createVNode(
                            _component_van_list,
                            {
                              loading: loading.value,
                              "onUpdate:loading":
                                _cache[1] ||
                                (_cache[1] = ($event) =>
                                  (loading.value = $event)),
                              error: error.value,
                              "onUpdate:error":
                                _cache[2] ||
                                (_cache[2] = ($event) =>
                                  (error.value = $event)),
                              finished: finished.value,
                              offset: 20,
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
                                  _renderList(likeList.value, (item) => {
                                    return (
                                      _openBlock(),
                                      _createElementBlock(
                                        "div",
                                        {
                                          class: "featured-avItem-cover",
                                          key: item.id,
                                          onClick: () =>
                                            videoPlay(item),
                                        },
                                        [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_5,
                                            [
                                              _hoisted_6,
                                              _createElementVNode("div", null, [
                                                _createVNode(
                                                  _component_my_image,
                                                  {
                                                    url: item.image,
                                                  },
                                                  null,
                                                  8,
                                                  ["url"]
                                                ),
                                              ]),
                                              _hoisted_7,
                                              _createElementVNode(
                                                "div",
                                                _hoisted_8,
                                                [
                                                  _createElementVNode(
                                                    "span",
                                                    _hoisted_9,
                                                    _toDisplayString(
                                                      item.times
                                                    ),
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _createElementVNode(
                                            "div",
                                            _hoisted_10,
                                            [
                                              _createElementVNode(
                                                "p",
                                                null,
                                                _toDisplayString(item.title),
                                                1
                                              ),
                                              _createElementVNode("div", null, [
                                                _createElementVNode(
                                                  "span",
                                                  null,
                                                  [
                                                    _hoisted_11,
                                                    _createTextVNode(
                                                      _toDisplayString(
                                                        item.count
                                                      ),
                                                      1
                                                    ),
                                                  ]
                                                ),
                                                _createElementVNode(
                                                  "span",
                                                  _hoisted_12,
                                                  [
                                                    _hoisted_13,
                                                    _createTextVNode(
                                                      _toDisplayString(
                                                        item.like_num
                                                      ),
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ],
                                        8,
                                        _hoisted_4
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
                      ]),
                      _: 1,
                    }
                  ),
                  _createVNode(
                    _component_van_tab,
                    {
                      title: "漫画",
                    },
                    {
                      default: _withCtx(() => [
                        _createElementVNode("div", _hoisted_14, [
                          _createVNode(
                            _component_van_list,
                            {
                              loading: loading.value,
                              "onUpdate:loading":
                                _cache[3] ||
                                (_cache[3] = ($event) =>
                                  (loading.value = $event)),
                              error: error.value,
                              "onUpdate:error":
                                _cache[4] ||
                                (_cache[4] = ($event) =>
                                  (error.value = $event)),
                              finished: finished.value,
                              "error-text": "请求失败，点击重新加载",
                              "finished-text": "-我也是有底线的-",
                              "loading-text": "正在获取数据...",
                              onLoad: onLoad,
                            },
                            {
                              default: _withCtx(() => [
                                _createElementVNode("div", _hoisted_15, [
                                  (_openBlock(true),
                                  _createElementBlock(
                                    _Fragment,
                                    null,
                                    _renderList(likeList.value, (item) => {
                                      return (
                                        _openBlock(),
                                        _createElementBlock(
                                          "div",
                                          {
                                            class: "item",
                                            key: item.id,
                                            onClick: () =>
                                              toDetails(item),
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
                                          _hoisted_16
                                        )
                                      );
                                    }),
                                    128
                                  )),
                                  likeList.value.length % 3 === 2
                                    ? (_openBlock(),
                                      _createElementBlock("div", _hoisted_17))
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
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["active", "onClickTab"]
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
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_18, [
                  _createElementVNode("div", _hoisted_19, [
                    _createVNode(
                      _component_tag_management,
                      {
                        onClose: close,
                      },
                      null,
                      8,
                      ["onClose"]
                    ),
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
              show: showDetailsPopul1.value,
              "onUpdate:show":
                _cache[7] ||
                (_cache[7] = ($event) => (showDetailsPopul1.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_20, [
                  (_openBlock(),
                  _createBlock(
                    _component_comics_item_details,
                    {
                      comics_id: comics_id.value,
                      onClose: close1,
                      key: key.value,
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
