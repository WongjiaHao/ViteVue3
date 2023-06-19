import $api from "@/apis/index";

export const getBanner= () => {
    return $api({
      url: 'home/banner'
    })
  }