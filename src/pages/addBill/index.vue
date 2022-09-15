<template>
  <view>
    <NavBar :show-height="true" background="skyblue">
      <view class="navBar">
        <uni-icons type="back" size="32" @click="back"></uni-icons>
        <text>xx</text>
      </view>
    </NavBar>

    <uni-segmented-control
      :current="current"
      :values="['呵呵', '哈哈']"
      @clickItem="tabChange"
      styleType="text"
      activeColor="#4cd964"
    ></uni-segmented-control>

    <view @click="addEmoji">add emoji</view>
  </view>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar/index.vue'

const back = () => {
  uni.navigateBack()
}

const current = ref<number>(0)
const tabChange = (e: any) => {}

const addEmoji = () => {
  uni.navigateTo({ url: '/pages/addEmoji/index' })
}
</script>

<style lang="scss" scoped>
.navBar {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
