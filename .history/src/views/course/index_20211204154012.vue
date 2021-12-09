<template>
  <div class="course">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
    </van-tabbar> 
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter'

export default {
  name: 'course',
  components: {
    LayoutFooter
  }
}
</script>

<style lang="scss" scoped></style>
