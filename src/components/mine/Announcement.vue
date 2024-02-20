<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  createTextVNode as _createTextVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/20221025184624TE4tw.png";

import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Announcement",

  setup(props) {
    const { noticeApi } = getGlobalProperties().$api;
    const noticeList = ref([]);

    const getNoticeList = () => {
      noticeApi("", "get").then((res) => {
        if (res.code === 0) {
          noticeList.value = res.data.rows;
        }
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-36ac5da4"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "announcement",
    };
    const _hoisted_2 = {
      class: "notice_list",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "img_box",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
            alt: "",
          }),
        ],
        -1
      )
    );

    const _hoisted_4 = {
      class: "content",
    };
    return () => {
      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            (_openBlock(true),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(noticeList.value, (item, index) => {
                return (
                  _openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      key: index,
                      class: "item",
                    },
                    [
                      _hoisted_3,
                      _createElementVNode("div", _hoisted_4, [
                        _createElementVNode(
                          "p",
                          null,
                          _toDisplayString(item.title),
                          1
                        ),
                        _createTextVNode(
                          " " + _toDisplayString(item.content),
                          1
                        ),
                      ]),
                    ]
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
