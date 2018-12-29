<template>
  <div class="block">
    <el-carousel height='200px'>
      <el-carousel-item v-for="({img, id}, index) in banners" :key='index'>
        <router-link :to="{name:'detail', params:{id}}">
          <img :src="img" alt="">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {getBanners} from '../../Mock'
export default {
  name: 'banner',
  data: () => {
    return {
      banners: []
    }
  },
  mounted: function () {
    // 获取banners
    let {banners} = getBanners()
    // console.log(banners)
    this.banners = banners
  }

}
</script>

<style scoped>
.el-carousel__container{
  height: 200px;
}
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
a {
  display: block;
}
img {
  width: 100%;
}
</style>
