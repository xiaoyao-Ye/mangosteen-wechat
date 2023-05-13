<template>
  <view class="container">
    <view class="head">
      <image src="@/static/蘑菇.png"></image>
      <view>蘑菇记账</view>
    </view>
    <view class="content">
      <swiper class="swiper" :current="current" @change="change">
        <swiper-item v-for="item in swiperList" :key="item.title[0]">
          <view class="swiper-item">
            <image :src="item.icon"></image>
            <view>{{ item.title[0] }}</view>
            <view>{{ item.title[1] }}</view>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="footer">
      <view></view>
      <view @click="next">{{ startApp ? "开启应用" : "下一页" }}</view>
      <view @click="start">{{ startApp ? "" : "跳过" }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { IS_LAUNCH } from "../../config/storage_key";

const current = ref(0);
const startApp = computed(() => current.value >= 3);

const change = (e: any) => {
  current.value = e.detail.current;
};

const swiperList = [
  { icon: "../../static/小猪存钱罐.png", title: ["会挣钱", "还要会省钱"] },
  { icon: "../../static/闹钟.png", title: ["每日提醒", "不会遗漏每一笔账单"] },
  { icon: "../../static/数据表格.png", title: ["数据可视化", "收支一目了然"] },
  { icon: "../../static/天气云朵.png", title: ["云备份", "再也不怕数据丢失"] },
];

const next = () => {
  console.log("startApp", startApp);
  startApp.value ? start() : current.value++;
};

const start = () => {
  uni.setStorageSync(IS_LAUNCH, true);
  uni.redirectTo({ url: "/pages/layout/index" });
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-rows: 200rpx 1fr 120rpx;
  width: 100vw;
  height: 100vh;
  padding: 100rpx 20rpx;
  font-size: 38rpx;
  font-weight: bold;
  color: white;
  background-color: $primary-color;
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    image {
      width: 110.5rpx;
      height: 100rpx;
      margin-bottom: 20rpx;
    }
  }
  .content {
    color: black;
    background-color: #ffffff;
    border-radius: 20rpx;
  }
  .footer {
    display: grid;
    grid-template-columns: 100rpx 1fr 100rpx;
    place-items: center;
    text-align: center;
    > view:last-child {
      place-self: center end;
    }
  }
}
.swiper {
  height: 100%;
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    > image {
      width: 200rpx;
      height: 200rpx;
    }
    > view:nth-child(2) {
      margin: 40rpx 0 20rpx;
    }
  }
}
swiper-item {
  &:nth-child(2) image {
    width: 180rpx;
    height: 180rpx;
  }
  &:nth-child(1) image {
    width: 342rpx;
    margin-left: 40rpx;
  }
}
</style>
