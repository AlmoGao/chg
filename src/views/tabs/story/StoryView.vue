<template>
  <div class="page-story">
    <div class="title">小说</div>
    <div class="list">
      <van-list
        class="list-box"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="item"
          v-for="(item, i) in list"
          :key="i"
          @click="openInfo(item)"
        >
          <div class="name">
            {{ item.name }}
          </div>
          <div class="time">{{ item.created_at }}</div>
        </div>
      </van-list>
    </div>

    <StoryInfo ref="info" />
  </div>
</template>

<script setup>
// import { getTimestr } from "@/utils";
import { ref } from "vue";
import StoryInfo from "./StoryInfo.vue";
import axios from "axios";

const loading = ref(false);
const finished = ref(false);
const list = ref([]);
const info = ref();
const page = ref(0)

const onLoad = () => {
  page.value += 1
  axios({
    url: "/api/v1/index/novel?page=" + page.value,
    method: "get",
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  }).then((res) => {
    loading.value = false;
    if (res && res.data)
    list.value.push(...res.data);
  });
};

const openInfo = (item) => {
  info.value.open(item);
};
</script>

<style scoped>
.page-story {
  color: #eee;
}
.page-story .title {
  font-size: 17px;
  font-weight: bold;
  color: rgb(253, 92, 24);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-story .list {
  height: calc(100vh - 100px);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 8px 12px 80px 12px;
}
.page-story .list .item {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 6px 12px;
  margin-bottom: 12px;
}
.page-story .list .item .name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 15px;
  font-weight: 400;
}
.page-story .list .item .time {
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
}
</style>
