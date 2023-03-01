<template>
  <div class="products">
    <div class="products__title">
      {{ shopName }}
    </div>
    <div class="products__wrapper">
      <div class="products__list">
        <div v-for="item in currentList" :key="item._id" class="products__item">
          <img class="products__item__img" :src="'http://localhost:3000' + item.imgUrl" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__yen">&yen; </span>
                {{ item.price }} x {{ item.count }}
              </span>
              <span class="products__item__total">
                <span class="products__item__yen">&yen; </span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
        <div v-if="productNum>2" class="products__show" @click="showMore">
          共计{{productNum}}件/{{calculations.total}}份
          <span class="iconfont icon-fanhui" :class="showM? 'shrink': 'expand'"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
const showM = ref(false)
const route = useRoute()
const shopId = route.params.id
const { shopName, productList, calculations } = useCommonCartEffect(shopId)

const productNum = computed(() => {
  return Object.keys(productList.value).length
})

const showMore = () => {
  showM.value = !showM.value
}

const currentList = computed(() => {
  if (showM.value) return productList.value
  else return Object.fromEntries(Object.entries(productList.value).slice(0, 2))
})
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.products {
  margin: .16rem .18rem .1rem .18rem;
  background: $bgColor;

  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontColor;
  }

  &__wrapper {
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }

  &__list {
    background: $bgColor;
    padding-bottom: 0.16rem;
  }

  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      flex: 1;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontColor;
      @include ellipsis;
    }

    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }

    &__total {
      flex: 1;
      text-align: right;
      color: $dark-fontColor;
    }

    &__yen {
      font-size: .12rem;
    }
  }

  &__show {
    text-align: center;
    margin: 0 .16rem;
    height: 2em;
    line-height: 2em;
    font-size: .14rem;
    color: $light-fontColor;
    background: $search-bgColor;
     .expand::before {
      display: inline-block;
      font-size: .18rem;
      transform: rotate(-90deg);
     }
     .shrink::before {
      display: inline-block;
      font-size: .18rem;
      transform: rotate(90deg);
     }
  }
}</style>
