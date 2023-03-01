<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont icon-fanhui" @click="handleBackClick">
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont icon-sousuo"></span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="data.item" :hideBorder="true" v-show="data.item.imgUrl" />
    <Content :shopName="data.item.name" />
    <Cart />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content'
import Cart from './Cart'

// 获取当前商铺信息
const route = useRoute()
const data = reactive({ item: {} })
const getItemData = async () => {
  const result = await get(`/api/shop/${route.params.id}`)
  if (result?.errno === 0 && result?.data) {
    data.item = result.data
  }
}

// 点击回退逻辑
const router = useRouter()
const handleBackClick = () => {
  router.push({ name: 'Home' })
}

getItemData()
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  padding: 0 .18rem;
}

.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;

  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }

  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;

    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }

    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontColor;

      &::placeholder {
        color:$content-notice-fontcolor;
      }
    }
  }
}
</style>
