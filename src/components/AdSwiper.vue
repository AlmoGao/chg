<!-- 广告轮播 -->
<template>
  <div class="ad-swiper">
    <Swipe class="ad-swiper-item" :autoplay="3000" lazy-render>
      <SwipeItem
        class="swiper-item"
        v-for="(item, i) in list"
        :key="i"
        @click="hancleClick(item)"
      >
        <img v-lazy="item.image" />
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script setup>
import { Swipe, SwipeItem } from "vant";
import { ref, defineProps } from "vue";
import { _carousel } from "@/api/api.js";
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
    l = JSON.parse(sessionStorage.getItem("carousel_" + props.id));
  } catch {
    console.error(l);
  }
  if (l && l.length) {
    list.value = l;
    return;
  }
  _carousel({
    site_id: site_id,
    category_id: props.id,
  }).then((res) => {
    if (res && res.data && res.data.length) {
      list.value = res.data;
      sessionStorage.setItem("carousel_" + props.id, JSON.stringify(res.data));
    }
  });
};
getList();

const hancleClick = (item) => {
  window.open(item.url);
};
</script>

<style lang="less" scoped>
.ad-swiper {
  background-color: #000;
  .ad-swiper-item {
    max-height: 50vw;
  }
  .swiper-item {
    max-height: 50vw;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      max-height: 50vw;
    }
  }
}
</style>
