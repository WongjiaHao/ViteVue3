/*
 * @Author: Wenjiahao
 * @Date: 2023-06-23 03:41:51
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-23 03:52:55
 * @FilePath: \Mall\src\components\componentPlugin.js
 * @Description:
 */
import imageView from '@/components/imageView/index.vue'
import sku from '@/components/imageView/index.vue'

export const componentPlugin = {
  install(app) {
    // app.component('组件名字'，组件配置对象)
    app.component('ImageView', imageView)
    app.component('XXTT', sku)
  }
}
