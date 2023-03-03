const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// 跨域
const cors = require('koa2-cors')
// 登录
const session = require('koa-generic-session')

// 注册路由
const index = require('./routes/index')
const users = require('./routes/users')
const addressRouter = require('./routes/address')
const shopRouter = require('./routes/shop')
const orderRouter = require('./routes/order')

// error handler
onerror(app)

// 支持跨域
app.use(cors({
  origin: 'http://localhost:8080', // 支持跨域访问的域名
  credentials: true // 允许跨域带 cookie
}))

// session配置
// 对用户的标识进行加密
app.keys=['xmweijh@#67823hl']  // 用于加密，和 express 的 secret 一样
// 自动配置了cookie和session
app.use(session({
  key: 'jddj.sid',  //浏览器 cookie 的名字
  // 配置 cookie
  cookie: {
    path: '/',//cookie在根目录下都有效
    httpOnly: true,  // 只能通过后端修改cookie，不允许前端修改
    maxAge: 24 * 60 * 60 * 1000  //cookie过期时间24h
  } 
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addressRouter.routes(), addressRouter.allowedMethods())
app.use(shopRouter.routes(), shopRouter.allowedMethods())
app.use(orderRouter.routes(), orderRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
