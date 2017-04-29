<template>
  <form @submit="setToken">
    <label>
      <span>GitHub access token</span>
      <input name="token" required>
      <button>Login</button>
    </label>
  </form>
</template>

<script>
export default {
  name: 'login',
  methods: {
    setToken (event) {
      localStorage.setItem('token', this.$el.token.value)

      this.$router.push('/')
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
  span {
    display: block;
  }
</style>
