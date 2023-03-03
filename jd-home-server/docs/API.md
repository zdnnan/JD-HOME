# API（接口）设计

## 注册

### url  
`/api/user/register`

### method 
`post`

### request body

```js
{
    username: '12345678911',
    password: '123456789'
}
``` 

### response body

```js
{
    errno: 0,
    message: 'errno !== 0 的错误信息'
}
```

## 登录

### url  
`/api/user/login`

### method 
`post`

### request body

```js
{
    username: '12345678911',
    password: '123456789'
}
``` 

### response body

```js
{
    errno: 0,
    message: 'errno !== 0 的错误信息'
}
```

## 获取用户信息

### url  
`/api/user/info`

### method 
`get`

### request body

```js
无
``` 

### response body

```js
{
    errno: 0,
    data: {
        username: 'zhangsan'
    },
    message: 'errno !== 0 的错误信息'
}
```

## 创建收货地址

### url  
`/api/user/address`

### method 
`post`

### request body

```js
{
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18677778888'
}
``` 

### response body

```js
{
    errno: 0,
    data: {
        _id: '收货地址id',
        city: '北京',
        department: 'xx小区',
        houseNumber: '门牌号',
        name: '张三',
        phone: '18677778888',
        createdAt: Date,
        updatedAt: Date

    },
    message: 'errno !== 0 的错误信息'
}
```

## 获取收货地址

### url  
`/api/user/address`

### method 
`get`

### request body

```js
无
``` 

### response body

```js
{
    errno: 0,
    data: [{
        _id: '收货地址id',
        city: '北京',
        department: 'xx小区',
        houseNumber: '门牌号',
        name: '张三',
        phone: '18677778888',
    },{...},{...}],
    message: 'errno !== 0 的错误信息'
}
```


## 获取单个收货地址

### url  

`/api/user/address/:id` (`:id`是一个动态参数，服务端可获取具体的参数值)

示例：`/api/user/address/100` `/api/user/address/200`

### method 
`get`

### request body

```js
无
``` 

### response body

```js
{
    errno: 0,
    data: {
        _id: '收货地址id',
        city: '北京',
        department: 'xx小区',
        houseNumber: '门牌号',
        name: '张三',
        phone: '18677778888',

    },
    message: 'errno !== 0 的错误信息'
}
```

## 更新收货地址

### url  
`/api/user/address:id`

### method 
`patch`

### request body

```js
{
    _id: '收货地址id',
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18677778888',
}
``` 

### response body

```js
{
    errno: 0,
    message: 'errno !== 0 的错误信息'
}
```

## 附近（热门）商店

### url  
`/api/shop/hot-list`

### method 
`get`

### request body

```js
无
``` 

### response body

```js
{
    errno: 0,
    data: [
        {
            _id: '商店ID',
            name: '商店名',
            imgUrl: '商店图片',
            sales: 1000, // 月售
            expressLimit: 20, // 起送价格
            expressPrice: 5, // 配送费
            slogan: '满100-10'
        },
        {...}
    ],
    message: 'errno !== 0 的错误信息'
}
```

## 商店详情

### url  
`/api/shop/:id`

### method 
`get`

### request body

```js
无
``` 

### response body

```js
{
    errno: 0,
    data: {
        _id: '商店ID',
        name: '商店名'，
        imgUrl: '商店图片',
        sales: 1000, // 月售
        expressLimit: 20, // 起送价格
        expressPrice: 5, // 配送费
        slogan: '满100-10'
    },
    message: 'errno !== 0 的错误信息'
}
```


## 具体商店的商品列表

### url  
`/api/shop/:id/products`

### query
`tab=全部商品`
示例：`/api/shop/10/products?tab=全部商品`  `/api/shop/10/products?tab=seckill`
### method 
`get`

### request body

```js
无
``` 

### response body

```js
{
    errno: 0,
    data: [
         {
        _id: '商品ID',
        name: '商品名'，
        imgUrl: '商品图片',
        sales: 1000, // 月售
        price: 10.5, // 优惠价格
        oldPrice: 20// 原价
    },{...}
    ],
    message: 'errno !== 0 的错误信息'
}
```

## 创建订单

### url  
`/api/order`

### method 
`post`

### request body

```js
{
    addressID: '收货地址的id',
    shopId: '商店的id',
    shopName: '***',
    isCanceled: false, //订单是否被取消
    // 订单商品情况
    products: [
        {
            id: '商品id',
            num: 3 // 购买数量
        }
    ]
}
``` 

### response body

```js
{
    errno: 0,
    data: {
        _id: '订单id'
    }
    message: 'errno !== 0 的错误信息'
}
```


## 获取订单

### url  
`/api/order`

### method 
`get`

### request body

```js
无
``` 

### response body

```js
{
    errno: 0,
    data: [
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
        },
        {}
    ],
    message: 'errno !== 0 的错误信息'
}
```
