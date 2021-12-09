<template>
  <div class="course-info">
    <van-cell-group>
      <van-cell class="course-img">
        <img :src="course.courseImgUrl" alt="">
      </van-cell>
      <van-cell class="course-description">
        <h2 v-text="course.courseName"></h2>
        <p v-text="course.previewFirstField"></p>
        <div class="course-saleInfo">
          <p class="course-price">
            <span class="discounts">￥{{course.discounts}} </span>
            <span>￥{{course.price}}</span>
          </p>
          <span class="tag">{{course.sales}}人已购</span>
          <span class="tag">每周三、五更新</span>
        </div>
      </van-cell>
      <van-cell class="course-detail">
        <van-tabs>
          <van-tab title="详情">
            <div v-html="course.courseDescriptionMarkDown"></div>
          </van-tab>
          <van-tab title="内容">
            <course-section-and-lesson
            v-for="item in sections"
            :key="item.id"
            :section-data="item"></course-section-and-lesson>
          </van-tab>
        </van-tabs>
      </van-cell>
    </van-cell-group>
    <van-tabbar v-if="!course.isBuy">
      <div class="price">
        <span v-text="course.discountsTag"></span>
        <span class="discounts">￥{{course.discounts}} </span>
        <span>￥{{course.price}}</span>
      </div>
      <van-button type="primary" @click="handlePay">立即购买</van-button>
    </van-tabbar>
  </div>
</template>

<script>
import { getCourseById, getSectionAndLesson } from '@/services/course'
import CourseSectionAndLesson from './components/CourseSectionAndLesson'
export default {
  name: 'CourseInfo',
  props: {
    courseId: {
      type: [Number, String],
      required: true
    }
  },
  components: {
    CourseSectionAndLesson
  },
  data () {
    return {
      course: {},
      sections: {},
      styleOptions: {}
    }
  },
  created () {
    this.loadCourseById()
    this.loadSectionsById()
  },
  methods: {
    handlePay () {
      // todo
    },
    async loadCourseById () {
      const { data } = await getCourseById({
        courseId: this.courseId
      })
      console.log(data)
      // this.course = data.data
      // if (data.content.isBuy) {
      //   this.styleOptions.bottom = 0
      // }
    },
    async loadSectionsById () {
      const { data } = await getSectionAndLesson({
        courseId: this.courseId
      })
      console.log(data)
      this.sections = data.content.courseSectionList
    }
  }
}
</script>

<style lang="scss" scoped>
.van-cell{
  padding: 0;
}
.course-img{
  height: 280px;
}
.course-description{
  padding: 10px 20px;
  height: 150px;
}
.course-description h2{
  padding: 0;
}
.course-saleInfo{
  display: flex;
}
.course-price{
  flex: 1;
  margin: 0;
}
.discounts{
  color: #ff7452;
  font-size: 24px;
  font-weight: 700;
}
.course-info .tag{
  line-height: 15px;
  background-color: #f8f9fa;
  border-radius: 2px;
  padding: 7px 8px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #666;
}
.van-cell-group{
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 50px;
  overflow-y: auto;
}
.van-tabbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 50px;
}
span{
  font-size: 14px;
}
.van-button{
  width: 50%;
  height: 80%;
}
</style>
