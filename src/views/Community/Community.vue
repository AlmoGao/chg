<!-- 社区 -->
<template>
  <div class="page page-community">

    <div class="community-top">
      <!-- <img class="everyday" src="@/assets/home/everyday.png" alt="everyday" /> -->
      <div class="title">微头条</div>
      <!-- <img class="post" src="@/assets/community/post.png" alt="post" /> -->
    </div>

    <div class="community-content">
        <List />
    </div>
  </div>
</template>

<script setup>
import List from "./components/List"

</script>

<style lang="less" scoped>
.page-community {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  .community-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding: 0 10px;
    .everyday {
      width: 30px;
      height: 30px;
    }
    .post {
      height: 30px;
    }
    .title {
        flex: 1;
        margin: 0 0.2rem;
        text-align: center;
        font-size: 0.35rem;
        color: #fd5c18;
    }
  }
  .community-content {
    flex: 1;
    overflow: hidden;
    font-size: 0.3rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
