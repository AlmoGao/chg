<template>
  <Popup
    class="home-pop"
    v-model:show="show"
    type="center"
    :close-on-click-overlay="false"
  >
    <div class="home-pop-bg" :style="{ backgroundImage: `url(${bg})` }">
      <div class="guanwang">{{ config.domain }}</div>
      <div class="zuixin">{{ config.new_domain }}</div>
      <div class="youxiang">{{ config.email }}</div>
      <div class="btn" @click="show = false">
        <img src="@/assets/qq/btn.png" alt="" />
      </div>
    </div>
  </Popup>
</template>

<script setup>
import bg from "@/assets/qq/bg.png";
import { Popup } from "vant";
import { ref, computed } from "vue";
import store from "@/store/index";

const show = ref(false);
const config = computed(() => store.state.config || {});

if (navigator.userAgent.indexOf("QQBrowser") == -1) {
  show.value = true;
}
</script>

<style scoped>
.home-pop {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0) !important;
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
