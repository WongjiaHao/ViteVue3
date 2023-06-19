<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:00:44
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 16:06:11
 * @FilePath: \Mall\src\views\Layout\index.vue
 * @Description: 
-->
<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav'
import LayoutHeader from '@/views/Layout/components/LayoutHeader'
import LayoutFooter from '@/views/Layout/components/LayoutFooter'
import HeaderFixed from '@/views/Layout/components/HeaderFixed'
</script>
<template>
  <div>
    <HeaderFixed />
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