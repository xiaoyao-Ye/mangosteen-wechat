<template>
  <view class="container">
    <view class="head">
      <view> 11 </view>
      <view>xxxxx</view>
    </view>
    <view class="content">
      <swiper class="swiper" :current="current" @change="change">
        <swiper-item>
          <view class="swiper-item">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">C</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">D</view>
        </swiper-item>
      </swiper>
    </view>
    <view class="footer">
      <view></view>
      <view @click="next">{{ startApp ? 'start' : 'next' }}</view>
      <view @click="start">{{ startApp ? '' : 'start' }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
const current = ref(0)
const startApp = computed(() => current.value >= 3)

const change = (e: any) => {
  current.value = e.detail.current
}

const next = () => {
  console.log('startApp', startApp)
  startApp.value ? start() : current.value++
}

const start = () => {
  uni.redirectTo({ url: '/pages/layout/index' })
}
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-rows: 200rpx 1fr 120rpx;
  padding: 100rpx 20rpx;
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  .content {
    border-radius: 20rpx;
    background-color: #fff;
  }
  .footer {
    text-align: center;
    display: grid;
    grid-template-columns: 100rpx 1fr 100rpx;
    place-items: center;
    > view:last-child {
      place-self: center end;
    }
  }
}

.swiper {
  height: 100%;
}
.swiper-item {
  height: 100%;
  text-align: center;
}
</style>
