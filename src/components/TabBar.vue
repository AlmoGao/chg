<!-- 底部导航 -->
<template>
  <div class="page-tabbar">
    <Tabbar
      @change="change"
      :border="false"
      class="tabbar"
      v-model="active"
      fixed
      inactive-color="#999999"
      active-color="#fd5c18"
    >
      <TabbarItem v-for="(item, i) in list" :key="i">
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img v-lazy="props.active ? item.activeIcon : item.icon" />
        </template>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import { Tabbar, TabbarItem } from "vant";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Tabbar1 from "@/assets/tabbar1.png";
import Tabbar11 from "@/assets/tabbar11.png";
import Tabbar2 from "@/assets/tabbar2.png";
import Tabbar22 from "@/assets/tabbar22.png";
import Tabbar3 from "@/assets/tabbar3.png";
import Tabbar33 from "@/assets/tabbar33.png";
import Tabbar4 from "@/assets/tabbar4.png";
import Tabbar44 from "@/assets/tabbar44.png";

const active = ref(0);
const list = ref([
  { name: "精选", activeIcon: Tabbar11, icon: Tabbar1 },
  { name: "发现", activeIcon: Tabbar22, icon: Tabbar2 },
  { name: "社区", activeIcon: Tabbar33, icon: Tabbar3 },
  { name: "小说", activeIcon: Tabbar44, icon: Tabbar4 },
  // { name: "我的", activeIcon: Tabbar44, icon: Tabbar4 },
]);

const change = (item) => {
  let route = "";
  switch (item) {
    case 0:
      route = "home";
      break;
    case 1:
      route = "find";
      break;
    case 2:
      route = "community";
      break;
    case 3:
      route = "novel";
      break;
    case 4:
      route = "my";
      break;
  }
  router.push({
    name: route,
  });
};

const route = useRoute();
watch(route, (val) => {
  switch(val.name) {
    case "home":
      active.value = 0
      break
    case "find":
      active.value = 1
      break
    case "community":
      active.value = 2
      break
    case "novel":
      active.value = 3
      break
    case "my":
      active.value = 4
      break
    default:
      active.value = -1
  }
});
</script>

<style lang="less" scoped>
.page-tabbar {
  .tabbar {
    background-color: #282828;
    border-top: 1px solid rgba(64, 64, 64, 0.5);
    padding-bottom: 4px;
  }
}
</style>
<style>
.van-tabbar-item--active {
  background-color: #282828 !important;
}
</style>
