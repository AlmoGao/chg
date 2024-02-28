<template>
  <van-popup
    v-model:show="showRight"
    position="right"
    :style="{ width: '100%', height: '100%' }"
  >
    <div class="story-info">
        <div class="title">
            <div class="title-icon" @click="close">
                <van-icon name="arrow-left" />
            </div>
            <div class="title-text">{{ item.name }}</div>
        </div>
        <div class="box" @click="showColor = !showColor" :style="{color:color,backgroundColor:bgColor,fontSize:fontSize+'px'}" v-html="item.content"></div>
        <div class="color-box" v-show="showColor">
            <div class="text-pick">
                <van-icon @click="fontChange(-1)" name="minus" />
                <van-icon @click="fontChange(1)" name="plus" />
            </div>
            <div class="color-pick">文本：<input v-model="color"  type="color" ></div>
            <div class="color-pick">背景：<input v-model="bgColor"  type="color" ></div>
        </div>
    </div>
  </van-popup>
</template>

<script setup>
import { ref, defineExpose } from "vue";
import axios from "axios"
import eventBus from 'vue3-eventbus'

const showRight = ref(false);
const item = ref({})

const color = ref("#8ca19a")
const bgColor = ref("#282828")
const showColor = ref(true)
const fontSize = ref(14)
const fontChange = (key) => {
    console.error(key)
    fontSize.value += key
    if (fontSize.value <= 12) fontSize.value  = 12
}

const close = () => {
    showRight.value = false
    eventBus.emit("checkqq")
}
const open = (e) => {
    item.value = e
    showRight.value = true
    axios({
        // url: "https://fzx.gucigdab.top/" + e.path,
        url: e.path,
        method: "get",
    }).then(res => {
        if (res.data) {
            const regExp = new RegExp("\\n", "g")
            item.value.content = res.data.replace(regExp, "<br/>")
        }
    })
}

defineExpose({
    open
})
</script>

<style scoped>
.story-info {
    width: 100%;
    height: 100%;
    background-color: #282828;
    display: flex;
    flex-direction: column;
}
.story-info .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 32px 0px 12px;
    box-sizing: border-box;
}
.story-info .title .title-icon {
}
.story-info .title .title-text {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 15px;
    flex: 1;
    text-align: left;
    font-weight: 400;
}
.story-info .box {
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 12px 12px 120px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 2;
}
.color-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 32px;
    box-sizing: border-box;
    font-size: 12px;
    color: #999;
}
.color-pick {
    
}
.text-pick {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
}
</style>
