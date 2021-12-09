<template>
  <div class="user">
    <van-cell-group>
      <van-cell class="user-info">
        <van-image width="50" height="50" :src="userInfo.portrait || 'https://s0.lgstatic.com/common/image/pc/default_boy_headpic1.png'" round />
        <div class="user-info-content">
          <h3>{{userInfo.userName}}</h3>
          <span>
            <van-icon name="edit" />
            编辑个人资料
          </span>
        </div>
      </van-cell>
    </van-cell-group>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter'
import { getUserInfo } from '@/services/user'
export default {
  name: '',
  components: {
    LayoutFooter
  },
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.loadUserInfo()
  },
  methods: {
    async loadUserInfo () {
      const { data } = await getUserInfo()
      this.userInfo = data.content
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info{
  width: 100%;
  display: flex;
}
</style>
