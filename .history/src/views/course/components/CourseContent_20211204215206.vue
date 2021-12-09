<template>
  <div class="course-content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getAllAds } from '@/services/course'

export default {
  name: 'CourseContent',
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

<style lang="scss" scoped></style>
