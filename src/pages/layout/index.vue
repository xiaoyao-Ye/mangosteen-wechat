<template>
  <view>
    <NavBar :show-height="true" background="transparent">
      <view class="navBar">
        <uni-icons type="list" size="28" style="margin-right: 20rpx" @click="showDrawer"></uni-icons>
        <text>蘑菇记账</text>
      </view>
    </NavBar>

    <uni-segmented-control
      :current="current"
      :values="['本月', '上月', '今年', '选择时间段']"
      @clickItem="tabChange"
      styleType="text"
      activeColor="skyblue"
    ></uni-segmented-control>

    <view class="content">
      <view v-if="!currentDate.length">请选择时间</view>
      <view v-else>
        <view class="banner">
          <view style="color: #ff6600">
            <view>收入</view>
            <view>{{ ((balance.income ?? 0) / 100)?.toFixed(2) }}</view>
          </view>
          <view style="color: #00ff99">
            <view>支出</view>
            <view>{{ ((balance.outcome ?? 0) / 100)?.toFixed(2) }}</view>
          </view>
          <view>
            <view>净收入</view>
            <view>{{ ((balance.netIncome ?? 0) / 100)?.toFixed(2) }}</view>
          </view>
        </view>
        <view class="itemList">
          <view v-for="item in billList" :key="item.id">
            <view class="sign">{{ item.tag?.sign }}</view>
            <view class="title">{{ item.tag?.name }}</view>
            <view class="desc">
              <view class="amount" :style="{ color: item.tag?.category === '支出' ? '#00ff99' : '#ff6600' }">
                ￥{{ ((item.amount ?? 0) / 100)?.toFixed(2) }}
              </view>
              <view class="date">{{ item.record_date }}</view>
            </view>
          </view>
        </view>
        <!-- <uni-swipe-action>
          <uni-swipe-action-item
            v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :key="index"
            :right-options="swipeActionOptions"
            @click="swipeClick($event, index)"
          >
            <view class="action-item">data {{ index }}</view>
          </uni-swipe-action-item>
        </uni-swipe-action> -->
      </view>
    </view>

    <uni-datetime-picker ref="daterange" v-model="range" type="daterange" @change="rangeChange">
      {{ '' }}
    </uni-datetime-picker>

    <view class="addBill" @click="addBill">
      <uni-icons type="plusempty" size="32" color="#fff"></uni-icons>
    </view>

    <uni-drawer ref="drawer" mode="left">
      <view class="drawer">
        <view class="head" @click="loginAndLogout">
          <view class="avatar">
            <image :src="userInfo.avatar"></image>
          </view>
          <view>{{ userInfo.nickName ? userInfo.nickName : '未登录用户' }}</view>
          <view>{{ token ? '注销' : '点击进行登录' }}</view>
        </view>
        <view class="menuList">
          <view v-for="menu in menuList" :key="menu.name" @click="menuHandle(menu)">
            <!-- <uni-icons :type="menu.icon" size="32"></uni-icons> -->
            <image :src="menu.icon"></image>
            <text>{{ menu.name }}</text>
          </view>
        </view>
      </view>
    </uni-drawer>
  </view>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar/index.vue'
import { formatDateRange, getCurrentMonthRange, getCurrentYearRange, getLastMonthRange } from '../../utils/dayjs'

import { IS_LAUNCH, TOKEN, USER_INFO } from '../../config/storage_key'
import { Bill } from '../../api/mangosteen/api'
import { BalanceVo, BillItemsVo } from '../../api/mangosteen/entity'

const isLaunch = uni.getStorageSync(IS_LAUNCH)
if (!isLaunch) uni.redirectTo({ url: '/pages/index/index' })

const userInfo = uni.getStorageSync(USER_INFO) || { avatar: '../../static/蘑菇.png' }
const token = uni.getStorageSync(TOKEN) ?? {}

const loginAndLogout = () => {
  if (token) {
    console.log('注销')
  } else {
    uni.redirectTo({ url: '/pages/login/index' })
  }
}

const drawer = ref()
const showDrawer = () => {
  drawer.value.open()
}

const menuList = [
  { name: '记账', icon: '../../static/蘑菇.png' },
  { name: '统计图表', icon: '../../static/蘑菇.png' },
  { name: '导出数据', icon: '../../static/蘑菇.png' },
  { name: '记账提醒', icon: '../../static/蘑菇.png' },
]
const menuHandle = (menu: any) => {
  if (menu.name !== '记账') return uni.showToast({ title: '敬请期待', icon: 'none' })
  drawer.value.close()
}

const tactics: { [key: number]: any } = {
  0: getCurrentMonthRange,
  1: getLastMonthRange,
  2: getCurrentYearRange,
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
  currentDate.value = tactics[current.value]()
  getList()
  getStatistics()
}

const billList = ref<BillItemsVo[]>([])
const getList = async () => {
  console.log('currentDate', currentDate.value)
  const { items, total } = await Bill.queryPageBills({
    pageNum: 1,
    pageSize: 10,
    startTime: currentDate.value[0],
    endTime: currentDate.value[1],
  })
  billList.value = items ?? []
}

const balance = ref<BalanceVo>({ income: 0, outcome: 0, netIncome: 0 })
// 获取统计信息
const getStatistics = async () => {
  balance.value = await Bill.balance({
    startTime: currentDate.value[0],
    endTime: currentDate.value[1],
  })
}

const daterange = ref()
const range = ref([new Date(), new Date()])
const currentDate = ref<string[]>([]) // 当前选中的日期
const rangeChange = (val: string[]) => {
  currentDate.value = formatDateRange(val)
  getList()
  getStatistics()
}

// const swipeActionOptions = [
//   { text: '修改', style: { backgroundColor: '#4cd964' } },
//   { text: '删除', style: { backgroundColor: '#F56C6C' } },
// ]
// const swipeClick = (e: any, index: number) => {
//   console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮' + index)
// }

onShow(() => {
  currentDate.value = tactics[current.value]()
  getList()
  getStatistics()
})

const addBill = () => {
  uni.navigateTo({ url: '/pages/addBill/index' })
}
</script>

<style lang="scss" scoped>
.navBar {
  padding: 0 20rpx;
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
  background-color: $primary-color;
}

.drawer {
  .head {
    padding-bottom: 20rpx;
    padding-top: 120rpx;
    text-align: center;
    color: white;
    background-color: $primary-color;
    .avatar {
      margin: 0 auto;
      width: 150rpx;
      height: 150rpx;
      overflow: hidden;
      image {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
  }
  .menuList {
    padding: 20rpx;
    > view {
      height: 80rpx;
      display: flex;
      align-items: center;
    }
    image {
      width: 60rpx;
      height: 60rpx;
      margin-right: 20rpx;
    }
  }
}

.content {
  .banner {
    margin: 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    height: 140rpx;
    // border: 2rpx solid;
    border-radius: 20rpx;
    background-color: #252a43;
    color: white;
  }
  .action-item {
    padding: 20rpx;
    height: 80rpx;
    border-bottom: 2rpx solid #eee;
  }
  .itemList {
    padding: 0 30rpx 30rpx;
    > view {
      display: flex;
      align-items: center;
      border-bottom: 2rpx solid skyblue;
      height: 140rpx;
      .sign {
        margin-right: 20rpx;
        width: 80rpx;
        height: 80rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background-color: #ccc;
      }
      .title {
        font-weight: bold;
        font-size: 36rpx;
      }
      .desc {
        flex: 1;
        text-align: right;
      }
      .amount {
        font-weight: bold;
        color: #ff6600;
      }
      .date {
        font-size: 28rpx;
        color: #666;
      }
    }
  }
}
</style>
