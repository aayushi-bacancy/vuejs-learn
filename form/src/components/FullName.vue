<template>
  <div>
    <label for="fName">First Name:</label>
    <input
      type="text"
      name="fName"
      id="fName"
      :value="fName"
      @input="nameChanged(true, $event)"
    />
    <label for="lName">Last Name</label>
    <input
      type="text"
      name="lName"
      id="lName"
      :value="lName"
      @input="nameChanged(false, $event)"
    />
  </div>
</template>

<script>
export default {
  props: ["val"],
  computed: {
    fName() {
      return this.val.split(" ")[0];
    },
    lName() {
      return this.val.split(" ")[1];
    },
    nameChanged(isFirst, event) {
      let name = "";
      if (isFirst) {
        console.log(isFirst);
        console.log(this.$event.target.value);
        name = event.target.value + " " + this.lName;
      } else {
        name = this.fName + "  " + event.target.value;
      }
      this.val = name;
      this.$emit("input", this.val);
    },
  },
};
</script>
