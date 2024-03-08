<!-- 小说 -->
<template>
  <div class="page page-novel">
    <div class="novel-top">
      <img class="logo" src="@/assets/home/home_logo.png" alt="logo" />
      <div class="title">小说</div>
      <img class="logo" src="@/assets/home/home_logo.png" alt="logo" />
    </div>

    <div class="novel-content">
      <List />
    </div>
  </div>
</template>

<script setup>
import List from "./components/List";
</script>

<style lang="less" scoped>
.page-novel {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  .novel-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding: 0 10px;
    .logo {
      width: 24vw;
    }
    .title {
      flex: 1;
      margin: 0 0.2rem;
      text-align: center;
      font-size: 0.35rem;
      color: #fd5c18;
    }
  }
  .novel-content {
    flex: 1;
    overflow: hidden;
    font-size: 0.3rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
