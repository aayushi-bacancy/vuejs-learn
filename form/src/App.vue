<template>
  <div class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <full-name :val="fullName" v-model="fullName"></full-name>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email" />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
          <label for="yn">Stored In Database??</label>
          <label for="yes">Yes</label>
          <input
            type="radio"
            value="yes"
            name="yn"
            id="yes"
            v-model="database"
          />
          <label for="no">No</label>
          <input type="radio" value="no" name="yn" id="no" v-model="database" />
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <button @click.prevent="submitData">Submit</button>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div v-if="isSubmitted" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ database }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./components/FullName.vue";
export default {
  components: { FullName },
  data() {
    return {
      fName: "",
      lName: "",
      email: "",
      password: "",
      database: "",
      fullName: "Aayushi Prajapati",
      isSubmitted: false,
    };
  },
  //   computed: {
  //     fullName() {
  //       return this.fName + " " + this.lName;
  //     },
  //   },
  methods: {
    submitData() {
      this.isSubmitted = true;
    },
  },
};
</script>

<style></style>
