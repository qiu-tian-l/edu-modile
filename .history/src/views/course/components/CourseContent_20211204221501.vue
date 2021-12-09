<template>
  <div class="course-content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>
    <course-content-list></course-content-list>
  </div>
</template>

<script>
import { getAllAds } from '@/services/course'
import CourseContentList from '@/components/CourseContentList'

export default {
  name: 'CourseContent',
  components: {
    CourseContentList
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.loadAllAds()
  },
  methods: {
    async loadAllAds () {
      const { data } = await getAllAds({
        spaceKeys: '999'
      })
      console.log(data)
      this.list = data.content[0].adDTOList
    }
  },
  computed: {
    swipeList () {
      return this.list.filter(item => item.status === 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swipe{
  width: 100%;
}
.my-swipe .van-swipe-item{
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.my-swipe img{
  height: 170px;
  margin: 0 auto;
}
.course-content-list{
  top: 230px;
  bottom: 50px;
}
</style>
