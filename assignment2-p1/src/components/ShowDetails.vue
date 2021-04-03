<template>
  <h2>-- {{ detail.id }} --</h2>
  <div class="details">
    <h4>Personal Info</h4>
    <div class="pdetails">
      Name : {{ detail.name }}<br />
      Gender : {{ detail.gender }}<br />
      BirthDate : {{ detail.birthDate }}<br />
      Hobbies :
      <ul class="listg" v-for="hb in detail.hobbies" :key="hb">
        <li class="listgi">{{ hb }}</li>
      </ul>
    </div>
    <h4>Account Info</h4>
    <div class="adetails">
      Bank Name : {{ detail.bankName }}<br />
      Branch Name : {{ detail.branchName }}<br />
      Account Number : {{ detail.accountNum }}<br />
    </div>
    <h4>Contact Info</h4>
    <div class="cdetails">
      Email : {{ detail.email }}<br />
      Phone Number : {{ detail.phoneNum }}<br />
      Address : {{ detail.address }}<br />
    </div>
  </div>
</template>

<script>
//import ShowDetailsBase from './ShowDetailsBase.vue';
export default {
  props: ["detail"],
};
</script>
<style scoped>
h4 {
  background: rgb(202, 194, 194);
  color: rgb(85, 14, 136);
}
h2 {
  text-align: center;
  background: rgb(85, 14, 136);
  color: white;
  padding: 7px;
  margin: 1rem auto;
  max-width: 40rem;
  border-radius: 10px;
}
.listg {
  list-style-type: none;
  margin: 0px;
}
.listgi {
  text-decoration: none;
  margin: 0px;
}
.details {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
