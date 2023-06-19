/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 15:35:53
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 21:17:36
 * @FilePath: \Mall\src\apis\layoutAPI.js
 * @Description:
 */
/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 15:35:53
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 15:36:15
 * @FilePath: \Mall\src\apis\layout.js
 * @Description:
 */
import $api from '@/apis/index'

export const getCategory = () => {
  return $api({
    url: 'home/category/head'
  })
}
