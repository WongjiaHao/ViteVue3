/*
 * @Author: Wenjiahao
 * @Date: 2023-06-21 16:38:57
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-28 22:25:56
 * @FilePath: \ViteVue3\Mall\src\views\Category\composables\useBanner.js
 * @Description: 
 */
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
