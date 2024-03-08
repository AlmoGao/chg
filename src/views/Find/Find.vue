<!-- 发现 -->
<template>
  <div class="page page-find">
    <div class="find-top">
      <!-- <img class="everyday" src="@/assets/home/everyday.png" alt="everyday" /> -->
      <img class="logo" src="@/assets/home/home_logo.png" alt="logo" />
      <div class="title">
        <div
          class="tab"
          :class="{ 'active-tab': pageType == 1 }"
          @click="changeType(1)"
        >
          分类
        </div>
        <div
          class="tab"
          :class="{ 'active-tab': pageType == 2 }"
          @click="changeType(2)"
        >
          标签
        </div>
      </div>
      <div class="search" @click="goSearch">
        <Icon name="search" />
        <span>搜索</span>
      </div>
    </div>

    <!-- 分类 -->
    <div class="find-content" v-if="pageType == 1">
      <div class="left-content">
        <div
          class="left-item"
          :class="{ 'active-item': activeId == item.id }"
          v-for="(item, i) in list"
          :key="i"
          @click="handclick(item)"
        >
          {{ item.name }}{{ activeId }}
        </div>
      </div>
      <div class="right-content">
        <FindList v-if="activeId" :id="activeId" />
      </div>
    </div>

    <!-- 标签 -->
    <div class="find-content" v-if="pageType == 2">
      <div class="left-content">
        <div
          class="left-item"
          :class="{ 'active-item': activeTagId == item.id }"
          v-for="(item, i) in tags"
          :key="i"
          @click="handclickTag(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="right-content">
        <TagsList v-if="activeTagId" :id="activeTagId" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "vant";
import { _video_class, _tag_class } from "@/api/api";
import { ref } from "vue";
import FindList from "./components/FindList.vue";
import TagsList from "./components/TagsList.vue"
import router from "@/router/index"

const goSearch = () => {
  router.push({
    name: "search"
  })
}

const pageType = ref(1); // 1-分类 2-标签
const changeType = (i) => {
  pageType.value = i;
};

// 分类
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
      }, 100);
    }
    list.value = res.data;
    sessionStorage.setItem("video_class", JSON.stringify(res.data));
  }
});

const handclick = (item) => {
  if (activeId.value == item.id) return;
  activeId.value = item.id;
  getChildList();
};

const getChildList = () => {
  // 初始化右侧数据
  let id = activeId.value;
  activeId.value = 0;
  setTimeout(() => {
    activeId.value = id;
  }, 100);
};

// 标签
const tags = ref([]);
const activeTagId = ref("");
try {
  tags.value = JSON.parse(sessionStorage.getItem("tags_class")) || [];
  if (tags.value.length > 0) {
    activeTagId.value = tags.value[0].id;
  }
} catch {
  console.error("分类数据解析失败");
}
_tag_class().then((res) => {
  if (res.data && res.data.length) {
    if (!tags.value.length) {
      setTimeout(() => {
        activeTagId.value = tags.value[0].id;
      }, 100);
    }
    tags.value = res.data;
    sessionStorage.setItem("tags_class", JSON.stringify(res.data));
  }
});
const handclickTag = (item) => {
  if (activeTagId.value == item.id) return;
  activeTagId.value = item.id;
  getChildListTag();
};
const getChildListTag = () => {
  // 初始化右侧数据
  let id = activeTagId.value;
  activeTagId.value = 0;
  setTimeout(() => {
    activeTagId.value = id;
  }, 100);
};
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
    .logo {
      width: 24vw;
    }
    .everyday {
      width: 30px;
      height: 30px;
    }
    .title {
      flex: 1;
      margin: 0 0.2rem;
      text-align: center;
      font-size: 0.35rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .tab {
        color: #ccc;
        margin: 0 4vw;
      }
      .active-tab {
        color: #fd5c18;
      }
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
