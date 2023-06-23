/*
 * @Author: Wenjiahao
 * @Date: 2023-06-23 22:00:07
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-23 22:01:35
 * @FilePath: \Mall\src\stores\users.js
 * @Description: 
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/apis/loginAPI'


export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref([]);
  const getheaderList = async ()=>{
    const res = await login();
    headerList.value = res.result;
  }
  return { headerList, getheaderList}
})