<template>
    <div class="main">
      <img src="@/assets/404.png" alt />
      <p>您访问的页面已走失~</p>
      <a href="#" @click.prevent="$router.back()">返回上一页</a>
    </div>
  </template>

<script setup>
</script>

  <style lang="scss" scoped>
  .main {
    padding: 2em 4em;
    img {
      display: block;
      width: 80%;
      margin: 2em auto;
    }
    a {
      display: block;
      color: seagreen;
      padding-top: 1em;
      text-decoration-line: underline;
    }
  }
  </style>
