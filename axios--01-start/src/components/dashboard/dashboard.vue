<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p v-if="email">Your Email Address is : {{ email }}</p>
  </div>
</template>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
<script>
// import axios from 'axios';
export default {
  computed: {
    email(){
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    }
  },
  created(){
    this.$store.dispatch('fetchUser')
  }
}
</script>