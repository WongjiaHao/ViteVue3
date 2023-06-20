import { getTopCategory } from '@/apis/categoryAPI.js'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
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
  onBeforeRouteUpdate(async (to) => {
    // console.log(to);
    const res = await getTopCategory(to.params.id)
    console.log(res)
    categoryData.value = res.result
  })
  return categoryData
}
