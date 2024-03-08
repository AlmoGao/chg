<!-- 视频播放页 -->
<template>
  <div class="page page-video">
    <div class="top">
      <div class="title-icon" @click="router.back">
        <Icon name="arrow-left" />
      </div>
      <img class="logo" src="@/assets/home/home_logo.png" alt="logo" />
      <div class="share"></div>
    </div>

    <div class="video-content"></div>
    <div class="content">
      <div class="video-details">
        <div class="title">{{ videoInfo.title }}</div>
        <div class="tags" v-if="videoInfo.tag_text">
          <div
            @click="clickTag(item)"
            class="tag"
            v-for="(item, i) in videoInfo.tag_text.split(',')"
            :key="i"
          >
            #{{ item }}
          </div>
        </div>
        <div class="count">
          <span
            >{{ videoInfo.views }}次播放 · {{ videoInfo.likes }}赞 ·
            {{ videoInfo.create_time_text }}发布</span
          >

          <div class="share" @click="share">
            <img src="@/assets/share.png" alt="share" />
            <span>分享</span>
          </div>
        </div>
      </div>
      <Aoyou />
      <AdSwiper style="margin-bottom: 0.2rem" :id="6" />
      <AdBanner :id="6" />
      <AdBox :id="6" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "vant";
import router from "@/router/index.js";
import { ref, onMounted, onBeforeUnmount } from "vue";
import AdSwiper from "@/components/AdSwiper.vue";
import AdBanner from "@/components/AdBanner.vue";
import AdBox from "@/components/AdBox.vue";
import Aoyou from "@/components/Aoyou.vue";
import store from "@/store/index"

const videoInfo = ref({});
try {
  videoInfo.value = JSON.parse(localStorage.getItem("curr-video")) || {};
} catch {
  console.error("视频数据解析失败");
}

let player = null;
const initVideo = () => {
  document.querySelector(".video-content").innerHTML = `<video
      class="player-container-id"
        id="player-container-id-lb"
        width="100%"
        height="100%"
        preload="auto"
        playsinline
        webkit-playsinline
        x5-playsinline
      ></video>`;
  if (player) {
    player.dispose();
  }
  // eslint-disable-next-line
  player = TCPlayer("player-container-id-lb", {
    autoplay: true,
    poster: videoInfo.value.image,
    width: "100%",
    height: "100%",
  });
  player.src(videoInfo.value.url); // url 播放地址
};

const share = () => {
  store.commit("setShare", videoInfo.value)
}
onMounted(() => {
  initVideo();
});
onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
  document.querySelector(".video-content").innerHTML = "";
});

const clickTag = name => {
  router.push({
    name: "result",
    query: {
      keyword: name
    }
  })
}
</script>

<style lang="less" scoped>
.page-video {
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.8rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    .title-icon {
      padding: 0 0.2rem 0 0.1rem;
      font-size: 0.4rem;
    }
    .logo {
      height: 26px;
    }
    .share {
      width: 20px;
      height: 20px;
      margin-left: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .video-content {
    height: 56vw;
    background-color: #000;
  }
  .content {
    flex: 1;
    overflow-y: auto;
    padding: 0.26rem;
    .video-details {
      margin-bottom: 0.2rem;
      .title {
        color: #fff;
        font-size: 0.3rem;
        line-height: 0.42rem;
        word-break: break-all;
        margin-bottom: 0.2rem;
      }
      .tags {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 0.1rem;
        .tag {
          background-color: #404040;
          font-size: 0.24rem;
          border-radius: 0.3rem;
          padding: 0.08rem 0.2rem;
          color: #999;
          margin-right: 0.16rem;
          margin-bottom: 0.1rem;
        }
      }
      .count {
        font-size: 0.24rem;
        color: #999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .share {
          display: flex;
          align-items: center;
          font-size: 0.24rem;
          img {
            height: 0.24rem;
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
#player-container-id-lb {
  width: 100%;
  height: 100%;
}
</style>
