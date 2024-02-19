<script>
import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  withModifiers as _withModifiers,
  withCtx as _withCtx,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref } from "vue";
import { Toast } from "vant";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { useStore } from "vuex";
export default {
  props: ["id"],

  setup(props) {
    const store = useStore();
    const { askVideoRewardListApi, askVideoRewardApi } =
      getGlobalProperties().$api;
    let showDialog = ref(false);
    let moneyValue = ref("");
    let rewardList = ref([]);
    let finished = ref(false);
    let error = ref(false);
    let loading = ref(false);
    let page = ref(0);
    let total_money = ref("");

    const showDsPopup = () => {
      moneyValue.value = "";
      showDialog.value = true;
    };

    const getAskVideoRewardList = () => {
      askVideoRewardListApi(
        {
          ask_video_id: props.id,
          page: page.value,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          total_money.value = res.data.total_money;
          rewardList.value = rewardList.value.concat(res.data.rows);
          loading.value = false;

          if (res.data.rows.length === 0) {
            finished.value = true;
          }
        }
      });
    }; // getAskVideoRewardList();

    const onLoad = () => {
      loading.value = true;
      page.value++;
      getAskVideoRewardList();
    };

    const okBtns = () => {
      if (moneyValue.value === "") {
        Toast("打赏金额不能为空");
        return;
      }

      const params = {
        ask_video_id: props.id,
        money: moneyValue.value,
      };
      askVideoRewardApi(params).then((res) => {
        Toast(res.message);

        if (res.code === 0) {
          page.value = 1;
          rewardList.value = [];
          getAskVideoRewardList();
        }
      });
      showDialog.value = false;
    };

    const toAutorDetails = (item) => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "HotAuthorInfo",
      });
      store.commit("SET_VIDEO_DETAILS", item);
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-3a0cce2c"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "bounty_list",
    };
    const _hoisted_2 = {
      class: "add_total",
    };
    const _hoisted_3 = {
      class: "bonuty_box",
    };
    const _hoisted_4 = ["onClick"];
    const _hoisted_5 = {
      class: "left_img_box",
    };
    const _hoisted_6 = {
      class: "right_text",
    };
    const _hoisted_7 = {
      class: "left",
    };
    const _hoisted_8 = {
      class: "right",
    };
    const _hoisted_9 = {
      class: "dialog_content",
    };

    const _hoisted_10 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "titles",
        },
        "追加赏金",
        -1
      )
    );
    console.log({
      props,
      showDialog,
      moneyValue,
      showDsPopup,
      okBtns,
      rewardList,
      finished,
      error,
      loading,
      onLoad,
      total_money,
      toAutorDetails,
    });

    return (_ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_van_list = _resolveComponent("van-list");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock(
          _Fragment,
          null,
          [
            _createElementVNode("div", _hoisted_1, [
              _createElementVNode(
                "div",
                _hoisted_2,
                "共追加了" + _toDisplayString(total_money.value) + "赏银",
                1
              ),
              _createElementVNode("div", _hoisted_3, [
                _createVNode(
                  _component_van_list,
                  {
                    loading: loading.value,
                    "onUpdate:loading":
                      _cache[0] ||
                      (_cache[0] = ($event) => (loading.value = $event)),
                    error: error.value,
                    "onUpdate:error":
                      _cache[1] ||
                      (_cache[1] = ($event) => (error.value = $event)),
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
                        _renderList(rewardList.value, (item, index) => {
                          return (
                            _openBlock(),
                            _createElementBlock(
                              "div",
                              {
                                class: "item",
                                key: index,
                              },
                              [
                                _createElementVNode(
                                  "div",
                                  {
                                    class: "user_box",
                                    onClick: _withModifiers(
                                      () => toAutorDetails(item),
                                      ["stop"]
                                    ),
                                  },
                                  [
                                    _createElementVNode("div", _hoisted_5, [
                                      _createVNode(
                                        _component_my_image,
                                        {
                                          url: item.user_image,
                                        },
                                        null,
                                        8,
                                        ["url"]
                                      ),
                                    ]),
                                    _createElementVNode("div", _hoisted_6, [
                                      _createElementVNode("div", _hoisted_7, [
                                        _createElementVNode(
                                          "p",
                                          null,
                                          _toDisplayString(item.nickname),
                                          1
                                        ),
                                        _createElementVNode(
                                          "p",
                                          null,
                                          _toDisplayString(item.fans) + "粉丝",
                                          1
                                        ),
                                      ]),
                                      _createElementVNode(
                                        "div",
                                        _hoisted_8,
                                        "追加了" +
                                          _toDisplayString(item.money) +
                                          "赏银",
                                        1
                                      ),
                                    ]),
                                  ],
                                  8,
                                  _hoisted_4
                                ),
                              ]
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["loading", "error", "finished", "onLoad"]
                ),
              ]),
              _createElementVNode(
                "div",
                {
                  class: "append_btn",
                  onClick:
                    _cache[2] ||
                    (_cache[2] = (...args) =>
                      showDsPopup && showDsPopup(...args)),
                },
                "追加赏金"
              ),
            ]),
            _createVNode(
              _component_van_popup,
              {
                show: showDialog.value,
                "onUpdate:show":
                  _cache[5] ||
                  (_cache[5] = ($event) => (showDialog.value = $event)),
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
                            _cache[3] ||
                            (_cache[3] = ($event) =>
                              (moneyValue.value = $event)),
                          type: "text",
                          "max-length": "8",
                          placeholder: "请输入打赏金额",
                        },
                        null,
                        512
                      ),
                      [[_vModelText, moneyValue.value]]
                    ),
                    _createElementVNode(
                      "div",
                      {
                        class: "btns",
                        onClick:
                          _cache[4] ||
                          (_cache[4] = (...args) =>
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
          ],
          64
        )
      );
    };
  },
};
</script>
