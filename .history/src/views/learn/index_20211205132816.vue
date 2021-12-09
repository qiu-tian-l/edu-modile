<template>
  <div class="learn">
    已购课程
    <course-content-list></course-content-list>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import CourseContentList from '@/components/CourseContentList'

import LayoutFooter from '@/components/LayoutFooter'
export default {
  name: 'learn',
  components: {
    CourseContentList,
    LayoutFooter
  }
}
</script>

<style lang="scss" scoped></style>
