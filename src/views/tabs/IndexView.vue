<script>
import { unref as _unref, resolveDynamicComponent as _resolveDynamicComponent, openBlock as _openBlock, createBlock as _createBlock, KeepAlive as _KeepAlive, resolveComponent as _resolveComponent, createVNode as _createVNode, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, renderList as _renderList, Fragment as _Fragment, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, resolveDirective as _resolveDirective, withDirectives as _withDirectives, withCtx as _withCtx, isRef as _isRef, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";
import _imports_0 from '@/assets/images/close_white.png';
import _imports_1 from '@/assets/images/notice_head.png';
import _imports_2 from '@/assets/images//adultComics/wenxinntishi.png';

const _withScopeId = n => (_pushScopeId("data-v-7fbd3817"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "home"
};
const _hoisted_2 = {
  class: "tab_icon"
};
const _hoisted_3 = {
  class: "details_page"
};
const _hoisted_4 = {
  class: "cont_body",
  id: "cont_body"
};
const _hoisted_5 = {
  class: "start_content"
};
const _hoisted_6 = {
  class: "notice_content"
};

const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("div", {
  class: "top_img"
}, [/*#__PURE__*/_createElementVNode("img", {
  src: _imports_1,
  alt: ""
})], -1));

const _hoisted_8 = {
  class: "text"
};

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("div", {
  class: "vip_cont"
}, null, -1));

const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("div", {
  class: "top_img"
}, [/*#__PURE__*/_createElementVNode("img", {
  src: _imports_2,
  alt: ""
})], -1));

import HomeView from "./home/HomeView.vue";
import ExploreComponent from "./explore/ExploreComponent.vue";
import CommunityView from "./community/CommunityView.vue";
import MemberView from "./member/MemberView.vue";
import { ref, computed, reactive, shallowRef } from "vue";
import Fingerprint2 from "fingerprintjs2";
import md5 from "js-md5";
import { getImageUrl, getGlobalProperties, advertiseDetails } from "@/assets/js/utils.js";
import { useStore } from "vuex";
export default {
  __name: 'IndexView',

  setup() {
    const store = useStore();
    const active = ref(0);
    const showDialog = ref(false);
    let bottomBannerList = ref([]);
    let showDetailsPopul = computed(() => {
      // 计算属性初始化加10
      return store.state.showLoginPopup;
    });
    const showDialogIsVip = computed(() => {
      // 计算属性初始化加10
      return store.state.showKtVip;
    });
    const {
      bannerApi,
      noticeApi,
      checkSidApi,
      startApi,
      advertiseApi
    } = getGlobalProperties().$api;

    const genID = length => {
      return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
    };

    const getBottomBanner = () => {
      advertiseApi({
        type: 3
      }, "get").then(res => {
        // console.log("res", res);
        if (res.code === 0) {
          if (res.data.rows.length) {
            store.commit("SET_SHOW_BOTTOM_BANNER", true);
          }

          bottomBannerList.value = res.data.rows;
        }
      });
    };

    getBottomBanner();

    const toDetails = item => {
      if (item.link) {
        store.commit("setShowDialogIsAdvertis", {
          show: true,
          url: item.link
        });
        advertiseDetails(item.link);
      }
    };

    const register = () => {
      checkSidApi({
        sid: store.state.hg_oauth_id
      }).then(res => {
        if (res.code === 0) {
          store.commit("SET_USER_INFO", res.data);
          store.dispatch("getUserInfo");
        }
      });
    };

    const createFingerprint = () => {
      // 浏览器指纹
      Fingerprint2.get(components => {
        // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
        const values = components.map(component => component.value); // 配置的值的数组

        let murmur = Fingerprint2.x64hash128(values.join(""), 31); // 生成浏览器指纹

        murmur = md5(md5(murmur) + md5(genID(36)) + md5(genID(36))); // console.log(components, values,murmur,'你好')
        //murmur就是浏览器指纹啦

        store.commit("SET_HG_OAUTH_ID", murmur);
        register();
      });
    };

    if (!store.state.hg_oauth_id) {
      createFingerprint();
    } else {
      if (store.state.userInfo.token) {
        store.dispatch("getUserInfo");
      }

      if (store.state.hg_oauth_id !== "login") {
        register();
      }
    }

    let noticeList = ref([]);
    const startImg = ref("");
    const imgLink = ref("");
    const showDialogStart = ref(false);

    const getStart = () => {
      startApi("", "get").then(res => {
        console.log(res);

        if (res.code === 0 && res.data && res.data.start_url) {
          startImg.value = res.data.start_url;
          imgLink.value = res.data.link;
          showDialogStart.value = true;
        } else {
          showDialogStart.value = false;
        }
      });
    };

    const toLink = () => {
      if (imgLink.value) {
        store.commit("setShowDialogIsAdvertis", {
          show: true,
          url: imgLink.value
        });
        advertiseDetails(imgLink.value);
      }
    };

    const getNoticeList = () => {
      noticeApi("", "get").then(res => {
        document.getElementById("loading").style.display = "none";
        showDialogStart.value = true;

        if (res.code === 0) {
          noticeList.value = res.data.rows;

          if (noticeList.value.length) {
            showDialog.value = true;
          }
        }
      });
    };

    const getBanner = () => {
      bannerApi("", "get").then(res => {
        if (res.code === 0) {
          store.commit("SET_BANNEER_LIST", res.data.rows);
        }
      });
    };

    getNoticeList();
    getStart();
    getBanner();

    const closeSatrt = () => {
      showDialogStart.value = false;
    };

    const closeNotice = () => {
      showDialog.value = false;

      if (!startImg.value) {
        showDialogStart.value = false;
      }
    };

    const footDatas = reactive([{
      name: "精选",
      active: "views/tabs/images/feature.png",
      unactive: "views/tabs/images/feature2.png"
    }, {
      name: "发现",
      active: "views/tabs/images/fund.png",
      unactive: "views/tabs/images/fund2.png"
    }, // {
    //   name: "约炮",
    //   active: "views/tabs/images/heart.png",
    //   unactive: "views/tabs/images/heart2.png",
    // },
    // {
    //   name: "游戏",
    //   active: "views/tabs/images/game.png",
    //   unactive: "views/tabs/images/game2.png",
    // },
    {
      name: "社区",
      active: "views/tabs/images/shequ.png",
      unactive: "views/tabs/images/shequ2.png"
    }, {
      name: "我的",
      active: "views/tabs/images/me.png",
      unactive: "views/tabs/images/me2.png"
    }, {
      name: "下载APP",
      active: "views/tabs/images/icon-down.png",
      unactive: "views/tabs/images/icon-down.png"
    }]);
    let fxActive = ref(0);
    let currentTabComponent = shallowRef(HomeView);

    const change = () => {
      if (active.value !== 1) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        fxActive.value = 0;
      }

      if (active.value === 0) {
        currentTabComponent.value = HomeView;
      } else if (active.value === 1) {
        currentTabComponent.value = ExploreComponent;
      } else if (active.value === 2) {
        currentTabComponent.value = CommunityView;
      } else if (active.value === 3) {
        currentTabComponent.value = MemberView;
      } else if (active.value === 4) {
        location.href = store.state.baseUrl.download_url;
      }
    };

    const toFaxian = () => {
      active.value = 1;
      fxActive.value = 1;
      currentTabComponent.value = ExploreComponent;
    };

    const toVip = () => {
      store.commit("SET_LOGIN_POPUP", {
        show: true,
        type: "Recharge"
      });
      store.commit("SETSHOE_KT_VIP", false);
    };

    const clickOverlay = () => {
      store.commit("SETSHOE_KT_VIP", false);
    };

    return (_ctx, _cache) => {
      const _component_my_image = _resolveComponent("my-image");

      const _component_van_tabbar_item = _resolveComponent("van-tabbar-item");

      const _component_van_tabbar = _resolveComponent("van-tabbar");

      const _component_van_popup = _resolveComponent("van-popup");

      const _component_SharePopup = _resolveComponent("SharePopup");

      const _directive_lazy = _resolveDirective("lazy");

      return _openBlock(), _createElementBlock(_Fragment, null, [(_openBlock(), _createBlock(_KeepAlive, null, [(_openBlock(), _createBlock(_resolveDynamicComponent(_unref(currentTabComponent)), {
        color: '#ffffff',
        onToFaxian: toFaxian,
        fxActive: _unref(fxActive)
      }, null, 40, ["fxActive"]))], 1024)), _createElementVNode("div", _hoisted_1, [_unref(bottomBannerList).length ? (_openBlock(), _createElementBlock("div", {
        key: 0,
        class: "bottom_img",
        onClick: _cache[0] || (_cache[0] = $event => toDetails(_unref(bottomBannerList)[0]))
      }, [_createVNode(_component_my_image, {
        url: _unref(bottomBannerList)[0].url
      }, null, 8, ["url"])])) : _createCommentVNode("", true), _createVNode(_component_van_tabbar, {
        class: "food_tabbar",
        modelValue: active.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => active.value = $event),
        "active-color": "#fd5c18",
        "inactive-color": "#999",
        onChange: change
      }, {
        default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(footDatas, (item, index) => {
          return _openBlock(), _createBlock(_component_van_tabbar_item, {
            key: index
          }, {
            icon: _withCtx(props => [_withDirectives(_createElementVNode("img", _hoisted_2, null, 512), [[_directive_lazy, props.active ? _unref(getImageUrl)(item.active) : _unref(getImageUrl)(item.unactive)]])]),
            default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(item.name), 1)]),
            _: 2
          }, 1024);
        }), 128))]),
        _: 1
      }, 8, ["modelValue"]), _createVNode(_component_van_popup, {
        show: _unref(showDetailsPopul).show,
        "onUpdate:show": _cache[2] || (_cache[2] = $event => _unref(showDetailsPopul).show = $event),
        class: "popup_coentent",
        overlay: false,
        position: "right"
      }, {
        default: _withCtx(() => [_createElementVNode("div", _hoisted_3, [_createElementVNode("div", _hoisted_4, [(_openBlock(), _createBlock(_resolveDynamicComponent(_unref(showDetailsPopul).type)))])])]),
        _: 1
      }, 8, ["show"]), _createVNode(_component_van_popup, {
        show: showDialogStart.value,
        "onUpdate:show": _cache[3] || (_cache[3] = $event => showDialogStart.value = $event)
      }, {
        default: _withCtx(() => [_createElementVNode("div", _hoisted_5, [_createElementVNode("div", {
          class: "img_cont_start",
          onClick: toLink
        }, [(_openBlock(), _createBlock(_component_my_image, {
          url: startImg.value,
          key: startImg.value
        }, null, 8, ["url"]))]), _createElementVNode("img", {
          src: _imports_0,
          onClick: closeSatrt,
          alt: "",
          class: "close"
        })])]),
        _: 1
      }, 8, ["show"]), _createVNode(_component_van_popup, {
        show: showDialog.value,
        "onUpdate:show": _cache[4] || (_cache[4] = $event => showDialog.value = $event),
        round: ""
      }, {
        default: _withCtx(() => [_createElementVNode("div", _hoisted_6, [_hoisted_7, _createElementVNode("div", _hoisted_8, _toDisplayString(_unref(noticeList)[0].content), 1), _createElementVNode("div", {
          class: "btns",
          onClick: closeNotice
        }, "我知道了")])]),
        _: 1
      }, 8, ["show"]), _createVNode(_component_SharePopup), _createVNode(_component_van_popup, {
        show: _unref(showDialogIsVip),
        "onUpdate:show": _cache[5] || (_cache[5] = $event => _isRef(showDialogIsVip) ? showDialogIsVip.value = $event : null),
        round: "",
        onClickOverlay: clickOverlay
      }, {
        default: _withCtx(() => [_createElementVNode("div", {
          class: "vip_content notice_content"
        }, [_hoisted_9, _hoisted_10, _createElementVNode("div", {
          class: "btns",
          onClick: toVip
        }, "开通VIP免费看")])]),
        _: 1
      }, 8, ["show"]), _createVNode(_component_SharePopup)])], 64);
    };
  }

};
</script>