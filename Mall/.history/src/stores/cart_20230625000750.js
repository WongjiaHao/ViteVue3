import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([]);
    const addCart = (goods) => {
      const item = cartList.value.find((it) => goods.skuId === it.skuId)
      if (item) {
        item.count += 1
      } else {
        cartList.value.push(goods)
      }
    }
    const delCart = (skuId) => {
      const item = cartList.value.find((it) => it.skuId === skuId)
      const index = cartList.value.indexOf(item)
      cartList.value.splice(index, 1)
    }
    const totalCount = computed(() => {
      return cartList.value.reduce((pre, cur) => pre + cur.count, 0)
    })
    const totalPrice = computed(() => {
      return cartList.value
        .map((it) => Number(it.price.split('.')[0]) * it.count)
        .reduce((prev, cur) => prev + cur)
        .toFixed(2)
    })
    let selectAll = computed(()=>{
        return cartList.value.map(it=>it.selected).every(i=>i==true)
    })
    const selectedNone =()=>{
        selectAll.value = false
    }
    return { cartList, addCart, delCart, totalCount, totalPrice ,selectAll,selectedNone}
  },
  {
    persist: true
  }
)
