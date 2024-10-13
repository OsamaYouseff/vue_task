<script setup lang="ts">
import Rating from "primevue/rating";
import { ref } from "vue";

const rating = ref(4);
</script>
<template>
  <div class="card col-md-3 border-0">
    <div class="img"></div>
    <div class="card-body">
      <h5 class="card-title mb-2">T-Shirt with Tape Details</h5>
      <Rating
        v-model="rating"
        class="mb-2 gap-2"
        style="color: #ffc633"
        readonly
      />
      <p class="fs-4">$<span class="fw-bold">120</span></p>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 295px;
}
h5 {
  font-size: 18px;
}

.img {
  min-width: 100%;
  min-height: 298px;
  max-height: 100%;
  background: no-repeat url("@/assets/images/1.png");
  background-position: center;
  background-size: 100%;
  border-radius: 20px;
}

@media (max-width: 48rem) {
  .card {
    max-width: 180px;
    padding: 0;
  }
  .img {
    min-height: 180px;
  }
  h5 {
    font-size: 14px;
  }
  p {
    font-size: 15px !important;
  }
}
</style>
