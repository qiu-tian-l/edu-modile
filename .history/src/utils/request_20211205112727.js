import axios from 'axios'

const request = axios.create({
  baseURL: 'http://edufront.lagou.com'
})

request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {

  } else if (error.request) {
    Toast.fail('请求超时，请重试')
  } else {
    Toast.fail(error)
  }
  return Promise.reject(error)
})

export default request
