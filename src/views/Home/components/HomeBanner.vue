<!-- 首页banner轮播图 -->
 <!-- 使用element-plus的carousel组件 -->
<script setup>
import { storeToRefs } from 'pinia'
import { useBannerStore } from '@/stores/banner'
const { bannerList } = storeToRefs(useBannerStore())
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>