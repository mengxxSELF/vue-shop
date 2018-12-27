/*
 * @Author: 孟闲闲 mock数据
 * @Date: 2018-12-26 17:25:01
 * @Last Modified by: mxx
 * @Last Modified time: 2018-12-27 15:45:33
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

// tab数据
export {
  getTabs,
  getArticles
}
