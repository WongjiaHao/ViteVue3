import { getBannerbyid } from '@/apis/categoryAPI.js'
import { ref, onMounted } from 'vue'
//1为首页  2为category
export const useBanner = (select) => {
  const bannerList = ref([])
  onMounted(async () => {
    const res = await getBannerbyid({ distributionSite: select })
    // console.log(res);
    bannerList.value = res.result
  })
  return bannerList
}
