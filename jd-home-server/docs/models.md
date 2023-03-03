# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户
```js
{
    username: '123456',
    password: '123456'
}
```

## 地址
```js
{
    username: '123456',   // 和用户关联
    city: '重庆',
    deparment: '小区',
    houseNumber: '门牌号',
    name: 'John',
    phone: '999'
}
```

## 商店
```js
{
    _id: '*****',
    name: '商店名', 
    imgUrl: '图片',
    sales: 1,
    expressLimit: 0,//起送价格
    expressPrice: 1,//配送单价
    slogan: '满减' //宣传语
}
```


## 商品
```js
{
    _id: '商品ID',
    shopId: '*****', // 与商店关联
    name: '商品名'，
    imgUrl: '商品图片',
    sales: 1000, // 月售
    price: 10.5, // 优惠价格
    oldPrice: 20// 原价
    tabs: ['', '']
}
```

## 订单
```js
{
    _id: '***',
    shopId: '商店ID',
    shopName: '沃尔玛'，
    isCanceled: false,

    address: {
    username: '123456',   
    city: '重庆',
    deparment: '小区',
    houseNumber: '门牌号',
    name: 'John',
    phone: '999'
    },

    products: [
        {
           product: {
            tabs: ['all', 'friut']
            shopId: '*****', 
            name: '商品名'，
            imgUrl: '商品图片',
            sales: 1000, // 月售
            price: 10.5, // 优惠价格
            oldPrice: 20// 原价
           },
           orderSales: 3
        },
        {
            ...
        }
    ]

}
```