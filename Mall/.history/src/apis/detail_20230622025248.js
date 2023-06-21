/*
 * @Author: Wenjiahao
 * @Date: 2023-06-22 02:51:51
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-22 02:52:06
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
