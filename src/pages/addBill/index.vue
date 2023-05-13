<template>
  <view>
    <NavBar :show-height="true" background="#fff">
      <view class="navBar" @click="back">
        <uni-icons type="back" size="24"></uni-icons>
        <text>{{ isEdit ? "编辑记录" : "新增记录" }}</text>
      </view>
    </NavBar>

    <uni-segmented-control
      :current="current"
      :values="tabs"
      @click-item="tabChange"
      styleType="text"
      activeColor="#ccc"></uni-segmented-control>

    <view class="tagList">
      <view class="addEmoji tagList-item" @click="addEmoji">
        <uni-icons type="plusempty" size="24" color="#ccc"></uni-icons>
        <text>{{ tabs[current] }}标签</text>
      </view>
      <view
        :class="['tagList-item', selectedId === tag.id && 'tagList-active']"
        v-for="tag in activeList"
        :key="tag.id"
        @click="selectTag(tag)"
        @longtap="editTag(tag)">
        <text>{{ tag.sign }}</text>
        <text>{{ tag.name }}</text>
      </view>
    </view>

    <KeyBoard :onSubmit="onSubmit" v-model:amount="amount" v-model:dateTime="dateTime" />
  </view>
</template>

<script setup lang="ts">
import NavBar from "../../components/NavBar/index.vue";
import KeyBoard from "../../components/KeyBoard/index.vue";
import { Bill, Tags } from "../../api/mangosteen/api";
// import { User } from '../../api/mangosteen/api'
import { TagItemsVo } from "../../api/mangosteen/typings.d";
import { formatDate } from "../../utils/dayjs";

const back = () => {
  uni.navigateBack();
};

const isEdit = ref(false);

const tabs = ["支出", "收入"] as const;
const current = ref<number>(0);
const tabChange = (e: any) => {
  current.value = e.currentIndex;
  selectedId.value = undefined;
};

const addEmoji = () => {
  uni.navigateTo({ url: `/pages/addEmoji/index?category=${tabs[current.value]}` });
};

const tagList = ref<TagItemsVo[]>([]);
const activeList = ref<TagItemsVo[]>([]);
watchEffect(() => {
  activeList.value = tagList.value.filter(item => item.category === tabs[current.value]);
  console.log("activeList", activeList.value);
});
const selectedId = ref<number>();
const selectTag = (tag: TagItemsVo) => {
  selectedId.value = tag.id;
};
const editTag = (tag: TagItemsVo) => {
  const { id, name, sign } = tag;
  uni.navigateTo({ url: `/pages/addEmoji/index?category=${tabs[current.value]}&id=${id}&name=${name}&sign=${sign}` });
};

const getList = async () => {
  const { items } = await Tags.getAllTags();
  tagList.value = items ?? [];
};

onShow(() => {
  console.log("onShow..");
  getList();
});

const dateTime = ref(formatDate());
const amount = ref(0);
// const errors = reactive<FormErrors<typeof formData>>({ kind: [], tag_ids: [], amount: [], happen_at: [] })
const onSubmit = async () => {
  if (!selectedId.value) return uni.showToast({ title: "请选择标签", icon: "none" });
  if (!amount.value) return uni.showToast({ title: "输入金额", icon: "none" });
  console.log(amount.value);
  console.log(selectedId.value);
  console.log(dateTime.value);
  await Bill.createBill({
    amount: amount.value,
    tagId: selectedId.value,
    record_date: dateTime.value,
    category: tabs[current.value],
  });
  back();
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
};
</script>

<style lang="scss" scoped>
.navBar {
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 0 20rpx;
}
.tagList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20rpx;
  padding: 20rpx;
  .addEmoji {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: $primary-color;
  }
  &-item {
    height: 80rpx;
    padding: 0 10rpx;
    line-height: 80rpx;
    border: 2rpx solid #eeeeee;
    border-radius: 12rpx;

    // box-shadow: 0 0 4rpx 2rpx #ccc;
  }
  &-active {
    background-color: $primary-color;
  }
}
</style>
