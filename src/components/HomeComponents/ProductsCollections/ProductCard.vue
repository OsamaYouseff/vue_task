<script setup lang="ts">
import Rating from "primevue/rating";
import { ref } from "vue";

const props = defineProps({
  id: Number,
});

const discountAvailable = ref<boolean>(props.id % 3 === 0);
const rating = ref<number>(4);
</script>
<template>
  <div class="card border-0 p-0">
    <RouterLink to="/product-details/1">
      <div class="img"></div>
    </RouterLink>

    <div class="card-body">
      <h5 class="card-title mb-2">T-Shirt with Tape Details</h5>
      <div class="d-flex align-items-center mb-2 gap-2">
        <Rating
          v-model="rating"
          class="gap-1"
          style="color: #ffc633"
          readonly
        />
        <p class="ms-2 mb-0" style="color: #666666; font-size: 14px">
          <span class="fw-semibold text-black">{{ rating.toFixed(1) }}</span
          >/5
        </p>
      </div>

      <!-- price wrapper -->
      <div class="price-wrapper d-flex align-items-center gap-2">
        <p style="font-size: 24px; font-weight: 500">$<span>120</span></p>
        <p
          v-if="discountAvailable"
          class="old-price"
          style="
            font-size: 24px;
            font-weight: 700;
            color: hsla(0, 0%, 0%, 0.4);
            text-decoration: line-through;
          "
        >
          $<span>232</span>
        </p>
        <span v-if="discountAvailable" class="discount">-20%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 295px;
  cursor: pointer;
}

.img {
  min-width: 100%;
  min-height: 298px;
  max-height: 100%;
  background: no-repeat url("@/assets/images/1.png");
  background-color: #f0eeed;
  background-position: center;
  background-size: 100%;
  border-radius: 20px;
  border: 1px solid transparent !important;
  transition: all 0.3s ease-in-out;
}

.card:hover .img {
  border-color: hsla(0, 0%, 0%, 1) !important;
}

h5 {
  font-size: 18px;
}

@media (max-width: 48rem) {
  .card {
    max-width: 168px !important;
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

.discount {
  width: Fixed (58px) px;
  height: Hug (28px) px;
  top: 2219px;
  left: 231px;
  padding: 6px 14px 6px 14px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  background: hsla(0, 100%, 60%, 0.1);
  color: #ff3333;
}
</style>
