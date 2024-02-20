<script>
import {
  renderList as _renderList,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "vue";

import { getGlobalProperties, advertiseDetails } from "@/assets/js/utils.js";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { advertiseApi } = getGlobalProperties().$api;
    let bannerList = ref([]);
    const store = useStore();

    const getBanner = () => {
      advertiseApi(
        {
          type: 1,
        },
        "get"
      ).then((res) => {
        if (res.code === 0) {
          bannerList.value = res.data.rows;
        }
      });
    };

    getBanner();

    const toDetails = (item) => {
      if (item.link) {
        // window.open(item.link);
        store.commit("setShowDialogIsAdvertis", {
          show: true,
          url: item.link,
        });
        advertiseDetails(item.link);
      }
    };

    const _withScopeId = (n) => (
      _pushScopeId("data-v-5e60a732"), (n = n()), _popScopeId(), n
    );

    const _hoisted_1 = {
      class: "advertise",
    };
    const _hoisted_2 = ["onClick"];
    return () => {
      const _component_my_image = _resolveComponent("my-image");

      return (
        _openBlock(),
        _createElementBlock("div", _hoisted_1, [
          (_openBlock(true),
          _createElementBlock(
            _Fragment,
            null,
            _renderList(bannerList.value, (item, index) => {
              return (
                _openBlock(),
                _createElementBlock(
                  "div",
                  {
                    class: "banner_item",
                    key: index,
                    onClick: () => toDetails(item),
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
                  _hoisted_2
                )
              );
            }),
            128
          )),
        ])
      );
    };
  },
};
</script>
