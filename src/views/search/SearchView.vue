<script>
import { resolveComponent as _resolveComponent, unref as _unref, createVNode as _createVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";

const _withScopeId = n => (_pushScopeId("data-v-af75d026"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "search_area"
};

const _hoisted_2 = /*#__PURE__*/_createTextVNode("搜索");

const _hoisted_3 = {
  class: "card"
};

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("h2", null, "热门搜索", -1));

const _hoisted_5 = {
  class: "card"
};

const _hoisted_6 = /*#__PURE__*/_createTextVNode("常用标签 ");

const _hoisted_7 = /*#__PURE__*/_createTextVNode("属性 ");

const _hoisted_8 = /*#__PURE__*/_createTextVNode("类别 ");

const _hoisted_9 = /*#__PURE__*/_createTextVNode("体型 ");

const _hoisted_10 = /*#__PURE__*/_createTextVNode("行为 ");

const _hoisted_11 = /*#__PURE__*/_createTextVNode("服装 ");

const _hoisted_12 = /*#__PURE__*/_createTextVNode("角色 ");

const _hoisted_13 = /*#__PURE__*/_createTextVNode("场景 ");

const _hoisted_14 = /*#__PURE__*/_createTextVNode("主题 ");

const _hoisted_15 = /*#__PURE__*/_createTextVNode("玩法 ");

import { navigateTo } from "@/assets/js/utils.js";
import TagView from "./TagView.vue";
export default {
  __name: 'SearchView',

  setup() {
    return (_ctx, _cache) => {
      const _component_van_nav_bar = _resolveComponent("van-nav-bar");

      const _component_van_button = _resolveComponent("van-button");

      const _component_van_field = _resolveComponent("van-field");

      const _component_van_cell_group = _resolveComponent("van-cell-group");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_van_tabs = _resolveComponent("van-tabs");

      return _openBlock(), _createElementBlock(_Fragment, null, [_createVNode(_component_van_nav_bar, {
        class: "searchNavBar",
        title: "搜索",
        "left-arrow": "",
        "safe-area-inset-top": true,
        onClickLeft: _cache[0] || (_cache[0] = () => _unref(navigateTo)('/tabs/home'))
      }), _createElementVNode("div", _hoisted_1, [_createVNode(_component_van_cell_group, null, {
        default: _withCtx(() => [_createVNode(_component_van_field, {
          center: "",
          clearable: "",
          placeholder: "请输入番号、电影名字"
        }, {
          button: _withCtx(() => [_createVNode(_component_van_button, {
            class: "search_btn",
            size: "small",
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(TagView)]), _createElementVNode("div", _hoisted_5, [_createVNode(_component_van_tabs, {
        background: "transparent"
      }, {
        default: _withCtx(() => [_createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_6]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_7]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_8]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_9]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_10]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_11]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_12]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_13]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_14]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        }), _createVNode(_component_van_tab, null, {
          title: _withCtx(() => [_hoisted_15]),
          default: _withCtx(() => [_createVNode(TagView)]),
          _: 1
        })]),
        _: 1
      })])], 64);
    };
  }

};
</script>