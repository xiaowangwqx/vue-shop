<template>
  <div>
    <h1>home</h1>
    <button type="info" @click="logout">退出</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // 清空token 退回登录页面
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang='less' scoped>
</style>