/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 16:42:55
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 16:43:48
 * @FilePath: \Mall\src\stores\category.js
 * @Description: 
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  const headerList = ref([]);
  function get() {
    count.value++
  }

  return { count, doubleCount, increment }
})