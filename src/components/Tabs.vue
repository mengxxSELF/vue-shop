<template>
  <div>
    <div class='tabs'>
      <span  v-for="item in tabs" :key = "item.id" :class='{ active: showTabId == item.id }'  @click="changeTab(item.id)" >
        <img :src="item.img_url" >
      </span>
    </div>
    <articles v-on:willDelete='deleteId' v-for="(item, index) in articlesList" :key='index' v-bind='item' ></articles>
  </div>
</template>

<script>
import articles from './Articles'
import {getTabs, getArticles} from '../../Mock/index.js'
// console.log(getTabs, 'getTabs')
export default {
  name: 'tabs',
  data: () => {
    return {
      tabs: [],
      articlesList: [],
      showTabId: null
    }
  },
  components: {articles},
  created: function () {
    console.log(this.tabs)
  },
  mounted: function () {
    const {articles} = getTabs()
    const activeId = articles[0].id
    const { articles: articlesList } = getArticles(activeId)
    this.showTabId = activeId
    this.tabs = [...articles]
    this.articlesList = [...articlesList]
    // console.table(end.articles)
  },
  methods: {
    changeTab: function (tabid) {
      this.showTabId = tabid
      const { articles: articlesList } = getArticles(tabid)
      this.articlesList = [...articlesList]
    },
    // deleteId 删除文章
    deleteId: function (id) {
      // console.log('deleteId', id)
      this.articlesList = this.articlesList.filter((item) => ~~item.id !== ~~id)
    }
  }
}
</script>

<style scoped>
  .tabs {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  span {
    box-sizing: border-box;
    padding: 5px;
    width: 50%;
    opacity: 0.6;
  }
  span.active {
    opacity: 1;
    /* background: #fff; */
    /* color: #000; */
  }
  img {
    max-width: 100%;
    border-radius: 4px;
  }
</style>
