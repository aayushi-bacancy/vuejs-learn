<template>
  <div class="row">
    <form>
      <div class="col-sm-6 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <label for="quote">Quote</label>
        <textarea name="quote" id="quote" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-6 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <button @click.prevent="createNew" class="btn btn-primary">
          AddQuote
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    createNew() {
      this.$emit("newQuote", this.quote);
      this.quote = "";
    },
  },
};
</script>
