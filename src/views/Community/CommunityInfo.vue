<!-- 小说详情 -->
<template>
  <div class="page page-community-info">
    <div style="display: flex;justify-content: space-between;padding: 0 10px;">
      <img
        style="width: 24vw"
        class="logo"
        src="@/assets/home/home_logo.png"
        alt="logo"
      />
      <img
        style="width: 24vw"
        class="logo"
        src="@/assets/home/home_logo.png"
        alt="logo"
      />
    </div>
    <div class="title">
      <div class="title-icon" @click="router.back">
        <Icon name="arrow-left" />
      </div>
      <div class="title-text">{{ item.title }}</div>
      <div class="share" @click="share">
        <img src="@/assets/share.png" alt="share" />
      </div>
    </div>
    <div class="box">
      <div v-html="item.content"></div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "vant";
import { ref } from "vue";
import axios from "axios";
import router from "@/router/index";
import store from "@/store/index";

const item = ref({});
try {
  item.value = JSON.parse(localStorage.getItem("communityinfo"));
} catch {
  console.error("数据解析异常");
}

const init = () => {
  axios({
    url: "https://admin.xzcs.xyz/" + item.value.path,
    // url: e.path,
    method: "get",
  }).then((res) => {
    if (res.data) {
      const regExp = new RegExp("\\n", "g");
      item.value.content = res.data.replace(regExp, "<br/>");
    }
  });
};
init();

const share = () => {
  store.commit("setShare", item.value);
};
</script>

<style scoped lang="less">
.page-community-info {
  width: 100%;
  height: 100%;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.8rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    .share {
      width: 20px;
      height: 20px;
      margin-left: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .title-icon {
      padding: 0 0.2rem 0 0.1rem;
      font-size: 0.4rem;
    }
    .title-text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 15px;
      flex: 1;
      text-align: left;
      font-weight: 400;
    }
  }
  .box {
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 12px 12px 120px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 2;
  }
}
</style>

<style lang="less">
.page-community-info {
  .box {
    img {
      max-width: 100%;
    }
  }
}
</style>
