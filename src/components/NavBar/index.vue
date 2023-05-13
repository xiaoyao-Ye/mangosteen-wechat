<template>
  <view :style="{ height: showHeight ? `calc(${paddingTop} + ${height} + ${paddingBottom})` : '0' }">
    <view
      class="navBar"
      :style="{
        paddingTop,
        background,
        paddingRight: excludeCapsule ? paddingRight : 0,
        paddingBottom,
        backgroundSize: '100%',
      }">
      <view class="navbar" :style="{ height }">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script name="NavBar" setup lang="ts">
import { EQUIPMENT } from "../../config/storage_key";

interface Props {
  background?: string;
  showHeight?: boolean;
  excludeCapsule?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  background: "#FFFFFF",
  showHeight: false,
  excludeCapsule: false,
});

const statusBarH = ref(20);
const navBarH = ref(60);
const capsuleInfo = ref({ right: 0, width: 0 });

onBeforeMount(() => {
  const { statusBarHeight, navBarHeight, capsule } = uni.getStorageSync(EQUIPMENT) || {};
  navBarH.value = navBarHeight;
  statusBarH.value = statusBarHeight;
  capsuleInfo.value = capsule;
});

const paddingTop = computed(() => statusBarH.value + "px");
const height = computed(() => navBarH.value + "px");
const paddingRight = computed(() => `calc((100vw - ${capsuleInfo.value.right}px) * 2 + ${capsuleInfo.value.width}px)`);
const paddingBottom = computed(() => "4px");
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
  width: 100%;
  background-size: 100%;
  transition: all 0.15s ease-out;
}
</style>
