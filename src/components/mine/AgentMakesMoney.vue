<script>
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  createStaticVNode as _createStaticVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/mine/makeMoneyAd.jpg";

import { ref, computed } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { showToast } from "vant";
import { useStore } from "vuex";
export default {
  name: "AgentMakesMoney",

  setup(props) {
    const showDialog = ref(false);
    const store = useStore();
    const commissioDetails = ref({});
    const commissionLogList = ref([]);
    let page = ref(1);
    const finished = ref(false);
    const error = ref(false);
    const loading = ref(false);
    const { commissionApi, commissionLogApi } = getGlobalProperties().$api;

    const ruleDetails = () => {
      showDialog.value = true;
    };

    const getCommission = () => {
      commissionApi("", "get").then((res) => {
        if (res.code === 0) {
          commissioDetails.value = res.data;
        } else {
          showToast(res.message);
        }
      });
    };

    getCommission();

    const getCommissionLog = () => {
      const params = {
        page: page.value,
      };
      commissionLogApi(params, "get").then((res) => {
        if (res.code === 0) {
          commissionLogList.value = commissionLogList.value.concat(
            res.data.rows
          );
          loading.value = false;

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    };

    getCommissionLog();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getCommissionLog();
    };

    const close = () => {
      showDialog.value = false;
    };

    const rule_url = computed(() => {
      return store.state.userInfo.rule_url;
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-dae1bf88"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "agentMakesMoney",
    };
    const _hoisted_2 = {
      class: "full-column",
    };
    const _hoisted_3 = {
      class: "scroller-wrapper",
    };
    const _hoisted_4 = {
      class: "pulldown-scroller",
    };
    const _hoisted_5 = {
      class: "user-make-money-top",
    };
    const _hoisted_6 = {
      class: "user-make-money-top-box",
    };

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-make-money-top-row",
        },
        [
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "user-make-money-top-item",
            },
            "总业绩"
          ),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "user-make-money-top-item",
            },
            "总收益"
          ),
        ],
        -1
      )
    );

    const _hoisted_8 = {
      class: "user-make-money-top-row",
    };
    const _hoisted_9 = {
      class: "user-make-money-top-item large-text",
    };
    const _hoisted_10 = {
      class: "user-make-money-top-item large-text",
    };

    const _hoisted_11 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "img",
        {
          src: _imports_0,
        },
        null,
        -1
      )
    );

    const _hoisted_12 = [_hoisted_11];
    const _hoisted_13 = {
      class: "user-make-money-list",
    };
    const _hoisted_14 = {
      class: "user-make-money-list-box",
    };

    const _hoisted_15 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-make-money-list-row",
        },
        [
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "user-make-money-list-item",
            },
            "当月收益(元)"
          ),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "user-make-money-list-item",
            },
            "当月业绩(元)"
          ),
          /*#__PURE__*/ _createElementVNode(
            "div",
            {
              class: "user-make-money-list-item",
            },
            "当月推广人数"
          ),
        ],
        -1
      )
    );

    const _hoisted_16 = {
      class: "user-make-money-list-row large-text",
    };
    const _hoisted_17 = {
      class: "user-make-money-list-item",
    };
    const _hoisted_18 = {
      class: "user-make-money-list-item",
    };
    const _hoisted_19 = {
      class: "user-make-money-list-item",
    };
    const _hoisted_20 = {
      class: "user-make-money-list",
    };

    const _hoisted_21 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-make-money-list-title",
        },
        "推广人数统计",
        -1
      )
    );

    const _hoisted_22 = {
      class: "user-make-money-list-box",
    };
    const _hoisted_23 = {
      key: 0,
      class: "user-make-money-list-row large-text",
    };
    const _hoisted_24 = {
      class: "user-make-money-list-item",
    };
    const _hoisted_25 = {
      class: "user-make-money-list-item",
    };
    const _hoisted_26 = {
      class: "user-make-money-list-item",
    };
    const _hoisted_27 = {
      class: "user-make-money-list-item",
    };

    const _hoisted_28 = /*#__PURE__*/ _createStaticVNode(
      '<div class="user-make-money-list-row" data-v-dae1bf88><div class="user-make-money-list-item" data-v-dae1bf88>一级推广</div><div class="user-make-money-list-item" data-v-dae1bf88>二级推广</div><div class="user-make-money-list-item" data-v-dae1bf88>三级推广</div><div class="user-make-money-list-item" data-v-dae1bf88>四级推广</div></div>',
      1
    );

    const _hoisted_29 = {
      class: "user-make-money-list",
    };

    const _hoisted_30 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "user-make-money-list-title",
        },
        "业绩明细",
        -1
      )
    );

    const _hoisted_31 = {
      class: "user-make-money-list-box",
      style: {
        padding: "10px",
      },
    };
    const _hoisted_32 = {
      key: 0,
      class: "header flex",
    };

    const _hoisted_33 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "item",
        },
        "用户名",
        -1
      )
    );

    const _hoisted_34 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "item",
        },
        "用户级别",
        -1
      )
    );

    const _hoisted_35 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "item",
        },
        "金额",
        -1
      )
    );

    const _hoisted_36 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "item",
        },
        "备注",
        -1
      )
    );

    const _hoisted_37 = [_hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36];
    const _hoisted_38 = {
      key: 1,
      class: "tbody",
    };
    const _hoisted_39 = {
      class: "item",
    };
    const _hoisted_40 = {
      class: "item",
    };
    const _hoisted_41 = {
      class: "item",
    };
    const _hoisted_42 = {
      class: "item",
    };
    const _hoisted_43 = {
      key: 2,
      class: "user-make-money-list-item",
      style: {
        "text-align": "center",
        padding: "10px 0",
      },
    };
    const _hoisted_44 = {
      class: "details_page",
    };
    const _hoisted_45 = {
      class: "head_title",
    };

    const _hoisted_46 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "代理规则",
        -1
      )
    );

    const _hoisted_47 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "cont_body",
        },
        [
          /*#__PURE__*/ _createElementVNode("iframe", {
            src: "/rule.html",
            frameborder: "0",
          }),
        ],
        -1
      )
    );
    return (_ctx, _cache) => {
      const _component_van_list = _resolveComponent("van-list");

      const _component_van_icon = _resolveComponent("van-icon");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode("div", _hoisted_3, [
              _createElementVNode("div", _hoisted_4, [
                _createElementVNode("div", _hoisted_5, [
                  _createElementVNode("div", _hoisted_6, [
                    _hoisted_7,
                    _createElementVNode("div", _hoisted_8, [
                      _createElementVNode(
                        "div",
                        _hoisted_9,
                        _toDisplayString(commissioDetails.value.deposit_sum),
                        1
                      ),
                      _createElementVNode(
                        "div",
                        _hoisted_10,
                        _toDisplayString(
                          commissioDetails.value.commission_total
                        ),
                        1
                      ),
                    ]),
                  ]),
                ]),
                _createElementVNode(
                  "div",
                  {
                    class: "user-make-money-ad",
                    onClick:
                      _cache[0] ||
                      (_cache[0] = (...args) =>
                        ruleDetails && ruleDetails(...args)),
                  },
                  _hoisted_12
                ),
                _createElementVNode("div", _hoisted_13, [
                  _createElementVNode("div", _hoisted_14, [
                    _hoisted_15,
                    _createElementVNode("div", _hoisted_16, [
                      _createElementVNode(
                        "div",
                        _hoisted_17,
                        _toDisplayString(
                          commissioDetails.value.commission_month
                        ),
                        1
                      ),
                      _createElementVNode(
                        "div",
                        _hoisted_18,
                        _toDisplayString(commissioDetails.value.deposit_month),
                        1
                      ),
                      _createElementVNode(
                        "div",
                        _hoisted_19,
                        _toDisplayString(commissioDetails.value.deposit_num),
                        1
                      ),
                    ]),
                  ]),
                ]),
                _createElementVNode("div", _hoisted_20, [
                  _hoisted_21,
                  _createElementVNode("div", _hoisted_22, [
                    commissioDetails.value.lower_level
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_23, [
                          _createElementVNode(
                            "div",
                            _hoisted_24,
                            _toDisplayString(
                              Object.values(
                                commissioDetails.value.lower_level
                              )[0]
                            ),
                            1
                          ),
                          _createElementVNode(
                            "div",
                            _hoisted_25,
                            _toDisplayString(
                              Object.values(
                                commissioDetails.value.lower_level
                              )[1]
                            ),
                            1
                          ),
                          _createElementVNode(
                            "div",
                            _hoisted_26,
                            _toDisplayString(
                              Object.values(
                                commissioDetails.value.lower_level
                              )[2]
                            ),
                            1
                          ),
                          _createElementVNode(
                            "div",
                            _hoisted_27,
                            _toDisplayString(
                              Object.values(
                                commissioDetails.value.lower_level
                              )[3]
                            ),
                            1
                          ),
                        ]))
                      : _createCommentVNode("", true),
                    _hoisted_28,
                  ]),
                ]),
                _createElementVNode("div", _hoisted_29, [
                  _hoisted_30,
                  _createElementVNode("div", _hoisted_31, [
                    commissionLogList.value.length
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_32, _hoisted_37))
                      : _createCommentVNode("", true),
                    commissionLogList.value.length
                      ? (_openBlock(),
                        _createElementBlock("div", _hoisted_38, [
                          _createVNode(
                            _component_van_list,
                            {
                              loading: loading.value,
                              "onUpdate:loading":
                                _cache[1] ||
                                (_cache[1] = ($event) =>
                                  (loading.value = $event)),
                              error: error.value,
                              "onUpdate:error":
                                _cache[2] ||
                                (_cache[2] = ($event) =>
                                  (error.value = $event)),
                              finished: finished.value,
                              offset: 20,
                              "error-text": "请求失败，点击重新加载",
                              "finished-text": "-我也是有底线的-",
                              "loading-text": "正在获取数据...",
                              onLoad: onLoad,
                            },
                            {
                              default: _withCtx(() => [
                                (_openBlock(true),
                                _createElementBlock(
                                  _Fragment,
                                  null,
                                  _renderList(
                                    commissionLogList.value,
                                    (item, index) => {
                                      return (
                                        _openBlock(),
                                        _createElementBlock(
                                          "div",
                                          {
                                            class: "flex",
                                            key: index,
                                          },
                                          [
                                            _createElementVNode(
                                              "div",
                                              _hoisted_39,
                                              _toDisplayString(item.lower_name),
                                              1
                                            ),
                                            _createElementVNode(
                                              "div",
                                              _hoisted_40,
                                              _toDisplayString(item.level),
                                              1
                                            ),
                                            _createElementVNode(
                                              "div",
                                              _hoisted_41,
                                              _toDisplayString(
                                                item.valid_money
                                              ),
                                              1
                                            ),
                                            _createElementVNode(
                                              "div",
                                              _hoisted_42,
                                              _toDisplayString(item.remark),
                                              1
                                            ),
                                          ]
                                        )
                                      );
                                    }
                                  ),
                                  128
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["loading", "error", "finished", "onLoad"]
                          ),
                        ]))
                      : (_openBlock(),
                        _createElementBlock(
                          "div",
                          _hoisted_43,
                          " 暂无业绩数据 "
                        )),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showDialog.value,
              "onUpdate:show":
                _cache[3] ||
                (_cache[3] = ($event) => (showDialog.value = $event)),
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_44, [
                  _createElementVNode("div", _hoisted_45, [
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
                    _hoisted_46,
                  ]),
                  _hoisted_47,
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
