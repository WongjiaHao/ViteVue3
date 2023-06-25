/*
 * @Author: Wenjiahao
 * @Date: 2023-06-25 19:48:00
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-25 23:13:24
 * @FilePath: \Mall\src\apis\checkoutAPI.js
 * @Description:
 */
import $api from '@/apis/index'

export const getCheckoutInfo = () => {
  return $api({
    url: '/member/order/pre'
  })
}
export const createOrder = (data) => {
  return $api({
    url: '/member/order',
    method: 'POST',
    data
  })
}
