<!-- 视频列表 -->
<template>
    <div class="find-list scroll_view">
      <List
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <AdSwiper style="margin-bottom: 0.2rem" :id="1" /> -->
        <div class="list-item" v-for="(item, i) in list" :key="i">
          <template v-if="item.type == 'ad'">
            <!-- <AdBanner :id="1" />
            <AdBox :id="1" /> -->
          </template>
          <template v-else>
            <div class="poster" @click="_goPlay(item)">
              <img v-lazy="item.image" class="poster-img" alt="poster" />
              <div class="title">{{ item.title }}</div>
              <img class="play-btn" src="@/assets/home/play_btn.png" alt="play" />
              <div class="num">{{ item.views }}播放</div>
              <div class="time">{{ item.likes }}喜欢</div>
            </div>
          </template>
        </div>
      </List>
    </div>
  </template>
  
  <script setup>
  import { List } from "vant";
  import { defineProps, ref } from "vue";
  import { _tag_video } from "@/api/api.js";
  import { _goPlay } from "@/utils/index"
  // import AdSwiper from "@/components/AdSwiper.vue";
  // import AdBanner from "@/components/AdBanner.vue";
  // import AdBox from "@/components/AdBox.vue";
  
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
    page.value = sessionStorage.getItem('tags_page_' + props.id) || 1
    list.value = JSON.parse(sessionStorage.getItem('tags_list_' + props.id)) || []
  } catch {
    console.error('find数据解析失败')
  }
  
  const onLoad = () => {
    _tag_video({
      tag_id: props.id,
      limit: 20,
      page: page.value,
    })
      .then((res) => {
        if (res.code == 1) {
          list.value.push(...res.data);
          list.value.push({ type: "ad" });
          page.value++;
          sessionStorage.setItem('tags_page_' + props.id, page.value)
          sessionStorage.setItem('tags_list_' + props.id, JSON.stringify(list.value))
          if (!res.data.length) {
            finished.value = true;
          }
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };
  </script>
  
  <style lang="less" scoped>
  .find-list {
    height: 100%;
    overflow-y: auto;
    padding: 0 0.12rem;
    .list-item {
      margin-bottom: 0.2rem;
      .poster {
        width: 100%;
        height: 40vw;
        position: relative;
        background-color: #000;
        color: rgba(255, 255, 255, 0.9);
        .poster-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .title {
          width: 100%;
          position: absolute;
          padding: 0.12rem;
          color: #fff;
          font-size: 0.32rem;
          word-break: break-all;
          z-index: 9;
          top: 0;
          left: 0;
        }
        .play-btn {
          width: 1rem;
          height: 1rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          z-index: 9;
        }
        .num {
          font-size: 0.24rem;
          position: absolute;
          z-index: 9;
          bottom: 0.2rem;
          left: 0.12rem;
        }
        .time {
          font-size: 0.24rem;
          position: absolute;
          z-index: 9;
          bottom: 0.2rem;
          right: 0.12rem;
        }
      }
    }
  }
  </style>
  