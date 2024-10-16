<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/productsStore";

// Accessing the store

const productsStore = useProductsStore();

const { products, topProducts, isLoading } = storeToRefs(productsStore);

onMounted(() => {
  productsStore.getProducts(4);
  productsStore.getTopProducts(4);
  productsStore.getProductsCategories();
});
</script>
<template>
  <section class="container-lg mt-4">
    <div class="new-arrivals py-4 d-flex flex-column">
      <h2 class="text-center fw-bold nb-3">NEW ARRIVALS</h2>
      <div
        class="products d-flex flex-wrap justify-content-evenly gap-3 row py-5"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <button
        v-if="products.length < 8"
        @click="productsStore.getProducts(8)"
        class="btn bg-white text-black rounded-pill py-2 px-2 mb-5"
      >
        VIEW ALL
      </button>
    </div>
    <div class="top-selling py-5 d-flex flex-column border-0">
      <h2 class="text-center fw-bold nb-3">TOP SELLING</h2>
      <div
        class="products d-flex flex-wrap justify-content-evenly gap-3 row py-5"
      >
        <ProductCard
          v-for="product in topProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <button
        v-if="topProducts.length < 8"
        @click="productsStore.getTopProducts(8)"
        class="btn bg-white text-black rounded-pill py-2 px-2 mb-5"
      >
        VIEW ALL
      </button>
    </div>
  </section>
  <div>
    <div
      v-if="isLoading"
      class="d-flex justify-content-center align-items-center bg-white h-100 position-fixed top-0 start-0 end-0 bottom-0"
      style="z-index: 999"
    >
      <div class="spinner-border" role="status"></div>
    </div>
  </div>
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
  font-size: 16px;
  margin: auto;
  border-color: #ececec;
}

@media (max-width: 48rem) {
  .products {
    justify-content: center !important;
  }
  h2 {
    font-size: 32px;
  }
  button {
    width: 100%;
  }
}
</style>
