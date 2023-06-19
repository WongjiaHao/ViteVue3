<!--
 * @Author: Wenjiahao
 * @Date: 2023-06-18 22:08:03
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-18 23:51:58
 * @FilePath: \Mall\src\App.vue
 * @Description: 
-->
<script setup>
import { getC } from '@/apis/testAPI'
import { onMounted } from 'vue'; 
onMounted(async ()=>{
  const res = await getC();
  console.log(res);
})
</script>

<template>
  <RouterView />       
</template>

<style scoped lang="scss">
</style>
