<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:00:44
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 16:32:17
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
    <LayoutFixed />
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView />
    <LayoutFooter></LayoutFooter>
</template>

<script>
export default {
  name: 'layoutPage',
};
</script>