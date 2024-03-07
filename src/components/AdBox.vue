<!-- 广告轮播 -->
<template>
  <div class="ad-box">
    <div
      class="box-item"
      v-for="(item, i) in list"
      :key="i"
      @click="hancleClick(item)"
    >
      <img v-lazy="item.image" />
      <div class="name">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { _iconad } from "@/api/api.js";
import { site_id } from "@/config";

const props = defineProps({
  id: {
    type: [String, Number],
    default: "",
  },
});

const list = ref([]);
const getList = () => {
  let l = [];
  try {
    l = JSON.parse(sessionStorage.getItem("iconad_" + props.id));
  } catch {
    console.error(l);
  }
  if (l && l.length) {
    list.value = l;
    return;
  }
  _iconad({
    site_id: site_id,
    category_id: props.id,
  }).then((res) => {
    if (res && res.data && res.data.length) {
      list.value = res.data;
      sessionStorage.setItem("iconad_" + props.id, JSON.stringify(res.data));
    }
  });
};
getList();

const hancleClick = (item) => {
  window.open(item.url);
};
</script>

<style lang="less" scoped>
.ad-box {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 0.12rem;
  .box-item {
    width: 20vw;
    overflow: hidden;
    margin-bottom: 0.12rem;
    text-align: center;
    img {
      width: 20vw;
      height: 20vw;
      object-fit: contain;
    }
    .name {
      font-size: 0.24rem;
      color: #eee;
    }
  }
}
</style>
