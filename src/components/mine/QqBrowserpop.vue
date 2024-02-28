<template>
  <van-popup
    ref="isQQBrowser"
	class="isQQBrowser"
    v-model:show="show"
    type="center"
    :close-on-click-overlay="false"
  >
    <div class="isQQBrowserbox" :style="{ backgroundImage: `url(${bg})` }">
      <img
        class="downnow"
        src="../../assets/images/qq/downnow.png"
        mode="widthFix"
        @click="downmaxthon"
      />
      <img
        class="copyu"
        src="../../assets/images/qq/copyu.png"
        mode="widthFix"
        @click="copyu"
      />
      <img
        class="ic"
        src="../../assets/images/qq/ic.png"
        mode="widthFix"
        @click="isQQBrowserclose"
      />
    </div>
  </van-popup>
</template>

<script>
import { showToast } from "vant";
import eventBus from 'vue3-eventbus'
import { copyTxt } from "@/utils";
import bg from "../../assets/images/qq/isQQBrowserbox.png";

export default {
  data() {
    return {
      bg,
      show: false,
    };
  },
  mounted() {
    this.checkBrowser()
    eventBus.on("checkqq", this.checkBrowser)
  },
  methods: {
    checkBrowser() {
      console.error('qq')
      let userAgent = navigator.userAgent;
      // 判断是否是QQ浏览器
      if (userAgent.indexOf("QQBrowser") !== -1) {
        this.isQQBrowsershow();
        // window.addEventListener("click", () => {
        //   this.isQQBrowsershow();
        // });
      }
    },
    isQQBrowsershow() {
      this.show = true;
    },
    isQQBrowserclose() {
      this.show = false;
    },
    downmaxthon() {
      window.open("https://www.maxthon.com/zh");
    },
    copyu() {
      console.log(window.location.href);
      copyTxt(window.location.href);
      showToast("复制成功");
    },
  },
};
</script>

<style>
.isQQBrowser {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
