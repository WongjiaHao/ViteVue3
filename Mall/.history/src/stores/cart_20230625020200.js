import { ref, computed } from 'vue'
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
        .reduce((prev, cur) => prev + cur,0)
        .toFixed(2)
    })
    // const selectAll = computed(() => {
    //   return cartList.value.map((it) => it.selected).every((i) => i == true)
    // })
    // const selectedTotalCount = computed(()=>{
    //     return cartList.value
    //     .filter((item) => item.selected === true)
    //     .reduce((pre, cur) => pre + cur.count, 0)
    // })
    // const selectedTotalPrice = computed(() => {
    //   return cartList.value
    //     .filter((item) => item.selected === true)
    //     .map((it) => Number(it.price.split('.')[0]) * it.count)
    //     .reduce((prev, cur) => prev + cur,0)
    //     .toFixed(2)
    // })
    const selectedSwitch = (ss) => {
        if ( ss === true) {
          cartList.value.forEach((it) => (it.selected = true))
        } else {
          cartList.value.forEach((it) => (it.selected = false))
        }
      }
    return {
      cartList,
      addCart,
      delCart,
      totalCount,
      totalPrice,
      selectAll,
      selectedSwitch,
    //   selectedTotalCount,
    //   selectedTotalPrice
    }
  },
  {
    persist: true
  }
)
