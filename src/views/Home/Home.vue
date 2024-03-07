<!-- 主页 -->
<template>
  <div class="page page-home">
    <!-- 顶部 -->
    <div class="home-top">
      <img class="logo" src="@/assets/home/home_logo.png" alt="logo" />
      <!-- <div class="search">
        <Icon name="search" />
        <span>视频｜创作</span>
      </div>
      <img class="everyday" src="@/assets/home/everyday.png" alt="everyday" /> -->
    </div>
    <!-- 分类 -->
    <div @click.stop="goFind" class="c-icon"><Icon name="wap-nav" /></div>
    <!-- 内容 -->
    <Tabs
      lazy-render
      class="home-tabs"
      color="#282828"
      :background="'#282828'"
      title-active-color="#fd5c18"
      title-inactive-color="#ffffff"
      v-model:active="active"
      animated
    >
      <Tab
        class="home-tab"
        v-for="(item, i) in tabs"
        :key="i"
        :title="item.name"
      >
        <!-- <template v-if="i == 0">
            <Follow />
        </template>
        <template v-if="i != 0"> -->
            <VideoList v-if="active == i" :key="i" :id="item.id" />
        <!-- </template> -->
      </Tab>
    </Tabs>
  </div>
</template>

<script setup>
import { Tab, Tabs, Icon } from "vant";
import { computed, ref } from "vue";
import store from "@/store/index";
// import Follow from "./components/Follow";
import router from "@/router/index.js"
import VideoList from "./components/VideoList"

const active = ref(0);
const tabs = computed(() => {
  // return [{ name: "关注" }, ...(store.state.config.navigation || [])];
  return store.state.config.navigation || []
});

const goFind = () => {
    router.push({
        name: "find"
    })
}
</script>

<style lang="less" scoped>
.page-home {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  .home-tabs {
    flex: 1;
    overflow: hidden;
    font-size: 0.3rem;
    display: flex;
    flex-direction: column;
  }
  .c-icon {
    position: absolute;
    top: 66px;
    right: 16px;
    font-size: 0.4rem;
    z-index: 99;
  }
  .home-top {
    display: flex;
    align-items: center;
    height: 54px;
    padding: 0 10px;
    .logo {
      height: 30px;
    }
    .search {
      flex: 1;
      margin: 0 12px 0 20px;
      background-color: #404040;
      height: 34px;
      border-radius: 17px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      overflow: hidden;
      color: #c8c9cc;
      span {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        margin-left: 10px;
      }
    }
    .everyday {
      width: 30px;
      height: 30px;
    }
  }
}
</style>

<style lang="less">
.home-tabs {
  .van-tabs__wrap {
    margin-right: 34px;
    padding-left: 12px;
    overflow-x: auto;
    height: 0.8rem!important;
  }
  .van-tab {
    font-size: 0.35rem;
    flex: none;
    margin-right: 14px;
    line-height: 1!important;
  }
  .van-tabs__content {
    flex: 1;
    overflow: hidden;
    .van-tab__panel {
        height: 100%;
    }
  }
}
</style>
