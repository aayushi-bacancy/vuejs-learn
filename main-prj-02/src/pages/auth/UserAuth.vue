<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An Error Occured!!"
      @close="handleError()"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating.." fixed>
      <p>Authenticating...</p>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm()">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Invalid Email or Password (Password Must be greater than 6)
        </p>
        <base-button>{{ submitButton }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode()">
          {{ switchModeButton }}</base-button
        >
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseDialog from '../../components/ui/BaseDialog.vue';
export default {
  components: { BaseDialog },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'Login',
      isLoading: false,
      error: null
    };
  },
  computed: {
    submitButton() {
      if (this.mode == 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButton() {
      if (this.mode == 'login') {
        return 'Signup Instead';
      } else {
        return 'Login Instead';
      }
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      this.isLoading = true;
      if (
        this.email == '' ||
        !this.email.includes('@') ||
        !this.email.includes('.') ||
        this.password < 6
      ) {
        this.formIsValid = false;
        return;
      }
      const actionPayoad = {
        email: this.email,
        password: this.password
      };

      try {
        if (this.mode == 'login') {
          await this.$store.dispatch('login', {
            actionPayoad
          });
        } else {
          await this.$store.dispatch('signup', {
            actionPayoad
          });
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || 'Failed to authenticate try latter.';
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode == 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
