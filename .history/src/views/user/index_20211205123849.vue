<template>
  <div class="user">
    <van-cell-group>
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
  created () {
    this.loadUserInfo()
  },
  methods: {
    async loadUserInfo () {
      const { data } = await getUserInfo()
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped></style>
