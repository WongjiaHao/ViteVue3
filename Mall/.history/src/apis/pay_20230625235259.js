/*
 * @Author: Wenjiahao
 * @Date: 2023-06-25 23:52:47
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-25 23:52:56
 * @FilePath: \Mall\src\apis\pay.js
 * @Description: 
 */
import $api from "@/apis/index";

 export const getC = ()=>{
    return $api({
        url:'home/category/head'
    })
}