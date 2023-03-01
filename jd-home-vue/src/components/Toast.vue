<template>
  <div v-if="toastData.show" class="toast">{{ toastData.toastMessage }}</div>
</template>

<script setup>
import { reactive } from 'vue'

const toastData = reactive({
  show: false,
  toastMessage: ''
})

const showToast = (message) => {
  console.log(message)
  toastData.show = true
  toastData.toastMessage = message
  setTimeout(() => {
    toastData.show = false
    toastData.toastMessage = ''
  }, 2000)
}

defineExpose({
  showToast
})

</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: $bgColor;
  z-index: 10;
}
</style>
