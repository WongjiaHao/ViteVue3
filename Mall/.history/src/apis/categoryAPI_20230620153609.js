/*
 * @Author: Wenjiahao
 * @Date: 2023-06-20 15:35:02
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-20 15:35:32
 * @FilePath: \Mall\src\apis\category.js
 * @Description: 
 */
import $api from "@/apis/index";

export const getTopCategory= (id) => {
    return $api({
      url:'/category',
      params:{
        id
      }
    })
  }