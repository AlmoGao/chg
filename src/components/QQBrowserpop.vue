<template>
  <Popup
    ref="isQQBrowser"
    class="isQQBrowser"
    v-model:show="show"
    type="center"
    :close-on-click-overlay="false"
  >
    <div class="isQQBrowserbox" :style="{ backgroundImage: `url(${bg})` }">
      <img
        class="downnow"
        src="@/assets/qq/downnow.png"
        mode="widthFix"
        @click="downmaxthon"
      />
      <img
        class="copyu"
        src="@/assets/qq/copyu.png"
        mode="widthFix"
        @click="copyu"
      />
      <img
        class="ic"
        src="@/assets/qq/ic.png"
        mode="widthFix"
        @click="show = false"
      />
    </div>
  </Popup>
</template>

<script setup>
import { copyTxt } from "@/utils/index";
import bg from "@/assets/qq/isQQBrowserbox.png";
import { Popup, showToast } from "vant";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const show = ref(false);
const route = useRoute();

const checkBrowser = () => {
  let userAgent = navigator.userAgent;
  if (userAgent.indexOf("QQBrowser") !== -1) {
    show.value = true;
  }
};

checkBrowser();

const copyu = () => {
  copyTxt(window.location.origin);
  showToast("复制成功");
};

const downmaxthon = () => {
  window.open("https://www.maxthon.com/zh");
};

watch(route, () => {
  checkBrowser();
});
</script>

<style scoped>
.isQQBrowser {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0) !important;
}
.isQQBrowserbox {
  position: relative;
  width: 272px;
  height: 264px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.ic {
  width: 41px;
  height: 41px;
  position: absolute !important;
  bottom: -56px;
  left: 50%;
  transform: translateX(-50%);
}
.copyu {
  width: 251px;
  height: 54px;
  position: absolute !important;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.downnow {
  width: 241px;
  height: 92px;
  position: absolute !important;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
}
</style>
