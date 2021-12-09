<template>
  <div class="course-section-and-lesson">
    <h2 class="section" v-text="sectionData.sectionName"></h2>
  </div>
</template>

<script>
export default {
  name: 'CourseSectionAndLesson',
  props: {
    sectionData: {
      type: Object
      // required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
