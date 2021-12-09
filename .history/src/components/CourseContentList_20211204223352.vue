<template>
  <div class="course-content-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
import { getQueryCourses } from '@/services/course'

export default {
  name: 'CourseContentList',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      loading: false,
      finished: true
    }
  },
  created () {
    this.loadCourses()
  },
  methods: {
    async loadCourses () {
      const { data } = await getQueryCourses({
        currentPage: 1,
        pageSize: 10,
        status: 1
      })
      console.log(data)
      this.list.push(data.content.records)
    },
    onLoad () {}
  }
}
</script>

<style lang="scss" scoped>
.course-content-list{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}
</style>
