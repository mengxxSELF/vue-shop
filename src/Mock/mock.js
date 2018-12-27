/*
 * @Author: 孟闲闲 mock数据
 * @Date: 2018-12-26 17:25:01
 * @Last Modified by: mxx
 * @Last Modified time: 2018-12-27 14:01:26
 */

let Mock = require('mockjs')

// let data = Mock.mock('@EMAIL')

// let data = Mock.mock({
//   'name|1-3': '中文测试',
//   'id|1-3': 18,
//   'users|2': {
//     name: 'tome',
//     age: 20,
//     habit: 'listen'
//   }
// })

Mock.Random.extend({
  constellations: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
  constellationA: function (date) {
    return this.pick(this.constellations)
  }
})
let data = Mock.Random.constellationA()
// => "水瓶座"

console.log(data)
