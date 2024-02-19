<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  withModifiers as _withModifiers,
  normalizeStyle as _normalizeStyle,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  normalizeClass as _normalizeClass,
  createTextVNode as _createTextVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/community/icon_see_num.png";
import _imports_1 from "@/assets/images/community/icon_like_tag.png";
import { ref, computed } from "vue"; // import { api as viewerApi } from "v-viewer";

import { getGlobalProperties } from "@/assets/js/utils.js";
import { Toast } from "vant";
import { useStore } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  setup(props) {
    const store = useStore();
    const { focusSaveApi, headLineCommentLikeApi } = getGlobalProperties().$api;
    let dataItem = computed(() => {
      // 计算属性初始化加10
      return ref(props.data);
    });

    const toAutorDetails = (item) => {
      if (item.isFocus === "null") return;
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "HotAuthorInfo",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const focusSave = (item) => {
      // if (item.isFocus) {
      //   return;
      // }
      const params = {
        user_id: item.user_id,
      };
      focusSaveApi(params, "get").then((res) => {
        // Toast(res.message);
        if (res.code === 0) {
          item.isFocus = !item.isFocus;
          store.dispatch("getUserInfo");
        }
      });
    }; // viewerApi({ images: ["/uploads/202210/20221008190319TkNlJ.png"] });

    const getHeadLineCommentLike = (item) => {
      headLineCommentLikeApi(
        {
          head_lines_id: item.id,
        },
        "get"
      ).then((res) => {
        Toast(res.message);

        if (res.code === 0) {
          item.like_num++;
        }
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-7813b93b"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "item",
    };
    const _hoisted_2 = {
      class: "left_img_box",
    };
    const _hoisted_3 = {
      class: "right_text",
    };
    const _hoisted_4 = {
      class: "left",
    };
    const _hoisted_5 = {
      class: "right",
    };
    const _hoisted_6 = {
      class: "cont_details",
    };
    const _hoisted_7 = {
      class: "cont_text",
    };
    const _hoisted_8 = {
      key: 0,
      class: "details_img",
    };
    const _hoisted_9 = {
      class: "bottom",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
          alt: "",
        },
        null,
        -1
      )
    );

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_1,
          alt: "",
        },
        null,
        -1
      )
    );
    console.log({
      props,
      dataItem: dataItem.value,
      toAutorDetails,
      focusSave,
      getHeadLineCommentLike,
    });

    return (_ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "div",
            {
              class: "user_box",
              onClick:
                _cache[1] ||
                (_cache[1] = _withModifiers(
                  () => toAutorDetails(dataItem.value),
                  ["stop"]
                )),
            },
            [
              _createElementVNode("div", _hoisted_2, [
                _createVNode(
                  _component_my_image,
                  {
                    url: dataItem.value.user_image,
                  },
                  null,
                  8,
                  ["url"]
                ),
              ]),
              _createElementVNode("div", _hoisted_3, [
                _createElementVNode("div", _hoisted_4, [
                  _createElementVNode(
                    "p",
                    null,
                    _toDisplayString(dataItem.value.nickname),
                    1
                  ),
                  _createElementVNode(
                    "p",
                    null,
                    _toDisplayString(dataItem.value.day),
                    1
                  ),
                ]),
                _createElementVNode("div", _hoisted_5, [
                  dataItem.value.isFocus !== "null"
                    ? (_openBlock(),
                      _createElementBlock(
                        "span",
                        {
                          key: 0,
                          onClick:
                            _cache[0] ||
                            (_cache[0] = _withModifiers(
                              () => focusSave(dataItem.value),
                              ["stop"]
                            )),
                          style: _normalizeStyle({
                            color: dataItem.value.isFocus ? "#999" : "#fd5c18",
                          }),
                        },
                        _toDisplayString(
                          dataItem.value.isFocus ? "已关注" : "关注"
                        ),
                        5
                      ))
                    : _createCommentVNode("", true),
                ]),
              ]),
            ]
          ),
          _createElementVNode("div", _hoisted_6, [
            _createElementVNode(
              "p",
              _hoisted_7,
              _toDisplayString(dataItem.value.content),
              1
            ),
            dataItem.value.images.length
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_8, [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(dataItem.value.images, (item) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            class: _normalizeClass(
                              "details_img_" + dataItem.value.images.length
                            ),
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
                          ],
                          2
                        )
                      );
                    }),
                    128
                  )),
                ]))
              : _createCommentVNode("", true),
            _createElementVNode("div", _hoisted_9, [
              _createElementVNode("div", null, [
                _hoisted_10,
                _createTextVNode(
                  " " + _toDisplayString(dataItem.value.count),
                  1
                ),
              ]),
              _createElementVNode(
                "div",
                {
                  onClick:
                    _cache[2] ||
                    (_cache[2] = _withModifiers(
                      () =>
                        getHeadLineCommentLike(dataItem.value),
                      ["stop"]
                    )),
                },
                [
                  _hoisted_11,
                  _createTextVNode(
                    " " + _toDisplayString(dataItem.value.like_num),
                    1
                  ),
                ]
              ),
            ]),
          ]),
        ])
      );
    };
  },
};
</script>
