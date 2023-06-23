/*
 * @Author: Wenjiahao
 * @Date: 2023-06-23 17:27:12
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-23 20:41:41
 * @FilePath: \Mall\src\utils\showToast.js
 * @Description:
 */
import { ElMessage } from 'element-plus'
export const showMsg = (type, message) => {
  ElMessage({
    showClose: true,
    message,
    type,
    duration: 2000
  })
};
