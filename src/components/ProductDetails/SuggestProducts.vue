<script setup lang="ts">
import ProductCard from "@/components/HomeComponents/ProductsCollections/ProductCard.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/productsStore";
// Accessing the store
const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);

onMounted(() => {
  productsStore.getProducts(4);
});

</script>
<template>
  <div class="new-arrivals py-4 d-flex flex-column">
    <h2 class="text-center fw-bold nb-3" style="text-transform: uppercase">
      You might also like
    </h2>
    <div
      class="products d-flex flex-wrap justify-content-evenly gap-3 row py-5"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
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
