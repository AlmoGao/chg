<!-- 分类tab -->
<template>
  <div class="tabs">
    <div
      class="tab"
      :class="{ active: currItemId == item.category_id }"
      @click="changeTab(item)"
      v-for="(item, i) in tabs.value"
      :key="i"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";

const props = defineProps({
  tabs: {
    type: Object,
    default: () => {},
  },
});

const currItemId = ref("");
if (props.tabs.value[0]) {
  currItemId.value = props.tabs.value[0].category_id;
}

const emits = defineEmits(["menuAll"]);
const changeTab = (item) => {
  currItemId.value = item.category_id;
  console.error("change", item);
  emits("menuAll", item);
};
</script>

<style scoped>
.tabs {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  color: #fff;
  padding: 0 20px;
}
.tabs .tab {
  display: inline-block;
  margin-right: 20px;
  line-height: 50px;
  font-size: 15px;
}
.tabs .active {
  color: rgb(253, 92, 24);
  font-weight: bold;
}
</style>
