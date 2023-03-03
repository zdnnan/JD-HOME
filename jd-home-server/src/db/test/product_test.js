/**
 * @description 商品数据测试
 * @author zhouxn
 */

const { Product } = require('../../models/index')

!(async () => {
    // // 创建
    const p1 = new Product({
        shopId: '63f4a622322469d92345a727', // 沃尔玛
        name: '猕猴桃',
        imgUrl: '/images/product/kiwifruit.png',
        sales: 200, // 月售多少
        price: 19.9, // 当前价格
        oldPrice: 22.5, // 原价
        tabs: ['all', 'fruit']
    })
    p1.save()

    // 获取商品列表，根据 shopId
    // const pList = await Product.find({ shopId: '63f4a622322469d92345a724' })
    // const pList = await Product.find({
    //     shopId: '63f4a622322469d92345a724',
    //     tabs: {
    //         $in: 'all' // 匹配 tabs
    //     }
    // })
    // console.log('product list', pList)
})()
