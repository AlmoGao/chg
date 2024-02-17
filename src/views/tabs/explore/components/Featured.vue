<script>
import {
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createStaticVNode as _createStaticVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/logoBg.png";
import _imports_1 from "@/assets/images/more.png";
import _imports_2 from "@/assets/images/mine/video.jpg";
import _imports_3 from "@/assets/images/eye-open.png";
import _imports_4 from "@/assets/images/zan.png";

const _withScopeId = (n) => (
  _pushScopeId("data-v-27328d9d"), (n = n()), _popScopeId(), n
);

const _hoisted_1 = {
  class: "featured",
};

const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
  /*#__PURE__*/ _createElementVNode(
    "div",
    {
      class: "top_banner",
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

const _hoisted_3 = {
  class: "video_cont",
};
const _hoisted_4 = {
  class: "video_item",
};

const _hoisted_5 = /*#__PURE__*/ _createStaticVNode(
  '<div class="item_title" data-v-27328d9d> 原创微剧 <div class="more" data-v-27328d9d> 更多<img src="' +
    _imports_1 +
    '" alt="" data-v-27328d9d></div></div><div class="video_box" data-v-27328d9d><div class="img_box" data-v-27328d9d><img src="' +
    _imports_2 +
    '" data-v-27328d9d></div><div class="title" data-v-27328d9d>「原创微剧」FSOG-038粉色情人帐篷露营秘密性爱</div><div class="bottom" data-v-27328d9d><div class="look" data-v-27328d9d><img src="' +
    _imports_3 +
    '" alt="" data-v-27328d9d>123 </div><div class="awesome" data-v-27328d9d><img src="' +
    _imports_4 +
    '" alt="" data-v-27328d9d>123 </div></div></div>',
  2
);

const _hoisted_7 = {
  class: "flex video_box",
};

const _hoisted_8 = /*#__PURE__*/ _createStaticVNode(
  '<div class="img_box" data-v-27328d9d><img src="' +
    _imports_2 +
    '" data-v-27328d9d></div><div class="title" data-v-27328d9d> 「原创微剧」FSOG-038粉色情人帐篷露营秘密性爱 </div><div class="bottom" data-v-27328d9d><div class="look" data-v-27328d9d><img src="' +
    _imports_3 +
    '" alt="" data-v-27328d9d>123 </div><div class="awesome" data-v-27328d9d><img src="' +
    _imports_4 +
    '" alt="" data-v-27328d9d>123 </div></div>',
  3
);

const _hoisted_11 = [_hoisted_8];
export function render() {
  return (
    _openBlock(),
    _createElementBlock("div", _hoisted_1, [
      _hoisted_2,
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _hoisted_5,
          _createElementVNode("div", _hoisted_7, [
            (_openBlock(),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(4, (i) => {
                return _createElementVNode(
                  "div",
                  {
                    key: i,
                  },
                  _hoisted_11
                );
              }),
              64
            )),
          ]),
        ]),
      ]),
    ])
  );
}
</script>
