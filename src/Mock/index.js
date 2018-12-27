/*
 * @Author: 孟闲闲 mock数据
 * @Date: 2018-12-26 17:25:01
 * @Last Modified by: mxx
 * @Last Modified time: 2018-12-27 13:49:17
 */

import Mock, { Random } from 'mockjs'
// let data = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   'list|1-10': [{
//     // 属性 id 是一个自增数，起始值为 1，每次增 1
//     'id|+1': 1
//   }]
// })

// let data = Mock.mock('@EMAIL')

// console.log(data)

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
