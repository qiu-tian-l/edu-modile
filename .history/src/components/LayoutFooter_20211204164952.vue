<template>
  <div class="layout-footer">

    <van-tabbar route active-color="#F00">
      <van-tabbar-item  to="/" icon="orders-o">选课</van-tabbar-item>
      <van-tabbar-item  to="/learn" icon="desktop-o">学习</van-tabbar-item>
      <van-tabbar-item  to="/user" icon="user-o">我</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'LayoutFooter',
  data () {
    return {
      active: 0
    }
  }
  // components: {
  //   VanTabbar: Tabbar,
  //   VanTabbarItem: TabbarItem
  // }
}
</script>

<style lang="scss" scoped></style>
