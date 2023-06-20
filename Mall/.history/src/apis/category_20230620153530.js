import $api from "@/apis/index";

export const getTopCategory= (id) => {
    return request({
      url:'/category',
      params:{
        id
      }
    })
  }