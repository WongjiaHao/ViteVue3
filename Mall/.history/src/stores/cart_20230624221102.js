import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([]);
    const addCart  = (goods) => {
        const item = cartList.value.find((it)=>goods.skuId ===it.skuId)
        if(item){

        }
    }
    return { cartList,addCart  }
  })