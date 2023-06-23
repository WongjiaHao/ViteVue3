import $api from '@/apis/index'

export const login = ({ account, password }) => {
  return $api({
    url: 'login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}
