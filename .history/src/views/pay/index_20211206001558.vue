<template>
  <div class="pay">
    <van-cell-group>
      <van-cell class="course-info">
        <img :src="course.courseImgUrl" alt="">
        <div class="price-info">
          <div class="course-name" v-text="course.courseName"></div>
          <div class="discounts">￥{{course.discounts}}</div>
        </div>
      </van-cell>
      <van-cell class="account-info">
        <div>购买信息</div>
        <div>购买课程后使用此账号登录【拉勾教育】学习课程</div>
        <div class="username">当前账号：{{username}}</div>
      </van-cell>
      <van-cell class="pay-channel">
        <div>
          <p>支付方式</p>
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell>
                <template>
                  <img src="http://www.lgstatic.com/lg-app-fed/pay/images/wechat_b787e2f4.png" alt="">
                  <span>微信支付</span>
                </template>
                <template #right-icon>
                  <van-radio :name="1" />
                </template>
              </van-cell>
              <van-cell>
                <template>
                  <img src="http://www.lgstatic.com/lg-app-fed/pay/images/ali_ed78fdae.png" alt="">
                  <span>支付宝支付</span>
                </template>
                <template #right-icon>
                  <van-radio :name="2" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
        <van-button>立即支付</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getCourseById } from '@/services/course'
export default {
  name: 'pay',
  props: {
    courseId: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      course: [],
      radio: 1
    }
  },
  created () {
    this.loadCourseById()
  },
  methods: {
    async loadCourseById () {
      const { data } = await getCourseById({
        courseId: this.courseId
      })
      this.course = data.content
    }
  },
  computed: {
    username () {
      return this.$store.state.user.organization.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    }
  }
}
</script>

<style lang="scss" scoped>
.pay{
  position: absolute;
  width: 100%;
  height: 100%;
}
.van-cell-group{
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
}
.course-info{
  height: 170px;
  padding: 40px 20px 0;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.course-info .van-cell__value{
  display: flex;
}
.course-info img{
  width: 80px;
  height: 107px;
  border-radius: 10px;
}
.course-info .price-info{
  height: 107px;
  padding: 5px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.course-info .price-info .course-name{
  font-size: 16px;
}
.course-info .price-info .discounts{
  font-size: 22px;
  font-weight: 700;
  color: #ff7452;
}
.account-info{
  height: 120px;
  margin-bottom: 10px;
}
.account-info div:nth-child(2){
  font-size: 12px;
  color: #999;
}
.account-info .username{
  margin: 20px 0 10px;
  font-size: 16px;
}
</style>
