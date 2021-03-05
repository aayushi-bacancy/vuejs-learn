<template>
  <div class="container">
    <!-- header -->
    <the-header></the-header>
    <hr />
    <!-- server -->
    <the-server></the-server>
    <hr />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheServer from "./components/TheServer.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheHeader, TheServer, TheFooter },
  componentes: {
    TheHeader,
    TheFooter,
    TheServer,
  },
};
</script>

<style></style>
