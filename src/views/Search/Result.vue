<!-- 搜索结果 -->
<template>
  <div class="page page-result">
    <div class="title">
      <div class="title-icon" @click="router.replace({name: 'home'})">
        <Icon name="arrow-left" />
      </div>
      <div class="text"># {{ keyword }}</div>
      <div class="title-icon"></div>
    </div>

    <div class="content">
      <div class="list">
        <div class="list-item" v-for="(item, i) in list" :key="i" @click="_goPlay(item)">
          <div class="item-left">
            <img v-lazy="item.image" alt="img" />
          </div>
          <div class="item-right">
            <div class="right-title">{{ item.title }}</div>
            <div class="right-info">
              <span class="right-info-tag">{{ item.tag_text }}</span>
              <span>{{ item.views }}次播放</span>
            </div>
          </div>
        </div>
      </div>
      <div class="nodata">{{ loading ? "搜索中..." : "没有更多了" }}</div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "vant";
import router from "@/router/index";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { _search } from "@/api/api";
import { _goPlay } from "@/utils/index"

const route = useRoute();
const keyword = ref("");
keyword.value = route.query.keyword;

const loading = ref(false);
const list = ref([]);
if (keyword.value) {
  loading.value = true;
  list.value = [];
  _search({
    title: keyword.value,
  })
    .then((res) => {
      if (res.code == 1) {
        list.value = res.data || [];
      }
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>

<style lang="less" scoped>
.page-result {
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
    font-size: 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    .title-icon {
      padding: 0 0.2rem 0 0.1rem;
      font-size: 0.4rem;
    }
    .text {
      max-height: 100%;
      flex: 1;
      font-size: 0.3rem;
      line-height: 0.4rem;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-align: center;
    }
  }
  .content {
    flex: 1;
    overflow-y: auto;
    .nodata {
      padding-top: 1rem;
      text-align: center;
      font-size: 0.26rem;
      color: #999;
    }
    .list {
      padding: 0.2rem 0.4rem 0.6rem 0.4rem;
      .list-item {
        margin-bottom: 0.4rem;
        display: flex;
        align-items: stretch;
        overflow: hidden;
        .item-left {
          width: 34vw;
          height: 22vw;
          border-radius: 0.2rem;
          margin-right: 0.2rem;
          flex-shrink: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .item-right {
          flex: 1;
          color: #eee;
          font-size: 0.3rem;
          line-height: 0.42rem;
          overflow: hidden;
          .right-title {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .right-info {
          font-size: 0.24rem;
          display: flex;
          align-items: center;
          color: #999;
          margin-top: 0.2rem;
          .right-info-tag {
            flex: 1;
            margin-right: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
