<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/video.jpg";
import _imports_1 from "@/assets/images/mine/share.png";

import { ref } from "vue";
export default {
  name: "NoData",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },

  setup(props) {
    const item = ref(props.itemData);
    console.log({
      props,
      item,
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-4daafcf2"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "video_item",
    };
    const _hoisted_2 = {
      class: "video_box",
    };
    const _hoisted_3 = {
      class: "vider_user",
    };

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user_img",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_0,
          }),
        ],
        -1
      )
    );

    const _hoisted_5 = {
      class: "user_text",
    };
    const _hoisted_6 = {
      class: "user_title text_ellipsis",
    };

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "details text_ellipsis",
        },
        "窥视裙底厕拍季票半价",
        -1
      )
    );

    const _hoisted_8 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "fenxian",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            src: _imports_1,
            alt: "",
          }),
        ],
        -1
      )
    );

 
    return () => {
      const _component_my_image = _resolveComponent("my-image");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_my_image,
              {
                url: item.value.image,
              },
              null,
              8,
              ["url"]
            ),
          ]),
          _createElementVNode("div", _hoisted_3, [
            _hoisted_4,
            _createElementVNode("div", _hoisted_5, [
              _createElementVNode(
                "p",
                _hoisted_6,
                _toDisplayString(item.value.title),
                1
              ),
              _hoisted_7,
            ]),
            _hoisted_8,
          ]),
        ])
      );
    };
  },
};
</script>
