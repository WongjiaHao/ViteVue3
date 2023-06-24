import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    const addCart = (goods) => {
      const item = cartList.value.find((it) => goods.skuId === it.skuId)
      if (item) {
        item.count += 1
      } else {
        cartList.value.push(goods)
      }
    }
    cosnt delCart = (skuId) => {
        const item = cartList.value.find((it) => goods.skuId === it.skuId)
        if (item) {
          item.count += 1
        } else {
          cartList.value.splice(goods)
        }
    }
    return { cartList, addCart }
  },
  {
    persist: true
  }
)
