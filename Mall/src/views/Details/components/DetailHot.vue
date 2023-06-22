<script setup>
import { defineProps, ref, onBeforeMount, reactive } from 'vue'
const HotGoods = ref([])
import { fetchHotGoods } from '@/apis/detail.js'
import { useRoute } from 'vue-router'

const props = defineProps({
  title: String,
  limit:Number
})
const route = useRoute()
const reqData = reactive({
  id:route?.params?.id,
  type:props.title==='day'?1:2,//1为24小时 2为周热榜
  limit:props.limit
})

onBeforeMount(async () => {
  const res = await fetchHotGoods(reqData);
  HotGoods.value = res.result;
})
</script>

<template>
  <div class="goods-hot">
    <h3>{{title=='day'?'24小时榜单':'周榜单'}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in HotGoods" :key="item.id">
      <img v-img-lazy="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{ item.price }}</p>
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
