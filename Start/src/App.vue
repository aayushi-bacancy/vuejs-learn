<template>
  <div class="container">
    <the-header :maxQuotes="maxQuotes" :qouteCount="quotes.length"></the-header>
    <new-quote @newQuote="addQuote"></new-quote>
    <quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Click On a Quote To Delete It!</div>
      </div>
    </div>
  </div>
</template>

<script>
import NewQuote from "./components/NewQuote.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    QuoteGrid,
    NewQuote,
    TheHeader,
  },
  data() {
    return {
      quotes: ["Life Is Beautiful"],
      maxQuotes: 10,
    };
  },
  methods: {
    addQuote(quote) {
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    },
  },
};
</script>

<style></style>
