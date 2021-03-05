new Vue({
  el: "#exercise",
  data() {
    return {
      effectClasses: {
        highlight: false,
        shrink: true,
      },
      userClass: "",
      isVisible: true,
      myStyle: {
        width: "100px",
        height: "150px",
        backgroundColor: "red",
      },
      progressBar: {
        width: "0px",
        backgroundColor: "red",
      },
    };
  },
  methods: {
    startProgress: function () {
      var vm = this;
      var width = 0;
      setInterval(function () {
        width += 10;
        vm.progressBar.width = width + "px";
      }, 500);
    },
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
  },
});
