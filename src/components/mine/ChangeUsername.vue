<script>
import {
  vModelText as _vModelText,
  createElementVNode as _createElementVNode,
  withDirectives as _withDirectives,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { ref, computed } from "vue";
import { getGlobalProperties } from "@/assets/js/utils.js";
import { useStore } from "vuex";
import { showToast } from "vant";
export default {
  name: "ChangeUsername",

  setup(props) {
    const store = useStore();
    let nickname = ref("");
    const { modifyNicknameApi } = getGlobalProperties().$api;
    let userInfo = computed(() => {
      return store.state.userInfo;
    });

    if (userInfo.value) {
      nickname.value = userInfo.value.nickname;
    }

    const modifyNickname = () => {
      if (!nickname.value) {
        showToast("请输入昵称");
        return;
      }

      modifyNicknameApi(
        {
          nickname: nickname.value,
        },
        "get"
      ).then((res) => {
        showToast(res.message);

        if (res.code === 0) {
          store.dispatch("getUserInfo");
        }
      });
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-49029b40"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "changeUsername",
    };
    const _hoisted_2 = {
      class: "user-nickname-form-item",
    };
    return (_ctx, _cache) => {
      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _withDirectives(
              _createElementVNode(
                "textarea",
                {
                  placeholder: "请设置昵称(不超过15字)",
                  "onUpdate:modelValue":
                    _cache[0] ||
                    (_cache[0] = ($event) => (nickname.value = $event)),
                },
                null,
                512
              ),
              [[_vModelText, nickname.value]]
            ),
          ]),
          _createElementVNode(
            "div",
            {
              class: "user-public-btn",
              onClick:
                _cache[1] ||
                (_cache[1] = (...args) =>
                  modifyNickname && modifyNickname(...args)),
            },
            "确定"
          ),
        ])
      );
    };
  },
};
</script>
