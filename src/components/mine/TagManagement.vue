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
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/edit.png";

import { ref } from "vue";
export default {
  name: "TagManagement",

  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    const labelValue = ref("");
    const showDialog = ref(false);
    const labelLists = ref([
      {
        label: "标签",
      },
    ]);

    const add = () => {
      labelValue.value = "";
      showDialog.value = true;
    };

    const okBtns = () => {
      showDialog.value = false;
    };

    const edit = (item) => {
      labelValue.value = item.label;
      showDialog.value = true;
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-5a48ae26"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "tagManagement",
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
        "标签管理",
        -1
      )
    );

    const _hoisted_4 = {
      class: "label_list",
    };
    const _hoisted_5 = ["onClick"];

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_7 = /*#__PURE__*/ _createTextVNode("编辑 ");

    const _hoisted_8 = [_hoisted_6, _hoisted_7];
    const _hoisted_9 = {
      class: "dialog_content",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "title",
        },
        "编辑分组",
        -1
      )
    );

    console.log({
      props,
      close,
      add,
      showDialog,
      okBtns,
      labelLists,
      edit,
      labelValue,
    });

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

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
            _createElementVNode(
              "span",
              {
                class: "btn",
                onClick:
                  _cache[0] ||
                  (_cache[0] = (...args) => add && add(...args)),
              },
              "添加分租"
            ),
          ]),
          _createElementVNode("div", _hoisted_4, [
            (_openBlock(true),
            _createElementBlock(
              _Fragment,
              null,
              _renderList(labelLists.value, (item, index) => {
                return (
                  _openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      key: index,
                      class: "label_item",
                    },
                    [
                      _createElementVNode(
                        "div",
                        null,
                        _toDisplayString(item.label),
                        1
                      ),
                      _createElementVNode(
                        "div",
                        {
                          onClick: () => edit(item),
                        },
                        _hoisted_8,
                        8,
                        _hoisted_5
                      ),
                    ]
                  )
                );
              }),
              128
            )),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDialog.value,
              "onUpdate:show":
                _cache[3] ||
                (_cache[3] = ($event) => (showDialog.value = $event)),
              round: "",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_9, [
                  _hoisted_10,
                  _withDirectives(
                    _createElementVNode(
                      "input",
                      {
                        "onUpdate:modelValue":
                          _cache[1] ||
                          (_cache[1] = ($event) =>
                            (labelValue.value = $event)),
                        type: "text",
                        placeholder: "自定义",
                      },
                      null,
                      512
                    ),
                    [[_vModelText, labelValue.value]]
                  ),
                  _createElementVNode(
                    "div",
                    {
                      class: "btns",
                      onClick:
                        _cache[2] ||
                        (_cache[2] = (...args) =>
                          okBtns && okBtns(...args)),
                    },
                    "确认"
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
