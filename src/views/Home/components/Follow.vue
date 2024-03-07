<!-- 关注 -->
<template>
    <div class="home-follow">
        <div class="no-data">
            <img class="no-data-img" src="@/assets/home/nodata.webp" alt="">
            <div class="nothing">什么都没有，好空虚啊</div>
            <div class="baseline">-我也是有底线的-</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.home-follow {
    height: 100%;
    .no-data {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 1rem;
        .no-data-img {
            width: 90%;
            margin-bottom: 0.1rem;
        }
        .nothing {
            color: #fff;
            font-size: 0.24rem;
            margin-bottom: 0.3rem;
        }
        .baseline {
            color: #969799;
        }
    }
}
</style>