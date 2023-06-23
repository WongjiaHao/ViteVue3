/*
 * @Author: Wenjiahao
 * @Date: 2023-06-22 02:51:51
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-22 23:56:34
 * @FilePath: \Mall\src\apis\detail.js
 * @Description:
 */
import $api from '@/apis/index'

export const getDetail = (id) => {
  return $api({
    url: '/goods',
    params: {
      id
    }
  })
}
export const fetchHotGoods = ({ id, type, limit = 3 }) => {
  return $api({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
