<script setup lang="ts">
import Rating from "primevue/rating";
import { ref } from "vue";

const props = defineProps({
  testimonial: Object,
});

const rating = ref(props.testimonial.rating);
</script>
<template>
  <div class="card p-4 rounded-4">
    <Rating
      v-model="rating"
      class="rating mb-2 gap-2"
      style="color: #ffc633"
      readonly
    />

    <div class="customer-name mb-2 fs-5">
      {{ props.testimonial.name }}
      <img src="@/assets/icons/verified.svg" alt="verified-icon" />
    </div>
    <p class="description">
      {{ props.testimonial.description }}
    </p>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  min-width: 400px;
}

.description {
  color: hsla(0, 0%, 0%, 0.6);
}

@media screen and (max-width: 48rem) {
  .card {
    min-width: 358px;
    padding: 10px 15px !important;
  }
  .description {
    font-size: 14px;
  }
}

.rating {
  width: 30px !important;
  height: 30px !important;
  scale: 1.2;
}
</style>
