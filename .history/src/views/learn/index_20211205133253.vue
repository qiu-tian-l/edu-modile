<template>
  <div class="learn">
    <van-nav-bar title="已购课程" />
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

<style lang="scss" scoped>
.course-content-list{
  top: 30px;
}
</style>
