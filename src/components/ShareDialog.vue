<!-- 分享弹窗 -->
<template>
  <Popup
    class="share-dialog"
    v-model:show="show"
    type="center"
    @click-overlay="close"
    :close-on-click-overlay="true"
  >
    <div class="share-content">
      <div class="content-box" :style="{ backgroundImage: `url(${bg})` }">
        <div class="title">我要和你一起看片！</div>
        <div class="top-logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <div class="name">采花小官</div>
        <img class="share-1" src="@/assets/share/share1.png" alt="share" />
        <!-- 内容区域 -->
        <div class="share-info">
          <div class="poster" v-if="item.image">
            <img v-lazy="item.image" alt="img" />
          </div>
          <div class="info">
            <div class="text">{{ item.title }}</div>
            <div class="count" v-if="item.views || item.likes">
              <span v-if="item.views">{{ item.views }}次浏览</span>
              <span v-if="item.likes">{{ item.likes }}次点赞</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <div class="bottom-logo">
              <img src="@/assets/logo.png" alt="logo" />
            </div>
            <img class="share-2" src="@/assets/share/share2.png" alt="share" />
            <div class="link">{{ url }}</div>
          </div>
          <div class="right">
            <div class="qr-box">
              <QrcodeVue class="qrcode" :value="url" :size="size" level="H" />
            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <div class="btn btn1" @click="copyu">复制链接分享</div>
        <div class="btn btn2" @click="save">保存图片分享</div>
      </div>
    </div>
  </Popup>
</template>

<script setup>
import { Popup, showToast } from "vant";
import QrcodeVue from "qrcode.vue";
import { ref, computed } from "vue";
import bg from "@/assets/share/share-top.png";
import { copyTxt } from "@/utils/index";
import store from "@/store/index";

const show = computed(() => {
  return store.state.share.show || false;
});
const item = computed(() => {
  return store.state.share.item || {};
});
const url = ref(location.origin + "?invite_code=123asd");
const size = ref(parseInt(document.documentElement.style.fontSize) * 1.4);

const copyu = () => {
  copyTxt(url.value);
  showToast("复制成功，快去分享吧！");
};
const save = () => {
  showToast("请自行在本页面截图保存！");
};
const close = () => {
    console.error('??')
    store.commit("closeShare")
}
</script>

<style lang="less" scoped>
.share-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0) !important;
  .share-content {
    width: 90%;
    .content-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.2rem;
      background-color: #fff3e0;
      background-repeat: no-repeat;
      background-size: 101% auto;
      padding-top: 1.3rem;
      .share-info {
        padding: 0 0.2rem;
        display: flex;
        .poster {
          width: 34vw;
          height: 22vw;
          margin-right: 0.1rem;
          background-color: #000;
          border-radius: 0.1rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .info {
          font-size: 0.3rem;
          flex: 1;
          overflow: hidden;
          color: #111;
          line-height: 0.42rem;
          .text {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .count {
            margin-top: 0.2rem;
            font-size: 0.24rem;
            color: #999;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
      .title {
        font-size: 0.28rem;
        color: #fff;
        margin-bottom: 0.5rem;
      }
      .top-logo {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        color: gray;
        font-size: 0.24rem;
        font-weight: bold;
        margin: 0.3rem 0;
      }
      .share-1 {
        width: 90%;
        height: auto;
        margin-bottom: 0.2rem;
      }
      .bottom {
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0.3rem auto;
        .left {
          flex: 1;
          margin-right: 0.2rem;
          overflow: hidden;
          .bottom-logo {
            width: 1rem;
            height: 1rem;
            border-radius: 0.2rem;
            margin-left: 0.2rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .share-2 {
            height: 0.4rem;
            margin: 0.2rem 0 0.1rem 0;
          }
          .link {
            font-size: 0.24rem;
            color: #111;
            font-weight: 400;
            word-break: break-all;
            line-height: 0.32rem;
          }
        }
        .right {
          .qr-box {
            width: 1.6rem;
            height: 1.6rem;
            background-image: url("@/assets/share/qr-bg.png");
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.1rem;
            .qrcode {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.3rem;
      .btn {
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        font-size: 0.3rem;
        color: #fff;
        background: #f0b06a;
      }
      .btn2 {
        background-image: linear-gradient(90deg, #ed9f2f, #fc5b17);
      }
    }
  }
}
</style>
