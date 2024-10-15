<script setup lang="ts">
import Rating from "primevue/rating";
import { ref } from "vue";

const props = defineProps({
  review: Object,
});

const rating = ref(props.review.rating);
</script>
<template>
  <div class="card p-4 rounded-4 pt-3">
    <div class="d-flex align-items-center justify-content-between mb-2">
      <Rating
        v-model="rating"
        class="rating gap-2"
        style="color: #ffc633"
        readonly
      />
      <img
        style="cursor: pointer"
        src="@/assets/icons/edit.svg"
        alt="edit-icon"
      />
    </div>

    <div class="customer-name mb-2 fs-5">
      {{ props.review.name }}
      <img src="@/assets/icons/verified.svg" alt="verified-icon" />
    </div>
    <p class="description mb-3">
      {{ props.review.description }}
    </p>
    <p class="posted-date text-muted">Posted on {{ props.review.date }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 47%;
  flex-grow: 1;
  min-width: 400px;
  border: 1px solid hsla(0, 0%, 0%, 0.1);
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
