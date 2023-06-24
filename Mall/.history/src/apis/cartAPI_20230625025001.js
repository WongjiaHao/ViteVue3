export const insertCartAPI = ({ skuId, count }) => {
    return request({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
  }