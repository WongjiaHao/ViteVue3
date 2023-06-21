import $api from "@/apis/index";

 export const getC = ()=>{
    return $api({
        url:'home/category/head'
    })
}