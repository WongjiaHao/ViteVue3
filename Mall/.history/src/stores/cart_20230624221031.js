import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([]);
    const addCart  = (goods) => {
        if(cartList.value.find((it)=>goods.skuId ===it.skuId)){
            
        }
    }
    return { cartList,addCart  }
  })