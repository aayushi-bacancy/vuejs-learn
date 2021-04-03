<template>
  <div class="co-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading"></div>
      <h3 class="panel-title">
        {{ stock.name }}
        <small> (price:{{ stock.price }}) </small>
      </h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input
          type="number"
          v-model="quantity"
          class="form-control"
          placeholder="Quantity"
          :class="{ danger: insufficientFunds }"
        />
      </div>
      <div class="pull-right">
        <button
          class="btn btn-success"
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
        >
          {{ insufficientFunds ? 'insufficient Funds' : 'Buy' }}
          
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  computed : {
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds;
    },
    funds(){
      return this.$store.getters.funds;
    }
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>


<style scoped>
.danger {
  border: 2px solid red;
}
</style>