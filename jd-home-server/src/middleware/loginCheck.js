/**
 * @description 登录中间件
 * @author zhouxn
 */


module.exports = async (ctx, next) => {
    const session = ctx.session
    if (session && session.userInfo) {
        // 登录验证成功
        await next()
        return
    }
    // 登录失败
    ctx.body = {
        errno: -1,
        message: '登录验证失败'+ session
    }
}
