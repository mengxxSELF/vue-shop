<template>
  <div>
    <img :src="info.img" alt="">
    <h3> {{ info.title || 'null title'}} </h3>
    <p>{{ info.id  }}</p>
    <section>{{info.content}}</section>
    <el-button @click='goIndex' type="primary" plain>到首页</el-button>
  </div>
</template>

<script>
import { getDetail } from '../../Mock'
export default {
  name: 'detail',
  data: () => {
    return {
      info: {}
    }
  },
  mounted: function () {
    let id = this.$route.params.id || 10
    let {info} = getDetail(id)
    this.info = info
    // 根据文章ID获取文章详情信息
    // console.log(this.$route.params.title)
  },
  methods: {
    goIndex: function () {
      this.$router.go(-1)//跳转到上一次浏览的页面
        // this.$router.replace('/menu')//指定跳转的地址
        // this.$router.replace({name:'menuLink'})//指定跳转路由的名字下
        // this.$router.push('/menu')//通过push进行跳转
        // this.$router.push({name:'menuLink'})//通过push进行跳转路由的名字下
    }
  } 
}
</script>

<style scoped>
div{
    text-align: left;
}
  img {
    width: 100%;
  }
</style>

