<script setup>
import { defineProps, ref, onMounted, reactive } from 'vue'
const HotGoods = ref([])
import { fetchHotGoods } from '@/apis/detail.js'
import { useRoute } from 'vue-router'
defineProps({
  title: String
})
const route = useRoute()
const reqData = reactive({
  id:route?.params?.id,
  type:1,//1为24小时 2为周热榜
  limit:3
})

onMounted(async () => {
  const res = await fetchHotGoods(reqData);
  HotGoods.value = res.result;
  console.log(res);
})
</script>

<template>
  <div class="goods-hot">
    <h3>{{title=='day'?'24小时榜单':'周榜单'}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in HotGoods" :key="item.id">
      <img v-img-lazy="item.picture" alt="" />
      <p class="name ellipsis">一双男鞋</p>
      <p class="desc ellipsis">一双好穿的男鞋</p>
      <p class="price">&yen;200.00</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
