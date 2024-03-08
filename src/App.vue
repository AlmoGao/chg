<template>
  <router-view></router-view>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view> -->
  <Tabbar v-show="showTab" />
  <HomePop />
  <QQBrowserpop />
  <ShareDialog />
</template>

<script setup>
import Tabbar from "@/components/TabBar.vue";
import QQBrowserpop from "@/components/QQBrowserpop.vue"
import HomePop from "@/components/HomePop.vue"
import ShareDialog from "@/components/ShareDialog.vue"
import store from "@/store/index";
import { _index } from "@/api/api.js";
import { site_id } from "@/config.js";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showTab = computed(() => {
  return ["home", "find", "my", "community", "novel"].includes(route.name);
});

console.error("---storage---", store.state);
_index({ site_id }).then((res) => {
  if (res.code == 1) {
    store.commit("setConfig", res.data);
  }
});
</script>

<style lang="less">
@import "./style/var.less";
@import "./style/vant.less";
@import "./style/index.less";
</style>
