<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  createTextVNode as _createTextVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  toDisplayString as _toDisplayString,
  createBlock as _createBlock,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/search.png";

import { useStore } from "vuex";
import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  name: "VideoSearch",

  setup(props) {
    const store = useStore();
    const { hotLabelApi } = getGlobalProperties().$api;
    const hotLabel = ref([]);
    let searchLabels = ref([]);
    let label_id = ref("");
    let key = ref("");

    const getHotLabel = () => {
      hotLabelApi("", "get").then((res) => {
        if (res.code === 0) {
          hotLabel.value = res.data;
        }
      });
    };

    getHotLabel();
    let searchText = ref("");
    let searchTexts = ref("");
    const showDetailsPopul = ref(false);

    if (localStorage.getItem("searchLabels")) {
      searchLabels.value = JSON.parse(localStorage.getItem("searchLabels"));
    }

    const search = () => {
      showDetailsPopul.value = true;
      key.value = Math.random();
      label_id.value = "";
      searchText.value = searchTexts.value;

      if (searchText.value) {
        if (!searchLabels.value.includes(searchText.value)) {
          searchLabels.value.push(searchText.value);
          localStorage.setItem(
            "searchLabels",
            JSON.stringify(searchLabels.value)
          );
        }
      }
    };

    const clear = () => {
      localStorage.removeItem("searchLabels");
      searchLabels.value = [];
    };

    const labelSearch = (item) => {
      searchText.value = item.name;
      label_id.value = item.id;
      key.value = Math.random();
      showDetailsPopul.value = true;
    };

    const close = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: false,
        type: "VideoSearch",
      });
      searchTexts.value = "";
    };

    const close1 = () => {
      showDetailsPopul.value = false;
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-00cde38c"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "videoSearch",
    };
    const _hoisted_2 = {
      class: "head_title",
    };
    const _hoisted_3 = {
      class: "searchHeader-input",
    };

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
        },
        null,
        -1
      )
    );

    const _hoisted_5 = {
      class: "cont webkit-overflow-scrolling-touch",
    };
    const _hoisted_6 = {
      class: "cont_item",
    };
    const _hoisted_7 = {
      class: "title",
    };

    const _hoisted_8 = /*#__PURE__*/ _createTextVNode(" 搜索历史 ");

    const _hoisted_9 = {
      class: "label_list",
    };
    const _hoisted_10 = ["onClick"];
    const _hoisted_11 = {
      class: "cont_item",
    };

    const _hoisted_12 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "title",
        },
        "热门标签",
        -1
      )
    );

    const _hoisted_13 = {
      class: "label_list",
    };
    const _hoisted_14 = ["onClick"];
    const _hoisted_15 = {
      class: "details_page",
    };
    console.log({
      props,
      close,
      search,
      searchText,
      searchTexts,
      hotLabel,
      labelSearch,
      showDetailsPopul,
      close1,
      searchLabels,
      clear,
      label_id,
      key,
    });

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_search_popup = _resolveComponent("search-popup");

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
            _createElementVNode("div", _hoisted_3, [
              _hoisted_4,
              _withDirectives(
                _createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue":
                      _cache[0] ||
                      (_cache[0] = ($event) => (searchTexts.value = $event)),
                    placeholder: "视频｜用户",
                  },
                  null,
                  512
                ),
                [[_vModelText, searchTexts.value]]
              ),
            ]),
            _createElementVNode(
              "span",
              {
                class: "btn",
                onClick:
                  _cache[1] ||
                  (_cache[1] = (...args) =>
                    search && search(...args)),
              },
              "搜索"
            ),
          ]),
          _createElementVNode("div", _hoisted_5, [
            _createElementVNode("div", _hoisted_6, [
              _createElementVNode("div", _hoisted_7, [
                _hoisted_8,
                _createElementVNode(
                  "span",
                  {
                    class: "del",
                    onClick:
                      _cache[2] ||
                      (_cache[2] = (...args) =>
                        clear && clear(...args)),
                  },
                  "清除"
                ),
              ]),
              _createElementVNode("div", _hoisted_9, [
                (_openBlock(true),
                _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(searchLabels.value, (item) => {
                    return (
                      _openBlock(),
                      _createElementBlock(
                        "div",
                        {
                          class: "label_item",
                          onClick: () =>
                            labelSearch({
                              name: item,
                            }),
                          key: item,
                        },
                        _toDisplayString(item),
                        9,
                        _hoisted_10
                      )
                    );
                  }),
                  128
                )),
              ]),
            ]),
            _createElementVNode("div", _hoisted_11, [
              _hoisted_12,
              _createElementVNode("div", _hoisted_13, [
                (_openBlock(true),
                _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(hotLabel.value, (item) => {
                    return (
                      _openBlock(),
                      _createElementBlock(
                        "div",
                        {
                          class: "label_item",
                          onClick: () => labelSearch(item),
                          key: item.id,
                        },
                        _toDisplayString(item.name),
                        9,
                        _hoisted_14
                      )
                    );
                  }),
                  128
                )),
              ]),
            ]),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[3] ||
                (_cache[3] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_15, [
                  (_openBlock(),
                  _createBlock(
                    _component_search_popup,
                    {
                      searchText: searchText.value,
                      key: key.value,
                      label_id: label_id.value,
                      onClose: close1,
                    },
                    null,
                    8,
                    ["searchText", "label_id", "onClose"]
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
