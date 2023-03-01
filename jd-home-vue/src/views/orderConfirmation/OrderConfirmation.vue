<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <Order />
  </div>
</template>

<script setup>
import TopArea from './TopArea'
import ProductList from './ProductList'
import Order from './Order'
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
