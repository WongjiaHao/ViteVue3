/*
 * @Author: Wenjiahao
 * @Date: 2023-06-21 16:39:02
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 17:09:39
 * @FilePath: \Mall\src\views\Category\composables\useCategory.js
 * @Description: 
 */
import { getTopCategory } from '@/apis/categoryAPI.js'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { ref, onMounted } from 'vue'

export const useCategory = () => {
  const categoryData = ref(null)
  const routes = useRoute()
  const {
    params: { id }
  } = routes
  onMounted(async () => {
    const res = await getTopCategory(id)
    // console.log(res)
    categoryData.value = res.result
  })
  onBeforeRouteUpdate( (to,from,next) => {
    // console.log(to);
    // const res = await getTopCategory(to.params.id)
    next()
    // categoryData.value = res.result
  })
  return categoryData
}
