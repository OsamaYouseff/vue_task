import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "@/Interfaces/Product";

export const useProductsStore = defineStore("products", () => {
  const product = ref<Product | null>(null);
  const products = ref<Product[] | []>([]);
  const topProducts = ref<Product[] | []>([]);
  const categories = ref<string[] | null>([]);
  const isLoading = ref<boolean>(false);

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

  const getAProduct = async (id: number | string): Promise<string> => {
    isLoading.value = true;

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data: Product = await response.json(); // Ensure correct typing here
      product.value = data;
    } catch (error) {
      console.error(
        "Failed to fetch that product with id: " + id.toString(),
        error
      );
      return "";
    } finally {
      isLoading.value = false;
    }

    /// return the product image
    return String(product.value?.image) ?? "";
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
