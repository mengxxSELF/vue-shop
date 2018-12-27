// let request = require('request')
let urllib = require('urllib')

const url = 'http://www.bldimg.com/userfiles/015/394/362/20773!Head.jpg'

urllib.request(url, (err, data, res) => {
  // console.log(data)
  console.log(res.statusCode)
  // console.log(res.headers)
})
