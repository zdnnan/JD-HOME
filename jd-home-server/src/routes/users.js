const router = require('koa-router')()
// 引用登录注册功能
const { register, login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/user')

router.post('/register', async function(ctx, next) {
  const userInfo = ctx.request.body
  try {
    // 用register新建用户
    await register(userInfo)
    // 返回成功
    ctx.body = new SuccessModel()
  } catch (ex) {
    console.error(ex)
    // 返回失败
    ctx.body = new ErrorModel(10001, `注册失败 - ${ex.message}`)
  }
})

router.post('/login', async function(ctx, next) {
  const { username, password } = ctx.request.body

  // 登录验证
  const res = await login(username, password)
  if (res) {
    // 验证成功，设置 session.
    ctx.session.userInfo = res
    // 返回成功
    ctx.body = new SuccessModel()
  } else {
    // 返回失败
    ctx.body = new ErrorModel(10002, `登录验证失败`)
  }
})

router.get('/info', loginCheck, async function(ctx, next) {
  // 加了 loginChenck 之后，因为保证了必须登录
  const session = ctx.session
  ctx.body = new SuccessModel(session.userInfo)
})

module.exports = router
