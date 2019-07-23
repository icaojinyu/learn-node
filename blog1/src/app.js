let qs = require('querystring')
let handleBlogRouter = require('./router/blog')
let handleUserRouter = require('./router/user')


// 提供业务服务,系统基本设置的聚集地
function serverHandle(req, res) {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')

  // 获取path
  let url = req.url
  req.path = url.split('?')[0]

  // 解析query
  req.query = qs.parse(url.split('?')[1])

  // let resData = {
  //   name:'cjy',
  //   age:17
  // }
  // res.end(JSON.stringify(resData))

  // 处理blog路由
  let blogData = handleBlogRouter(req, res)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }

  // 处理user路由
  let userData = handleUserRouter(req, res)
  if (userData) {
    res.end(JSON.stringify(userData))
    return
  }

  // 未命中路由，返回404
  res.writeHead(404, {'Content-type': 'text/plain'})
  res.write('404 not found\n')
  res.end()
}

module.exports = serverHandle