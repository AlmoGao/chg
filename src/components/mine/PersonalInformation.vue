<script>
import {
  resolveComponent as _resolveComponent,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createElementVNode as _createElementVNode,
  withCtx as _withCtx,
  createVNode as _createVNode,
  toDisplayString as _toDisplayString,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  resolveDynamicComponent as _resolveDynamicComponent,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  name: "PersonalInformation",

  setup(props) {
    const store = useStore();
    const showDialog = ref(false);
    const pupupValue = ref("");
    const popupText = ref("");
    const detailsTitle = ref("");
    const detailsView = ref("");
    const showDetailsPopul = ref(false);
    const showDialog2 = ref(false);
    const email = ref("");
    const userInfo = computed(() => {
      return store.state.userInfo;
    });
    const fileUrl = computed(() => {
      return store.state.userInfo.top_image || "123.png";
    });
    const { inviteSaveApi, modifyTopImageApi, modifyEmailApi } =
      getGlobalProperties().$api;

    const showDialogFun = (type) => {
      pupupValue.value = "";

      if (type === "dhm") {
        popupText.value = "兑换码";
      } else if (type === "yqm") {
        popupText.value = "邀请码";
      }

      showDialog.value = true;
    };

    const okBtns = () => {
      if (pupupValue.value === "") {
        Toast(popupText.value + "不能为空");
      }

      if (popupText.value === "兑换码") {
        inviteSaveApi({
          invite_code: pupupValue.value,
        }).then((res) => {
          Toast(res.message);
        });
      } else {
        inviteSaveApi({
          invite_code: pupupValue.value,
        }).then((res) => {
          Toast(res.message);
        });
      }

      showDialog.value = false;
    };

    const close = () => {
      showDetailsPopul.value = false;
    };

    const toDetails = (type) => {
      if (type === "nc") {
        detailsTitle.value = "个人管理";
        detailsView.value = "ChangeUsername";
      } else if (type === "mm") {
        detailsTitle.value = "设置密码";
        detailsView.value = "SetPassword";
      }

      showDetailsPopul.value = true;
    };

    const toLogin = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "Login",
      });
    };

    const afterRead = (file) => {
      let formdate = new FormData();
      formdate.append("file", file.file);
      modifyTopImageApi(formdate).then((res) => {
        Toast(res.message);

        if (res.code === 0) {
          store.dispatch("getUserInfo");
        }
      });
    };

    const bindEmail = () => {
      showDialog2.value = true;
    };

    const okBtns2 = () => {
      if (email.value === "") {
        Toast("邮箱账号不能为空");
        return;
      }

      const toast = Toast.loading({
        message: "更新中...",
        forbidClick: true,
        duration: 0,
      });
      modifyEmailApi({
        email: email.value,
      }).then((res) => {
        Toast(res.message);
        toast.clear();

        if (res.code === 0) {
          showDialog2.value = false;
          store.dispatch("getUserInfo");
        }
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-33699fc7"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "personalInformation",
    };
    const _hoisted_2 = {
      class: "img_box",
    };
    const _hoisted_3 = {
      class: "img",
    };
    const _hoisted_4 = {
      class: "list_box",
    };

    const _hoisted_5 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("div", null, "昵称", -1)
    );

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("div", null, "绑定手机", -1)
    );

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("div", null, "邮箱账号", -1)
    );

    const _hoisted_8 = {
      class: "liet_item",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("div", null, "邀请码", -1)
    );

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("span", null, null, -1)
    );

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode("div", null, "修改密码", -1)
    );

    const _hoisted_12 = {
      class: "dialog_content",
    };
    const _hoisted_13 = {
      class: "title",
    };
    const _hoisted_14 = ["placeholder"];
    const _hoisted_15 = {
      class: "details_page",
    };
    const _hoisted_16 = {
      key: 0,
      class: "head_title",
    };
    const _hoisted_17 = {
      class: "title",
    };
    const _hoisted_18 = {
      class: "cont_body",
    };
    const _hoisted_19 = {
      class: "dialog_content",
    };

    const _hoisted_20 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "title",
        },
        "填写个人邮箱",
        -1
      )
    );

    const _hoisted_21 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "text",
        },
        "为了防止账号丢失，且便于推荐新片，请设置您的邮箱地址，现在设置有机会免费空降福利姬哦！~",
        -1
      )
    );
    console.log({
      props,
      showDialog,
      showDialogFun,
      okBtns,
      pupupValue,
      popupText,
      showDetailsPopul,
      close,
      detailsTitle,
      toDetails,
      detailsView,
      toLogin,
      userInfo,
      afterRead,
      fileUrl,
      bindEmail,
      showDialog2,
      email,
      okBtns2,
    });

    return (ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_van_uploader = _resolveComponent("van-uploader");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_uploader,
              {
                "after-read": afterRead,
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_3, [
                    (_openBlock(),
                    _createBlock(
                      _component_my_image,
                      {
                        key: fileUrl.value,
                        url: fileUrl.value,
                      },
                      null,
                      8,
                      ["url"]
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["after-read"]
            ),
          ]),
          _createElementVNode("div", _hoisted_4, [
            _createElementVNode(
              "div",
              {
                class: "liet_item",
                onClick:
                  _cache[0] || (_cache[0] = () => toDetails("nc")),
              },
              [
                _hoisted_5,
                _createElementVNode("div", null, [
                  _createElementVNode(
                    "span",
                    null,
                    _toDisplayString(
                      userInfo.value.nickname || userInfo.value.username
                    ),
                    1
                  ),
                  _createVNode(_component_van_icon, {
                    name: "arrow",
                  }),
                ]),
              ]
            ),
            _createElementVNode(
              "div",
              {
                class: "liet_item",
                onClick:
                  _cache[1] ||
                  (_cache[1] = () =>
                    !userInfo.value.username ? toLogin() : ""),
              },
              [
                _hoisted_6,
                _createElementVNode("div", null, [
                  _createElementVNode(
                    "span",
                    null,
                    _toDisplayString(userInfo.value.username || "请绑定手机"),
                    1
                  ),
                  _createVNode(_component_van_icon, {
                    name: "arrow",
                  }),
                ]),
              ]
            ),
            _createElementVNode(
              "div",
              {
                class: "liet_item",
                onClick: _cache[2] || (_cache[2] = () => bindEmail()),
              },
              [
                _hoisted_7,
                _createElementVNode("div", null, [
                  _createElementVNode(
                    "span",
                    null,
                    _toDisplayString(userInfo.value.email || "请绑定邮箱账号"),
                    1
                  ),
                  _createVNode(_component_van_icon, {
                    name: "arrow",
                  }),
                ]),
              ]
            ),
            _createElementVNode("div", _hoisted_8, [
              _hoisted_9,
              _createElementVNode("div", null, [
                _hoisted_10,
                _createVNode(_component_van_icon, {
                  name: "arrow",
                }),
              ]),
            ]),
            _createElementVNode(
              "div",
              {
                class: "liet_item",
                onClick:
                  _cache[3] || (_cache[3] = () => toDetails("mm")),
              },
              [
                _hoisted_11,
                _createElementVNode("div", null, [
                  _createVNode(_component_van_icon, {
                    name: "arrow",
                  }),
                ]),
              ]
            ),
          ]),
          userInfo.value.username
            ? (_openBlock(),
              _createElementBlock(
                "div",
                {
                  key: 0,
                  class: "btn",
                  onClick:
                    _cache[4] ||
                    (_cache[4] = (...args) =>
                      toLogin && toLogin(...args)),
                },
                "更换绑定"
              ))
            : _createCommentVNode("", true),
          _createVNode(
            _component_van_popup,
            {
              show: showDialog.value,
              "onUpdate:show":
                _cache[7] ||
                (_cache[7] = ($event) => (showDialog.value = $event)),
              round: "",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_12, [
                  _createElementVNode(
                    "div",
                    _hoisted_13,
                    _toDisplayString(popupText.value),
                    1
                  ),
                  _withDirectives(
                    _createElementVNode(
                      "input",
                      {
                        "onUpdate:modelValue":
                          _cache[5] ||
                          (_cache[5] = ($event) =>
                            (pupupValue.value = $event)),
                        type: "text",
                        placeholder: `请输入${popupText.value}`,
                      },
                      null,
                      8,
                      _hoisted_14
                    ),
                    [[_vModelText, pupupValue.value]]
                  ),
                  _createElementVNode(
                    "div",
                    {
                      class: "btns",
                      onClick:
                        _cache[6] ||
                        (_cache[6] = (...args) =>
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
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[8] ||
                (_cache[8] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_15, [
                  detailsView.value !== "Login"
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_16, [
                        _createVNode(
                          _component_van_icon,
                          {
                            size: "22",
                            name: "arrow-left",
                            onClick: close.value,
                          },
                          null,
                          8,
                          ["onClick"]
                        ),
                        _createElementVNode(
                          "span",
                          _hoisted_17,
                          _toDisplayString(detailsTitle.value),
                          1
                        ),
                      ]))
                    : _createCommentVNode("", true),
                  _createElementVNode("div", _hoisted_18, [
                    (_openBlock(),
                    _createBlock(
                      _resolveDynamicComponent(detailsView.value),
                      {
                        onClose: close.value,
                      },
                      null,
                      40,
                      ["onClose"]
                    )),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
          _createVNode(
            _component_van_popup,
            {
              show: showDialog2.value,
              "onUpdate:show":
                _cache[11] ||
                (_cache[11] = ($event) => (showDialog2.value = $event)),
              round: "",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_19, [
                  _hoisted_20,
                  _hoisted_21,
                  _withDirectives(
                    _createElementVNode(
                      "input",
                      {
                        "onUpdate:modelValue":
                          _cache[9] ||
                          (_cache[9] = ($event) => (email.value = $event)),
                        type: "text",
                        "max-length": "36",
                        placeholder: "请输入邮箱账号",
                      },
                      null,
                      512
                    ),
                    [[_vModelText, email.value]]
                  ),
                  _createElementVNode(
                    "div",
                    {
                      class: "btns",
                      onClick:
                        _cache[10] ||
                        (_cache[10] = (...args) =>
                          okBtns2 && okBtns2(...args)),
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
