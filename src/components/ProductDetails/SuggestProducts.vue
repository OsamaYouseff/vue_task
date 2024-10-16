<script setup lang="ts">
import ProductCard from "@/components/HomeComponents/ProductsCollections/ProductCard.vue";
</script>
<template>
  <div class="new-arrivals py-4 d-flex flex-column">
    <h2 class="text-center fw-bold nb-3" style="text-transform: uppercase">
      You might also like
    </h2>
    <div
      class="products d-flex flex-wrap justify-content-center gap-2 row py-5"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 48px;
}

@media (max-width: 48rem) {
  h2 {
    font-size: 32px;
  }
}
</style>
