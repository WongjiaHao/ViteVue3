
import {getBannerbyid } from '@/apis/categoryAPI.js'
import { ref, onMounted } from 'vue'
export useBanner = () =>{
    const bannerList = ref([])
onMounted(async () => {
    const res = await getBannerbyid({ distributionSite: '2' })
    // console.log(res);
    bannerList.value = res.result
  })
}