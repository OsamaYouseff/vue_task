<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref<boolean>(true);
</script>

<template>
  <div
    v-if="isVisible"
    class="sign-up-bar p-1 bg-black text-white d-flex justify-content-between align-items-center"
  >
    <div
      class="container-lg position-relative d-flex align-items-center py-1 justify-content-center gap-1"
    >
      <p class="">Sign up and get 20% off to your first order.</p>
      <a href="#" class="text-white">Sign Up Now</a>
      <div
        @click="isVisible = false"
        class="close-btn d-none d-sm-block position-absolute top-0 d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-x text-white fs-4"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.close-btn {
  cursor: pointer;
  right: 0 !important;
  transform: translateX(-12px);
}

@media (max-width: 768px) {
  p,
  a {
    font-size: 12px;
  }
}
</style>
