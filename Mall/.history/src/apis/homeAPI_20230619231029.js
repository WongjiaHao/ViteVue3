/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 21:17:21
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 23:10:25
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
