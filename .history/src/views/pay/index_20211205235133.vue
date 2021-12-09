<template>
  <div class="pay">
    <van-cell-group>
      <van-cell class="course-info">
        <img :src="course.courseImgUrl" alt="">
        <div class="price-info">
          <div class="course-name" v-text="course.courseName"></div>
          <div class="discounts">￥{{course.discounts}}</div>
        </div>
      </van-cell>
      <van-cell class="accout-info">
        <div>购买信息</div>
        <div>购买课程后使用此账号登录【拉勾教育】学习课程</div>
        <div class="username">当前账号：{{username}}</div>
      </van-cell>
      <van-cell class="pay-channel">

      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getCourseById } from '@/services/course'
export default {
  name: 'pay',
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
      this.course = data.content
    }
  },
  computed: {
    username () {
      return this.$store.state.user.organization.replace(/(\d{3}\d{4}\d{4})/, '$1****$2')
    }
  }
}
</script>

<style lang="scss" scoped></style>
