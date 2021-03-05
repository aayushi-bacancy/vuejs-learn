<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="setComponent('appBlue')" class="btn btn-primary">
          Load Blue Template
        </button>
        <button @click="setComponent('appGreen')" class="btn btn-success">
          Load Green Template
        </button>
        <button @click="setComponent('appRed')" class="btn btn-danger">
          Load Red Template
        </button>
        <hr />

        <component :is="activeComponent">
          <p>Good Morning. Have a Good Day.</p>
        </component>

        <!-- <app-blue>
          <p>Good Morning. Have a Good Day.</p>
        </app-blue>
        <app-green>
          <p>Good Morning. Have a Good Day.</p>
        </app-green>
        <app-red>
          <p>Good Morning. Have a Good Day.</p>
        </app-red> -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
  data() {
    return {
      activeComponent: "appBlue",
    };
  },
  methods: {
    setComponent(cmp) {
      this.activeComponent = cmp;
    },
  },
};
</script>

<style></style>
