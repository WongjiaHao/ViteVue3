<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-21 16:32:36
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 17:49:39
 * @FilePath: \Mall\src\views\SubCategory\index.vue
 * @Description: 
-->
<script setup>
import {getCategoryFilter,getSubCategory} from '@/apis/categoryAPI.js'
import { ref, onMounted ,relative} from 'vue'
import {useRoute }from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue';
const routes = useRoute()
const subCateData = ref({});
onMounted(async () => {
  const res= await getCategoryFilter(routes.params.id);
  subCateData.value = res.result
})

const goodList = ref([])
const reqData = relative({
  categoryId:1,
  page:1,
  pageSize:1,
  sortField:'publishTime'
});
reqData.categoryId= routes.params.id
reqData.page= 1 
reqData.pageSize= 20 

onMounted(async () => {
  const res = await getSubCategory(reqData)
  console.log(res);
})


</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCateData?.parentId}` }">
          {{subCateData?.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{subCateData?.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs>
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
         <!-- 商品列表-->
         <ul class="goods-list">
          <li v-for="good in subCateData?.goods" :key="good.id">
            <GoodsItem :good="good"></GoodsItem>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
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

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>

<script>
export default {
  name: 'subCatePage',
};
</script>