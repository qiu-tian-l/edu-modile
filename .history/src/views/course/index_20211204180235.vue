<template>
  <div class="course">
    <course-header></course-header>
    <course-content></course-content>
    <layout-footer></layout-footer>
  </div>
</template>

<script>

import LayoutFooter from '@/components/LayoutFooter'
import CourseHeader from './components/CourseHeader'
import CourseContent from './components/CourseContent'

export default {
  name: 'course',
  components: {
    LayoutFooter,
    CourseHeader,
    CourseContent
  }
}
</script>

<style lang="scss" scoped></style>
