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
    <view class="main">
      <view @click="login">login</view>
      <view @click="tryOut">try out</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { Auth } from "../../api/mangosteen/api";
import { WeChatSignInDto } from "../../api/mangosteen/typings.d";
import { TOKEN, USER_INFO } from "../../config/storage_key";

const login = () => {
  // 2022-05-10 :目前小程序开发者可以通过 wx.login 接口直接获取用户的 openId 与 unionId 信息，实现微信身份登录。对许多小程序使用场景，用户无需提供头像昵称。
  // 如有必要场景需收集用户头像昵称，可在个人中心或设置等页面让用户完善个人资料。
  uni.getUserProfile({
    desc: "Ghosteye welcome!",
    success: user => {
      const nickName = user.userInfo.nickName;
      const avatar = user.userInfo.avatarUrl;
      const gender = ["未知", "男", "女"][user.userInfo.gender!];
      uni.setStorageSync(USER_INFO, { nickName, avatar, gender });
      uni.login({
        success: async ({ code }) => {
          try {
            const data: WeChatSignInDto = { code, nickName, avatar, gender, identity_type: "微信" };
            const { token } = await Auth.weChatSignIn(data);
            uni.setStorageSync(TOKEN, token ?? "");
            uni.redirectTo({ url: "/pages/layout/index" });
            console.log("result", token);
          } catch (error) {
            console.log("error", error);
          }
        },
      });
    },
    fail: err => {
      console.log("getUserProfile fail", err);
    },
  });
};

/** admin 公共测试账号 */
const tryOut = async () => {
  const { token } = await Auth.emailSignIn({
    identity_type: "邮箱",
    identifier: "admin@Ghosteye.com",
    credential: "123456",
  });
  uni.setStorageSync(TOKEN, token ?? "");
  uni.redirectTo({ url: "/pages/index/index" });
};
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;
  transform: translate(-50%, -50%);
  > view {
    height: 80rpx;
    line-height: 80rpx;
    color: #ffffff;
    text-align: center;
    border: 2rpx dashed;
    border-radius: 8rpx;
    &:nth-child(1) {
      margin-bottom: 20rpx;
    }
  }
}
.login {
  width: 100vw;
  height: 100vh;

  // background: #000;
  // background: #1c1f24;
  background: #111111;
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
    background: linear-gradient(-45deg, #5f91ff, rgb(255 255 255 / 0%));
    filter: drop-shadow(0 0 4rpx #ffffff);
    border-radius: 2rpx;
    animation: tail 3s ease-in-out infinite, shooting 3s ease-in-out infinite;
    &:nth-child(1) {
      top: 30%;
      left: -30%;
      filter: drop-shadow(0 0 2rpx #ffffff);
    }
    &:nth-child(2),
    &:nth-child(6) {
      top: 70%;
      left: 20%;
      filter: drop-shadow(0 0 10rpx #ffffff);
      animation-duration: 4s;
      animation-delay: 8s;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 4rpx;
        content: "";
        background: linear-gradient(-45deg, #ffffff, rgb(255 255 255 / 0%));
        filter: drop-shadow(0 0 10rpx #ffffff);
        border-radius: 10rpx;
      }
    }
    &:nth-child(3) {
      top: 40%;
      left: -15%;
      animation-duration: 6s;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      top: 50%;
      left: 10%;
      filter: drop-shadow(0 0 8rpx #ffffff);
      animation-duration: 7s;
      animation-delay: 2s;
    }
    &:nth-child(5) {
      top: 10%;
      left: 10%;
      animation-duration: 5s;
      animation-delay: 6s;
    }
  }
}
.bg {
  > view:nth-child(1) {
    width: 2rpx;
    height: 2rpx;
    border-radius: 2rpx;
    box-shadow: -110px 10vh #ffffff, -90px 20vh #ffffff, -200px 30vh #ffffff, 0 30vh #ffffff, -100px 40vh #ffffff, 0 45vh #ffffff,
      300px 85vh #ffffff, 100px 80vh #ffffff, 400px 70vh #ffffff, 200px 60vh #ffffff, 400px 50vh #ffffff, 200px 38vh #ffffff,
      -210px 10vh #ffffff, -190px 20vh #ffffff, -400px 30vh #ffffff, -100px 30vh #ffffff, -300px 40vh #ffffff, -90px 45vh #ffffff,
      -300px 85vh #ffffff, -200px 80vh #ffffff, -400px 70vh #ffffff, -700px 60vh #ffffff, -400px 50vh #ffffff, -300px 38vh #ffffff;
    animation: shooting 80s linear infinite;
  }
  > view:nth-child(2) {
    width: 4rpx;
    height: 4rpx;
    border-radius: 4rpx;
    box-shadow: 100px 70vh #ffffff, 200px 80vh #ffffff, 400px 60vh #ffffff, 300px 90vh #ffffff, 200px 60vh #ffffff,
      100px 50vh #ffffff, -120px 40vh #ffffff, 100px 30vh #ffffff, -180px 70vh #ffffff, -200px 81vh #ffffff, -400px 63vh #ffffff,
      -300px 88vh #ffffff, -200px 63vh #ffffff, -100px 55vh #ffffff, -220px 42vh #ffffff, -100px 33vh #ffffff;
    animation: shooting 100s linear infinite;
  }
  > view:nth-child(3) {
    width: 6rpx;
    height: 6rpx;
    border-radius: 6rpx;
    box-shadow: 100px 60vh 2rpx #ffffff, 0 8vh 4rpx #ffffff, -50px 18vh 4rpx #ffffff, -130px 37vh 4rpx #ffffff,
      130px 36vh 4rpx #ffffff, 430px 76vh 6rpx #ffffff, -100px 62vh 2rpx #ffffff, -110px 9vh 4rpx #ffffff,
      -500px 28vh 4rpx #ffffff, -300px 38vh 2rpx #ffffff, -130px 17vh 4rpx #ffffff, -430px 77vh 4rpx #ffffff;
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
  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(-20vw);
  }
  100% {
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
  100% {
    width: 0;
  }
}
</style>
