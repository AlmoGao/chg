<template>
  <div></div>
</template>
<script>
import {
  resolveDynamicComponent as _resolveDynamicComponent,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode,
  KeepAlive as _KeepAlive,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  createElementBlock as _createElementBlock,
} from "vue";
const _hoisted_1 = {
  key: 0,
};
const _hoisted_2 = {
  key: 1,
  class: "startImg",
};
const _hoisted_3 = {
  key: 0,
  class: "circle",
};
const _hoisted_4 = ["src"];
import request from "@/assets/js/request.js";
import {
  getBase64,
  getGlobalProperties,
  advertiseDetails,
} from "@/assets/js/utils.js";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  __name: "App",

  setup() {
    const store = useStore();
    const { startApi } = getGlobalProperties().$api;
    const showView = ref(false);
    const imgbase = ref("https://www.chg1.tv");

    const getBaseUrl = () => {
      try {
        request
          .get("/api/v1/index/ping")
          .then((res) => {
            if (res.code === 0) {
              res.data.urls = getBase64(res.data.urls).split(","); // res.data.urls =
              //   res.data.urls[Math.floor(Math.random() * res.data.urls.length)];

              imgbase.value = res.data.image_url;
              store.commit("SET_BASE_URL", res.data);
            }

            getStart(); // showView.value = true;
          })
          .catch(() => {
            showView.value = true;
          });
      } catch (error) {
        showView.value = true;
      }
    };

    getBaseUrl();
    const imgLink = ref("");
    const startImg = ref("");
    const currentRate = ref(0);
    const text = ref(5);

    const getStart = () => {
      startApi("", "get")
        .then((res) => {
          if (res.code === 0 && res.data && res.data.second_url) {
            startImg.value = res.data.second_url;
            imgLink.value = res.data.second_link;
            let timer = setInterval(() => {
              text.value--;
              currentRate.value = 100 / text.value;

              if (text.value <= 0) {
                clearInterval(timer);
                showView.value = true;
              }
            }, 1000);
          } else {
            showView.value = true;
          }
        })
        .catch((err) => {
          showView.value = true;
        });
    };

    const toLink = () => {
      if (imgLink.value) {
        store.commit("setShowDialogIsAdvertis", {
          show: true,
          url: imgLink.value,
        });
        advertiseDetails(imgLink.value);
      }
    };

    window.document.documentElement.setAttribute("data-theme", "dark");

    window.onload = function () {
      var lastTouchEnd = 0;
      document.addEventListener("touchstart", function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      });
      document.addEventListener(
        "touchend",
        function (event) {
          var now = new Date().getTime();

          if (now - lastTouchEnd <= 300) {
            event.preventDefault();
          }

          lastTouchEnd = now;
        },
        false
      );
      document.addEventListener("gesturestart", function (event) {
        event.preventDefault();
      });
      document.addEventListener("dblclick", function (event) {
        event.preventDefault();
      });
      document.body.addEventListener(
        "touchmove",
        function (e) {
          if (e.target.className === "van-tabbar-item") {
            e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
          }
        },
        {
          passive: false,
        }
      );
    };

    return (_ctx, _cache) => {
      const _component_qq_view = _resolveComponent("qq-browserpop");
      const _component_home_pop = _resolveComponent("home-pop");
      const _component_router_view = _resolveComponent("router-view");

      const _component_van_circle = _resolveComponent("van-circle");

      return showView.value
        ? (_openBlock(),
          _createElementBlock("div", _hoisted_1, [
            _createVNode(_component_router_view, null, {
              default: _withCtx(({ Component, route }) => [
                (_openBlock(),
                _createBlock(
                  _KeepAlive,
                  null,
                  [
                    route.name === "home"
                      ? (_openBlock(),
                        _createBlock(_resolveDynamicComponent(Component), {
                          key: 0,
                        }))
                      : _createCommentVNode("", true),
                  ],
                  1024
                )),
                route.name !== "home"
                  ? (_openBlock(),
                    _createBlock(_resolveDynamicComponent(Component), {
                      key: 0,
                    }))
                  : _createCommentVNode("", true),
              ]),
              _: 1,
            }),
            _createVNode(_component_qq_view),
            _createVNode(_component_home_pop),
          ]))
        : (_openBlock(),
          _createElementBlock("div", _hoisted_2, [
            startImg.value
              ? (_openBlock(),
                _createElementBlock("div", _hoisted_3, [
                  _createVNode(
                    _component_van_circle,
                    {
                      "current-rate": currentRate.value,
                      "onUpdate:current-rate":
                        _cache[0] ||
                        (_cache[0] = ($event) => (currentRate.value = $event)),
                      rate: 100,
                      speed: 20,
                      size: "50px",
                      "layer-color": "#B8A9B0",
                      color: "#FC5F1D",
                      "stroke-width": 100,
                      text: text.value + " S",
                    },
                    null,
                    8,
                    ["current-rate", "text"]
                  ),
                ]))
              : _createCommentVNode("", true),
            startImg.value
              ? (_openBlock(),
                _createElementBlock(
                  "img",
                  {
                    key: 1,
                    onClick: toLink,
                    src: imgbase.value + startImg.value,
                    alt: "",
                  },
                  null,
                  8,
                  _hoisted_4
                ))
              : _createCommentVNode("", true),
          ]));
    };
  },
};
</script>
