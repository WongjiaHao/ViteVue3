import $api from '@/apis/index'

export const insertCart = ({ skuId, count }) => {
  return $api({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
export const findNewCartList = () =>{
  return $api({
    url:'/member/cart'
  })
}

// 删除购物车
export const deleteCart = (ids) => {
  return $api({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

export const mergeCart = (data) =>{
  return $api({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
