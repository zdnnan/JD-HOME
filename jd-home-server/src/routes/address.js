const router = require('koa-router')()

const { SuccessModel, ErrorModel } = require('../res-model/index')
// 登录验证loginCheck
const loginCheck = require('../middleware/loginCheck')
const { getAddressList, getAddressById, createAddress, updateAddress } = require('../controller/address')

router.prefix('/api/user/address')

// 获取列表：先登陆验证，再进行下面的获取列表的功能
router.get('/', loginCheck, async function (ctx, next) {
    // 有登录验证，可以直接获取 session
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    // 获取列表
    const list = await getAddressList(username)

    ctx.body = new SuccessModel(list)
})

// 获取单个，根据 id
router.get('/:id', loginCheck, async function (ctx, next) {
    const id = ctx.params.id // 获取路由的动态参数
    const address = await getAddressById(id)
    ctx.body = new SuccessModel(address)
})

// 新建：loginCheck中间件用于登录验证
router.post('/', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    const data = ctx.request.body || {} // 前端传来的数据

    // 创建数据的时候，由于是第一次操作，所以很适合用try-catch做异常的捕获
    try {
        const newAddress = await createAddress(username, data)
        ctx.body = new SuccessModel(newAddress)
    } catch (ex) {
        console.error(ex)
        // 返回失败
        ctx.body = new ErrorModel(10004, `创建地址失败`)
    }
    
})

// 更新（注意这里的 method 是 patch ！！！）
router.patch('/:id', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    const id = ctx.params.id // 获取路由的动态参数
    const data = ctx.request.body || {} // 前端传来的数据
    const newAddress = await updateAddress(id, username, data)
    ctx.body = new SuccessModel(newAddress)
})

module.exports = router
