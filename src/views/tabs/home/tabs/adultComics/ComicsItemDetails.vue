<script>
import {
  resolveComponent as _resolveComponent,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createElementVNode as _createElementVNode,
  createVNode as _createVNode,
  toDisplayString as _toDisplayString,
  normalizeClass as _normalizeClass,
  renderList as _renderList,
  Fragment as _Fragment,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/adultComics/collect-active.png";
import _imports_1 from "@/assets/images/adultComics/collect.png";
import _imports_2 from "@/assets/images/adultComics/share2.png";

import { ref, computed } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import ComicsItem from "./ComicsItem.vue";
import ComicsItemDetails from "./ComicsItemDetails.vue";
import ComicsContent from "./ComicsContents.vue";
import ComicsContentsDetails from "./ComicsContentsDetails.vue";
import { useStore } from "vuex";
export default {
  components: {
    ComicsItem,
    ComicsItemDetails,
    ComicsContent,
    ComicsContentsDetails,
  },
  props: ["comics_id"],

  setup(props, { emit }) {
    const { comicsDetailsApi, comicsSimilarApi, comicsLikeApi } =
      getGlobalProperties().$api;
    const store = useStore();
    const topNavIndex = ref(0);
    const swiper = ref(null);
    const showDetailsPopul = ref(false);
    const showDetailsPopul1 = ref(false);
    const key = ref("");
    const key1 = ref("");
    const detailsData = ref({});
    const similarList = ref([]);
    const comics_directory_id = ref("");
    const directoryList = ref([]);
    const comics_id = ref("");
    let isComicsLike = computed(() => {
      return store.state.userInfo.comics_like.split(",");
    });

    const getComicsDetails = () => {
      comicsDetailsApi(
        {
          comics_id: props.comics_id,
        },
        "get"
      ).then((res) => {

        if (res.code === 0) {
          res.data.isComicsLike = isComicsLike.value.includes(res.data.id + "");
          detailsData.value = res.data;
        }
      });
    };

    getComicsDetails();

    const getComicsSimilar = () => {
      comicsSimilarApi(
        {
          comics_id: props.comics_id,
        },
        "get"
      ).then((res) => {

        if (res.code === 0) {
          similarList.value = res.data;
        }
      });
    };

    getComicsSimilar();

    const comicsLike = () => {
      // if (detailsData.value.isComicsLike) return;
      comicsLikeApi(
        {
          comics_id: props.comics_id,
        },
        "get"
      ).then((res) => {

        if (res.code === 0) {
          detailsData.value.isComicsLike = !detailsData.value.isComicsLike;
          store.dispatch("getUserInfo");
        }
      });
    };

    const getComicsDirectory = (list) => {
      directoryList.value = list;
    };

    const close = () => {
      if (showDetailsPopul.value) {
        showDetailsPopul.value = false;
      } else {
        emit("close", 1);
      }
    };

    const close1 = () => {
      showDetailsPopul1.value = false;
    };

    const change = (index) => {
      topNavIndex.value = index;
    };

    const topNavClick = (index) => {
      swiper.value.swipeTo(index);
    };

    const toDetails = (item) => {
      comics_id.value = item.id;
      key.value = Math.random();
      showDetailsPopul.value = true;
    };

    const toFenxian = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "ShareFreeWatch",
      });
    };

    const isVip = computed(() => {
      return store.state.userInfo.is_vip;
    });

    const startReading = (item) => {

      if (item.is_free === 0 && item.money === 0 && isVip.value === 0) {
        store.commit("SETSHOE_KT_VIP", true);
      } else {
        comics_directory_id.value = item.id;
        key1.value = Math.random();
        showDetailsPopul1.value = true;
      }
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-00ba2920"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "audltComicsDetails",
    };
    const _hoisted_2 = {
      class: "head_titles",
    };
    const _hoisted_3 = {
      class: "top_img_cont",
    };
    const _hoisted_4 = {
      class: "title text_ellipsis",
    };
    const _hoisted_5 = {
      class: "CartoonDetail-info",
    };

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "·", -1)
    );

    const _hoisted_7 = {
      class: "CartoonDetail-tips",
    };
    const _hoisted_8 = {
      class: "cont",
    };
    const _hoisted_9 = {
      class: "top_nav",
    };
    const _hoisted_10 = {
      class: "crmh_cont",
    };
    const _hoisted_11 = {
      class: "per",
    };
    const _hoisted_12 = {
      class: "CartoonDetail-WorksPage-statistics",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "·", -1)
    );

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "wntj",
        },
        "为你推荐",
        -1
      )
    );

    const _hoisted_15 = {
      class: "list",
    };
    const _hoisted_16 = ["onClick"];
    const _hoisted_17 = {
      key: 0,
      class: "item",
    };
    const _hoisted_18 = {
      class: "crmh_cont",
    };
    const _hoisted_19 = {
      class: "CartoonDetail-float-bottom",
    };
    const _hoisted_20 = {
      key: 0,
      src: _imports_0,
    };
    const _hoisted_21 = {
      key: 1,
      src: _imports_1,
    };

    const _hoisted_22 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "收藏", -1)
    );

    const _hoisted_23 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_2,
        },
        null,
        -1
      )
    );

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "分享", -1)
    );

    const _hoisted_25 = [_hoisted_23, _hoisted_24];

    const _hoisted_26 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "开始阅读", -1)
    );

    const _hoisted_27 = [_hoisted_26];
    const _hoisted_28 = {
      class: "details_page",
    };
    const _hoisted_29 = {
      class: "details_page",
    };

    return (_ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_comics_item = _resolveComponent("comics-item");

      const _component_van_swipe_item = _resolveComponent("van-swipe-item");

      const _component_comics_content = _resolveComponent("comics-content");

      const _component_van_swipe = _resolveComponent("van-swipe");

      const _component_comics_item_details = _resolveComponent(
        "comics-item-details",
        true
      );

      const _component_van_popup = _resolveComponent("van-popup");

      const _component_comics_contents_details = _resolveComponent(
        "comics-contents-details"
      );

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode("div", _hoisted_3, [
              (_openBlock(),
              _createBlock(
                _component_my_image,
                {
                  url: detailsData.value.image,
                  key: detailsData.value.image,
                },
                null,
                8,
                ["url"]
              )),
            ]),
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
            _createElementVNode(
              "span",
              _hoisted_4,
              _toDisplayString(detailsData.value.title),
              1
            ),
            _createElementVNode("div", _hoisted_5, [
              _createElementVNode(
                "span",
                null,
                _toDisplayString(
                  detailsData.value.comics_status === 1 ? "连载" : "完结"
                ) +
                  "," +
                  _toDisplayString(detailsData.value.nickname),
                1
              ),
              _hoisted_6,
              _createElementVNode(
                "span",
                null,
                _toDisplayString(detailsData.value.comics_num) + "话",
                1
              ),
              _createElementVNode(
                "span",
                _hoisted_7,
                _toDisplayString(
                  detailsData.value.comics_status === 1 ? "连载中" : "已完结"
                ),
                1
              ),
            ]),
          ]),
          _createElementVNode("div", _hoisted_8, [
            _createElementVNode("div", _hoisted_9, [
              _createElementVNode(
                "div",
                {
                  class: _normalizeClass([
                    "top_nav_item",
                    topNavIndex.value === 0 ? "active" : "",
                  ]),
                  onClick:
                    _cache[0] || (_cache[0] = () => topNavClick(0)),
                },
                " 作品 ",
                2
              ),
              _createElementVNode(
                "div",
                {
                  class: _normalizeClass([
                    "top_nav_item",
                    topNavIndex.value === 1 ? "active" : "",
                  ]),
                  onClick:
                    _cache[1] || (_cache[1] = () => topNavClick(1)),
                },
                " 目录 ",
                2
              ),
            ]),
            _createVNode(
              _component_van_swipe,
              {
                class: "my-swipe",
                onChange: change,
                loop: false,
                ref: el => swiper.value = el,
                "show-indicators": false,
              },
              {
                default: _withCtx(() => [
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_10, [
                        _createElementVNode(
                          "div",
                          _hoisted_11,
                          _toDisplayString(detailsData.value.content),
                          1
                        ),
                        _createElementVNode("div", _hoisted_12, [
                          _createElementVNode(
                            "span",
                            null,
                            _toDisplayString(detailsData.value.count) +
                              "次浏览",
                            1
                          ),
                          _hoisted_13,
                          _createElementVNode(
                            "span",
                            null,
                            _toDisplayString(detailsData.value.like_num) +
                              "喜欢",
                            1
                          ),
                        ]),
                        _hoisted_14,
                        _createElementVNode("div", _hoisted_15, [
                          (_openBlock(true),
                          _createElementBlock(
                            _Fragment,
                            null,
                            _renderList(similarList.value, (item) => {
                              return (
                                _openBlock(),
                                _createElementBlock(
                                  "div",
                                  {
                                    class: "item",
                                    key: item.id,
                                    onClick: () => toDetails(item),
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
                          similarList.value.length % 3 === 2
                            ? (_openBlock(),
                              _createElementBlock("div", _hoisted_17))
                            : _createCommentVNode("", true),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }),
                  _createVNode(_component_van_swipe_item, null, {
                    default: _withCtx(() => [
                      _createElementVNode("div", _hoisted_18, [
                        _createVNode(
                          _component_comics_content,
                          {
                            comics_id: props.value.comics_id,
                            comics_status: detailsData.value.comics_status,
                            onStartReading: startReading,
                            onGetComicsDirectory: getComicsDirectory,
                          },
                          null,
                          8,
                          [
                            "comics_id",
                            "comics_status",
                            "onStartReading",
                            "onGetComicsDirectory",
                          ]
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
            _createElementVNode("div", _hoisted_19, [
              _createElementVNode(
                "div",
                {
                  onClick:
                    _cache[2] ||
                    (_cache[2] = (...args) =>
                      comicsLike && comicsLike(...args)),
                },
                [
                  detailsData.value.isComicsLike
                    ? (_openBlock(), _createElementBlock("img", _hoisted_20))
                    : (_openBlock(), _createElementBlock("img", _hoisted_21)),
                  _hoisted_22,
                ]
              ),
              _createElementVNode(
                "div",
                {
                  onClick:
                    _cache[3] ||
                    (_cache[3] = (...args) =>
                      toFenxian && toFenxian(...args)),
                },
                _hoisted_25
              ),
              _createElementVNode(
                "div",
                {
                  onClick:
                    _cache[4] ||
                    (_cache[4] = () =>
                      startReading(directoryList.value[0])),
                },
                _hoisted_27
              ),
            ]),
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
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_28, [
                  (_openBlock(),
                  _createBlock(
                    _component_comics_item_details,
                    {
                      onClose: close,
                      comics_id: comics_id.value,
                      key: key.value,
                    },
                    null,
                    8,
                    ["onClose", "comics_id"]
                  )),
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
                _cache[6] ||
                (_cache[6] = ($event) => (showDetailsPopul1.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_29, [
                  (_openBlock(),
                  _createBlock(
                    _component_comics_contents_details,
                    {
                      comics_id: props.value.comics_id,
                      comics_status: detailsData.value.comics_status,
                      comics_directory_id: comics_directory_id.value,
                      onClose: close1,
                      key: key1.value,
                    },
                    null,
                    8,
                    [
                      "comics_id",
                      "comics_status",
                      "comics_directory_id",
                      "onClose",
                    ]
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
