<template>
  <view class="login">
    <view class="meteor">
      <view class="star"></view>
      <view class="star"></view>
      <view class="star"></view>
      <view class="star"></view>
      <view class="star"></view>
      <view class="star"></view>
    </view>
    <view class="bg">
      <view></view>
      <view></view>
      <view></view>
    </view>
    <view class="submit" @click="login">login</view>
  </view>
</template>

<script setup lang="ts">
import { Auth } from '../../api/mangosteen/api'
import { IdentityType } from '../../api/mangosteen/entity'
import { TOKEN, USER_INFO } from '../../config/storage_key'

const login = () => {
  // 2022-05-10 :目前小程序开发者可以通过 wx.login 接口直接获取用户的 openId 与 unionId 信息，实现微信身份登录。对许多小程序使用场景，用户无需提供头像昵称。
  // 如有必要场景需收集用户头像昵称，可在个人中心或设置等页面让用户完善个人资料。
  uni.getUserProfile({
    desc: 'Ghosteye welcome!',
    success: (user) => {
      const nickName = user.userInfo.nickName
      const avatar = user.userInfo.avatarUrl
      const gender = ['未知', '男', '女'][user.userInfo.gender!]
      uni.setStorageSync(USER_INFO, { nickName, avatar, gender })
      uni.login({
        success: async ({ code }) => {
          try {
            const data = { code, nickName, avatar, gender, identity_type: IdentityType.微信 }
            const { token } = await Auth.weChatSignIn(data)
            uni.setStorageSync(TOKEN, token ?? '')
            uni.redirectTo({ url: '/pages/layout/index' })
            console.log('result', token)
          } catch (error) {
            console.log('error', error)
          }
        },
      })
    },
    fail: (err) => {
      console.log('getUserProfile fail', err)
    },
  })
}
</script>

<style lang="scss" scoped>
.submit {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  height: 80rpx;
  line-height: 80rpx;
  width: 40%;
  text-align: center;
  border: 2rpx dashed;
  border-radius: 8rpx;
  transform: translate(-50%, -50%);
}

.login {
  width: 100vw;
  height: 100vh;
  // background: #000;
  // background: #1c1f24;
  background: #111;
}
.bg,
.meteor {
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: rotate(45deg);
}
.meteor {
  .star {
    position: absolute;
    height: 2rpx;
    background: linear-gradient(-45deg, #5f91ff, rgba(255, 255, 255, 0));
    filter: drop-shadow(0 0 4rpx #fff);
    border-radius: 2rpx;
    animation: tail 3s ease-in-out infinite, shooting 3s ease-in-out infinite;
    &:nth-child(1) {
      left: -30%;
      top: 30%;
      filter: drop-shadow(0 0 2rpx #fff);
    }
    &:nth-child(2),
    &:nth-child(6) {
      left: 20%;
      top: 70%;
      animation-delay: 8s;
      animation-duration: 4s;
      filter: drop-shadow(0 0 10rpx #fff);
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 4rpx;
        content: '';
        border-radius: 10rpx;
        background: linear-gradient(-45deg, #fff, rgba(255, 255, 255, 0));
        filter: drop-shadow(0 0 10rpx #fff);
      }
    }
    &:nth-child(3) {
      left: -15%;
      top: 40%;
      animation-delay: 4s;
      animation-duration: 6s;
    }
    &:nth-child(4) {
      left: 10%;
      top: 50%;
      animation-delay: 2s;
      animation-duration: 7s;
      filter: drop-shadow(0 0 8rpx #fff);
    }
    &:nth-child(5) {
      left: 10%;
      top: 10%;
      animation-delay: 6s;
      animation-duration: 5s;
    }
  }
}
.bg {
  > view:nth-child(1) {
    width: 2rpx;
    height: 2rpx;
    border-radius: 2rpx;
    box-shadow: -110px 10vh #fff, -90px 20vh #fff, -200px 30vh #fff, 0px 30vh #fff, -100px 40vh #fff, 0px 45vh #fff,
      300px 85vh #fff, 100px 80vh #fff, 400px 70vh #fff, 200px 60vh #fff, 400px 50vh #fff, 200px 38vh #fff,
      -210px 10vh #fff, -190px 20vh #fff, -400px 30vh #fff, -100px 30vh #fff, -300px 40vh #fff, -90px 45vh #fff,
      -300px 85vh #fff, -200px 80vh #fff, -400px 70vh #fff, -700px 60vh #fff, -400px 50vh #fff, -300px 38vh #fff;
    animation: shooting 80s linear infinite;
  }
  > view:nth-child(2) {
    width: 4rpx;
    height: 4rpx;
    border-radius: 4rpx;
    box-shadow: 100px 70vh #fff, 200px 80vh #fff, 400px 60vh #fff, 300px 90vh #fff, 200px 60vh #fff, 100px 50vh #fff,
      -120px 40vh #fff, 100px 30vh #fff, -180px 70vh #fff, -200px 81vh #fff, -400px 63vh #fff, -300px 88vh #fff,
      -200px 63vh #fff, -100px 55vh #fff, -220px 42vh #fff, -100px 33vh #fff;
    animation: shooting 100s linear infinite;
  }
  > view:nth-child(3) {
    width: 6rpx;
    height: 6rpx;
    border-radius: 6rpx;
    box-shadow: 100px 60vh 2rpx #fff, 0px 8vh 4rpx #fff, -50px 18vh 4rpx #fff, -130px 37vh 4rpx #fff,
      130px 36vh 4rpx #fff, 430px 76vh 6rpx #fff, -100px 62vh 2rpx #fff, -110px 9vh 4rpx #fff, -500px 28vh 4rpx #fff,
      -300px 38vh 2rpx #fff, -130px 17vh 4rpx #fff, -430px 77vh 4rpx #fff;
    animation: shooting 140s linear infinite;
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 80vw;
  }
  to {
    width: 0;
  }
}
@keyframes shooting {
  0% {
    transform: translateX(-20vw);
  }
  to {
    transform: translateX(140vw);
  }
}
// TODO: 伪元素+
@keyframes shining {
  0% {
    width: 0;
  }

  50% {
    width: 1.875rem;
  }

  to {
    width: 0;
  }
}
</style>
