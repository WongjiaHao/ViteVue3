import $api from '@/apis/index'

export const getBanner = () => {
  return $api({
    url: 'home/banner'
  })
}

export const findNew = () => {
  return $api({
    url: '/home/new'
  })
}
