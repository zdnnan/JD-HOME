/**
 * @description User Model
 * @author zhouxn
 */

const mongoose = require('../db/db')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true, // 必须
        unique: true // 唯一，不重复
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true }) //时间戳

// 第一个参数 'user' 即自动对应到数据库 Collection
// 并且会默认用复数形式，即 users
const User = mongoose.model('user', UserSchema) //定义一个模型，名字叫User

module.exports = User
