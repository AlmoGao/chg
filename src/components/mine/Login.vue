<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { useStore } from "vuex";
import { ref } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { showToast } from "vant";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",

  setup(props) {
    const store = useStore();

    const close = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: false,
        type: "Login",
      });
    };

    const { loginApi, modifyUserApi } = getGlobalProperties().$api;
    let params = ref({
      username: "",
      password: "",
    });

    const register = () => {
      if (!params.value.username) {
        showToast("请输入账号/手机号");
        return;
      }

      if (!params.value.password) {
        showToast("请输入密码");
        return;
      }

      if (!store.state.userInfo.username) {
        params.value.nickname = store.state.userInfo.nickname;
        modifyUserApi(params.value).then((res) => {
          console.log(res);

          if (res.code === 0) {
            window.location = "/";
          } else {
            showToast(res.message);
          }
        });
      } else {
        showToast("您已经注册过了"); // params.value.nickname = getRandomName();
        // registerAPI(params.value).then((res) => {
        //   console.log(res);
        //   if (res.code === 0) {
        //     res.data.nickname = params.value.nickname;
        //     store.commit("SET_USER_INFO", res.data);
        //     window.location = "/";
        //   } else {
        //     showToast(res.message);
        //   }
        // });
      }
    };

    const login = () => {
      if (!params.value.username) {
        showToast("请输入账号/手机号");
        return;
      }

      if (!params.value.password) {
        showToast("请输入密码");
        return;
      }

      loginApi(params.value).then((res) => {
        console.log(res);

        if (res.code === 0) {
          store.commit("SET_USER_INFO", res.data);
          store.commit("SET_HG_OAUTH_ID", "login");
          window.location = "/";
        } else {
          showToast(res.message);
        }
      });
    };

    console.log({
      props,
      close,
      register,
      params,
      login,
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-6aac36f8"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "setPassword",
    };
    const _hoisted_2 = {
      class: "head_title",
    };

    const _hoisted_3 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-band-phone-bigtitle",
        },
        "登陆或注册",
        -1
      )
    );

    const _hoisted_4 = {
      class: "user-changepwd-form",
    };
    const _hoisted_5 = {
      class: "user-form-item",
    };

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-form-key",
        },
        "账号/手机号",
        -1
      )
    );

    const _hoisted_7 = {
      class: "user-form-value",
    };
    const _hoisted_8 = {
      class: "user-form-item",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-form-key",
        },
        "账号密码",
        -1
      )
    );

    const _hoisted_10 = {
      class: "user-form-value",
    };
    const _hoisted_11 = {
      style: {
        display: "flex",
      },
    };
    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

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
          ]),
          _hoisted_3,
          _createElementVNode("div", _hoisted_4, [
            _createElementVNode("div", _hoisted_5, [
              _hoisted_6,
              _createElementVNode("div", _hoisted_7, [
                _withDirectives(
                  _createElementVNode(
                    "input",
                    {
                      "onUpdate:modelValue":
                        _cache[0] ||
                        (_cache[0] = ($event) =>
                          (params.value.username = $event)),
                      type: "text",
                      placeholder: "账号/手机号",
                    },
                    null,
                    512
                  ),
                  [[_vModelText, params.value.username]]
                ),
              ]),
            ]),
            _createElementVNode("div", _hoisted_8, [
              _hoisted_9,
              _createElementVNode("div", _hoisted_10, [
                _withDirectives(
                  _createElementVNode(
                    "input",
                    {
                      "onUpdate:modelValue":
                        _cache[1] ||
                        (_cache[1] = ($event) =>
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
          ]),
          _createElementVNode("div", _hoisted_11, [
            _createElementVNode(
              "div",
              {
                class: "user-public-btn",
                style: {
                  "margin-top": "55px",
                  flex: "1 1 0%",
                },
                onClick:
                  _cache[2] ||
                  (_cache[2] = (...args) =>
                    login && login(...args)),
              },
              " 登录 "
            ),
            _createElementVNode(
              "div",
              {
                class: "user-public-btn",
                style: {
                  "margin-top": "55px",
                  flex: "1 1 0%",
                },
                onClick:
                  _cache[3] ||
                  (_cache[3] = (...args) =>
                    register && register(...args)),
              },
              " 注册 "
            ),
          ]),
        ])
      );
    };
  },
};
</script>
