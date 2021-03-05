new Vue({
  el: "#exercise",
  data: {
    value: 0,
  },
  computed: {
    results() {
      if (this.value < 37) {
        return "not yet there";
      } else if (this.value == 37) {
        return "Done.";
      } else {
        return "greater than 37";
      }
    },
  },
  watch: {
    results() {
      let that = this;
      setTimeout(() => {
        that.value = 0;
      }, 5000);
    },
  },
});
