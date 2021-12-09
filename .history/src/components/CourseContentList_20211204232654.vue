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
            <s class="course-price">￥{{item.price}}</s>
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
      finished: false,
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
.van-cell__value{
  height: 100px;
  padding: 10px 0;
  display: flex;
}
.van-cell__value img{
  width: 75px;
  height: 100%;
  border-radius: 5px;
}
.course-info{
  flex: 1;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}
.course-info h3{
  margin: 0;
  line-height: 24px;
}
.course-info .course-preview{
  flex-grow: 1;
  font-size: 14px;
  // line-height: 16px;
  margin: 0;
}
.course-info .price-container{
  margin: 0;
}
.course-info .course-discounts{
  color: #ff7452;
  font-size: 14px;
  margin-right: 5px;
}
</style>
