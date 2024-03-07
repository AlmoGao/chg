<!-- 发现 -->
<template>
  <div class="page page-find">
    <div class="find-top">
      <!-- <img class="everyday" src="@/assets/home/everyday.png" alt="everyday" /> -->
      <div class="title">微头条</div>
      <!-- <div class="search">
        <Icon name="search" />
        <span>搜索</span>
      </div> -->
    </div>

    <div class="find-content">
      <div class="left-content">
        <div
          class="left-item"
          :class="{ 'active-item': activeId == item.id }"
          v-for="(item, i) in list"
          :key="i"
          @click="handclick(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="right-content">
        <FindList v-if="activeId" :id="activeId" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "vant";
import { _video_class } from "@/api/api";
import { ref } from "vue";
import FindList from "./components/FindList.vue";

const list = ref([]);
const activeId = ref("");
try {
  list.value = JSON.parse(sessionStorage.getItem("video_class")) || [];
  if (list.value.length > 0) {
    activeId.value = list.value[0].id;
  }
} catch {
  console.error("分类数据解析失败");
}

_video_class().then((res) => {
  if (res.data && res.data.length) {
    if (!list.value.length) {
      setTimeout(() => {
        activeId.value = list.value[0].id;
        getChildList()
      }, 100);
    }
    list.value = res.data;
    sessionStorage.setItem("video_class", JSON.stringify(res.data));
  }
});

const handclick = item => {
    if (activeId.value == item.id) return
    activeId.value = item.id
    getChildList()
}

const getChildList = () => { // 初始化右侧数据
    let id = activeId.value
    activeId.value = 0
    setTimeout(() => {
        activeId.value = id
    }, 100)
}
</script>

<style lang="less" scoped>
.page-find {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  .find-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding: 0 10px;
    .everyday {
      width: 30px;
      height: 30px;
    }
    .title {
      flex: 1;
      margin: 0 0.2rem;
      text-align: center;
      font-size: 0.35rem;
      color: #fd5c18;
    }
    .search {
      background-color: #404040;
      height: 32px;
      border-radius: 17px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      overflow: hidden;
      color: #c8c9cc;
      font-size: 0.3rem;
      span {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        margin-left: 4px;
        font-size: 0.24rem;
      }
    }
  }
  .find-content {
    flex: 1;
    overflow: hidden;
    font-size: 0.3rem;
    display: flex;
    align-items: stretch;
    .left-content {
      height: 100%;
      overflow-y: auto;
      width: 2rem;
      background-color: #3b3b3b;
      .left-item {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 0.3rem;
        line-height: 0.4rem;
        word-break: break-all;
        color: #ccc;
        padding: 0.3rem 0;
      }
      .active-item {
        background-color: #282828;
        color: #fd5c18;
        position: relative;
        &::after {
            content: "";
            width: 2px;
            height: 0.3rem;
            position: absolute;
            left: 0;
            top: 0.3rem;
            background-color: #fd5c18;
        }
      }
    }
    .right-content {
        flex: 1;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
  }
}
</style>
