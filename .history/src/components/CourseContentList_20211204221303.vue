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
export default {
  name: 'CourseContentList',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      loading: false,
      finished: true
    }
  },
  methods: {
    onLoad () {}
  }
}
</script>

<style lang="scss" scoped></style>
