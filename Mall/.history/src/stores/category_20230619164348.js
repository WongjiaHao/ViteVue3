import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  const headerList = ref([]);
  function get() {
    count.value++
  }

  return { count, doubleCount, increment }
})