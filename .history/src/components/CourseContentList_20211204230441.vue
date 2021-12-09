<template>
  <div class="course-content-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id">
        <div>
          <img :src="item.courseImgUrl" alt="">
        </div>
        <div class="course-info">
          <h3 v-text="item.courseName"></h3>
          <p class="course-preview" v-html="item.previewFirstField"></p>
          <p class="price-container" v-if="item.price">
            <span class="course-discounts">￥{{item.discounts}}</span>
            <span class="course-price">￥{{item.price}}</span>
          </p>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getQueryCourses } from '@/services/course'

export default {
  name: 'CourseContentList',
  data () {
    return {
      list: [],
      loading: false,
      finished: true,
      currentPage: 1
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getQueryCourses({
        currentPage: this.currentPage,
        pageSize: 10,
        status: 1
      })
      console.log(data)
      if (data.content && data.content.records && data.content.records.length !== 0) {
        this.list.push(...data.content.records)
      }
      this.currentPage++
      this.loading = false
      if (data.content.records.length < 10) {
        this.finished = true
      }
    }
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
