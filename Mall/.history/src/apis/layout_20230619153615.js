import $api from "@/apis/index";

 export const getCategory = ()=>{
    return $api({
        url:'home/category/head'
    })
}