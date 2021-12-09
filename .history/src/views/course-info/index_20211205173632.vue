<template>
  <div class="course-info">课程信息</div>
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
  created () {
    this.loadCourseById()
  },
  methods: {
    async loadCourseById () {
      const { data } = await getCourseById(this.courseId)
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped></style>
