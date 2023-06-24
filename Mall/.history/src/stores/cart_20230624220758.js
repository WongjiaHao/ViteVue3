import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([]);
    const addCart  = () => {
        if()
    }
    return { cartList,addCart  }
  })