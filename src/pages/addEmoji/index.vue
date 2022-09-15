<template>
  <view class="tag">
    <NavBar :show-height="true" background="skyblue">
      <view class="navBar">
        <uni-icons type="back" size="32" @click="back"></uni-icons>
        <text>xx</text>
      </view>
    </NavBar>

    <view class="emoji">
      <view v-for="item in emojiList" :key="item[0]">
        <view class="emoji-title">{{ item[0] }}</view>
        <view class="emoji-rows">
          <view v-for="emoji in item[1]" :key="emoji">{{ emoji }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { emojiList } from '../../utils/emoji'
import NavBar from '../../components/NavBar/index.vue'

const back = () => {
  uni.navigateBack()
}

console.log({ emojiList })
</script>

<style lang="scss" scoped>
.tag {
  height: 100vh;
}
.emoji {
  height: 1000rpx;
  overflow-y: scroll;
  &-title {
    padding: 20rpx;
    font-size: 40rpx;
  }
  &-rows {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    grid-gap: 10rpx;
    font-size: 60rpx;
  }
}
.navBar {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
