<!-- 广告轮播 -->
<template>
  <div class="ad-banner">
    <div
      class="banner-item"
      v-for="(item, i) in list"
      :key="i"
      @click="hancleClick(item)"
    >
      <img v-lazy="item.image" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { _banner } from "@/api/api.js";
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
    l = JSON.parse(sessionStorage.getItem("banner_" + props.id));
  } catch {
    console.error(l);
  }
  if (l && l.length) {
    list.value = l;
    return;
  }
  _banner({
    site_id: site_id,
    category_id: props.id,
  }).then((res) => {
    if (res && res.data && res.data.length) {
      list.value = res.data;
      sessionStorage.setItem("banner_" + props.id, JSON.stringify(res.data));
    }
  });
};
getList();

const hancleClick = (item) => {
  window.open(item.url);
};
</script>

<style lang="less" scoped>
.ad-banner {
  margin-bottom: 0.2rem;
  .banner-item {
    width: 100%;
    max-height: 20vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
