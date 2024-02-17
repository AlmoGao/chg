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

// import { ref, computed } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/assets/js/utils.js";
export default {
  setup() {
    const store = useStore();
    const showDialog2 = ref(false);
    const kefuUrl = ref("");
    const { homePageApi, groupApi, advertiseApi, customerApi } =
      getGlobalProperties().$api;

    if (!store.state.userInfo.email) {
      showDialog2.value = true;
    }

    const gFQunUrl = ref("");

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
    return (_ctx, _cache, $props, $setup) => {
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
              paddingBottom: $setup.showBottomBanner ? "135px" : "65px",
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
                      $setup.toDetails({
                        path: "PersonalInformation",
                        label: "个人管理",
                      })),
                },
                [
                  (_openBlock(),
                  _createBlock(
                    _component_my_image,
                    {
                      key: $setup.fileUrl,
                      url: $setup.fileUrl,
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
                    $setup.userInfo.nickname || $setup.userInfo.username
                  ),
                  1
                ),
              ]),
              !$setup.userInfo.username
                ? (_openBlock(),
                  _createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: "login",
                      onClick:
                        _cache[1] ||
                        (_cache[1] = (...args) =>
                          $setup.toLogin && $setup.toLogin(...args)),
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
                  _toDisplayString($setup.userData.video_num),
                  1
                ),
                _hoisted_6,
              ]),
              _createElementVNode("div", _hoisted_7, [
                _createElementVNode(
                  "p",
                  _hoisted_8,
                  _toDisplayString($setup.userData.fans),
                  1
                ),
                _hoisted_9,
              ]),
              _createElementVNode("div", _hoisted_10, [
                _createElementVNode(
                  "p",
                  _hoisted_11,
                  _toDisplayString($setup.userData.like_num),
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
                      $setup.toDetails({
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
                _renderList($setup.navList1, (item, index) => {
                  return (
                    _openBlock(),
                    _createElementBlock(
                      "div",
                      {
                        key: index,
                        class: "user-item",
                        onClick: () => $setup.toDetails(item),
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
            $setup.bannerList.length
              ? (_openBlock(true),
                _createElementBlock(
                  _Fragment,
                  {
                    key: 0,
                  },
                  _renderList($setup.bannerList, (item, index) => {
                    return (
                      _openBlock(),
                      _createElementBlock(
                        "div",
                        {
                          class: "img_banner_box",
                          key: index,
                          onClick: () => $setup.toBannerDetails(item),
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
            $setup.navList2.length
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_19, [
                  (_openBlock(true),
                  _createElementBlock(
                    _Fragment,
                    null,
                    _renderList($setup.navList2, (item, index) => {
                      return (
                        _openBlock(),
                        _createElementBlock(
                          "div",
                          {
                            key: index,
                            class: "user-item",
                            onClick: () => $setup.toDetails(item),
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
                show: $setup.showDetailsPopul,
                "onUpdate:show":
                  _cache[5] ||
                  (_cache[5] = ($event) => ($setup.showDetailsPopul = $event)),
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
                        ["Announcement"].includes($setup.detailsView)
                          ? "backgroundWhite"
                          : "",
                      ]),
                    },
                    [
                      $setup.showHeader
                        ? (_openBlock(),
                          _createElementBlock("div", _hoisted_22, [
                            _createVNode(
                              _component_van_icon,
                              {
                                size: "22",
                                name: "arrow-left",
                                onClick: $setup.close,
                              },
                              null,
                              8,
                              ["onClick"]
                            ),
                            _createElementVNode(
                              "span",
                              _hoisted_23,
                              _toDisplayString($setup.detailsTitle),
                              1
                            ),
                            $setup.detailsView === "AgentMakesMoney"
                              ? (_openBlock(),
                                _createElementBlock(
                                  "span",
                                  {
                                    key: 0,
                                    class: "right_text",
                                    onClick:
                                      _cache[3] ||
                                      (_cache[3] = () =>
                                        $setup.toDetails({
                                          path: "ShareFreeWatch",
                                          showHeader: "null",
                                        })),
                                  },
                                  "开始代理"
                                ))
                              : _createCommentVNode("", true),
                            $setup.detailsView === "OnlineService"
                              ? (_openBlock(),
                                _createElementBlock(
                                  "span",
                                  {
                                    key: 1,
                                    class: "right_text",
                                    onClick:
                                      _cache[4] ||
                                      (_cache[4] = () =>
                                        $setup.toDetails({
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
                          _resolveDynamicComponent($setup.detailsView),
                          {
                            key: $setup.key,
                            onClose: $setup.close,
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
                show: $setup.showDialog,
                "onUpdate:show":
                  _cache[8] ||
                  (_cache[8] = ($event) => ($setup.showDialog = $event)),
                round: "",
              },
              {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_25, [
                    _createElementVNode(
                      "div",
                      _hoisted_26,
                      _toDisplayString($setup.popupText),
                      1
                    ),
                    _withDirectives(
                      _createElementVNode(
                        "input",
                        {
                          "onUpdate:modelValue":
                            _cache[6] ||
                            (_cache[6] = ($event) =>
                              ($setup.pupupValue = $event)),
                          type: "text",
                          "max-length": "8",
                          placeholder: `请输入${$setup.popupText}`,
                        },
                        null,
                        8,
                        _hoisted_27
                      ),
                      [[_vModelText, $setup.pupupValue]]
                    ),
                    _createElementVNode(
                      "div",
                      {
                        class: "btns",
                        onClick:
                          _cache[7] ||
                          (_cache[7] = (...args) =>
                            $setup.okBtns && $setup.okBtns(...args)),
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
                show: $setup.showDialog2,
                "onUpdate:show":
                  _cache[12] ||
                  (_cache[12] = ($event) => ($setup.showDialog2 = $event)),
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
                            (_cache[9] = ($event) => ($setup.email = $event)),
                          type: "text",
                          "max-length": "36",
                          placeholder: "请输入邮箱账号",
                        },
                        null,
                        512
                      ),
                      [[_vModelText, $setup.email]]
                    ),
                    _createElementVNode("div", _hoisted_31, [
                      _createElementVNode(
                        "div",
                        {
                          class: "btns",
                          onClick:
                            _cache[10] ||
                            (_cache[10] = (...args) =>
                              $setup.okBtns2 && $setup.okBtns2(...args)),
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
                              $setup.closeDialog &&
                              $setup.closeDialog(...args)),
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
