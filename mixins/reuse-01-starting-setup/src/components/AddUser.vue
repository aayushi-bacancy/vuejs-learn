<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
// import UserAlert from './UserAlert.vue';
import AlertMixins from '../mixins/alert.js';

export default {
  mixins: [AlertMixins]
};
</script>
