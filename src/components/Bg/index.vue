<script setup lang="ts">
// import { isDark } from "#imports";
import { computed, ref } from "vue";
const isDark = ref(true);
const color = computed(() => (isDark.value ? "#fff" : "#0d9488"));
</script>

<template>
  <div class="z--1 pf top-0 left-0 overflow-hidden h-screen w-screen">
    <div class="z--200 rounded-full absolute" un-children="z--200 rounded-full pa" un-children-after="content-none rounded-md">
      <div class="signup-bg-stars w-10px h-10px" un-after="w-1px h-1px" />
      <div class="signup-bg-stars-2 w-20px h-20px" un-after="w-2px h-2px" />
      <div class="signup-bg-stars-3 w-30px h-30px"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<style>
.signup-bg-stars {
  border-radius: 100%;
  box-shadow: 750px 740px 10px rgb(255 255 255 / 20%), 1350px 631px 10px v-bind(color), 56px 1452px 10px v-bind(color),
    554px 1842px 10px v-bind(color), 1977px 711px 10px v-bind(color), 1773px 515px 10px v-bind(color),
    1874px 323px 10px v-bind(color), 382px 762px 10px v-bind(color), 1327px 1856px 10px v-bind(color),
    921px 157px 10px v-bind(color), 1802px 703px 10px v-bind(color), 1612px 757px 10px v-bind(color),
    1758px 724px 10px v-bind(color), 1706px 307px 10px v-bind(color), 616px 487px 10px v-bind(color),
    702px 1618px 10px v-bind(color), 424px 1839px 10px v-bind(color), 648px 1417px 10px v-bind(color),
    1671px 319px 10px v-bind(color), 304px 750px 10px v-bind(color), 1140px 1473px 10px v-bind(color),
    572px 193px 10px v-bind(color), 1501px 1292px 10px v-bind(color), 119px 1214px 10px v-bind(color),
    1637px 1164px 10px v-bind(color), 1540px 1242px 10px v-bind(color), 1722px 1715px 10px v-bind(color),
    1691px 1010px 10px v-bind(color), 236px 433px 10px v-bind(color), 1336px 950px 10px v-bind(color),
    1168px 1193px 10px v-bind(color), 304px 855px 10px v-bind(color), 322px 1892px 10px v-bind(color),
    260px 231px 10px v-bind(color), 1984px 1336px 10px v-bind(color), 1630px 149px 10px v-bind(color),
    650px 1260px 10px v-bind(color), 1208px 1841px 10px v-bind(color), 1361px 628px 10px v-bind(color),
    261px 412px 10px v-bind(color), 1105px 869px 10px v-bind(color), 1207px 1819px 10px v-bind(color),
    1923px 323px 10px v-bind(color), 224px 1390px 10px v-bind(color), 1248px 540px 10px v-bind(color),
    1024px 1544px 10px v-bind(color), 986px 1703px 10px v-bind(color), 425px 1150px 10px v-bind(color),
    547px 1821px 10px v-bind(color), 1470px 1215px 10px v-bind(color), 1511px 1178px 10px v-bind(color),
    472px 1850px 10px v-bind(color), 1684px 1003px 10px v-bind(color), 1987px 1466px 10px v-bind(color),
    453px 1830px 10px v-bind(color), 482px 433px 10px v-bind(color), 835px 1784px 10px v-bind(color),
    1193px 958px 10px v-bind(color), 306px 88px 10px v-bind(color), 928px 1389px 10px v-bind(color),
    349px 1592px 10px v-bind(color), 1053px 1676px 10px v-bind(color), 1492px 513px 10px v-bind(color),
    1855px 1115px 10px v-bind(color), 93px 1316px 10px v-bind(color), 1244px 95px 10px v-bind(color),
    1429px 545px 10px v-bind(color), 1802px 1521px 10px v-bind(color), 479px 714px 10px v-bind(color),
    221px 785px 10px v-bind(color);
  animation: anim-star 100s linear infinite;
}
.signup-bg-stars::after {
  border-radius: 100%;
  box-shadow: 750px 740px 10px rgb(255 255 255 / 20%), 1350px 631px 10px v-bind(color), 56px 1452px 10px v-bind(color),
    554px 1842px 10px v-bind(color), 1977px 711px 10px v-bind(color), 1773px 515px 10px v-bind(color),
    1874px 323px 10px v-bind(color), 382px 762px 10px v-bind(color), 1327px 1856px 10px v-bind(color),
    921px 157px 10px v-bind(color), 1802px 703px 10px v-bind(color), 1612px 757px 10px v-bind(color),
    1758px 724px 10px v-bind(color), 1706px 307px 10px v-bind(color), 616px 487px 10px v-bind(color),
    702px 1618px 10px v-bind(color), 424px 1839px 10px v-bind(color), 648px 1417px 10px v-bind(color),
    1671px 319px 10px v-bind(color), 304px 750px 10px v-bind(color), 1140px 1473px 10px v-bind(color),
    572px 193px 10px v-bind(color), 1501px 1292px 10px v-bind(color), 119px 1214px 10px v-bind(color),
    1637px 1164px 10px v-bind(color), 1540px 1242px 10px v-bind(color), 1722px 1715px 10px v-bind(color),
    1691px 1010px 10px v-bind(color), 236px 433px 10px v-bind(color), 1336px 950px 10px v-bind(color),
    1168px 1193px 10px v-bind(color), 304px 855px 10px v-bind(color), 322px 1892px 10px v-bind(color),
    260px 231px 10px v-bind(color), 1984px 1336px 10px v-bind(color), 1630px 149px 10px v-bind(color),
    650px 1260px 10px v-bind(color), 1208px 1841px 10px v-bind(color), 1361px 628px 10px v-bind(color),
    261px 412px 10px v-bind(color), 1105px 869px 10px v-bind(color), 1207px 1819px 10px v-bind(color),
    1923px 323px 10px v-bind(color), 224px 1390px 10px v-bind(color), 1248px 540px 10px v-bind(color),
    1024px 1544px 10px v-bind(color), 986px 1703px 10px v-bind(color), 425px 1150px 10px v-bind(color),
    547px 1821px 10px v-bind(color), 1470px 1215px 10px v-bind(color), 1511px 1178px 10px v-bind(color),
    472px 1850px 10px v-bind(color), 1684px 1003px 10px v-bind(color), 1987px 1466px 10px v-bind(color),
    453px 1830px 10px v-bind(color), 482px 433px 10px v-bind(color), 835px 1784px 10px v-bind(color),
    1193px 958px 10px v-bind(color), 306px 88px 10px v-bind(color), 928px 1389px 10px v-bind(color),
    349px 1592px 10px v-bind(color), 1053px 1676px 10px v-bind(color), 1492px 513px 10px v-bind(color),
    1855px 1115px 10px v-bind(color), 93px 1316px 10px v-bind(color), 1244px 95px 10px v-bind(color),
    1429px 545px 10px v-bind(color), 1802px 1521px 10px v-bind(color), 479px 714px 10px v-bind(color),
    221px 785px 10px v-bind(color);
  opacity: 0.7;
}
.signup-bg-stars-2 {
  border-radius: 100%;
  box-shadow: 18px 249px 10px rgb(255 255 255 / 20%), 1010px 1194px 10px v-bind(color), 1566px 862px 10px v-bind(color),
    1522px 47px 10px v-bind(color), 1268px 1429px 10px v-bind(color), 685px 239px 10px v-bind(color),
    511px 1827px 10px v-bind(color), 1862px 1202px 10px v-bind(color), 1869px 491px 10px v-bind(color),
    912px 344px 10px v-bind(color), 11px 208px 10px v-bind(color), 1694px 572px 10px v-bind(color), 779px 662px 10px v-bind(color),
    1430px 812px 10px v-bind(color), 365px 1526px 10px v-bind(color), 185px 823px 10px v-bind(color),
    1954px 1745px 10px v-bind(color), 445px 1728px 10px v-bind(color), 826px 1711px 10px v-bind(color),
    1703px 1366px 10px v-bind(color);
  animation: anim-star 150s linear infinite;
}
.signup-bg-stars-2::after {
  box-shadow: 18px 249px 10px rgb(255 255 255 / 20%), 1010px 1194px 10px v-bind(color), 1566px 862px 10px v-bind(color),
    1522px 47px 10px v-bind(color), 1268px 1429px 10px v-bind(color), 685px 239px 10px v-bind(color),
    511px 1827px 10px v-bind(color), 1862px 1202px 10px v-bind(color), 1869px 491px 10px v-bind(color),
    912px 344px 10px v-bind(color), 11px 208px 10px v-bind(color), 1694px 572px 10px v-bind(color), 779px 662px 10px v-bind(color),
    1430px 812px 10px v-bind(color), 365px 1526px 10px v-bind(color), 185px 823px 10px v-bind(color),
    1954px 1745px 10px v-bind(color), 445px 1728px 10px v-bind(color), 826px 1711px 10px v-bind(color),
    1703px 1366px 10px v-bind(color);
}
.signup-bg-stars-3 {
  /* border-radius: 100%; */
  box-shadow: 588px 305px 10px rgb(255 255 255 / 20%), 1968px 1036px 10px v-bind(color), 970px 941px 10px v-bind(color),
    655px 814px 10px v-bind(color), 376px 480px 10px v-bind(color), 257px 519px 10px v-bind(color),
    1417px 545px 10px v-bind(color), 872px 281px 10px v-bind(color), 724px 937px 10px v-bind(color),
    304px 1811px 10px v-bind(color);
  animation: anim-star 200s linear infinite;
}

/*
  .signup-bg-stars-3::after {
    content: "";
    box-shadow: 588px 305px 10px rgba(255, 255, 255, 1), 1968px 1036px 10px v-bind(color),
      970px 941px 10px v-bind(color), 655px 814px 10px v-bind(color),
      376px 480px 10px v-bind(color), 257px 519px 10px v-bind(color),
      1417px 545px 10px v-bind(color), 872px 281px 10px v-bind(color),
      724px 937px 10px v-bind(color), 304px 1811px 10px v-bind(color);
  } */

/* .box {
    width: 30px;
    height: 30px;
    box-shadow: 90px 90px 10px #242424,  190px 90px 10px white,120px 160px 10px white, 376px 480px 10px 10px v-bind(color), 257px 519px 10px 10px v-bind(color),
      1417px 545px 10px 10px v-bind(color), 872px 281px 10px 10px v-bind(color),
      724px 937px 10px 10px v-bind(color), 304px 1811px 10px 10px v-bind(color);;
    border-radius: 30px;
    animation: animStar 100s linear infinite;
  } */

@keyframes anim-star {
  from {
    transform: translateY(-2000px);
  }
  to {
    transform: translateY(0);
  }
}
.h-screen {
  height: 100vh;
}
.w-screen {
  width: 100vw;
}
.rounded-full {
  width: 100%;
  height: 100%;
}
</style>
