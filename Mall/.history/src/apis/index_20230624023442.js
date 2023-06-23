/*
 * @Author: Wenjiahao
 * @Date: 2023-06-18 23:35:35
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-23 21:50:57
 * @FilePath: \Mall\src\apis\index.js
 * @Description:
 */
import axios from 'axios'
import { showMsg } from '@/utils/showToast'
import { useUserInfoStore } from '@/stores/users'


const $api = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
$api.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserInfoStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
$api.interceptors.response.use(
  (res) => res.data,
  (e) => {
    showMsg('error',e.response.data.msg)
    if(e.response.status===401){
      
    }
    return Promise.reject(e)
  }
)

export default $api
