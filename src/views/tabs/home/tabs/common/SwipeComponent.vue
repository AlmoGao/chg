<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  createElementVNode as _createElementVNode,
  withCtx as _withCtx,
  createBlock as _createBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { advertiseDetails } from "@/assets/js/utils.js";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup(props) {
    const store = useStore();
    let bannerList = computed(() => {
      
      return store.state.bannerList;
    });

    const toDetails = (item) => {
      if (item.link) {
        if (item.link === "vip") {
          store.commit("SET_LOGIN_POPUP", {
            show: true,
            type: "Recharge",
          });
        } else if (item.link === "invitation") {
          store.commit("SET_LOGIN_POPUP", {
            show: true,
            type: "ShareFreeWatch",
          });
        } else {
          store.commit("setShowDialogIsAdvertis", {
            show: true,
            url: item.link,
          });
          advertiseDetails(item.link);
        }
      }
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-558d279e"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = ["onClick"];

 

    return () => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_van_swipe_item = _resolveComponent("van-swipe-item");

      const _component_van_swipe = _resolveComponent("van-swipe");

      return (
        _openBlock(),
        _createBlock(
          _component_van_swipe,
          {
            class: "my-swipe",
            autoplay: 3000,
            "indicator-color": "white",
          },
          {
            default: _withCtx(() => [
              (_openBlock(true),
              _createElementBlock(
                _Fragment,
                null,
                _renderList(bannerList.value, (item, index) => {
                  return (
                    _openBlock(),
                    _createBlock(
                      _component_van_swipe_item,
                      {
                        key: index,
                      },
                      {
                        default: _withCtx(() => [
                          _createElementVNode(
                            "div",
                            {
                              class: "banner_item",
                              onClick: () => toDetails(item),
                            },
                            [
                              _createVNode(
                                _component_my_image,
                                {
                                  url: item.image_url,
                                },
                                null,
                                8,
                                ["url"]
                              ),
                            ],
                            8,
                            _hoisted_1
                          ),
                        ]),
                        _: 2,
                      },
                      1024
                    )
                  );
                }),
                128
              )),
            ]),
            _: 1,
          }
        )
      );
    };
  },
};
</script>
