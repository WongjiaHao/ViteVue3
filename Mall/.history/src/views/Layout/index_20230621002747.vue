<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:00:44
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 00:27:47
 * @FilePath: \Mall\src\views\Layout\index.vue
 * @Description: 
-->
<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category.js'
import {onMounted} from 'vue'
const store = useCategoryStore();
onMounted(()=>{
  store.getheaderList();
})
</script>
<template>
    <div>
      <LayoutFixed />
      <LayoutNav></LayoutNav>
      <LayoutHeader></LayoutHeader>
      <RouterView />
      <!-- 1.如下破坏复用机制 强制销毁重启 破坏路由缓存   2.路由守卫监听路由-->
      <!-- <RouterView :key="Sroute.fullpath"/> -->
      <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
export default {
  name: 'layoutPage',
};
</script>