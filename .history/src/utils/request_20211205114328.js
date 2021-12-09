import axios from 'axios'
import store from '@/store'
import qs from 'qs'

const request = axios.create({
  baseURL: 'http://edufront.lagou.com'
})

function redirectLogin () {
  router.push({
    name: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {
    const { status } = error.response
    let errorMessage = ''
    if (status === 400) {
      errorMessage = '请求参数错误'
    } else if (status === 401) {
      //1.无token
      if (!store.state.user) {
        redirectLogin()
        return Promise.reject(error)
      }
      //2.token过期处理
      return request({
        method: 'POST',
        url: '/front/user/refresh_token',
        data: qs.stringify({
          refreshtoken: store.state.user.refresh_token
        })
      }).then(res => {
        if (res.data.status !== 1) {
          store.commit('setUser', null)
          redirectLogin()
          return Promise.reject(error)
        }
        store.commit('setUser',res.data.content)
      }, err => {

      })
    } else if (status === 403) {
      errorMessage = '没有权限，请联系管理员'
    } else if (status === 404) {
      errorMessage = '请求资源不存在'
    } else if (status >= 500) {
      errorMessage = '服务端错误，请联系管理员'
    }
  } else if (error.request) {
    Toast.fail('请求超时，请重试')
  } else {
    Toast.fail(error)
  }
  return Promise.reject(error)
})

export default request
