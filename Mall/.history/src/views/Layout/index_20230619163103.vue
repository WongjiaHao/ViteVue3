<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:00:44
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 16:31:03
 * @FilePath: \Mall\src\views\Layout\index.vue
 * @Description: 
-->
<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
</script>
<template>
  <div>
    <LayoutFixed />
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView />
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
export default {
  name: 'layoutPage',
};
</script>