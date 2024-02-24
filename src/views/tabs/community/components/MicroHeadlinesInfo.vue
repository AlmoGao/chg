<template>
    <div class="com-info-detail">
        <div class="detail-img">
            <MyImage class="detail-img-curr" :url="props.info.image_one" />
        </div>
        <div class="detail-box">

            <div class="detail-title">{{ props.info.title }}</div>
            <div class="detail-bottom">
                <span>观看次数：{{ props.info.count }}</span>
                <span>{{ getTimestr(props.info.created * 1000) }}</span>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import MyImage from "@/components/mine/MyImage.vue"
import { getTimestr } from '@/utils.js'

const props = defineProps({
    info: {
        type: Object,
        default: () => {}
    }
})
console.error('???', props.info)

</script>

<style scoped>
.com-info-detail {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
}
.com-info-detail .detail-img {
    width: 110px;
    height: 90px;
    margin-right: 10px;
}
.com-info-detail .detail-img .detail-img-curr {
    width: 100%;
    height: 100% ;
}
.detail-box {
    flex: 1;
}
.com-info-detail .detail-title {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 26px;
    font-size: 15px;
    color: #eee;
    padding-top: 4px;
}
.com-info-detail .detail-bottom {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    color: #ddd;
}
</style>