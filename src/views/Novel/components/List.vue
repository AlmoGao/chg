<!-- 社区列表 -->
<template>
  <div class="novel-list scroll_view">
    <List
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <AdSwiper style="margin-bottom: 0.2rem" :id="7" />
      <div class="list-item" v-for="(item, i) in list" :key="i">
        <template v-if="item.type == 'ad'">
          <AdBanner :id="7" />
          <AdBox :id="7" />
        </template>
        <template v-else>
          <div class="title" @click="goInfo(item)">{{ item.title }}</div>
          <div class="info" @click="goInfo(item)">
            <span>{{ item.create_time_text }}</span>
          </div>
        </template>
      </div>
    </List>
  </div>
</template>

<script setup>
import { List } from "vant";
import { defineProps, ref } from "vue";
import { _novel } from "@/api/api.js";
import AdSwiper from "@/components/AdSwiper.vue";
import AdBanner from "@/components/AdBanner.vue";
import AdBox from "@/components/AdBox.vue";
import router from "@/router/index"

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
  page.value = sessionStorage.getItem('novel_page') || 1
  list.value = JSON.parse(sessionStorage.getItem('novel_list')) || []
} catch {
  console.error('novel数据解析失败')
}

const onLoad = () => {
  _novel({
    limit: 20,
    page: page.value,
  })
    .then((res) => {
      if (res.code == 1) {
        list.value.push(...res.data);
        list.value.push({ type: "ad" });
        page.value++;
        sessionStorage.setItem('novel_page', page.value)
        sessionStorage.setItem('novel_list', JSON.stringify(list.value))
        if (!res.data.length) {
          finished.value = true;
        }
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const goInfo = item => {
  localStorage.setItem('novelinfo', JSON.stringify(item))
  router.push({
    name: "novelinfo"
  })
}
</script>

<style lang="less" scoped>
.novel-list {
  height: 100%;
  overflow-y: auto;
  padding: 0 0.2rem;
  .list-item {
    padding: 0 0.12rem;
    margin-bottom: 0.4rem;
    color: rgba(255, 255, 255, 0.9);
    .title {
      font-size: 0.3rem;
      margin-bottom: 0.05rem;
      line-height: 0.42rem;
    }
    .info {
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.24rem;
    }
  }
}
</style>
