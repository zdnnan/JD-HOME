<template>
    <div class="docker">
        <div class="docker">
            <div v-for="(item, index) in dockerList"
                :class="['docker__item', index === currentIndex && 'docker__item--active' ]" :key="item.icon">
                <router-link :to='item.to'>
                    <div class="iconfont" :class="item.icon" />
                    <div class="docker__title">{{ item.text }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['currentIndex'])
const dockerList = [
  { icon: 'icon-shouye', text: '首页', to: { name: 'Home' } },
  { icon: 'icon-gouwuche', text: '购物车', to: { name: 'CartList' } },
  { icon: 'icon-dingdan', text: '订单', to: { name: 'OrderList' } },
  { icon: 'icon-wode', text: '我的', to: { name: 'Profile' } }
]

</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';

.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;

    &__item {
        flex: 1;
        text-align: center;

        a {
            color: $content-fontColor;
            text-decoration: none;
        }

        .iconfont {
            margin: .07rem 0 .02rem 0;
            font-size: .18rem;
        }

        &--active {
            a {
                color: #1FA4FC;
            }
        }
    }

    &__title {
        font-size: .2rem;
        // 不同浏览器有最小字体 很多是12px  所以要显示比12px小的字体  可以利用transform的缩放功能
        transform: scale(.5, .5);
        transform-origin: center top;
    }
}</style>
