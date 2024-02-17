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
} from "vue";

export default {
  setup() {
    const _hoisted_1 = ["onClick"];
    return (_ctx, _cache, $props, $setup) => {
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
                _renderList($setup.bannerList, (item, index) => {
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
                              onClick: () => $setup.toDetails(item),
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
