<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">First Name: </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        v-model.trim="firstName"
      />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name: </label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        v-model.trim="lastName"
      />
    </div>
    <div class="form-control">
      <label for="description">Descrition: </label>
      <textarea
        name="descrition"
        id="description"
        cols="20"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Rate:</label>
      <input type="number" id="rate" v-model.number="rate" name="rate" />
    </div>
    <div class="form-control">
      <h3>Areas Of Experties</h3>
      <div>
        <input
          type="checkbox"
          value="frontend"
          id="frontend"
          v-model.trim="areas"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="backend"
          id="backend"
          v-model.trim="areas"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="career"
          id="career"
          v-model.trim="areas"
        />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: []
    };
  },
  methods: {
    submitForm() {
      const FormData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        areas: this.areas
      };
      this.$emit('save-data', FormData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
