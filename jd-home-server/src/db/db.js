/**
 * @description mongoose 连接数据库
 * @author zhouxn
 */

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017' // 本地默认的 mongodb 服务地址
const dbName = 'marketDB' // 数据库名称

// 解决DeprecationWarning警告
mongoose.set('strictQuery', false);

// 开始连接
mongoose.connect(`${url}/${dbName}`)

// 连接对象
const db = mongoose.connection

// 捕捉错误
db.on('error', err => {
    console.error('mongoose connect error', err)
})

db.once('open', () => {
    // 用以测试数据库连接是否成功
    console.log('mongoose connect success')
})

/**
 * 注意：
 * 1. 此处一直保持连接状态即可，不用关闭
 * 2. 即 nodejs 和 mongodb 一直保持连接状态，而不是每次操作数据都重新连接，后者会耗费性能
 * 3. 虽然连接是异步的，但是不用等到连接成功再进行数据操作。mongoose 会帮你缓存这些操作，待连接成功之后再执行。
 */

module.exports = mongoose
