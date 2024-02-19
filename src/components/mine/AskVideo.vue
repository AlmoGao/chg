<script>
import {
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  vModelText as _vModelText,
  withDirectives as _withDirectives,
  toDisplayString as _toDisplayString,
  createTextVNode as _createTextVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  createCommentVNode as _createCommentVNode,
  withCtx as _withCtx,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";
import _imports_0 from "@/assets/images/jubao_checked_red.png";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { showToast } from "vant";
export default {
  name: "AskVideo",

  setup(props, { emit }) {
    const { askVideoSaveApi } = getGlobalProperties().$api;
    const store = useStore();
    const isYdguize = ref(false);
    const content = ref("");
    const money = ref("");
    const showAskVideoGz = ref(false);
    const videoDetails = computed(() => {
      
      return store.state.videoDetails;
    });
    const isVip = computed(() => {
      return store.state.userInfo.is_vip;
    });

    const ydgzClick = () => {
      isYdguize.value = !isYdguize.value;
    };

    const faBuAskVideo = () => {
      if (!content.value) {
        showToast("请输入求片内容");
        return;
      }

      if (content.value.length < 10) {
        showToast("详细的描述更方便找片，不少于10个字噢~");
        return;
      }

      if (!isYdguize.value) {
        showToast("请确认已阅读采花阁发布规则");
        return;
      } // if (isVip.value === 0) {
      //   showToast("仅允许充值会员用户发布求片信息");
      //   return;
      // }

      const params = {
        content: content.value,
        money: money.value,
        video_id: videoDetails.value.id,
      };
      askVideoSaveApi(params, "get").then((res) => {
        showToast(res.message);

        if (res.code === 0) {
          content.value = "";
          money.value = "";
          emit("close");
        }
      });
    };

    const toGz = () => {
      showAskVideoGz.value = true;
    };

    const close1 = () => {
      showAskVideoGz.value = false;
    };

    const close = () => {
      emit("close");
    };

    console.log({
      props,
      videoDetails,
      close,
      isYdguize,
      ydgzClick,
      faBuAskVideo,
      content,
      money,
      showAskVideoGz,
      close1,
      toGz,
      isVip,
      _createCommentVNode
    });

    const _withScopeId = (n) => (
      _pushScopeId("data-v-1a703d84"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "head_title_ask",
    };

    const _hoisted_2 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "span",
        {
          class: "title",
        },
        "发布求片",
        -1
      )
    );

    const _hoisted_3 = {
      class: "cont_body_ask",
    };

    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "wantAv-title",
        },
        "求片内容",
        -1
      )
    );

    const _hoisted_5 = {
      class: "textarea",
    };
    const _hoisted_6 = {
      class: "num",
    };

    const _hoisted_7 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "wantAv-title",
        },
        [
          /*#__PURE__*/ _createTextVNode("原视频"),
          /*#__PURE__*/ _createElementVNode("span", null, "我想找续集"),
        ],
        -1
      )
    );

    const _hoisted_8 = {
      class: "",
    };
    const _hoisted_9 = {
      class: "info-videoItem",
    };
    const _hoisted_10 = {
      class: "info-videoCover",
    };
    const _hoisted_11 = {
      class: "info-videoCover-img",
    };
    const _hoisted_12 = {
      class: "info-videoInfo",
    };

    const _hoisted_13 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "p",
        {
          class: "wantAv-title",
          style: {
            "margin-top": "0.5rem",
          },
        },
        " 打赏金额（赏银/个） ",
        -1
      )
    );

    const _hoisted_14 = {
      class: "wantAv-input-box",
    };

    const _hoisted_15 = /*#__PURE__*/ _withScopeId(() =>
      /*#__PURE__*/ _createElementVNode(
        "div",
        {
          class: "thin-line",
        },
        null,
        -1
      )
    );

    const _hoisted_16 = {
      class: "wantAv-footer",
    };
    const _hoisted_17 = {
      class: "wantAv-row",
    };
    const _hoisted_18 = {
      class: "wantAv-row",
    };

    const _hoisted_19 = /*#__PURE__*/ _createTextVNode("请阅读并遵守");

    const _hoisted_20 = {
      class: "details_page",
    };
    return (_ctx, _cache) => {
      const _component_van_icon = _resolveComponent("van-icon");

      const _component_my_image = _resolveComponent("my-image");

      const _component_ask_video_gz = _resolveComponent("ask-video-gz");

      const _component_van_popup = _resolveComponent("van-popup");

      return (
        _openBlock(),
        _createElementBlock("div", null, [
          _createElementVNode("div", _hoisted_1, [
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
            _hoisted_2,
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createElementVNode("div", null, [
              _hoisted_4,
              _createElementVNode("div", _hoisted_5, [
                _withDirectives(
                  _createElementVNode(
                    "textarea",
                    {
                      maxlength: "150",
                      "onUpdate:modelValue":
                        _cache[0] ||
                        (_cache[0] = ($event) => (content.value = $event)),
                      placeholder:
                        "可以输入你对视频的玩法要求，也可输入想看的类型、片名、演员名称、番号...,至少10字且注意格式",
                    },
                    null,
                    512
                  ),
                  [[_vModelText, content.value]]
                ),
                _createElementVNode(
                  "p",
                  _hoisted_6,
                  _toDisplayString(content.value ? content.value.length : 0) +
                    "/150",
                  1
                ),
              ]),
              _hoisted_7,
              _createElementVNode("div", _hoisted_8, [
                _createElementVNode("div", _hoisted_9, [
                  _createElementVNode("div", _hoisted_10, [
                    _createElementVNode("div", _hoisted_11, [
                      _createElementVNode("div", null, [
                        _createVNode(
                          _component_my_image,
                          {
                            url: videoDetails.value.image,
                          },
                          null,
                          8,
                          ["url"]
                        ),
                      ]),
                    ]),
                    _createElementVNode(
                      "span",
                      null,
                      _toDisplayString(videoDetails.value.times),
                      1
                    ),
                  ]),
                  _createElementVNode("div", _hoisted_12, [
                    _createElementVNode(
                      "p",
                      null,
                      _toDisplayString(videoDetails.value.title),
                      1
                    ),
                    _createElementVNode("div", null, [
                      _createElementVNode(
                        "span",
                        null,
                        _toDisplayString(
                          videoDetails.value.nickname ||
                            videoDetails.value.user_name
                        ),
                        1
                      ),
                      _createElementVNode(
                        "span",
                        null,
                        _toDisplayString(videoDetails.value.count) + "次播放",
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _hoisted_13,
              _createElementVNode("div", _hoisted_14, [
                _withDirectives(
                  _createElementVNode(
                    "input",
                    {
                      type: "number",
                      "onUpdate:modelValue":
                        _cache[1] ||
                        (_cache[1] = ($event) => (money.value = $event)),
                      placeholder: "设置打赏推荐更积极收获多多",
                    },
                    null,
                    512
                  ),
                  [[_vModelText, money.value]]
                ),
                _hoisted_15,
              ]),
            ]),
            _createElementVNode("div", _hoisted_16, [
              _createElementVNode("div", _hoisted_17, [
                !isYdguize.value
                  ? (_openBlock(),
                    _createElementBlock("div", {
                      key: 0,
                      onClick:
                        _cache[2] ||
                        (_cache[2] = (...args) =>
                          ydgzClick && ydgzClick(...args)),
                      class: "wantAv-circle",
                    }))
                  : (_openBlock(),
                    _createElementBlock("img", {
                      key: 1,
                      onClick:
                        _cache[3] ||
                        (_cache[3] = (...args) =>
                          ydgzClick && ydgzClick(...args)),
                      src: _imports_0,
                    })),
                _createElementVNode("span", _hoisted_18, [
                  _hoisted_19,
                  _createElementVNode(
                    "span",
                    {
                      onClick:
                        _cache[4] ||
                        (_cache[4] = (...args) =>
                          toGz && toGz(...args)),
                      class: "wantAv-blue",
                    },
                    "《采花阁发布规则》"
                  ),
                ]),
              ]),
              _createElementVNode(
                "div",
                {
                  class: "wantAv-btn",
                  onClick:
                    _cache[5] ||
                    (_cache[5] = (...args) =>
                      faBuAskVideo && faBuAskVideo(...args)),
                },
                "发布"
              ),
            ]),
          ]),
          _createVNode(
            _component_van_popup,
            {
              show: showAskVideoGz.value,
              "onUpdate:show":
                _cache[6] ||
                (_cache[6] = ($event) => (showAskVideoGz.value = $event)),
              class: "popup_coentent",
              overlay: false,
              position: "right",
            },
            {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_20, [
                  _createVNode(
                    _component_ask_video_gz,
                    {
                      onClose: close1,
                    },
                    null,
                    8,
                    ["onClose"]
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

<style>
.head_title_ask {
  padding: 0 15px;
    height: 56px;
    color: #fff;
    position: relative;
    font-size: 17px;
    display: flex;
    align-items: center;
    width: 100%;
}
.head_title_ask .title {
  position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.cont_body_ask {
  height: calc(100vh - 56px);
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
}
.cont_body_ask .wantAv-title {
    margin: 0 15px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
}

.cont_body_ask .wantAv-title span {
    color: #999;
    font-size: 11.5px;
    margin-left: 5px;
    font-weight: 400
}

.cont_body_ask .textarea {
    position: relative
}

.cont_body_ask .textarea .num {
    position: absolute;
    bottom: 22px;
    right: 22px;
    color: #757575
}

.cont_body_ask textarea {
    width: 92%;
    padding: 7.5px;
    border: none;
    font-size: 14px;
    background-color: #404040;
    border-radius: 5px;
    margin: 7.5px 15px 15px;
    height: 112px;
    color: #fff;
    resize: none;
    box-sizing: border-box
}

.cont_body_ask .wantAv-input-box {
    margin: 11.5px 15px 0
}

.cont_body_ask .wantAv-input-box input {
    margin-bottom: 11px;
    width: 100%;
    border: none;
    font-size: 15px;
    color: #fff;
    background-color: transparent
}

.cont_body_ask .wantAv-input-box .thin-line {
    height: 1px;
    transform: scaleY(.1);
    background-color: #999
}
</style>
