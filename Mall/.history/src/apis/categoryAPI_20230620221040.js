/*
 * @Author: Wenjiahao
 * @Date: 2023-06-20 15:35:02
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-20 22:10:39
 * @FilePath: \Mall\src\apis\categoryAPI.js
 * @Description:
 */
import $api from '@/apis/index'

export const getTopCategory = (id) => {
  return $api({
    url: '/category',
    params: {
      id
    }
  })
}

export function getBannerbyid (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return $api({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}