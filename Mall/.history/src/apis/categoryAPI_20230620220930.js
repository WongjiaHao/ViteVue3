/*
 * @Author: Wenjiahao
 * @Date: 2023-06-20 15:35:02
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-20 22:09:30
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

export const getBanner = () => {
  return $api({
    url: 'home/banner'
  })
}