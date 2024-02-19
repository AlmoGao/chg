<script>
import {
  resolveComponent as _resolveComponent,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  resolveDirective as _resolveDirective,
  withDirectives as _withDirectives,
  createVNode as _createVNode,
  resolveDynamicComponent as _resolveDynamicComponent,
  normalizeClass as _normalizeClass,
  withCtx as _withCtx,
  vModelText as _vModelText,
  normalizeStyle as _normalizeStyle,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/iconMember.png";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties, advertiseDetails } from "@/assets/js/utils.js";
import { Toast } from "vant";
export default {
  setup(props) {
    const store = useStore();
    const isLoging = ref(false);
    const showDialog = ref(false);
    const showDialog2 = ref(false);
    const popupText = ref("");
    const pupupValue = ref("");
    const email = ref("");
    let key = ref("");
    const kefuUrl = ref("");
    const userInfo = computed(() => {
      return store.state.userInfo;
    });
    const fileUrl = computed(() => {
      return store.state.userInfo.top_image || "123.png";
    });
    const {
      homePageApi,
      groupApi,
      inviteSaveApi,
      modifyEmailApi,
      advertiseApi,
      customerApi,
    } = getGlobalProperties().$api;
    const showBottomBanner = computed(() => {
      return store.state.showBottomBanner;
    });

    if (!store.state.userInfo.email) {
      showDialog2.value = true;
    }

    const closeDialog = () => {
      showDialog2.value = false;
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
    }; // const navList1 = ref([
    //   {
    //     label: "我的喜欢",
    //     path: "MyLike",
    //     showHeader: "null",
    //     icon: new URL("./images/iconActiveLike.png", import.meta.url).href,
    //   },
    //   {
    //     label: "我的消息",
    //     path: "MyMessage",
    //     icon: new URL("./images/iconServerMsg.png", import.meta.url).href,
    //   },
    //   {
    //     label: "在线客服",
    //     path: "OnlineService",
    //     icon: new URL("./images/iconServerCustomer.png", import.meta.url).href,
    //   },
    //   {
    //     label: "官方公告",
    //     path: "Announcement",
    //     icon: new URL("./images/iconServerBulletin.png", import.meta.url).href,
    //   },
    //   {
    //     label: "设置",
    //     path: "MySet",
    //     icon: new URL("./images/iconServerSet.png", import.meta.url).href,
    //   },
    //   {
    //     label: "加入官方群",
    //     path: "",
    //     icon: new URL("./images/iconServerGroup.png", import.meta.url).href,
    //   },
    // ]);
    // const navList2 = ref([]);

    const navList1 = ref([
      // {
      //   label: "约炮解锁",
      //   path: "",
      //   icon: new URL("./images/iconActiveMyDating.png", import.meta.url).href,
      // },
      // {
      //   label: "购买",
      //   path: "",
      //   icon: new URL("./images/iconActiveBuy.png", import.meta.url).href,
      // },
      {
        label: "钱包",
        path: "MyWallet",
        icon: new URL("@/assets/images/iconActiveWallet.png", import.meta.url).href,
      },
      {
        label: "分享无限看",
        path: "ShareFreeWatch",
        showHeader: "null",
        icon: new URL("@/assets/images/iconActiveShare.png", import.meta.url).href,
      },
      {
        label: "我的喜欢",
        path: "MyLike",
        showHeader: "null",
        icon: new URL("@/assets/images/iconActiveLike.png", import.meta.url).href,
      }, // {
      //   label: "粉丝团",
      //   path: "",
      //   icon: new URL("./images/iconActiveFans.png", import.meta.url).href,
      // },
      {
        label: "代理赚钱",
        path: "AgentMakesMoney",
        icon: new URL("@/assets/images/iconActiveMakeMoney.png", import.meta.url).href,
      },
      {
        label: "我的微贴",
        path: "MyMicropost",
        showHeader: "null",
        icon: new URL("@/assets/images/iconActivePost.png", import.meta.url).href,
      },
    ]);
    const navList2 = ref([
      // {
      //   label: "认证管理",
      //   path: "",
      //   icon: new URL("./images/iconServerAttest.png", import.meta.url).href,
      // },
      {
        label: "我的消息",
        path: "MyMessage",
        icon: new URL("@/assets/images/iconServerMsg.png", import.meta.url).href,
      },
      {
        label: "在线客服",
        path: "OnlineService",
        icon: new URL("@/assets/images/iconServerCustomer.png", import.meta.url).href,
      },
      {
        label: "官方公告",
        path: "Announcement",
        icon: new URL("@/assets/images/iconServerBulletin.png", import.meta.url).href,
      },
      {
        label: "设置",
        path: "MySet",
        icon: new URL("@/assets/images/iconServerSet.png", import.meta.url).href,
      },
      {
        label: "加入官方群",
        path: "",
        icon: new URL("@/assets/images/iconServerGroup.png", import.meta.url).href,
      }, // {
      //   label: "应用中心",
      //   path: "",
      //   icon: new URL("./images/iconServerApp.png", import.meta.url).href,
      // },
      // {
      //   label: "兑换码",
      //   path: "",
      //   icon: new URL("./images/iconServerExchangeCode.png", import.meta.url)
      //     .href,
      // },
      {
        label: "邀请码",
        path: "",
        icon: new URL("@/assets/images/iconServerInviteCode.png", import.meta.url)
          .href,
      },
      {
        label: "商务合作",
        path: "",
        icon: new URL("@/assets/images/iconServerCustomer.png", import.meta.url).href,
      },
    ]);
    const showDetailsPopul = ref(false);
    const showHeader = ref(true);
    const detailsTitle = ref("");
    const detailsView = ref("");
    const gFQunUrl = ref("");

    const toDetails = (item) => {
      showHeader.value = true;
      key.value = Math.random();

      if (item.showHeader === "null") {
        showHeader.value = false;
      }

      if (item.path) {
        showDetailsPopul.value = true;
        detailsView.value = item.path;
        detailsTitle.value = item.label;
      } else if (item.url) {
        // window.open(item.url);
        location.href = item.url;
      } else if (item.label === "商务合作") {
        // window.open(gFQunUrl.value);
        location.href = kefuUrl.value;
      } else if (item.label === "加入官方群") {
        // window.open(gFQunUrl.value);
        location.href = gFQunUrl.value;
      } else {
        if (item.label === "兑换码" || item.label === "邀请码") {
          // Toast("暂未开放");
          popupText.value = item.label;
          pupupValue.value = "";
          showDialog.value = true;
        } else {
          Toast("暂未开放");
        }
      }
    };

    const close = () => {
      showDetailsPopul.value = false;
    };

    const toLogin = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "Login",
      });
    };

    const userData = ref({});

    const homePageData = () => {
      homePageApi("", "get").then((res) => {
        if (res.code === 0) {
          userData.value = res.data;
          let data = store.state.userInfo;
          data = { ...data, ...res.data };
          store.commit("SET_USER_INFO", data);
        }
      });
    };

    const getGroup = () => {
      groupApi("", "get").then((res) => {
        if (res.code === 0) {
          gFQunUrl.value = res.data.group_num;
        }
      });
    };

    const bannerList = ref([]);

    const getBanner = () => {
      advertiseApi(
        {
          type: 5,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          bannerList.value = res.data.rows;
        }
      });
    };

    getBanner();

    const toBannerDetails = (item) => {
      if (item.link) {
        store.commit("setShowDialogIsAdvertis", {
          show: true,
          url: item.link,
        });
        advertiseDetails(item.link);
      }
    };

    getGroup();
    homePageData();

    const getCustomer = () => {
      customerApi("", "get").then((res) => {
        if (res.code === 0) {
          kefuUrl.value = res.data.customer_service;
        }
      });
    };

    getCustomer();

    const _withScopeId = (n) => (
      _pushScopeId("data-v-b3681f50"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "mine_top",
    };
    const _hoisted_2 = {
      class: "username",
    };
    const _hoisted_3 = {
      class: "top_num_box",
    };
    const _hoisted_4 = {
      class: "num_item",
    };
    const _hoisted_5 = {
      class: "num",
    };

    const _hoisted_6 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "text",
        },
        "作品",
        -1
      )
    );

    const _hoisted_7 = {
      class: "num_item",
    };
    const _hoisted_8 = {
      class: "num",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "text",
        },
        "粉丝",
        -1
      )
    );

    const _hoisted_10 = {
      class: "num_item",
    };
    const _hoisted_11 = {
      class: "num",
    };

    const _hoisted_12 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "text",
        },
        "获赞",
        -1
      )
    );

    const _hoisted_13 = {
      class: "user-member-box",
    };

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-member-info",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            class: "user-member-icon",
            src: _imports_0,
          }),
          /*#__PURE__*/ _createElementVNode("span", null, "开通会员无限看片"),
        ],
        -1
      )
    );

    const _hoisted_15 = {
      class: "user-active-box",
    };
    const _hoisted_16 = ["onClick"];
    const _hoisted_17 = {
      alt: "",
    };
    const _hoisted_18 = ["onClick"];
    const _hoisted_19 = {
      key: 1,
      class: "user-active-box",
    };
    const _hoisted_20 = ["onClick"];
    const _hoisted_21 = {
      alt: "",
    };
    const _hoisted_22 = {
      key: 0,
      class: "head_title",
    };
    const _hoisted_23 = {
      class: "title",
    };
    const _hoisted_24 = {
      class: "cont_body",
    };
    const _hoisted_25 = {
      class: "dialog_content",
    };
    const _hoisted_26 = {
      class: "title",
    };
    const _hoisted_27 = ["placeholder"];
    const _hoisted_28 = {
      class: "dialog_content",
    };

    const _hoisted_29 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "title",
        },
        "填写个人邮箱",
        -1
      )
    );

    const _hoisted_30 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "text",
        },
        " 为了防止账号丢失，且便于推荐新片，请设置您的邮箱地址，现在设置有机会免费空降福利姬哦！~ ",
        -1
      )
    );

    const _hoisted_31 = {
      class: "btn_box",
    };
    console.log({
      props,
      isLoging,
      navList1,
      navList2,
      toDetails,
      showDetailsPopul,
      close,
      detailsTitle,
      detailsView,
      showHeader,
      showDialog,
      popupText,
      pupupValue,
      okBtns,
      toLogin,
      userInfo,
      userData,
      fileUrl,
      key,
      showBottomBanner,
      showDialog2,
      closeDialog,
      email,
      okBtns2,
      bannerList,
      toBannerDetails,
    });
    return (_ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_van_popup = _resolveComponent("van-popup");

      const _directive_lazy = _resolveDirective("lazy");

      return (
        _openBlock(),
        _createElementBlock(
          "div",
          {
            class: "member",
            style: _normalizeStyle({
              paddingBottom: showBottomBanner.value ? "135px" : "65px",
            }),
          },
          [
            _createElementVNode("div", _hoisted_1, [
              _createElementVNode(
                "div",
                {
                  class: "img_box",
                  onClick:
                    _cache[0] ||
                    (_cache[0] = () =>
                      toDetails({
                        path: "PersonalInformation",
                        label: "个人管理",
                      })),
                },
                [
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
                ]
              ),
              _createElementVNode("div", _hoisted_2, [
                _createElementVNode(
                  "p",
                  null,
                  _toDisplayString(
                    userInfo.value.nickname || userInfo.value.username
                  ),
                  1
                ),
              ]),
              !userInfo.value.username
                ? (_openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: "login",
                      onClick:
                        _cache[1] ||
                        (_cache[1] = (...args) =>
                          toLogin && toLogin(...args)),
                    },
                    " 登录/注册> "
                  ))
                : _createCommentVNode("", true),
            ]),
            _createElementVNode("div", _hoisted_3, [
              _createElementVNode("div", _hoisted_4, [
                _createElementVNode(
                  "p",
                  _hoisted_5,
                  _toDisplayString(userData.value.video_num),
                  1
                ),
                _hoisted_6,
              ]),
              _createElementVNode("div", _hoisted_7, [
                _createElementVNode(
                  "p",
                  _hoisted_8,
                  _toDisplayString(userData.value.fans),
                  1
                ),
                _hoisted_9,
              ]),
              _createElementVNode("div", _hoisted_10, [
                _createElementVNode(
                  "p",
                  _hoisted_11,
                  _toDisplayString(userData.value.like_num),
                  1
                ),
                _hoisted_12,
              ]),
            ]),
            _createElementVNode("div", _hoisted_13, [
              _hoisted_14,
              _createElementVNode(
                "div",
                {
                  class: "user-member-btn",
                  onClick:
                    _cache[2] ||
                    (_cache[2] = () =>
                      toDetails({
                        path: "Recharge",
                        showHeader: "null",
                      })),
                },
                " 查看详情 "
              ),
            ]),
            _createElementVNode("div", _hoisted_15, [
              (_openBlock(true),
              _createElementBlock(
                _Fragment,
                null,
                _renderList(navList1.value, (item, index) => {
                  return (
                    _openBlock(),
                    _createElementBlock(
                      "div",
                      {
                        key: index,
                        class: "user-item",
                        onClick: () => toDetails(item),
                      },
                      [
                        _withDirectives(
                          _createElementVNode("img", _hoisted_17, null, 512),
                          [[_directive_lazy, item.icon]]
                        ),
                        _createElementVNode(
                          "p",
                          null,
                          _toDisplayString(item.label),
                          1
                        ),
                      ],
                      8,
                      _hoisted_16
                    )
                  );
                }),
                128
              )),
            ]),
            bannerList.value.length
              ? (_openBlock(true),
                _createElementBlock(
                  _Fragment,
                  {
                    key: 0,
                  },
                  _renderList(bannerList.value, (item, index) => {
                    return (
                      _openBlock(),
                      _createElementBlock(
                        "div",
                        {
                          class: "img_banner_box",
                          key: index,
                          onClick: () => toBannerDetails(item),
                        },
                        [
                          _createVNode(
                            _component_my_image,
                            {
                              url: item.url,
                            },
                            null,
                            8,
                            ["url"]
                          ),
                        ],
                        8,
                        _hoisted_18
                      )
                    );
                  }),
                  128
                ))
              : _createCommentVNode("", true),
            navList2.value.length
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_19, [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(navList2.value, (item, index) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            key: index,
                            class: "user-item",
                            onClick: () => toDetails(item),
                          },
                          [
                            _withDirectives(
                              _createElementVNode(
                                "img",
                                _hoisted_21,
                                null,
                                512
                              ),
                              [[_directive_lazy, item.icon]]
                            ),
                            _createElementVNode(
                              "p",
                              null,
                              _toDisplayString(item.label),
                              1
                            ),
                          ],
                          8,
                          _hoisted_20
                        )
                      );
                    }),
                    128
                  )),
                ]))
              : _createCommentVNode("", true),
            _createVNode(
              _component_van_popup,
              {
                show: showDetailsPopul.value,
                "onUpdate:show":
                  _cache[5] ||
                  (_cache[5] = ($event) => (showDetailsPopul.value = $event)),
                class: "popup_coentent",
                overlay: false,
                position: "right",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode(
                    "div",
                    {
                      class: _normalizeClass([
                        "details_page",
                        ["Announcement"].includes(detailsView.value)
                          ? "backgroundWhite"
                          : "",
                      ]),
                    },
                    [
                      showHeader.value
                        ? (_openBlock(),
                          _createElementBlock("div", _hoisted_22, [
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
                              _hoisted_23,
                              _toDisplayString(detailsTitle.value),
                              1
                            ),
                            detailsView.value === "AgentMakesMoney"
                              ? (_openBlock(),
                                _createElementBlock(
                                  "span",
                                  {
                                    key: 0,
                                    class: "right_text",
                                    onClick:
                                      _cache[3] ||
                                      (_cache[3] = () =>
                                        toDetails({
                                          path: "ShareFreeWatch",
                                          showHeader: "null",
                                        })),
                                  },
                                  "开始代理"
                                ))
                              : _createCommentVNode("", true),
                            detailsView.value === "OnlineService"
                              ? (_openBlock(),
                                _createElementBlock(
                                  "span",
                                  {
                                    key: 1,
                                    class: "right_text",
                                    onClick:
                                      _cache[4] ||
                                      (_cache[4] = () =>
                                        toDetails({
                                          label: "加入官方群",
                                        })),
                                  },
                                  "加入官方群"
                                ))
                              : _createCommentVNode("", true),
                          ]))
                        : _createCommentVNode("", true),
                      _createElementVNode("div", _hoisted_24, [
                        (_openBlock(),
                        _createBlock(
                          _resolveDynamicComponent(detailsView.value),
                          {
                            key: key.value,
                            onClose: close.value,
                          },
                          null,
                          40,
                          ["onClose"]
                        )),
                      ]),
                    ],
                    2
                  ),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
            _createVNode(
              _component_van_popup,
              {
                show: showDialog.value,
                "onUpdate:show":
                  _cache[8] ||
                  (_cache[8] = ($event) => (showDialog.value = $event)),
                round: "",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_25, [
                    _createElementVNode(
                      "div",
                      _hoisted_26,
                      _toDisplayString(popupText.value),
                      1
                    ),
                    _withDirectives(
                      _createElementVNode(
                        "input",
                        {
                          "onUpdate:modelValue":
                            _cache[6] ||
                            (_cache[6] = ($event) =>
                              (pupupValue.value = $event)),
                          type: "text",
                          "max-length": "8",
                          placeholder: `请输入${popupText.value}`,
                        },
                        null,
                        8,
                        _hoisted_27
                      ),
                      [[_vModelText, pupupValue.value]]
                    ),
                    _createElementVNode(
                      "div",
                      {
                        class: "btns",
                        onClick:
                          _cache[7] ||
                          (_cache[7] = (...args) =>
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
                show: showDialog2.value,
                "onUpdate:show":
                  _cache[12] ||
                  (_cache[12] = ($event) => (showDialog2.value = $event)),
                round: "",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_28, [
                    _hoisted_29,
                    _hoisted_30,
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
                    _createElementVNode("div", _hoisted_31, [
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
                      _createElementVNode(
                        "div",
                        {
                          class: "btns",
                          onClick:
                            _cache[11] ||
                            (_cache[11] = (...args) =>
                              closeDialog &&
                              closeDialog(...args)),
                        },
                        "取消"
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["show"]
            ),
          ],
          4
        )
      );
    };
  },
};
</script>
