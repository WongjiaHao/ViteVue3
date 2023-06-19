/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 21:17:21
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 23:20:03
 * @FilePath: \Mall\src\apis\homeAPI.js
 * @Description: 
 */
import $api from '@/apis/index'

export const getBanner = () => {
  return $api({
    url: 'home/banner'
  })
}

export const findNew = () => {
  return $api({
    url: '/home/new'
  })
}

export const getHot = () => {
  return  $api.get('home/hot', {})
}

export const getGoodsAPI = () => {
  return $api({
    url: '/home/goods'
  })
}
