<!-- 搜索页 -->
<template>
  <div class="page page-search">
    <div class="title">
      <div class="title-icon" @click="router.back">
        <Icon name="arrow-left" />
      </div>
      <div class="search">
        <Icon name="search" />
        <input
          v-model.trim="keyword"
          @keydown.enter="search"
          type="search"
          maxlength="50"
          placeholder="请输入搜索内容"
        />
      </div>
      <span @click="search">搜索</span>
    </div>

    <div class="content">
      <div class="his-title">
        <div>搜索历史</div>
        <div class="clear" @click="clear">清除</div>
      </div>
      <div class="his-list">
        <div
          class="list-item"
          @click="clickItem(item)"
          v-for="(item, i) in list"
          :key="i"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "vant";
import router from "@/router/index.js";
import { ref } from "vue";

const list = ref([]);
try {
  list.value = JSON.parse(localStorage.getItem("his-list")) || [];
} catch {
  console.error("无历史记录");
}

const setItem = (name) => {
  if (!list.value.includes(name)) {
    list.value.unshift(name);
    localStorage.setItem("his-list", JSON.stringify(list.value));
  }
};

const clear = () => {
  localStorage.setItem("his-list", JSON.stringify([]));
  list.value = [];
};

const keyword = ref("");
const search = () => {
  if (!keyword.value) return;
  router.replace({
    name: "result",
    query: {
      keyword: keyword.value,
    },
  });
  setTimeout(() => {
    setItem(keyword.value);
  }, 100);
};

const clickItem = (item) => {
  router.replace({
    name: "result",
    query: {
      keyword: item,
    },
  });
};
</script>

<style lang="less" scoped>
.page-search {
  width: 100%;
  height: 100%;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
    font-size: 0.3rem;
    padding: 0 0.4rem 0 0.2rem;
    box-sizing: border-box;
    .title-icon {
      padding: 0 0.2rem 0 0.1rem;
      font-size: 0.4rem;
    }
    .search {
      flex: 1;
      margin: 0 1rem;
      display: flex;
      align-items: center;
      margin: 0 20px;
      background-color: #404040;
      height: 34px;
      border-radius: 17px;
      padding: 0 20px;
      overflow: hidden;
      color: #c8c9cc;
      font-size: 0.3rem;
      input {
        flex: 1;
        margin-left: 4px;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        outline: none;
      }
    }
  }
  .content {
    padding: 0.8rem 0.4rem 0.4rem 0.4rem;
    .his-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.4rem;
      color: fff#ccc;
      font-weight: bold;
      margin-bottom: 0.4rem;
      .clear {
        font-size: 0.3rem;
        color: #ccc;
      }
    }
    .his-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      .list-item {
        margin: 0 0.2rem 0.2rem 0;
        padding: 0.1rem 0.24rem;
        border-radius: 0.1rem;
        background-color: #404040;
        color: #ccc;
        font-size: 0.26rem;
      }
    }
  }
}
</style>
