<template>
  <section>
    <base-card>
      <h3>{{ fullName }}</h3>
      <h4>${{ selectedCoach.hourlyRate }}/hour</h4>
      <base-badge
        v-for="area in selectedCoach.areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h3>Intreserd to reach out now??</h3>
        <!-- <base-button link :to="contactLink"> Contact</base-button> -->
      </header>
      <router-view></router-view>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  created() {
    console.log(this.id);
    console.log(this.$store.getters['coaches/coaches']);
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id == this.id
    );
  },
  components: { BaseCard },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$store.path + '/' + this.id + '/contact';
    }
  }
};
</script>
