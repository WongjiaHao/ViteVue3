<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-20 03:11:24
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 18:09:18
 * @FilePath: \Mall\src\views\Home\components\GoodsItem.vue
 * @Description: 
-->
<script setup>
import { defineProps } from 'vue';
defineProps({
  good: {
    type: Object,
    default: () => {return {}}
  }
})
</script>

<template>
  <RouterLink to="/" class="goods-item">
    <img :src="good.picture" alt="" />
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </RouterLink>
</template>


<style scoped lang="scss">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>