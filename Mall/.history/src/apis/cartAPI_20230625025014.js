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