<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-21 16:32:36
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 20:33:56
 * @FilePath: \Mall\src\views\SubCategory\index.vue
 * @Description: 
-->
<script setup>
import { getCategoryFilter, getSubCategory } from '@/apis/categoryAPI.js'
import { ref, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const routes = useRoute()
const subCateData = ref({})
onMounted(async () => {
  const res = await getCategoryFilter(routes.params.id)
  subCateData.value = res.result
})

const goodList = ref([])
const reqData = reactive({
  categoryId: 1,
  page: 1,
  pageSize: 1,
  sortField: 'publishTime'
})
reqData.categoryId = routes.params.id
reqData.page = 2
reqData.pageSize = 20

onMounted(async () => {
  const res = await getSubCategory(reqData)
  // console.log(res)
  goodList.value = res.result.items
  // console.log(goodList.value)
})
//Tab栏switch
const handleClick =  async ()=>{
  console.log(reqData.sortField);
  const res = await getSubCategory(reqData)
  console.log(res);
  goodList.value = res.result.items
}
//infiniteLoad
const disabled = ref(false)
const load = async () => {
  console.log('加载更多数据咯')
  // 获取下一页的数据
  reqData.page++
  const res = await getSubCategory(reqData)
  goodList.value = [...goodList.value, ...res.result.items]
  // 加载完毕 停止监听
  if (res.result.items.length === 0) {
    disabled.value = true
    // console.log('无数据了');
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCateData?.parentId}` }">
          {{ subCateData?.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCateData?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" type="card"  class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled" >
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodList" :good="good" :key="good?.id"></GoodsItem>
        <img v-if="!disabled" style="margin: 0 auto; height:50px" :src="../../assets/loading.gif">Loading</img>
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
    // .goods-list {
    //   // width: 990px;
    //   display: flex;
    //   flex-wrap: wrap;

    //   li {
    //     width: 240px;
    //     height: 300px;
    //     margin-right: 10px;
    //     margin-bottom: 10px;

    //     &:nth-last-child(-n + 4) {
    //       margin-bottom: 0;
    //     }

    //     &:nth-child(4n) {
    //       margin-right: 0;
    //     }
    //   }
    // }
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
  name: 'subCatePage'
}
</scrip>
