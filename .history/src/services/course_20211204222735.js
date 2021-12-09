import request from '@/utils/request'

// 获取顶部轮播图
export const getAllAds = params => {
  return request({
    method: 'GET',
    url: '/front/ad/getAllAds',
    params
  })
}

// 分页获取课程信息
export const getQueryCourses = data => {
  return request({
    method: 'POST',
    url: '/front/course/getQueryCourses',
    data
  })
}
