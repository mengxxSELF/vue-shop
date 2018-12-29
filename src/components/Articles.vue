<template>
  <div>
    <img :src="img" alt="">
    <p> {{ 'id' + id + ',' + title}} </p>
    <span @click="deleteAritcle(id)" > 删除 </span>
    <span> 置顶 </span>
    <!-- <router-link to='/detail/id/img'>detail</router-link> -->
    <router-link :to="{name:'detail',params:{id, title, img}}">detail</router-link>
  </div>
</template>

<script>
export default {
  name: 'articles',
  props: ['img', 'title', 'id'],
  data: () => {
    return {
      // img: this.img,
      // title: this.title
    }
  },
  methods: {
    deleteAritcle: function (id) {
      // console.log(id, 'id')
      this.$emit('willDelete', id)
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    font-size: 18px;
    text-align: left;
    margin: 10px 0 20px;
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
  span {
    background: rgb(99, 219, 235);
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    padding: 4px 10px;
    margin-right: 10px;
  }
</style>

