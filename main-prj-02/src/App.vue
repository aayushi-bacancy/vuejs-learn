<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: { TheHeader },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace('/coaches');
      }
    }
  },
  computed: {
    didLogout() {
      return this.$store.getters.didLogout;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
