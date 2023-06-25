/*
 * @Author: Wenjiahao
 * @Date: 2023-06-25 19:48:00
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-25 19:48:11
 * @FilePath: \Mall\src\apis\checkoutAPI.js
 * @Description: 
 */
import $api from "@/apis/index";

 export const getC = ()=>{
    return $api({
        url:'home/category/head'
    })
}