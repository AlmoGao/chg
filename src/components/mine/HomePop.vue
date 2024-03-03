<template>
  <van-popup
    class="home-pop"
    v-model:show="show"
    type="center"
    :close-on-click-overlay="false"
  >
    <div class="home-pop-bg" :style="{ backgroundImage: `url(${bg})` }">
      <div class="guanwang">adsad.con</div>
      <div class="zuixin">adsad.con</div>
      <div class="youxiang">adsad.con</div>
      <div class="btn" @click="closeDialog">
        <img src="@/assets/images/qq/btn.png" alt="" />
      </div>
    </div>
  </van-popup>
</template>

<script>
import bg from "@/assets/images/qq/bg.png";

export default {
  data() {
    return {
      bg,
      show: false,
    };
  },
  mounted() {
    this.checkBrowser();
  },
  methods: {
    checkBrowser() {
      let userAgent = navigator.userAgent;
      // 判断是否是QQ浏览器
      if (userAgent.indexOf("QQBrowser") == -1) {
        this.showDialog();
      }
    },
    showDialog() {
      this.show = true;
    },
    closeDialog() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.home-pop {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-pop-bg {
  position: relative;
  width: 271px;
  height: 383px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
}

.btn {
  width: 256px;
  height: 37px;
  position: absolute;
  left: 10px;
  bottom: 80px;
}
.btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.guanwang {
  color: red;
  bottom: 207px;
  position: absolute;
  left: calc(50% + 24px);
  transform: translateX(-50%);
}
.zuixin {
  color: red;
  bottom: 172px;
  position: absolute;
  left: calc(50% + 24px);
  transform: translateX(-50%);
}
.youxiang {
  color: red;
  bottom: 120px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
