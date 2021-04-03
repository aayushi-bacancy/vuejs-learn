<template>
  <ul>
    <li @click="removeItem()" v-for="user in users" :key="user">{{ user }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: ['aayushi', 'aaditya', 'juhi', 'urja', 'kritika']
    };
  },
  methods: {
    removeItem(user) {}
  }
};
</script>
