<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-19 20:37:04
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 17:38:44
 * @FilePath: \Mall\src\views\Home\components\HomeProduct.vue
 * @Description: 
-->
<script setup>
import HomePanel from './HomePanel.vue'
import GoodsItem from './GoodsItem.vue';
import { getGoods } from '@/apis/homeAPI.js'
import { onMounted, ref } from 'vue'
const categoryList = ref([])
onMounted(async () => {
  const res = await getGoods()
  console.log(res)
  categoryList.value = res.result
})
</script>

<template>
  <div class="home-product">
    <HomePanel :title="category.name" v-for="category in categoryList" :key="category.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="category.picture" />
          <strong class="label">
            <span>{{ category.name }}馆</span>
            <span>{{ category.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in category.goods" :key="good.id">
            <GoodsItem :good="good"></GoodsItem>
            <!-- <RouterLink to="/" class="goods-item">
              <img v-img-lazy="good.picture" alt="" />
              <p class="name ellipsis">{{ good.name }}</p>
              <p class="desc ellipsis">{{ good.desc }}</p>
              <p class="price">&yen;{{ good.price }}</p>
            </RouterLink> -->
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
