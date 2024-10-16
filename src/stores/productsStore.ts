import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  const product = ref(null);
  const products = ref([]);
  const topProducts = ref([]);
  const categories = ref([]);
  const isLoading = ref(false);

  const getProducts = async (limit: number = 4) => {
    isLoading.value = true;

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const getProductsCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      categories.value = data;
    } catch (error) {
      console.error("Failed to fetch products categories:", error);
    }
  };

  const getTopProducts = async (limit: number = 4) => {
    isLoading.value = true;

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?sort=desc`
      );
      const data = await response.json();

      topProducts.value = data.slice(0, limit);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const getAProduct = async (id: number | string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      product.value = data;
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch that product with id : " + id, error);
    }
  };

  return {
    products,
    product,
    topProducts,
    categories,
    isLoading,
    getAProduct,
    getProducts,
    getProductsCategories,
    getTopProducts,
  };
});
