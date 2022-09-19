<template>
  <view>
    <NavBar :show-height="true" background="skyblue">
      <view class="navBar">
        <uni-icons type="list" size="32" @click="showDrawer"></uni-icons>
        <text>呵呵</text>
      </view>
    </NavBar>

    <uni-segmented-control
      :current="current"
      :values="['本月', '上月', '今年', '选择时间段']"
      @clickItem="tabChange"
      styleType="text"
      activeColor="#4cd964"
    ></uni-segmented-control>
    <view class="content">
      <view v-if="!currentDate.length">请选择时间</view>
      <view v-else>
        <view>head</view>
        <uni-swipe-action>
          <uni-swipe-action-item
            v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :key="index"
            :right-options="swipeActionOptions"
            @click="swipeClick($event, index)"
          >
            <view>data {{ index }}</view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
    </view>

    <uni-datetime-picker ref="daterange" v-model="range" type="daterange" @change="rangeChange">
      {{ '' }}
    </uni-datetime-picker>

    <view @click="login">test login</view>

    <view class="addBill" @click="addBill">
      <uni-icons type="plusempty" size="32" color="#fff"></uni-icons>
    </view>

    <uni-drawer ref="drawer" mode="left">
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
import axios from '../../api'
import NavBar from '../../components/NavBar/index.vue'
import { formatDateRange, getCurrentMonthRange, getCurrentYearRange, getLastMonthRange } from '../../utils/dayjs'

const login = () => {
  uni.login({
    success: async (res) => {
      const url = `/api/login`
      try {
        // TODO: res.code 给后端
        const result = await axios({ url, params: { code: res.code }, method: 'GET' })
        console.log('result', result)
      } catch (error) {
        console.log('error', error)
      }
    },
  })
  // uni.getUserProfile({
  //   desc: 'Ghosteye welcome!',
  //   success: (res) => {
  //     console.log('getUserProfile', { res })
  //   },
  //   fail: (err) => {
  //     console.log('getUserProfile fail', err)
  //   },
  // })
}

const drawer = ref()
const showDrawer = () => {
  drawer.value.open()
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

const current = ref<number>(0)
const tabChange = (e: any) => {
  if (e.currentIndex == 3) {
    currentDate.value.length = 0
    daterange.value.show()
    current.value = 3
    return
  }
  if (current.value === e.currentIndex) return
  current.value = e.currentIndex

  const obj: { [key: number]: any } = {
    0: getCurrentMonthRange,
    1: getLastMonthRange,
    2: getCurrentYearRange,
  }
  currentDate.value = obj[current.value]()
  getList()
}

const getList = () => {
  console.log('currentDate', currentDate.value)
}

const daterange = ref()
const range = ref([new Date(), new Date()])
const currentDate = ref<string[]>([]) // 当前选中的日期
const rangeChange = (val: string[]) => {
  currentDate.value = formatDateRange(val)
  getList()
}

const swipeActionOptions = [{ text: '修改' }, { text: '删除', style: { backgroundColor: 'red' } }]
const swipeClick = (e: any, index: number) => {
  console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮' + index)
}

const addBill = () => {
  // uni.showToast({ title: 'addBill', icon: 'none' })
  uni.navigateTo({ url: '/pages/addBill/index' })
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
