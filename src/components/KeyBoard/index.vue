<template>
  <view class="keyBoard">
    <view class="keyBoard-head">
      <view @click="dateTimePicker">
        <uni-icons type="calendar" size="32"></uni-icons>
        <text>{{ createAt }}</text>
      </view>
      <text>{{ refAmount }}</text>
    </view>
    <view class="keyBoard-buttons">
      <button v-for="item in keyBoard" :key="item.text" @click="keyDown(item.text)">{{ item.text }}</button>
    </view>
  </view>

  <uni-datetime-picker ref="datetime" type="datetime" v-model="createAt" @change="datetimeChange">
    {{ '' }}
  </uni-datetime-picker>
</template>

<script setup lang="ts">
const props = defineProps<{
  amount: number
  /** dateTime */
  dateTime: string
  onSubmit: () => void
}>()
const emit = defineEmits<{
  (e: 'update:amount', value: number): void
  (e: 'update:dateTime', value: string): void
}>()

const refAmount = ref(props.amount ? (props.amount / 100).toString() : '0')
const appendText = (text: string) => {
  const dotIndex = refAmount.value.indexOf('.')
  if (refAmount.value.length >= 13) return
  if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) return

  if (text === '.') {
    if (dotIndex >= 0) {
      // 已经有小数点了
      return
    }
  } else if (text === '0') {
    if (dotIndex === -1) {
      // 没有小数点
      if (refAmount.value === '0') {
        // 没小数点，但是有0
        return
      }
    }
  } else {
    if (refAmount.value === '0') {
      refAmount.value = ''
    }
  }
  refAmount.value += text
}
const keyDown = (text: string) => {
  if (text === '提交') {
    emit('update:amount', parseFloat(refAmount.value) * 100)
    props.onSubmit?.()
    // uni.navigateBack()
    return
  }
  if (text === '清空') {
    refAmount.value = '0'
  } else {
    appendText(text)
  }
}

const keyBoard = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '.' },
  { text: '0' },
  { text: '清空' },
  { text: '提交' },
]

const dateTimePicker = () => {
  console.log('dateTimePicker')
  datetime.value.show()
}
const datetime = ref()
const createAt = ref(props.dateTime)
// const currentDate = ref<string[]>([]) // 当前选中的日期
const datetimeChange = (val: string) => {
  console.log('val', val)
  emit('update:dateTime', val)
  // currentDate.value = formatDateRange(val)
}
</script>

<style lang="scss" scoped>
:root {
  // --button-border-color: #e5e5e5;
  // --number-button-bg: #f5f5f5;
  // --number-button-text-important: #000;
  // --number-button-bg-important: #f5f5f5;
}
.keyBoard {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 2rpx solid #e5e5e5;
  transform: translateY(100%);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  animation: slideInUp 0.5s 0.3s ease-in-out forwards;
  @keyframes slideInUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  &-head {
    padding: 0 20rpx;
    height: 80rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > view {
      font-size: 28rpx;
      display: flex;
      align-items: center;
    }
  }
  &-buttons {
    padding: 8rpx;
    display: grid;
    grid-template-areas:
      'n1 n2 n3 d'
      'n4 n5 n6 d'
      'n7 n8 n9 s'
      'n0 n0 nd s';
    grid-auto-rows: 96rpx;
    grid-auto-columns: 1fr;
    gap: 2rpx;
    flex-wrap: wrap;
    // background: var(--button-border-color);
    // border-top: 1px solid var(--button-border-color);
    > button {
      margin: 0;
      border: none;
      // background: var(--number-button-bg);
      &:nth-child(1) {
        grid-area: n1;
      }
      &:nth-child(2) {
        grid-area: n2;
      }
      &:nth-child(3) {
        grid-area: n3;
      }
      &:nth-child(4) {
        grid-area: n4;
      }
      &:nth-child(5) {
        grid-area: n5;
      }
      &:nth-child(6) {
        grid-area: n6;
      }
      &:nth-child(7) {
        grid-area: n7;
      }
      &:nth-child(8) {
        grid-area: n8;
      }
      &:nth-child(9) {
        grid-area: n9;
      }
      &:nth-child(10) {
        grid-area: nd;
      }
      &:nth-child(11) {
        grid-area: n0;
      }
      &:nth-child(12) {
        grid-area: d;
        line-height: 192rpx;
      }
      &:nth-child(13) {
        grid-area: s;
        line-height: 192rpx;
        // background: var(--number-button-bg-important);
        // color: var(--number-button-text-important);
      }
    }
  }
}
</style>
