<template>
  <div class="course-header">
    <van-image :src="require('@/assets/logo.png')" alt=""/>
  </div>
</template>

<script>
export default {
  name: 'CourseHeader'
}
</script>

<style lang="scss" scoped>
.van-image{
  width: 180px;
}
</style>
