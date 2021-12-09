<template>
  <div class="learn">
    <van-nav-bar title="已购课程" />
    <course-content-list :fetch-data="fetchData"></course-content-list>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import CourseContentList from '@/components/CourseContentList'
import LayoutFooter from '@/components/LayoutFooter'
import { getPurchaseCourse } from '@/services/course'
export default {
  name: 'learn',
  components: {
    CourseContentList,
    LayoutFooter
  },
  data () {
    return {
      // todo
      coursesList: []
    }
  },
  created () {
    this.loadPurchaseCourse()
  },
  methods: {
    fetchData (options) {
      return getPurchaseCourse(options)
    }
    // async loadPurchaseCourse () {
    //   const { data } = await getPurchaseCourse()
    //   console.log(data)
    // }
  }
}
</script>

<style lang="scss" scoped>
.course-content-list{
  top: 50px;
  bottom: 50px;
}
</style>
