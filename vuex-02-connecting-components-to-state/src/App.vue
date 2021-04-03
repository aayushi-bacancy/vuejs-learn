<template>
  <base-container v-if="isAuth" title="Vuex">
    <!-- <h3>{{ $store.state.counter }}</h3> -->
    <favourite-value></favourite-value>
    <the-counter></the-counter>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
