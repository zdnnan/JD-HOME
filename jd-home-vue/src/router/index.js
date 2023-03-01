import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home')
},
{
  path: '/profile',
  name: 'Profile',
  component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/Profile')
},
{
  path: '/addressList',
  name: 'AddressList',
  component: () => import(/* webpackChunkName: "addressList" */ '@/views/addressList/AddressList')
},
{
  path: '/upsertAddress/:id?',
  name: 'UpsertAddress',
  component: () => import(/* webpackChunkName: "upsertAddress" */ '@/views/upsertAddress/UpsertAddress')
},
{
  path: '/chooseAddressList/:shopId',
  name: 'ChooseAddressList',
  component: () => import(/* webpackChunkName: "upsertAddress" */ '../views/chooseAddressList/ChooseAddressList')
},
{
  path: '/cartList',
  name: 'CartList',
  component: () => import(/* webpackChunkName: "cartList" */ '@/views/cartList/CartList')
}, {
  path: '/orderConfirmation/:id/:addressId?',
  name: 'OrderConfirmation',
  component: () => import(/* webpackChunkName: "orderConfirmation" */ '@/views/orderConfirmation/OrderConfirmation')
}, {
  path: '/orderList',
  name: 'OrderList',
  component: () => import(/* webpackChunkName: "orderList" */ '@/views/orderList/OrderList')
}, {
  path: '/shop/:id',
  name: 'Shop',
  component: () => import(/* webpackChunkName: "shop" */ '@/views/shop/Shop')
}, {
  path: '/register',
  name: 'Register',
  component: () => import(/* webpackChunkName: "register" */ '@/views/register/Register'),
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login'),
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/404',
  name: '404',
  component: () => import('@/views/404.vue')
},
{
  path: '/:catchAll(.*)',
  redirect: '/404'
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
