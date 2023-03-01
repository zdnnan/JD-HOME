<template>
  <div class="wrapper">
    <div class="title">
      <div class="iconfont title__back icon-fanhui" @click="handleBackClick"></div>
      <div class="title__text">管理收货地址</div>
      <div class="title__add" @click="handleAddClick">新建</div>
    </div>
    <div class="myAddress">我的收获地址</div>
    <Address v-for="address in addressList" :key="address._id" :address="address"
      @click="() => handleUpdateClick(address._id)" />
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Address from '@/components/Address'
import useCommonAddressEffect from '@/effects/addressEffect'

const store = useStore()
const router = useRouter()
const { addressList } = toRefs(store.state)
const { getAddressList } = useCommonAddressEffect()
getAddressList(true)
const handleBackClick = () => { router.back() }
const handleAddClick = () => { router.push({ name: 'UpsertAddress' }) }
const handleUpdateClick = (addressId) => {
  router.push(`/upsertAddress/${addressId}`)
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: $light-content-bgColor;
}

.title {
  display: flex;
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontColor;
  text-align: center;

  &__back {
    width: .2rem;
    margin-left: .18rem;
    font-size: .2rem;
    color: #B6B6B6;
  }

  &__text {
    flex: 1;
    text-align: center;
  }

  &__add {
    margin-right: .2rem;
    font-size: .14rem;
  }
}

.myAddress {
  font-size: .14rem;
  color: $content-fontColor;
  padding: .16rem .16rem 0 .22rem;
}
</style>
