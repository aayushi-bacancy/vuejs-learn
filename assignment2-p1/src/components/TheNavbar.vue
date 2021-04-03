<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">Welcome</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" :class="{ active: currentTab == 1 }" href="#">
            Personal Info <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            :class="{ active: currentTab == 2 }"
            href="#"
          >
            Account Info
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            :class="{ active: currentTab == 3 }"
            href="#"
          >
            Contact Details
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link disabled"
            :class="{ active: currentTab == 3 }"
            href="#"
          >
            Contact Details
          </a>
        </li>
        <li class="nav-item-data">
          <a @click="showData" class="sdata">
            ShowDetails
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["currentTab"],
  inject: ["showData"],
};
</script>

<style scoped>
nav {
  background: rgb(85, 14, 136);
}
.nav-item-data {
  margin-top: 7px;
  margin-left: 600px;
}
.sdata {
  background-color: rgb(180, 178, 176) !important;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
}
.navbar .navbar-brand {
  color: white;
}
.navbar .navbar-nav li a {
  color: white !important;
}
.navbar .navbar-nav li a.active {
  background: white !important;
  color: rgb(85, 14, 136) !important ;
}
</style>
