<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        {{ "HELOOO" | reverse }}
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <hr />
        <!-- Exercise 2 -->

        {{ "no worries" | calculateLength }}
        <hr />
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        {{ reversed }}
        {{ calculateLengthA }}
        <hr />
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        {{ calculateLengthA }}-ooo
      </div>
    </div>
  </div>
</template>

<script>
import { lengthAware } from "./lengthAwareMixins";
export default {
  mixins: [lengthAware],
  data() {
    return {
      fText: "helloo",
      sText: "no worries",
    };
  },
  filters: {
    reverse(val) {
      return val.split("").reverse().join("");
    },
  },
  computed: {
    reversed() {
      return this.fText.split("").reverse().join("");
    },
    // calculateLengthA() {
    //   return this.sText + "(" + this.sText.length + ")";
    // },
  },
};
</script>

<style></style>
