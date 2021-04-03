<template>
  <h2>{{ aboutGoal.goal }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="aboutGoal.isVisible">OUTPUT COURSE GOAL</h3>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="visiblityGoal()">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    // const goal = ref('Finish The Course');
    // const isVisible = ref(true);

    const aboutGoal = ref({
      goal: 'Finish The Course',
      isVisible: true,
    });

    // const aboutGoal = reactive({
    //   goal : 'Finish The Course',
    //    isVisible : true
    // });

    function visiblityGoal() {
      aboutGoal.value.isVisible = !aboutGoal.value.isVisible;
    }

    return { aboutGoal, visiblityGoal };
  },
  // data() {
  //   return {
  //     goal: 'Finish The Course',
  //     isVisible: true,
  //   };
  // },
  // methods: {
  //   visiblityGoal() {
  //     this.isVisible = !this.isVisible;
  //   },
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
