<template>
  <div class="top">
    <div class="top__header">
      <div class="iconfont top__header__back icon-fanhui" @click="handleBackClick"></div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div v-if="address" @click="handleAddressClick">
        <div class="top__receiver__address">
          {{address.city}}{{address.department}}{{address.houseNumber}}
        </div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__item">{{address.name}}</span>
          <span class="top__receiver__info__item">{{address.phone}}</span>
        </div>
        <div class="top__receiver__icon iconfont  icon-fanhui"></div>
      </div>
      <div v-else>
        <div class="top__receiver__address">暂无可用地址</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCommonAddressEffect from '@/effects/addressEffect'
import { useRouter, useRoute } from 'vue-router'
import useAddressEffect from './addressEffect'

const router = useRouter()
const route = useRoute()

const shopId = route.params.id
const handleBackClick = () => router.push(`/shop/${shopId}`)
const handleAddressClick = () => router.push(`/chooseAddressList/${shopId}`)
const { getAddressList } = useCommonAddressEffect()
getAddressList()

const address = useAddressEffect()

</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;

  &__header {
    position: relative;
    padding-top: .2rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;

    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }

  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    color: $content-fontColor;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      font-weight: bold;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      @include ellipsis;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__item {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: $medium-fontColor;
      }
    }
    &__icon {
      position: absolute;
      right: .16rem;
      top: 50%;
      font-size: .16rem;
      transform: translateY(-.08rem) rotate(180deg);
      color: $medium-fontColor;
    }
  }
}</style>
