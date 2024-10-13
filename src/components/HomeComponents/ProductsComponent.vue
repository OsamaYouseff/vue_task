<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
</script>
<template>
  <section class="container-lg mt-4">
    <div class="new-arrivals py-4 d-flex flex-column">
      <h2 class="text-center fw-bold nb-3">NEW ARRIVALS</h2>
      <div
        class="products d-flex flex-wrap justify-content-center gap-2 row py-5"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button class="btn bg-white text-black rounded-pill py-2 px-2 mb-5">
        VIEW ALL
      </button>
    </div>
    <div class="top-selling py-5 d-flex flex-column border-0">
      <h2 class="text-center fw-bold nb-3">TOP SELLING</h2>
      <div
        class="products d-flex flex-wrap justify-content-center gap-2 row py-5"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button class="btn bg-white text-black rounded-pill py-2 px-2 mb-5">
        VIEW ALL
      </button>
    </div>
  </section>
</template>

<style scoped>
.new-arrivals {
  border-bottom: 1px solid #e6e6e6;
}

h2 {
  font-size: 48px;
}

button {
  height: 52px;
  width: 218px;
  font-style: 16px;
  margin: auto;
  border-color: #ececec;
}
</style>
