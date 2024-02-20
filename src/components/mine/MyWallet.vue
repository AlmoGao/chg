<script>
import {
  createElementVNode as _createElementVNode,
  createTextVNode as _createTextVNode,
  toDisplayString as _toDisplayString,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  resolveDynamicComponent as _resolveDynamicComponent,
  createBlock as _createBlock,
  withCtx as _withCtx,
  createStaticVNode as _createStaticVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/iconRight.png";
import _imports_1 from "@/assets/images/mine/iconActiveMember.png";
import _imports_2 from "@/assets/images/mine/iconWalletGold.png";
import _imports_3 from "@/assets/images/mine/iconWalletCoin.png";
import _imports_4 from "@/assets/images/mine/iconActiveShare.png";

import { useStore } from "vuex";
import { ref, computed } from "vue";
export default {
  name: "MyWallet",

  setup(props) {
    const store = useStore();
    let showDetailsPopul = ref(false);
    let showHeader = ref(false);
    let detailsTitle = ref(false);
    let detailsView = ref("");
    let active = ref(0);
    store.dispatch("getUserInfo");

    const toDetails = (item) => {
      showHeader.value = true;

      if (item.showHeader === "null") {
        showHeader.value = false;
      }

      detailsView.value = item.path;
      detailsTitle.value = item.title;
      active.value = item.active;
      showDetailsPopul.value = true;
    };

    const close = () => {
      showDetailsPopul.value = false;
    };

    const userInfo = computed(() => {
      return store.state.userInfo;
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-6fbeb6b6"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "my-wallet",
    };
    const _hoisted_2 = {
      class: "pulldown-scroller",
    };
    const _hoisted_3 = {
      class: "my-wallet-header",
    };
    const _hoisted_4 = {
      class: "my-wallet-header-info",
    };

    const _hoisted_5 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-header-title",
        },
        [
          /*#__PURE__*/ _createTextVNode(" 账户余额"),
          /*#__PURE__*/ _createElementVNode("img", {
            class: "my-wallet-header-mark",
            src: _imports_0,
          }),
        ],
        -1
      )
    );

    const _hoisted_6 = {
      class: "my-wallet-header-subtitle",
    };

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-header-active",
        },
        null,
        -1
      )
    );

    const _hoisted_8 = {
      class: "my-wallet-list",
    };

    const _hoisted_9 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-list-title",
        },
        "商城",
        -1
      )
    );

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-item-info",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            class: "my-wallet-item-icon",
            src: _imports_1,
          }),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "my-wallet-item-title",
            },
            "充值会员"
          ),
        ],
        -1
      )
    );

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-item-active",
        },
        null,
        -1
      )
    );

    const _hoisted_12 = [_hoisted_10, _hoisted_11];

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-item-info",
        },
        [
          /*#__PURE__*/ _createElementVNode("img", {
            class: "my-wallet-item-icon",
            src: _imports_2,
          }),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "my-wallet-item-title",
            },
            "充值赏银"
          ),
        ],
        -1
      )
    );

    const _hoisted_14 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-item-active",
        },
        null,
        -1
      )
    );

    const _hoisted_15 = [_hoisted_13, _hoisted_14];
    const _hoisted_16 = {
      class: "my-wallet-list",
    };

    const _hoisted_17 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "my-wallet-list-title",
        },
        "活动",
        -1
      )
    );

    const _hoisted_18 = /*#__PURE__*/ _createStaticVNode(
      '<div class="my-wallet-item-info" data-v-6fbeb6b6><img class="my-wallet-item-icon" src="' +
        _imports_3 +
        '" data-v-6fbeb6b6><div class="my-wallet-item-title" data-v-6fbeb6b6>全民赚钱</div></div><div class="my-wallet-item-active" data-v-6fbeb6b6><img src="' +
        _imports_0 +
        '" data-v-6fbeb6b6></div>',
      2
    );

    const _hoisted_20 = [_hoisted_18];

    const _hoisted_21 = /*#__PURE__*/ _createStaticVNode(
      '<div class="my-wallet-item-info" data-v-6fbeb6b6><img class="my-wallet-item-icon" src="' +
        _imports_4 +
        '" data-v-6fbeb6b6><div class="my-wallet-item-title" data-v-6fbeb6b6>邀请好友</div></div><div class="my-wallet-item-active" data-v-6fbeb6b6><img src="' +
        _imports_0 +
        '" data-v-6fbeb6b6></div>',
      2
    );

    const _hoisted_23 = [_hoisted_21];
    const _hoisted_24 = {
      class: "details_page",
    };
    const _hoisted_25 = {
      key: 0,
      class: "head_title",
    };
    const _hoisted_26 = {
      class: "title",
    };
    const _hoisted_27 = {
      class: "",
    };

    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "span",
            {
              class: "right_text",
              onClick:
                _cache[0] ||
                (_cache[0] = () =>
                  toDetails({
                    path: "ExpensesRecord",
                    title: "收支明细",
                  })),
            },
            "消费记录"
          ),
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode("div", _hoisted_3, [
              _createElementVNode("div", _hoisted_4, [
                _hoisted_5,
                _createElementVNode(
                  "div",
                  _hoisted_6,
                  _toDisplayString(userInfo.value.money) + "赏银",
                  1
                ),
              ]),
              _hoisted_7,
            ]),
            _createElementVNode("div", _hoisted_8, [
              _hoisted_9,
              _createElementVNode(
                "div",
                {
                  class: "my-wallet-item",
                  onClick:
                    _cache[1] ||
                    (_cache[1] = () =>
                      toDetails({
                        path: "Recharge",
                        showHeader: "null",
                        active: 0,
                      })),
                },
                _hoisted_12
              ),
              _createElementVNode(
                "div",
                {
                  class: "my-wallet-item",
                  onClick:
                    _cache[2] ||
                    (_cache[2] = () =>
                      toDetails({
                        path: "Recharge",
                        showHeader: "null",
                        active: 1,
                      })),
                },
                _hoisted_15
              ),
            ]),
            _createElementVNode("div", _hoisted_16, [
              _hoisted_17,
              _createElementVNode(
                "div",
                {
                  class: "my-wallet-item",
                  onClick:
                    _cache[3] ||
                    (_cache[3] = () =>
                      toDetails({
                        path: "AgentMakesMoney",
                        title: "代理赚钱",
                      })),
                },
                _hoisted_20
              ),
              _createElementVNode(
                "div",
                {
                  class: "my-wallet-item",
                  onClick:
                    _cache[4] ||
                    (_cache[4] = () =>
                      toDetails({
                        path: "ShareFreeWatch",
                        showHeader: "null",
                      })),
                },
                _hoisted_23
              ),
            ]),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[6] ||
                (_cache[6] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_24, [
                  showHeader.value
                    ? (_openBlock(),
                      _createElementBlock("div", _hoisted_25, [
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
                        _createElementVNode(
                          "span",
                          _hoisted_26,
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
                                  _cache[5] ||
                                  (_cache[5] = () =>
                                    toDetails({
                                      path: "ShareFreeWatch",
                                      showHeader: "null",
                                    })),
                              },
                              "开始代理"
                            ))
                          : _createCommentVNode("", true),
                      ]))
                    : _createCommentVNode("", true),
                  _createElementVNode("div", _hoisted_27, [
                    (_openBlock(),
                    _createBlock(
                      _resolveDynamicComponent(detailsView.value),
                      {
                        key: new Date().getTime(),
                        czActive: active.value,
                        onClose: close,
                      },
                      null,
                      40,
                      ["czActive", "onClose"]
                    )),
                  ]),
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
