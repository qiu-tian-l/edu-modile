<template>
  <div class="login">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.phone"
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{
          required: true,
          message: '请填写手机号'
          },{
            validator: phoneCheck,
            message: '格式有误，请重新输入'
          }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{
          required: true,
          message: '请填写密码'
          },{
            validator: passwordCheck,
            message: '格式有误，请重新输入'
          }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      }
    }
  },
  methods: {
    phoneCheck (val) {
      return /^1\d{10}$/.test(val)
    },
    passwordCheck (val) {
      return /^[a-zA-Z0-9]{6,12}$/.test(val)
    },
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="scss" scoped></style>
