<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入用户名" v-model="data.username" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" autocomplete="new-password"
        v-model="data.password" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="确认密码" type="password" v-model="data.ensurement" />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已有账号去登陆</div>
    <Toast ref="toast"/>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { post } from '../../utils/request'
import Toast from '../../components/Toast'

const router = useRouter()
const data = reactive({
  username: '',
  password: '',
  ensurement: ''
})

const toast = ref(null)

// 处理注册相关逻辑
const handleRegister = async () => {
  try {
    if (data.password !== data.ensurement) {
      toast.value.showToast('确认密码和密码不同')
      return
    }
    const result = await post('/api/user/register', {
      username: data.username,
      password: data.password
    })
    if (result?.errno === 0) {
      router.push({ name: 'Login' })
    } else {
      toast.value.showToast('注册失败')
    }
  } catch (e) {
    toast.value.showToast('请求失败')
  }
}

// 处理登陆跳转
const handleLoginClick = () => {
  router.push({ name: 'Login' })
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }

  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: .01rem solid rgba(0, 0, 0, 0.10);
    border-radius: .06rem;
    border-radius: .06rem;

    &__content {
      margin-top: .12rem;
      line-height: .22rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: $bgColor;
    font-size: .16rem;
    text-align: center;
  }

  &__register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
