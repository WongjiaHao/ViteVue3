/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 16:42:55
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 16:43:48
 * @FilePath: \Mall\src\stores\category.js
 * @Description: 
 */
import { ref,computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/apis/layoutAPI'


export const useCategoryStore = defineStore('category', () => {
  const headerList = ref([]);
  const getheaderList = async ()=>{
    const res = await getCategory();
    headerList.value = res.result;
  }
  return { headerList, getheaderList}
})