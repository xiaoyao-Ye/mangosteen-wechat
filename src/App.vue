<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { EQUIPMENT } from './config/storage_key'
onLaunch(() => {
  console.log('App Launch')
  const { statusBarHeight = 20 } = uni.getSystemInfoSync()
  const capsule = uni.getMenuButtonBoundingClientRect()
  const { height, top } = capsule
  const navBarHeight = (top - statusBarHeight) * 2 + height
  const equipment = { statusBarHeight, navBarHeight, capsule }
  uni.setStorageSync(EQUIPMENT, equipment)
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss"></style>
