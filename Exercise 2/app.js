new Vue({
  el: "#exercise",
  data: {
    value: "",
  },
  methods: {
    newAlert() {
      alert("clicked..");
    },
    saveValue(event) {
      this.value = event.target.value;
    },
    enterSave(event) {
      this.value = event.target.value;
    },
  },
});
