<script>
import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/adultComics/sort-up.png";
import _imports_1 from "@/assets/images/adultComics/sort-down.png";

import { ref, computed } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { useStore } from "vuex";
export default {
  props: ["comics_id", "comics_status"],

  setup(props, { emit }) {
    const { comicsDirectoryApi } = getGlobalProperties().$api;
    const directoryList = ref([]);
    const store = useStore();
    const isSort = ref(true);
    directoryList.value = store.state.directoryList;
    const isVip = computed(() => {
      return store.state.userInfo.is_vip;
    });

    const getComicsDirectory = () => {
      comicsDirectoryApi(
        {
          comics_id: props.comics_id,
        },
        "get"
      ).then((res) => {

        if (res.code === 0) {
          directoryList.value = res.data;
          store.commit("SET_DIRECTORY_LIST", res.data);
          emit("getComicsDirectory", res.data);
        }
      });
    };

    getComicsDirectory();

    const initDirectoryList = () => {
      directoryList.value = directoryList.value.sort((a, b) => {
        if (isSort.value) {
          return a.sort - b.sort;
        }

        {
          return b.sort - a.sort;
        }
      });
    };

    const sortFun = () => {
      isSort.value = !isSort.value;
      initDirectoryList();
    };

    const startReading = (item) => {
      if (item.is_free === 0 && item.money === 0 && isVip.value === 0) {
        store.commit("SETSHOE_KT_VIP", true);
      } else {
        emit("startReading", item);
      }
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-020330e2"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "comicsContent",
    };
    const _hoisted_2 = {
      class: "CartoonDetail-DirectoryPage-label",
    };
    const _hoisted_3 = {
      class: "CartoonDetail-DirectoryPage-label-left",
    };
    const _hoisted_4 = {
      class: "CartoonDetail-DirectoryPage-label-right",
    };
    const _hoisted_5 = {
      class: "CartoonDetail-DirectoryPage-list",
    };
    const _hoisted_6 = ["onClick"];
    const _hoisted_7 = {
      key: 0,
      class: "CartoonDetail-DirectoryPage-tips-vip",
    };

    return (_ctx, _cache) => {
      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode("div", _hoisted_3, [
              _createElementVNode(
                "span",
                null,
                _toDisplayString(
                  props.value.comics_status === 1 ? "连载中" : "已完结"
                ),
                1
              ),
              _createElementVNode(
                "span",
                null,
                "(" +
                  _toDisplayString(
                    "周" + "日一二三四五六".charAt(new Date().getDay())
                  ) +
                  ")",
                1
              ),
              _createElementVNode(
                "span",
                null,
                "更新至" + _toDisplayString(directoryList.value.length) + "话",
                1
              ),
            ]),
            _createElementVNode("div", _hoisted_4, [
              isSort.value
                ? (_openBlock(),
                  _createElementBlock("img", {
                    key: 0,
                    onClick:
                      _cache[0] ||
                      (_cache[0] = (...args) =>
                        sortFun && sortFun(...args)),
                    src: _imports_0,
                  }))
                : (_openBlock(),
                  _createElementBlock("img", {
                    key: 1,
                    onClick:
                      _cache[1] ||
                      (_cache[1] = (...args) =>
                        sortFun && sortFun(...args)),
                    src: _imports_1,
                    alt: "",
                  })),
            ]),
          ]),
          _createElementVNode("div", _hoisted_5, [
            (_openBlock(true),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(directoryList.value, (item) => {
                return (
                  _openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      class: "CartoonDetail-DirectoryPage-list-item",
                      onClick: () => startReading(item),
                      key: item,
                    },
                    [
                      _createElementVNode(
                        "span",
                        null,
                        _toDisplayString(item.title),
                        1
                      ),
                      item.is_free === 0 && item.money === 0
                        ? (_openBlock(),
                          _createElementBlock("span", _hoisted_7, "VIP"))
                        : _createCommentVNode("", true),
                    ],
                    8,
                    _hoisted_6
                  )
                );
              }),
              128
            )),
          ]),
        ])
      );
    };
  },
};
</script>
