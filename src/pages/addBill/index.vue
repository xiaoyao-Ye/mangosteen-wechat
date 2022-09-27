<template>
  <view>
    <NavBar :show-height="true" background="#fff">
      <view class="navBar" @click="back">
        <uni-icons type="back" size="24"></uni-icons>
        <text>{{ isEdit ? '编辑记录' : '新增记录' }}</text>
      </view>
    </NavBar>

    <uni-segmented-control
      :current="current"
      :values="['支出', '收入']"
      @clickItem="tabChange"
      styleType="text"
      activeColor="#4cd964"
    ></uni-segmented-control>

    <view class="tagList">
      <view class="addEmoji tagList-item" @click="addEmoji">
        <uni-icons type="plusempty" size="24" color="#4cd964"></uni-icons>
        <text>添加标签</text>
      </view>
      <view class="tagList-item" v-for="tag in tagList" :key="tag.id">
        <text>{{ tag.emoji }}</text>
        <text>{{ tag.name }}</text>
      </view>
    </view>

    <KeyBoard :onSubmit="onSubmit" v-model:amount="amount" />
  </view>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar/index.vue'
import KeyBoard from '../../components/KeyBoard/index.vue'

const back = () => {
  uni.navigateBack()
}

const isEdit = ref(false)

const current = ref<number>(0)
const tabChange = (e: any) => {}

const addEmoji = () => {
  uni.navigateTo({ url: '/pages/addEmoji/index' })
}

const tagList = ref<any[]>([])
const getList = () => {
  tagList.value = [
    { name: '呵呵', emoji: '😁', id: 0 },
    { name: 'test', emoji: '😁', id: 1 },
    { name: 'test2', emoji: '😁', id: 2 },
    { name: 'test3', emoji: '😁', id: 3 },
    { name: 'test4', emoji: '😁', id: 4 },
    { name: 'test5', emoji: '😁', id: 5 },
    { name: 'test6', emoji: '😁', id: 6 },
    { name: 'test7', emoji: '😁', id: 7 },
    { name: 'test8', emoji: '😁', id: 8 },
  ]
}
getList()

const amount = ref()
// const errors = reactive<FormErrors<typeof formData>>({ kind: [], tag_ids: [], amount: [], happen_at: [] })
const onSubmit = async () => {
  // Object.assign(errors, { kind: [], tag_ids: [], amount: [], happen_at: [] })
  // Object.assign(
  //   errors,
  //   validate(formData, [
  //     { key: 'kind', type: 'required', message: '类型必填' },
  //     { key: 'tag_ids', type: 'required', message: '标签必填' },
  //     { key: 'amount', type: 'required', message: '金额必填' },
  //     { key: 'amount', type: 'notEqual', value: 0, message: '金额不能为零' },
  //     { key: 'happen_at', type: 'required', message: '时间必填' },
  //   ]),
  // )
  // if (hasError(errors)) {
  //   Dialog.alert({
  //     title: '出错',
  //     message: Object.values(errors)
  //       .filter((i) => i.length > 0)
  //       .join('\n'),
  //   })
  //   return
  // }
  // TODO: 提交数据
  // TODO: 跳转到首页
}
</script>

<style lang="scss" scoped>
.navBar {
  width: fit-content;
  padding: 0 20rpx;
  height: 100%;
  display: flex;
  align-items: center;
}

.tagList {
  padding: 20rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20rpx;
  .addEmoji {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #4cd964;
  }
  &-item {
    padding: 0 10rpx;
    height: 80rpx;
    line-height: 80rpx;
    border-radius: 12rpx;
    border: 2rpx solid #eee;
    // box-shadow: 0 0 4rpx 2rpx skyblue;
  }
}
</style>
