<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  createElementBlock as _createElementBlock,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/adultComics/backWhite.png";
import _imports_1 from "@/assets/images/adultComics/directory.png";
import _imports_2 from "@/assets/images/adultComics/share2.png";

import ComicsContent from "./ComicsContents.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  components: {
    ComicsContent,
  },
  props: ["comics_directory_id", "comics_id", "comics_status"],

  setup(props, { emit }) {
    const { comicsPayApi } = getGlobalProperties().$api;
    const store = useStore();
    const showMl = ref(false);
    const detailsData = ref({});
    const showLoading = ref(true);
    const directoryList = ref([]);
    directoryList.value = store.state.directoryList;

    const comicsPay = (comics_directory_id) => {
      showLoading.value = true;
      detailsData.value = {};
      comicsPayApi(
        {
          comics_directory_id: comics_directory_id,
        },
        "get"
      ).then((res) => {
        showLoading.value = false;

        if (res.code === 0) {
          detailsData.value = res.data;
        }
      });
    };

    comicsPay(props.comics_directory_id);

    const close = () => {
      emit("close");
    };

    const toFenxian = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "ShareFreeWatch",
      });
    };

    const lockMl = () => {
      showMl.value = true;
    };

    const startReading = (item) => {
      comicsPay(item.id);
      showMl.value = false;
    };

    const getComicsDirectory = (list) => {
      directoryList.value = list;
    };

    const prev = () => {
      comicsPay(directoryList.value[detailsData.value.sort + 1].id);
    };

    const next = () => {
      comicsPay(directoryList.value[detailsData.value.sort - 1].id);
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-06073402"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "ComicsContentsDetails",
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
        "第一话",
        -1
      )
    );

    const _hoisted_4 = {
      class: "mh_cont",
    };

    const _hoisted_5 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
        },
        null,
        -1
      )
    );

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "上一话", -1)
    );

    const _hoisted_7 = [_hoisted_5, _hoisted_6];

    const _hoisted_8 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "下一话", -1)
    );

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
        },
        null,
        -1
      )
    );

    const _hoisted_10 = [_hoisted_8, _hoisted_9];
    const _hoisted_11 = {
      class: "CartoonView-float-bottom",
    };

    const _hoisted_12 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
        },
        null,
        -1
      )
    );

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "查看目录", -1)
    );

    const _hoisted_14 = [_hoisted_12, _hoisted_13];

    const _hoisted_15 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_2,
        },
        null,
        -1
      )
    );

    const _hoisted_16 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, "分享好友", -1)
    );

    const _hoisted_17 = [_hoisted_15, _hoisted_16];
    const _hoisted_18 = {
      class: "ml_box",
    };

    const _hoisted_19 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "ml_text",
        },
        "金鳞岂是吃红舞",
        -1
      )
    );

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_Loading = _resolveComponent("Loading");

      const _component_my_image = _resolveComponent("my-image");

      const _component_comics_content = _resolveComponent("comics-content");

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
                onClick: close,
              },
              null,
              8,
              ["onClick"]
            ),
            _hoisted_3,
          ]),
          _createElementVNode("div", _hoisted_4, [
            showLoading.value
              ? (_openBlock(),
                _createBlock(_component_Loading, {
                  key: 0,
                }))
              : _createCommentVNode("", true),
            (_openBlock(true),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(detailsData.value.image_list, (item) => {
                return (
                  _openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      class: "img_box",
                      key: item,
                    },
                    [
                      _createVNode(
                        _component_my_image,
                        {
                          url: item,
                        },
                        null,
                        8,
                        ["url"]
                      ),
                    ]
                  )
                );
              }),
              128
            )),
          ]),
          directoryList.value.length &&
          directoryList.value[0].sort < detailsData.value.sort
            ? (_openBlock(),
              _createElementBlock(
                "div",
                {
                  key: 0,
                  onClick:
                    _cache[0] ||
                    (_cache[0] = (...args) =>
                      next && next(...args)),
                  class: "CartoonViewPage-next",
                },
                _hoisted_7
              ))
            : _createCommentVNode("", true),
          directoryList.value.length &&
          directoryList.value[directoryList.value.length - 1].sort >
            detailsData.value.sort
            ? (_openBlock(),
              _createElementBlock(
                "div",
                {
                  key: 1,
                  class: "CartoonViewPage-prev",
                  onClick:
                    _cache[1] ||
                    (_cache[1] = (...args) =>
                      prev && prev(...args)),
                },
                _hoisted_10
              ))
            : _createCommentVNode("", true),
          _createElementVNode("div", _hoisted_11, [
            _createElementVNode(
              "div",
              {
                onClick:
                  _cache[2] ||
                  (_cache[2] = (...args) =>
                    lockMl && lockMl(...args)),
              },
              _hoisted_14
            ),
            _createElementVNode(
              "div",
              {
                onClick:
                  _cache[3] ||
                  (_cache[3] = (...args) =>
                    toFenxian && toFenxian(...args)),
              },
              _hoisted_17
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showMl.value,
              "onUpdate:show":
                _cache[4] || (_cache[4] = ($event) => (showMl.value = $event)),
              position: "bottom",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_18, [
                  _hoisted_19,
                  _createVNode(
                    _component_comics_content,
                    {
                      comics_status: props.value.comics_status,
                      comics_id: props.value.comics_id,
                      onStartReading: startReading,
                      onGetComicsDirectory: getComicsDirectory,
                    },
                    null,
                    8,
                    [
                      "comics_status",
                      "comics_id",
                      "onStartReading",
                      "onGetComicsDirectory",
                    ]
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
