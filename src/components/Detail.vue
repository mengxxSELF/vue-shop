<template>
  <div>
    <img :src="info.img" alt="">
    <h3> {{ info.title || 'null title'}} </h3>
    <p>{{ info.id  }}</p>
    <section>{{info.content}}</section>
    <el-button @click='goIndex' type="primary" plain>到首页</el-button>
    <!-- 添加一个文章评论 -->
    <input type="text" v-model="message" placeholder="请输入您的评论" />
    <el-button type="primary" @click='sendMsg' plain>发表评论</el-button>
    <ul>
      <li v-for='({name, msg}, key) in usermsg' :key="key" > {{name}} -- {{msg}} </li>
    </ul>
  </div>
</template>

<script>
import Mock from 'mockjs'
import { getDetail } from '../../Mock'
export default {
  name: 'detail',
  data () {
    return {
      message: '',
      info: {},
      usermsg: []
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
    },
    sendMsg () {
      // 发表评论
      let name = Mock.mock('@cname')
      let obj = {name, msg: this.message}
      this.usermsg.push(obj)
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
  input {
    display: block;
    border: 1px solid #ccc;
    width: 100%;
    height: 20px;
    margin: 10px auto;
  }
  input:focus, textarea:focus {
    outline: none;
  }
</style>
