<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress">
          <div
            class="progress-bar"
            role="progrssbar"
            area-valuenow="60"
            aria-valuemin="0"
            arrea-valuemax="100"
            :style="{ width: (qouteCount / maxQuotes) * 100 + '%' }"
          >
            {{ qouteCount }}/{{ maxQuotes }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["qouteCount", "maxQuotes"],
};
</script>
