/**
 * @description 商店数据测试
 * @author zhouxn
 */

const { Shop } = require('../../models/index')

// async命令函数，直接进行（立即执行函数）
!(async function () {
    // // 创建商店
    const s1 = new Shop({
        name: '沃尔玛',
        imgUrl: '/images/shop/wmt.jpeg',
        sales: 10000, // 月售多少
        expressLimit: 0, // 起售价格
        expressPrice: 5, // 基础运费
        slogan: 'VIP尊享满89元4元运费券（每月3张）', // 宣传标语
    })
    s1.save()

    // 创建商店
    const s2 = new Shop({
        name: '永辉超市',
        imgUrl: '/images/shop/yhcs.png',
        sales: 1500, // 月售多少
        expressLimit: 50, // 起售价格
        expressPrice: 5, // 基础运费
        slogan: '联合利华洗护满10减5', // 宣传标语
    })
    s2.save()

    // 获取商店列表
    const shopList = await Shop.find().sort({ _id: -1 }) // 逆序
    console.log('shop list', shopList)

    // 获取单个商店，根据 id
    const shop = await Shop.findById('63f4a622322469d92345a724')
    console.log('shop', shop)
})()
