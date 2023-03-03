/**
 * @description user controller
 * @author zhouxn
 */

// 获取user模型，然后通过User.create()创建新用户
const { User } = require('../models/index')

/**
 * 登录
 * @param {String} username 用户名
 * @param {String} password 密码
 */

async function login(username, password) {
    // 获取用户信息
    const user = await User.findOne({ username, password })
    if (user != null) {
        // 登录成功
        return user
    }
    // 登录失败
    return false
}

/**
 * 注册新用户
 * @param {Object} userInfo 用户信息
 */

// 实现注册功能
async function register(userInfo = {}) {
    // 保存到数据库：创建新用户
    // 注意验证一下 username unique
    const newUser = await User.create(userInfo)
    return newUser
}

// 导出
module.exports = {
    login,
    register
}

