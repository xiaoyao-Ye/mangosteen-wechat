<template>
  <view class="page">
    <NavBar :show-height="true" background="skyblue">
      <view class="navBar">
        <uni-icons type="back" size="32" @click="back"></uni-icons>
        <text>xx</text>
      </view>
    </NavBar>

    <view class="tag">
      <view class="tag-title">标签名称</view>
      <input class="tag-name" focus placeholder="请输入标签名称" />

      <view class="tag-title">标签图标</view>
      <view class="tag-icon">{{ selectedEmoji }}</view>

      <view class="emoji">
        <view v-for="item in emojiList" :key="item[0]">
          <view class="emoji-title">{{ item[0] }}</view>
          <view class="emoji-rows">
            <view v-for="emoji in item[1]" :key="emoji" @click="selectEmoji(emoji)">{{ emoji }}</view>
          </view>
        </view>
      </view>

      <button type="primary" plain>submit</button>
      <button type="warn">delete</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { emojiList } from '../../utils/emoji'
import NavBar from '../../components/NavBar/index.vue'

const back = () => {
  uni.navigateBack()
}

const selectedEmoji = ref<string>('')
const selectEmoji = (emoji: string) => {
  console.log(emoji)
  selectedEmoji.value = emoji
}

console.log({ emojiList })
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
}

.navBar {
  height: 100%;
  display: flex;
  align-items: center;
}

.tag {
  padding: 20rpx;
  &-title {
    font-weight: bold;
    color: #000;
  }
  &-name {
    margin: 10rpx;
    padding: 10rpx;
    border-radius: 8rpx;
    border: 2rpx dashed;
  }
  &-icon {
    margin: 10rpx;
    height: 80rpx;
    font-size: 60rpx;
  }
  .emoji {
    height: 800rpx;
    overflow-y: scroll;
    border: 1px solid;
    border-radius: 8rpx;
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
  button {
    margin-top: 30rpx;
  }
}
</style>
