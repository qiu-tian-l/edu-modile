import request from '@/utils/request'

export const getAllAds = params => {
  return request({
    method: 'GET',
    url: '/front/ad/getAdList',
    params
  })
}
