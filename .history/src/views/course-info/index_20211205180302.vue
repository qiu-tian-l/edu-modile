<template>
  <div class="course-info">
    <van-cell-group>
      <van-cell class="course-img">
        <img :src="course.courseImgUrl" alt="">
      </van-cell>
      <van-cell class="course-description">
        <h2 v-text="course.courseName"></h2>
        <p v-text="course.previewFirstField"></p>
        <div class="course-saleInfo">
          <p class="course-price">
            <span class="discounts">￥{{course.discounts}}</span>
            <span>￥{{course.price}}</span>
          </p>
          <span class="tag">{{course.sales}}人已购</span>
          <span class="tag">每周三、五更新</span>
        </div>
      </van-cell>
      <van-cell class="course-detail">
        <van-tabs v-model="active">
          <van-tab title="详情">
            <div v-html="course.courseDescriptionMarkDown"></div>
          </van-tab>
          <van-tab title="内容">内容 1</van-tab>
        </van-tabs>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getCourseById } from '@/services/course'
export default {
  name: 'CourseInfo',
  props: {
    courseId: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      course: []
    }
  },
  created () {
    this.loadCourseById()
  },
  methods: {
    async loadCourseById () {
      const { data } = await getCourseById({
        courseId: this.courseId
      })
      console.log(data)
      this.course = data.data
    }
  }
}
</script>

<style lang="scss" scoped>
.van-cell{
  padding: 0;
}
.course-img{
  height: 280px;
}
.course-description{
  padding: 10px 20px;
  height: 150px;
}
</style>
