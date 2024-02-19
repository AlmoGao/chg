<script>
import {
  createElementVNode as _createElementVNode,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { showToast } from "vant";
export default {
  name: "SetPassword",

  setup(props) {
    const { modifyPasswordApi } = getGlobalProperties().$api;
    const params = ref({
      password: "",
      re_password: "",
    });

    const editPwd = () => {
      if (!params.value.password || !params.value.re_password) {
        showToast("请输入密码");
        return;
      }

      modifyPasswordApi(params.value).then((res) => {
        if (res.code === 0) {
          showToast("修改成功");
        } else {
          showToast(res.message);
        }
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-c624d1da"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "setPassword",
    };
    const _hoisted_2 = {
      class: "user-changepwd-form",
    };
    const _hoisted_3 = {
      class: "user-form-item",
    };

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-form-key",
        },
        "设置密码",
        -1
      )
    );

    const _hoisted_5 = {
      class: "user-form-value",
    };
    const _hoisted_6 = {
      class: "user-form-item",
    };

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-form-key",
        },
        "确认密码",
        -1
      )
    );

    const _hoisted_8 = {
      class: "user-form-value",
    };
    console.log({
      props,
      editPwd,
      params,
    });

    return (_ctx, _cache) => {
      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode("div", _hoisted_3, [
              _hoisted_4,
              _createElementVNode("div", _hoisted_5, [
                _withDirectives(
                  _createElementVNode(
                    "input",
                    {
                      "onUpdate:modelValue":
                        _cache[0] ||
                        (_cache[0] = ($event) =>
                          (params.value.password = $event)),
                      type: "password",
                      placeholder: "请输入密码",
                    },
                    null,
                    512
                  ),
                  [[_vModelText, params.value.password]]
                ),
              ]),
            ]),
            _createElementVNode("div", _hoisted_6, [
              _hoisted_7,
              _createElementVNode("div", _hoisted_8, [
                _withDirectives(
                  _createElementVNode(
                    "input",
                    {
                      "onUpdate:modelValue":
                        _cache[1] ||
                        (_cache[1] = ($event) =>
                          (params.value.re_password = $event)),
                      type: "password",
                      placeholder: "请输入密码",
                    },
                    null,
                    512
                  ),
                  [[_vModelText, params.value.re_password]]
                ),
              ]),
            ]),
          ]),
          _createElementVNode(
            "div",
            {
              class: "user-public-btn",
              onClick:
                _cache[2] ||
                (_cache[2] = (...args) =>
                  editPwd && editPwd(...args)),
            },
            "确定"
          ),
        ])
      );
    };
  },
};
</script>
