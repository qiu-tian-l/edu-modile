<template>
  <div class="user">
    <van-cell-group>
      <van-cell class="user-info" :border="false">
        <van-image width="50" height="50" :src="userInfo.portrait || 'https://s0.lgstatic.com/common/image/pc/default_boy_headpic1.png'" round />
        <div class="user-info-content">
          <h3>{{userInfo.userName}}</h3>
          <span>
            <van-icon name="edit" />
            编辑个人资料
          </span>
        </div>
      </van-cell>
      <van-cell class="account-info">
        <van-grid :border="false">
          <van-grid-item>
            <span class="grid-item-value">14.05</span>
            <span class="grid-item-title">学习时长</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">2000</span>
            <span class="grid-item-title">钱包/勾豆</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">1</span>
            <span class="grid-item-title">优惠券</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">213</span>
            <span class="grid-item-title">学分</span>
          </van-grid-item>
        </van-grid>
      </van-cell>
      <van-cell title="分销中心" icon="location-o" is-link value="收益200元"/>
      <van-cell title="个性化设置" icon="location-o" is-link />
      <van-cell title="我的下载" icon="location-o" is-link />
      <van-cell title="帮助与反馈" icon="location-o" is-link />
      <van-cell title="关于拉勾教育" icon="location-o" is-link value="v2.0.0"/>
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
  padding: 30px 20px 0;
  background-color: rgb(248, 150, 3);
}
.user-info .van-cell__value{
  display: flex;
}
.user-info .user-info-content{
  padding-left: 15px;
}
.user-info .user-info-content h3{
  font-size: 18px;
  margin: 5px;
}
.account-info{
  background-color: rgb(248, 150, 3);
}
.account-info .van-cell__value{
  border-radius: 15px;
}
.account-info .grid-item-value{
  font-weight: 700;
  font-size: 22px;
}
</style>
