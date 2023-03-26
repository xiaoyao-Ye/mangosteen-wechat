<template>
  <view class="page">
    <NavBar :show-height="true">
      <view class="navBar" @click="back">
        <uni-icons type="back" size="24"></uni-icons>
        <text>{{ isEdit ? '编辑标签' : '新增标签' }}</text>
      </view>
    </NavBar>

    <view class="tag">
      <view class="tag-icon" @click="showPopup">{{ tagSign }}</view>
      <input class="tag-name" v-model="tagName" @input="input" focus placeholder="请输入标签名称" />
    </view>

    <uni-popup ref="popup" type="bottom" background="blue" @maskClick="popup.close()">
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
        <button size="small" @click="onDelete">删除标签和记账</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { emojiList } from '../../utils/emoji'
import NavBar from '../../components/NavBar/index.vue'
import { Tags } from '../../api/mangosteen/api'
import { TagDto, TagItemsVo, Category } from '../../api/mangosteen/entity'

const isEdit = ref(false)

const tagId = ref<number>(0)
const category = ref<Category>()
const tagName = ref<string>('')
const tagSign = ref<string>('😁')

onLoad((tag: TagItemsVo) => {
  category.value = tag.category
  if (tag.id) {
    isEdit.value = true
    tagName.value = tag.name!
    tagSign.value = tag.sign!
    tagId.value = tag.id
  }
})

const popup = ref()
const showPopup = () => popup.value.open()
const selectEmoji = (emoji: string) => {
  console.log(emoji)
  tagSign.value = emoji
}

const input = (e: any) => {
  tagName.value = e.detail.value.trim()
}

const onSubmit = async () => {
  if (!tagName.value) return uni.showToast({ title: '请输入标签名称', icon: 'none' })
  const data: TagDto = { name: tagName.value, sign: tagSign.value, category: category.value }
  console.log({ data })
  isEdit.value ? await Tags.updateTag({ id: tagId.value }, data) : await Tags.createTag(data)
  // TODO: 成功后把数据传回上一页, 手动更新, 可以减少n次请求
  uni.showToast({ title: isEdit.value ? '编辑成功' : '添加成功', icon: 'none' })
  back()
}

const onDelete = async () => {
  uni.showModal({
    title: '提示',
    content: '确定删除该标签和记账吗?',
    success: async (res) => {
      if (!res.confirm) return
      await Tags.deleteTag({ id: tagId.value })
      uni.showToast({ title: '删除成功', icon: 'none' })
      back()
    },
  })
}

const back = () => {
  uni.navigateBack()
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
    // border: 2rpx solid #ccc;
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
