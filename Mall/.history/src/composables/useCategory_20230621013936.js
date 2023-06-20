import { getTopCategory } from '@/apis/categoryAPI.js'
import { useRoute,useRouter,onBeforeRouteUpdate } from 'vue-router'
import { ref, onMounted } from 'vue'

export const useCategory = ()=> {
    const categoryData = ref(null);
    onMounted(async () => {
        const res = await getTopCategory(id)
        // console.log(res)
        categoryData.value = res.result
      })
      return categoryData
}