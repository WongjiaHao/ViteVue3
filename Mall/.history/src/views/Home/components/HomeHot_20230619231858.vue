<script setup>
import HomePanel from './HomePanel.vue';
import {getHot} from '@/apis/homeAPI.js'
import { onMounted , ref} from 'vue';
const hotList = ref([]);
onMounted( async () => {
  const res = await findNew();
  console.log(res);
  newList.value = res.result
})
</script>

<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
          <RouterLink to="/">
            <img v-img-lazy="item.picture" alt="">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
  </HomePanel>
</template>