<!-- 社区列表 -->
<template>
  <div class="community-list scroll_view">
    <List
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <AdSwiper style="margin-bottom: 0.2rem" :id="5" />
      <div class="list-item" v-for="(item, i) in list" :key="i" >
        <template v-if="item.type == 'ad'">
          <AdBanner :id="5" />
          <AdBox :id="5" />
        </template>
        <template v-else>
          <template @click="goInfo(item)">
            <div class="poster">
              <img v-lazy="item.image" alt="img" />
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.views }}观看</span>
              <span>{{ item.create_time_text }}</span>
            </div>
          </template>
        </template>
      </div>
    </List>
  </div>
</template>

<script setup>
import { List } from "vant";
import { defineProps, ref } from "vue";
import { _community } from "@/api/api.js";
import AdSwiper from "@/components/AdSwiper.vue";
import AdBanner from "@/components/AdBanner.vue";
import AdBox from "@/components/AdBox.vue";
import router from "@/router"

const props = defineProps({
  id: {
    type: [Number, String],
    default: "",
  },
});


const loading = ref(false);
const finished = ref(false);
const page = ref(1);
const list = ref([]);
try {
  page.value = sessionStorage.getItem('community_page') || 1
  list.value = JSON.parse(sessionStorage.getItem('community_list')) || []
} catch {
  console.error('community数据解析失败')
}

const onLoad = () => {
  _community({
    limit: 20,
    page: page.value,
  })
    .then((res) => {
      if (res.code == 1) {
        list.value.push(...res.data);
        list.value.push({ type: "ad" });
        page.value++;
        sessionStorage.setItem('community_page', page.value)
        sessionStorage.setItem('community_list', JSON.stringify(list.value))
        if (!res.data.length) {
          finished.value = false;
        }
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const goInfo = item => {
  localStorage.setItem("communityinfo", JSON.stringify(item))
  router.push({
    name: "communityinfo"
  })
}
</script>

<style lang="less" scoped>
.community-list {
  height: 100%;
  overflow-y: auto;
  padding: 0 0.2rem;
  .list-item {
    padding: 0 0.12rem;
    margin-bottom: 0.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.2rem;
    .poster {
      width: 100%;
      height: 36vw;
      margin-bottom: 0.1rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .title {
      font-size: 0.3rem;
      margin-bottom: 0.1rem;
    }
    .info {
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.24rem;
    }
  }
}
</style>
