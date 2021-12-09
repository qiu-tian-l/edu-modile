<template>
  <div class="lesson-video">
    <van-nav-bar
      title="视频"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="video-container"></div>
  </div>
</template>

<script>
import { getVideoPlayInfo } from '@/services/course'

export default {
  name: 'LessonVideo',
  props: {
    lessonId: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      videoInfo: {}
    }
  },
  created () {
    this.loadPlayer()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async loadPlayer () {
      const { data } = await getVideoPlayInfo({
        lessonId: this.lessonId
      })
      console.log(data)
      this.videoInfo = data.content
      const player = new window.Aliplayer({
        id: 'video-container',
        vid: this.videoInfo.fileId,
        playauth: this.videoInfo.playAuth,
        qualitySort: 'asc',
        format: 'mp4',
        mediaType: 'video',
        width: '100%',
        height: '500px',
        autoplay: true,
        isLive: false,
        rePlay: false,
        playsinline: true,
        preload: true,
        controlBarVisibility: 'hover',
        useH5Prism: true
      }, function (player) {
        console.log('The player is created')
      }
      )
      console.log(player)
    }
  }
}
</script>

<style lang="scss" scoped></style>
