/*
 * @Author: 孟闲闲 mock数据
 * @Date: 2018-12-26 17:25:01
 * @Last Modified by: mxx
 * @Last Modified time: 2018-12-29 14:43:21
 */

import Mock, { Random } from 'mockjs'
let getTabs = () => {
  let data = Mock.mock({
    'articles|2': [
      {
        'id|+1': 10,
        img_url: Random.image('100x50', '#50B347', '#FFF', 'TAB')
      }
    ]
  })
  return data
}

// 文章列表数据
let getArticles = (tabId = 1) => {
  let data = Mock.mock({
    'articles|10': [
      {
        'id|+1': 0,
        img: Random.image('200x100', '#f1f1f1', '#FFF', 'ARTICLE BANNER'),
        title: tabId + '@csentence(3, 10)'
      }
    ]
  })
  return data
}

// banners
let getBanners = () => {
  let data = Mock.mock({
    'banners|4': [
      {
        'id|+1': 3,
        img: Random.image('200x100', '#f1f1f1', '#FFF', 'SHOP BANNER'),
      }
    ]
  })
  return data
}


// 文章详情
let getDetail = (id) => {
  if (!id) return {}
  let data = Mock.mock({
    info: {
      img: Random.image('200x100', '#f1f1f1', '#FFF', 'SHOP BANNER'),
      author: Mock.mock('@cname'),
      title: id + Mock.mock('@ctitle(5)'),
      content: Mock.mock('@cparagraph()'),
      time: Random.datetime('yyyy-MM-dd A HH:mm:ss')
    }
  })
  return data
}

// tab数据
export {
  getTabs,
  getArticles,
  getBanners,
  getDetail
}
