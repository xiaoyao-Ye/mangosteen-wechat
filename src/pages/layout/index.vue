<template>
  <view>
    <NavBar :show-height="true" background="skyblue">
      <view class="navBar">
        <uni-icons type="list" size="32" @click="showDrawer"></uni-icons>
        <text>呵呵</text>
      </view>
    </NavBar>

    <view class="addBill" @click="addBill">
      <uni-icons type="plusempty" size="32" color="#fff"></uni-icons>
    </view>

    <uni-drawer ref="showRight" mode="left">
      <view class="drawer">
        <view class="head">
          <view>未登录用户</view>
          <view>点击这里进行登录</view>
        </view>
        <view class="menuList">
          <view v-for="menu in menuList" :key="menu.name" @click="menuHandle(menu)">
            <uni-icons :type="menu.icon" size="32"></uni-icons>
            <text>{{ menu.name }}</text>
          </view>
        </view>
      </view>
    </uni-drawer>
  </view>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar/index.vue'
const showRight = ref()

const showDrawer = () => {
  showRight.value.open()
}
const closeDrawer = () => {
  showRight.value.close()
}

const menuList = ref([
  { name: 'menu1', icon: 'settings' },
  { name: 'menu2', icon: 'medal' },
  { name: 'menu3', icon: 'vip' },
  { name: 'menu4', icon: 'paperclip' },
])
const menuHandle = (menu: any) => {
  uni.showToast({ title: menu.name, icon: 'none' })
}

const addBill = () => {
  uni.showToast({ title: 'addBill', icon: 'none' })
}
</script>

<style lang="scss" scoped>
.navBar {
  display: flex;
  align-items: center;
  height: 100%;
}

.addBill {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40rpx;
  bottom: 60rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 100%;
  background-color: skyblue;
}

.drawer {
  .head {
    padding-top: 120rpx;
    background-color: skyblue;
  }
  .menuList {
    > view {
      display: flex;
      align-items: center;
    }
  }
}
</style>
