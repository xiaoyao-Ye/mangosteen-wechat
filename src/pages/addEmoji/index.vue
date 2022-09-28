<template>
  <view class="page">
    <NavBar :show-height="true">
      <view class="navBar" @click="back">
        <uni-icons type="back" size="24"></uni-icons>
        <text>{{ isEdit ? '编辑标签' : '新增标签' }}</text>
      </view>
    </NavBar>

    <view class="tag">
      <view class="tag-icon" @click="showPopup">{{ selectedEmoji }}</view>
      <input class="tag-name" v-model="inputValue" @input="input" focus placeholder="请输入标签名称" />
    </view>

    <uni-popup ref="popup" type="bottom" background="#fff" @maskClick="popup.close()">
      <view class="popup">
        <view class="emoji">
          <view v-for="item in emojiList" :key="item[0]">
            <view class="emoji-title">{{ item[0] }}</view>
            <view class="emoji-rows">
              <view v-for="emoji in item[1]" :key="emoji" @click="selectEmoji(emoji)">{{ emoji }}</view>
            </view>
          </view>
        </view>
      </view>
    </uni-popup>

    <view class="footer">
      <view class="footer-top">
        <button type="warn" plain @click="onSubmit">确认</button>
      </view>
      <view class="footer-bottom" v-if="isEdit">
        <!-- <button type="primary" size="mini" plain>新建</button>
        <button type="primary" size="mini">编辑</button> -->
        <button size="mini">删除</button>
        <button size="mini">删除(移除对应记录)</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { emojiList } from '../../utils/emoji'
import NavBar from '../../components/NavBar/index.vue'
import { Tags } from '../../api/mangosteen/api'

const back = () => {
  uni.navigateBack()
}

const isEdit = ref(false)

const popup = ref()
const showPopup = () => {
  popup.value.open()
}

const selectedEmoji = ref<string>('😁')
const selectEmoji = (emoji: string) => {
  console.log(emoji)
  selectedEmoji.value = emoji
}

const input = (e: any) => {
  inputValue.value = e.detail.value.trim()
}

const inputValue = ref('')

const onSubmit = async () => {
  if (!inputValue.value) {
    uni.showToast({ title: '请输入标签名称', icon: 'none' })
    return
  }
  await Tags.createTag({ name: inputValue.value, sign: selectedEmoji.value })
  uni.showToast({ title: '添加成功', icon: 'none' })
  back()
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
}

.navBar {
  width: fit-content;
  padding: 0 20rpx;
  height: 100%;
  display: flex;
  align-items: center;
}

.tag {
  padding: 20rpx;
  display: flex;
  align-items: center;
  &-icon {
    margin-right: 20rpx;
    width: 80rpx;
    height: 80rpx;
    font-size: 58rpx;
    // border: 2rpx dashed;
    border-radius: 8rpx;
  }
  &-name {
    flex: 1;
    padding: 10rpx 20rpx;
    font-size: 30rpx !important;
    transition: box-shadow 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 8rpx;
    color: #606266;
    // border: 2rpx solid skyblue;
    box-shadow: 0 0 0 1px #dcdfe6;
  }
}

.popup {
  height: 70vh;
  overflow-y: scroll;
}

.emoji {
  background-color: #fff;
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

// button {
//   margin-top: 30rpx;
// }

.footer {
  &-top {
    padding: 20rpx;
    button {
      border: 2rpx solid #409eff;
      color: #409eff;
      height: 80rpx;
      line-height: 80rpx;
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    button {
      flex: 1;
      margin: 20rpx;
      color: #fff;
      background-color: #f56c6c;
    }
  }
}
</style>
