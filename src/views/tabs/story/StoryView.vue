<template>
    <div class="page-story">小说{{name}}</div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('小说')
</script>

<style scoped>
.page-story {
    color: #fff;
}
</style>