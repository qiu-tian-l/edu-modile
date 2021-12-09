<template>
  <div class="course">
    选课
    <course-content-list></course-content-list>
    <layout-footer></layout-footer>
  </div>
</template>

<script>

import LayoutFooter from '@/components/LayoutFooter'
import CourseContentList from '@/components/CourseContentList'

export default {
  name: 'course',
  components: {
    LayoutFooter,
    CourseContentList
  }
}
</script>

<style lang="scss" scoped></style>
