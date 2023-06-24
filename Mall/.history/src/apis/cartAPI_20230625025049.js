import $api from '@/apis/index'

export const insertCartAPI = ({ skuId, count }) => {
  return $api({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 删除购物车
export const delCartAPI = (ids) => {
  return $api({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}
