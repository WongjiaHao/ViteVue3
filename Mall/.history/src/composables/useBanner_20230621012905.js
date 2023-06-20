
import {getBannerbyid } from '@/apis/categoryAPI.js'
import { ref, onMounted, watch } from 'vue'
onMounted(async () => {
    const res = await getBannerbyid({ distributionSite: '2' })
    // console.log(res);
    bannerList.value = res.result
  })