<template>
  <form @submit.prevent="">
    <the-navbar :currentTab="currentTab"></the-navbar>

    <!-- Personal details -->
    <section v-if="currentTab == 1">
      <div class="form-group">
        <label for="name"> Name </label>
        <input
          type="text"
          class="form-control"
          id="name"
          autocomplete="off"
          @blur="validateName()"
          v-model.trim="details.name"
          placeholder=""
        />
        <!-- <p v-if="errors.includes('name')">{{ errors }}</p> -->
        <p v-if="validityName == 'required'">** name property Required</p>
        <p v-if="validityName == 'invalid'">** name property must be letters</p>
      </div>

      <div class="form-group">
        <label> Hobby: </label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox"
                value="Sports"
                name="hobby"
                v-model.trim="details.hobbies"
              />
            </div>
          </div>
          <input type="text" class="form-control" disabled value="Sports" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox"
                value="Cultural"
                name="hobby"
                v-model.trim="details.hobbies"
              />
            </div>
          </div>
          <input type="text" class="form-control" disabled value="Cultural" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox"
                value="SocialWork"
                name="hobby"
                v-model.trim="details.hobbies"
              />
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            disabled
            value="Social-Work"
          />
        </div>
        <!-- <p v-if="errors.includes('hobbies')">{{ errors }}</p> -->
        <p v-if="validityHobbies == 'required'">** Select atleast one hobby</p>
        <p></p>
      </div>

      <div class="form-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <label for="gender"> Male: </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              v-model.trim="details.gender"
              aria-label="Radio button for following text input"
            />
          </div>
          <div class="input-group-text">
            <label for="gender"> Female: </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              v-model.trim="details.gender"
              aria-label="Radio button for following text input"
            />
          </div>
        </div>
        <!-- <p v-if="errors.includes('gender')">{{ errors }}</p> -->
        <p v-if="validityGender == 'required'">** please select gender</p>
      </div>
      <div class="form-group">
        <label> Birth-Date </label>
        <!-- <datepicker></datepicker> -->
        <flat-pickr
          v-model.trim="details.bod"
          @onChange="validateBOD()"
        ></flat-pickr>
        <!-- <p v-if="errors.includes('birthdate')">{{ errors }}</p> -->
        <p v-if="validityBOD == 'required'">** birthdate field Required</p>
        <p v-if="validityBOD == 'invalid'">** invalid birthDate</p>
      </div>

      <div class="form-group">
        <label for="state"> State </label>
        <select class="form-control" id="state" v-model.trim="details.state">
          <option>Gujrat</option>
          <option>Maharashtra</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>MadhyaPradesh</option>
        </select>
        <!-- <p v-if="errors.includes('state')">{{ errors }}</p> -->
        <p v-if="validityState == 'required'">** please select state</p>
      </div>
      <div class="form-group">
        <label for="address"> Address </label>
        <textarea
          class="form-control"
          id="address"
          rows="3"
          @blur="validateAddress()"
          v-model.trim="details.address"
        ></textarea>
        <!-- <p v-if="errors.includes('address')">{{ errors }}</p> -->
        <p v-if="validityAddress == 'required'">** address field Required</p>
      </div>
    </section>

    <!-- Account details -->
    <section v-if="currentTab == 2">
      <div class="form-group">
        <label for="bname"> Bank Name </label>
        <input
          type="text"
          class="form-control"
          @blur="validateBName()"
          v-model.trim="details.bName"
          id="bname"
          placeholder=""
        />
        <!-- <p v-if="errors.includes('bank name')">{{ errors }}</p> -->
        <p v-if="validityBName == 'required'">** bank name field Required</p>
        <p v-if="validityBName == 'invalid'">** bank name must be letters</p>
      </div>
      <div class="form-group">
        <label for="brname"> Branch Name </label>
        <input
          type="text"
          class="form-control"
          @blur="validateBrName()"
          v-model.trim="details.brName"
          id="brname"
          placeholder=""
        />
        <!-- <p v-if="errors.includes('branch name')">{{ errors }}</p> -->
        <p v-if="validityBrName == 'required'">** branch name field Required</p>
        <p v-if="validityBrName == 'invalid'">** branch name must be letters</p>
      </div>
      <div class="form-group">
        <label for="acnum"> Account Number </label>
        <input
          type="text"
          class="form-control"
          v-model.trim="details.accNum"
          @blur="validateAccNum()"
          id="acnum"
          placeholder=""
        />
        <!-- <p v-if="errors.includes('account number')">{{ errors }}</p> -->
        <p v-if="validityAccNum == 'required'">** account num field Required</p>
        <p v-if="validityAccNum == 'invalid'">** account num must be digits</p>
      </div>
    </section>

    <!--  Contact Details -->
    <section v-if="currentTab == 3">
      <div class="form-group">
        <label for="email"> Email address </label>
        <input
          type="email"
          class="form-control"
          id="email"
          @blur="validateEmail()"
          v-model.trim="details.email"
          placeholder="name@example.com"
        />
        <!-- <p v-if="errors.includes('email')">{{ errors }}</p> -->
        <p v-if="validityEmail == 'required'">** email field Required</p>
        <p v-if="validityEmail == 'invalid@'">** invalid @ position in email</p>
        <p v-if="validityEmail == 'invalid.'">** invalid . position in email</p>
      </div>
      <div class="form-group">
        <label for="phnum"> Phone Number </label>
        <input
          type="text"
          @blur="validatePhNum()"
          v-model.trim="details.phNum"
          class="form-control"
          id="phnum"
        />
        <!-- <p v-if="errors.includes('phone number')">{{ errors }}</p> -->
        <p v-if="validityPhNum == 'required'">** phone number field Required</p>
        <p v-if="validityPhNum == 'invalid'">** only numbers are allowed</p>
        <p v-if="validityPhNum == 'invalidD'">** in number must be 10 digits</p>
      </div>
    </section>
    <section v-if="!isShow" class="btn">
      <button
        v-if="currentTab > 1"
        @click="updateTabM()"
        type="button"
        class="btn btn-secondary"
      >
        Prev
      </button>
      <button
        v-if="currentTab < 3"
        @click="updateTabP()"
        type="button"
        class="btn btn-secondary"
      >
        Next
      </button>
      <button
        v-if="currentTab == 3"
        @click="submitData()"
        type="button"
        class="btn btn-secondary"
      >
        Submit
      </button>
    </section>
  </form>
</template>

<script>
// import Datepicker from 'vuejs-datepicker';
import TheNavbar from "./TheNavbar.vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: {
    flatPickr,
    TheNavbar,
  },
  emits: ["save-data"],
  data() {
    return {
      details: {
        name: "",
        address: "",
        email: null,
        gender: "",
        state: "",
        bName: "",
        brName: "",
        accNum: "",
        phNum: "",
        bod: null,
        hobbies: [],
      },
      currentTab: 1,
      TotalTab: 3,
      isShow: false,
      errors: "",
      validityName: "pending",
      validityAddress: "pending",
      validityBName: "pending",
      validityBrName: "pending",
      validityAccNum: "pending",
      validityEmail: "pending",
      validityPhNum: "pending",
      validityBOD: "pending",
      validityHobbies: "pending",
      validityState: "pending",
      validityGender: "pending",
    };
  },
  methods: {
    validateName() {
      if (this.details.name == "") {
        this.validityName = "required";
        return false;
      } else if (!/^[a-zA-Z]+$/.test(this.details.name)) {
        this.validityName = "invalid";
        return false;
      } else {
        this.validityName = "valid";
      }
    },
    validateHobbies() {
      if (this.details.hobbies.length === 0) {
        this.validityHobbies = "required";
        return false;
      } else {
        this.validityHobbies = "valid";
      }
    },
    validateGender() {
      if (this.details.gender == "") {
        this.validityGender = "required";
        return false;
      } else {
        this.validityGender = "valid";
      }
    },
    validateState() {
      if (this.details.state == "") {
        this.validityState = "required";
        return false;
      } else {
        this.validityState = "valid";
      }
    },
    validateAddress() {
      if (this.details.address == "") {
        this.validityAddress = "required";
        return false;
      } else {
        this.validityAddress = "valid";
      }
    },
    validateBName() {
      if (this.details.bName == "") {
        this.validityBName = "required";
        return false;
      } else if (!/^[a-zA-Z]+$/.test(this.details.bName)) {
        this.validityBName = "invalid";
        return false;
      } else {
        this.validityBName = "valid";
      }
    },
    validateBrName() {
      if (this.details.brName == "") {
        this.validityBrName = "required";
        return false;
      } else if (!/^[a-zA-Z]+$/.test(this.details.brName)) {
        this.validityBrName = "invalid";
        return false;
      } else {
        this.validityBrName = "valid";
      }
    },
    validateAccNum() {
      if (this.details.accNum == "") {
        this.validityAccNum = "required";
        return false;
      } else if (isNaN(this.details.accNum)) {
        this.validityAccNum = "invalid";
        return false;
      } else {
        this.validityAccNum = "valid";
      }
    },
    validateEmail() {
      if (this.details.email == null) {
        this.validityEmail = "required";
        return false;
      } else if (this.details.email.indexOf("@") <= 0) {
        this.validityEmail = "invalid@";
        return false;
      } else if (
        this.details.email.charAt(this.details.email.length - 4) != "." &&
        this.details.email.charAt(this.details.email.length - 3) != "."
      ) {
        this.validityEmail = "invalid.";
        return false;
      } else {
        this.validityEmail = "valid";
      }
    },
    validatePhNum() {
      if (this.details.phNum == "") {
        this.validityPhNum = "required";
        return false;
      } else if (isNaN(this.details.phNum)) {
        this.validityPhNum = "invalid";
        return false;
      } else if (this.details.phNum.length != 10) {
        this.validityPhNum = "invalidD";
        return false;
      } else {
        this.validityPhNum = "valid";
      }
    },
    validateBOD() {
      const selectDate = new Date(this.details.bod).toLocaleDateString();
      const currentDate = new Date().toLocaleDateString();
      const arr1 = selectDate.split("/");
      const arr2 = currentDate.split("/");
      if (this.details.bod == null) {
        this.validityBOD = "required";
        return false;
      } else if (+arr1[2] > +arr2[2]) {
        this.validityBOD = "invalid";
        return false;
      } else if (+arr1[2] == +arr2[2]) {
        console.log(+arr1[0], +arr2[0]);
        if (+arr1[0] > +arr2[0]) {
          this.validityBOD = "invalid";
          return false;
        }
        if (+arr1[0] == +arr2[0]) {
          if (+arr1[1] > +arr2[1]) {
            this.validityBOD = "invalid";
            return false;
          } else {
            this.validityBOD = "valid";
            return true;
          }
        } else {
          this.validityBOD = "valid";
          return true;
        }
      } else {
        this.validityBOD = "valid";
        return true;
      }
    },
    updateTabP() {
      if (this.currentTab == 1) {
        const resName = this.validateName();
        const resBirthDate = this.validateBOD();
        const resGender = this.validateGender();
        const resHobbies = this.validateHobbies();
        const resState = this.validateState();
        const resAdd = this.validateAddress();
        if (resName == false) {
          return false;
        }
        if (resHobbies == false) {
          return false;
        }
        if (resGender == false) {
          return false;
        }
        if (resState == false) {
          return false;
        }
        if (resBirthDate == false) {
          return false;
        }
        if (resAdd == false) {
          return false;
        }
        this.errors = "";
      }
      if (this.currentTab == 2) {
        const resBrName = this.validateBrName();
        const resBName = this.validateBName();
        const resAccNum = this.validateAccNum();
        if (resBName == false) {
          return false;
        }
        if (resBrName == false) {
          return false;
        }
        if (resAccNum == false) {
          return false;
        }
        this.errors = "";
      }
      this.currentTab += 1;
    },
    updateTabM() {
      this.currentTab -= 1;
    },
    submitData() {
      const resEmail = this.validateEmail();
      const resPhNum = this.validatePhNum();
      if (resEmail == false) {
        return false;
      }
      if (resPhNum == false) {
        return false;
      }
      this.isShow = true;
      this.$emit("save-data", this.details, this.isShow);
      this.currentTab = 0;
      this.details.name = "";
      this.details.address = "";
      this.details.email = "";
      this.details.gender = "";
      this.details.state = "";
      this.details.bName = "";
      this.details.brName = "";
      this.details.accNum = "";
      this.details.phNum = "";
      this.details.bod = null;
    },
  },
};
</script>

<style scoped>
.form-group {
  box-sizing: border-box;
  margin: 10px 50px 10px 50px;
}
.input-group-text {
  margin-right: 20px;
}

.btn {
  margin-left: 20px;
}
.btn > button {
  background: rgb(85, 14, 136) !important ;
  color: white !important ;
  border: none;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 10px;
}
p {
  color: rgb(245, 29, 29);
}
</style>
