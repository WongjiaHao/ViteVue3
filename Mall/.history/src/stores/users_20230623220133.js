import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/apis/layoutAPI'


export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref([]);
  const getheaderList = async ()=>{
    const res = await getCategory();
    headerList.value = res.result;
  }
  return { headerList, getheaderList}
})