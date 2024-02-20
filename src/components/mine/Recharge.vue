<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  withCtx as _withCtx,
  createTextVNode as _createTextVNode,
  normalizeClass as _normalizeClass,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/song.png";

import { ref, computed } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { useStore } from "vuex";
import { showToast } from "vant";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Recharge",
  props: {
    czActive: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { emit }) {
    const store = useStore();
    let depositList = ref([]);
    let depositDetais = ref({
      deposit_discount: 1,
    });
    let showPay = ref(false);
    let money = ref("");
    let combo_id = ref("");
    let vipList = ref([{}, {}]);
    let active = ref(0);
    let payList = ref([]);
    let pagePatList = ref([]);
    active = ref(props.czActive);
    let showDetailsPopul = ref(false);
    let payObj = ref({});
    let payActiveIndex = ref("0-0");
    const { depositApi, payConfigApi, depositPayApi } =
      getGlobalProperties().$api;

    const close = (type) => {
      if (type === 1) {
        emit("close");

        if (store.state.showLoginPopup.type === "Recharge") {
          store.commit("SET_LOGIN_POPUP", {
            show: false,
            type: "Recharge",
          });
        }
      } else {
        showDetailsPopul.value = false;
      }
    };

    const toDetails = () => {
      showDetailsPopul.value = true;
    };

    const getdepositList = () => {
      depositApi("", "get").then((res) => {
        if (res.code === 0) {
          depositDetais.value = res.data.config;
          depositList.value = res.data.coin;
          vipList.value = res.data.vip_config;
        } else {
          showToast(res.message);
        }
      });
    };

    getdepositList();

    const getPayConfig = () => {
      payConfigApi("", "get").then((res) => {
        if (res.code === 0) {
          payList.value = res.data.filter(
            (item) => item.pay_list && item.pay_list.length
          );
        }
      });
    };

    getPayConfig();

    const isPayFun = (money) => {
      money = Number(money);
      pagePatList.value = [];

      if (payList.value) {
        payList.value.forEach((item) => {
          item.pay_list.forEach((elem) => {
            if (elem.money_type === 2) {
              if (elem.money.includes(money)) {
                pagePatList.value.push(item);
              }
            } else if (elem.money_type === 1) {
              if (money >= elem.min && money <= elem.max) {
                pagePatList.value.push(item);
              }
            }
          });
        });
      }

      if (pagePatList.value.length) {
        payObj.value = pagePatList.value[0].pay_list[0];
        payObj.value.channel_type = pagePatList.value[0].channel_type;
        payActiveIndex.value = "0-0";
        return true;
      } else {
        return false;
      }
    };

    const pay = (item, type) => {
      let num = item;

      if (type === "vip") {
        num = item.real_money;
        combo_id.value = item.id;
      }

      if (isPayFun(num)) {
        money.value = num;
        showPay.value = true;
      } else {
        showToast("无可用充值渠道，请选择其它金额或稍后重试");
      }
    };

    const userInfo = computed(() => {
      return store.state.userInfo;
    });
    const fileUrl = computed(() => {
      return store.state.userInfo.top_image || "123.png";
    });

    const payItemClick = (item, elem, index, ind) => {
      payActiveIndex.value = index + "-" + ind;
      payObj.value = elem;
      payObj.value.channel_type = item.channel_type;
    };

    const depositPay = () => {
      const params = {
        amount: money.value,
        channel: payObj.value.channel,
        code: payObj.value.code,
        group_id: payObj.value.group_id,
        // money_type: 1,
        channel_type: payObj.value.channel_type || 3,
      };

      if (active.value === 0) {
        // params.money_type = 2;
        params.combo_id = combo_id.value;
      }

      depositPayApi(params).then((res) => {
        if (res.code === 0) {
          showPay.value = false;
          window.open(res.data.url);
        } else {
          showToast(res.message);
        }
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-f8a53a76"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "myLike",
    };
    const _hoisted_2 = {
      class: "cont webkit-overflow-scrolling-touch",
    };
    const _hoisted_3 = {
      class: "TwoColumnsVideo-cover-wrap",
    };
    const _hoisted_4 = {
      class: "recharge_top",
    };
    const _hoisted_5 = {
      class: "img_box",
      m: "",
    };
    const _hoisted_6 = {
      class: "username",
    };
    const _hoisted_7 = {
      class: "recharge_box",
    };
    const _hoisted_8 = {
      class: "recharge_box_item",
    };
    const _hoisted_9 = {
      class: "vip_list",
    };
    const _hoisted_10 = ["onClick"];
    const _hoisted_11 = {
      class: "recharge_box_item",
    };
    const _hoisted_12 = {
      class: "TwoColumnsVideo-cover-wrap",
    };
    const _hoisted_13 = {
      class: "recharge_top",
    };
    const _hoisted_14 = {
      class: "img_box",
    };
    const _hoisted_15 = {
      class: "username",
    };
    const _hoisted_16 = {
      class: "text",
    };
    const _hoisted_17 = {
      class: "recharge_box",
    };
    const _hoisted_18 = {
      class: "recharge_box_item",
    };
    const _hoisted_19 = {
      class: "money_box",
    };
    const _hoisted_20 = ["onClick"];
    const _hoisted_21 = {
      class: "text1",
    };
    const _hoisted_22 = {
      class: "text2",
    };
    const _hoisted_23 = {
      class: "text3",
    };

    const _hoisted_24 = /*#__PURE__*/ _withScopeId(() =>
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

    const _hoisted_25 = {
      class: "recharge_box_item",
    };
    const _hoisted_26 = {
      class: "details_page",
    };
    const _hoisted_27 = {
      class: "head_title",
    };

    const _hoisted_28 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "充值明细",
        -1
      )
    );

    const _hoisted_29 = {
      class: "cont_body",
    };
    const _hoisted_30 = {
      class: "pay_content",
    };

    const _hoisted_31 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "title",
        },
        "选择支付方式",
        -1
      )
    );

    const _hoisted_32 = {
      class: "money",
    };

    const _hoisted_33 = /*#__PURE__*/ _createTextVNode(" ￥ ");

    const _hoisted_34 = {
      class: "pay_box",
    };
    const _hoisted_35 = {
      class: "pay_title",
    };
    const _hoisted_36 = {
      class: "pay_list_cont",
    };
    const _hoisted_37 = ["onClick"];
    const _hoisted_38 = ["src"];


    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      const _component_van_tab = _resolveComponent("van-tab");

      const _component_no_data = _resolveComponent("no-data");

      const _component_van_tabs = _resolveComponent("van-tabs");

      const _component_recharge_record = _resolveComponent("recharge-record");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode(
            "div",
            {
              class: "head_titles head_top_20",
              onClick: _cache[0] || (_cache[0] = () => close(1)),
            },
            [
              _createVNode(_component_van_icon, {
                size: "22",
                name: "arrow-left",
              }),
            ]
          ),
          _createElementVNode(
            "span",
            {
              class: "mingxi",
              onClick:
                _cache[1] ||
                (_cache[1] = (...args) =>
                  toDetails && toDetails(...args)),
            },
            "充值明细"
          ),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(
              _component_van_tabs,
              {
                active: active.value,
                "onUpdate:active":
                  _cache[2] ||
                  (_cache[2] = ($event) => (active.value = $event)),
                "line-height": "0",
                swipeable: "",
                animated: "",
                "title-active-color": "#fd5c18",
                "title-inactive-color": "#CCCCCC",
                color: "transparent",
                onClickTab: _ctx.onClickTab,
                background: "transparent",
              },
              {
                default: _withCtx(() => [
                  _createVNode(
                    _component_van_tab,
                    {
                      title: "会员VIP",
                    },
                    {
                      default: _withCtx(() => [
                        _createElementVNode("div", _hoisted_3, [
                          _createElementVNode("div", _hoisted_4, [
                            _createElementVNode("div", _hoisted_5, [
                              _createVNode(
                                _component_my_image,
                                {
                                  url: fileUrl.value,
                                },
                                null,
                                8,
                                ["url"]
                              ),
                            ]),
                            _createElementVNode("div", _hoisted_6, [
                              _createElementVNode(
                                "p",
                                null,
                                _toDisplayString(
                                  userInfo.value.nickname ||
                                    userInfo.value.username
                                ),
                                1
                              ),
                            ]),
                          ]),
                          _createElementVNode("div", _hoisted_7, [
                            _createVNode(
                              _component_van_tabs,
                              {
                                shrink: "",
                                "line-height": "0",
                                swipeable: "",
                                animated: "",
                                "title-active-color": "#fd5c18",
                                "title-inactive-color": "#CCCCCC",
                                color: "transparent",
                                background: "transparent",
                              },
                              {
                                default: _withCtx(() => [
                                  _createVNode(
                                    _component_van_tab,
                                    {
                                      title: "在线充值",
                                    },
                                    {
                                      default: _withCtx(() => [
                                        _createElementVNode("div", _hoisted_8, [
                                          _createElementVNode(
                                            "div",
                                            _hoisted_9,
                                            [
                                              (_openBlock(true),
                                              _createElementBlock(
                                                _Fragment,
                                                null,
                                                _renderList(
                                                  vipList.value,
                                                  (item) => {
                                                    return (
                                                      _openBlock(),
                                                      _createElementBlock(
                                                        "div",
                                                        {
                                                          class: "vip_item",
                                                          onClick: () =>
                                                            pay(
                                                              item,
                                                              "vip"
                                                            ),
                                                          key: item.id,
                                                        },
                                                        [
                                                          _createVNode(
                                                            _component_my_image,
                                                            {
                                                              url: item.image,
                                                            },
                                                            null,
                                                            8,
                                                            ["url"]
                                                          ),
                                                        ],
                                                        8,
                                                        _hoisted_10
                                                      )
                                                    );
                                                  }
                                                ),
                                                128
                                              )),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  _createVNode(
                                    _component_van_tab,
                                    {
                                      title: "代理充值",
                                    },
                                    {
                                      default: _withCtx(() => [
                                        _createElementVNode(
                                          "div",
                                          _hoisted_11,
                                          [
                                            _createVNode(_component_no_data, {
                                              color: "#ffffff",
                                            }),
                                          ]
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  _createVNode(
                    _component_van_tab,
                    {
                      title: "购买赏银",
                    },
                    {
                      default: _withCtx(() => [
                        _createElementVNode("div", _hoisted_12, [
                          _createElementVNode("div", _hoisted_13, [
                            _createElementVNode("div", _hoisted_14, [
                              _createVNode(
                                _component_my_image,
                                {
                                  url: fileUrl.value,
                                },
                                null,
                                8,
                                ["url"]
                              ),
                            ]),
                            _createElementVNode("div", _hoisted_15, [
                              _createElementVNode(
                                "p",
                                null,
                                _toDisplayString(
                                  userInfo.value.nickname ||
                                    userInfo.value.username
                                ),
                                1
                              ),
                            ]),
                            _createElementVNode(
                              "div",
                              _hoisted_16,
                              _toDisplayString(userInfo.value.money) + "赏银",
                              1
                            ),
                          ]),
                          _createElementVNode("div", _hoisted_17, [
                            _createVNode(
                              _component_van_tabs,
                              {
                                shrink: "",
                                "line-height": "0",
                                swipeable: "",
                                animated: "",
                                "title-active-color": "#fd5c18",
                                "title-inactive-color": "#CCCCCC",
                                color: "transparent",
                                background: "transparent",
                              },
                              {
                                default: _withCtx(() => [
                                  _createVNode(
                                    _component_van_tab,
                                    {
                                      title: "在线充值",
                                    },
                                    {
                                      default: _withCtx(() => [
                                        _createElementVNode(
                                          "div",
                                          _hoisted_18,
                                          [
                                            _createElementVNode(
                                              "div",
                                              _hoisted_19,
                                              [
                                                (_openBlock(true),
                                                _createElementBlock(
                                                  _Fragment,
                                                  null,
                                                  _renderList(
                                                    depositList.value,
                                                    (item) => {
                                                      return (
                                                        _openBlock(),
                                                        _createElementBlock(
                                                          "div",
                                                          {
                                                            class: "money_item",
                                                            onClick: () =>
                                                              pay(item),
                                                            key: item,
                                                          },
                                                          [
                                                            _createElementVNode(
                                                              "p",
                                                              _hoisted_21,
                                                              [
                                                                _createTextVNode(
                                                                  _toDisplayString(
                                                                    item
                                                                  ) + "赏银 ",
                                                                  1
                                                                ),
                                                                _createElementVNode(
                                                                  "span",
                                                                  _hoisted_22,
                                                                  "￥" +
                                                                    _toDisplayString(
                                                                      item
                                                                    ),
                                                                  1
                                                                ),
                                                              ]
                                                            ),
                                                            _createElementVNode(
                                                              "p",
                                                              _hoisted_23,
                                                              [
                                                                _hoisted_24,
                                                                _createTextVNode(
                                                                  _toDisplayString(
                                                                    (item *
                                                                      depositDetais.value
                                                                        .deposit_discount) /
                                                                      100
                                                                  ) + "赏银 ",
                                                                  1
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          8,
                                                          _hoisted_20
                                                        )
                                                      );
                                                    }
                                                  ),
                                                  128
                                                )),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  _createVNode(
                                    _component_van_tab,
                                    {
                                      title: "代理充值",
                                    },
                                    {
                                      default: _withCtx(() => [
                                        _createElementVNode(
                                          "div",
                                          _hoisted_25,
                                          [
                                            _createVNode(_component_no_data, {
                                              color: "#ffffff",
                                            }),
                                          ]
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["active", "onClickTab"]
            ),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDetailsPopul.value,
              "onUpdate:show":
                _cache[3] ||
                (_cache[3] = ($event) => (showDetailsPopul.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_26, [
                  _createElementVNode("div", _hoisted_27, [
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
                    _hoisted_28,
                  ]),
                  _createElementVNode("div", _hoisted_29, [
                    _createVNode(
                      _component_recharge_record,
                      {
                        onClose: close,
                      },
                      null,
                      8,
                      ["onClose"]
                    ),
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
              "overlay-class": "pay_overlay",
              show: showPay.value,
              "onUpdate:show":
                _cache[5] ||
                (_cache[5] = ($event) => (showPay.value = $event)),
              position: "bottom",
              round: "",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_30, [
                  _hoisted_31,
                  _createElementVNode("p", _hoisted_32, [
                    _hoisted_33,
                    _createElementVNode(
                      "span",
                      null,
                      _toDisplayString(money.value),
                      1
                    ),
                  ]),
                  _createElementVNode("div", _hoisted_34, [
                    (_openBlock(true),
                    _createElementBlock(
                      _Fragment,
                      null,
                      _renderList(pagePatList.value, (item, index) => {
                        return (
                          _openBlock(),
                          _createElementBlock(
                            "div",
                            {
                              class: "pay_list",
                              key: index,
                            },
                            [
                              _createElementVNode(
                                "p",
                                _hoisted_35,
                                _toDisplayString(item.channel_name),
                                1
                              ),
                              _createElementVNode("div", _hoisted_36, [
                                (_openBlock(true),
                                _createElementBlock(
                                  _Fragment,
                                  null,
                                  _renderList(item.pay_list, (elem, ind) => {
                                    return (
                                      _openBlock(),
                                      _createElementBlock(
                                        "div",
                                        {
                                          class: _normalizeClass([
                                            "pay_list_item",
                                            payActiveIndex.value ===
                                            index + "-" + ind
                                              ? "active"
                                              : "",
                                          ]),
                                          key: index + ind,
                                          onClick: () =>
                                            payItemClick(
                                              item,
                                              elem,
                                              index,
                                              ind
                                            ),
                                        },
                                        [
                                          _createElementVNode(
                                            "img",
                                            {
                                              src: item.channel_image,
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            _hoisted_38
                                          ),
                                          _createTextVNode(
                                            _toDisplayString(elem.channel_name),
                                            1
                                          ),
                                        ],
                                        10,
                                        _hoisted_37
                                      )
                                    );
                                  }),
                                  128
                                )),
                              ]),
                            ]
                          )
                        );
                      }),
                      128
                    )),
                  ]),
                  _createElementVNode(
                    "div",
                    {
                      class: "user-public-btn",
                      onClick:
                        _cache[4] ||
                        (_cache[4] = (...args) =>
                          depositPay && depositPay(...args)),
                    },
                    "确认充值"
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
