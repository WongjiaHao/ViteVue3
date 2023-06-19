<script setup>
import HomePanel from './HomePanel.vue';
import {getHot} from '@/apis/homeAPI.js'
import { onMounted , ref} from 'vue';
const newList = ref([]);
onMounted( async () => {
  const res = await findNew();
  console.log(res);
  newList.value = res.result
})
</script>

<template>
  <div> HomeHot </div>
</template>