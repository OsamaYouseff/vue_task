<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cartStore";
import LoaderComponent from "@/components/LoaderComponent.vue";
import type { CartProduct } from "@/Interfaces/CartProduct";

const props = defineProps<{ cartItem: CartProduct }>();

// Accessing the store & refs
const productsStore = useCartStore();
const { isLoading } = storeToRefs(productsStore);
const itemQuantity = ref<number>(props.cartItem.quantity);

//// handlers
const handelDeleteProduct = () => {
  productsStore.deleteFromCart(props.cartItem.id);
};

const handelIncreaseQuantity = () => {
  productsStore.increaseQuantity(props.cartItem.id);
  itemQuantity.value++;
};

const handelDecreaseQuantity = () => {
  productsStore.decreaseQuantity(props.cartItem.id);
  itemQuantity.value--;
};
</script>
<template>
  <LoaderComponent v-if="isLoading" />
  <div
    class="cart-item d-flex gap-3 justify-center align-items-center"
    style="min-width: 330px"
  >
    <div class="cart-item-img">
      <img class="w-100 h-100" :src="props.cartItem.image" alt="product-img" />
    </div>
    <div class="cart-body flex-grow-1">
      <div class="flex-grow-1 mb-2">
        <div class="w-100 d-flex justify-content-between align-items-center">
          <h5 class="cart-item-title fs-4">
            {{ props.cartItem.title.slice(0, 20) }}
            {{ props.cartItem.title.length > 20 ? "..." : "" }}
          </h5>
          <img
            @click="handelDeleteProduct"
            class="delete-btn"
            style="cursor: pointer"
            src="@/assets/icons/delete.svg"
            alt="delete-icon"
          />
        </div>
        <p class="cart-item-text">Size: <span class="value">Large</span></p>
        <p class="cart-item-text">Color: <span class="value">White </span></p>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <!-- price -->
        <div class="price fw-semibold fs-4">${{ props.cartItem.price }}</div>

        <!-- control quantity -->
        <div
          class="quantity d-flex gap-4 align-items-center justify-content-center px-3 py-1"
          style="background: #f0f0f0; border-radius: 62px"
        >
          <img
            @click="handelDecreaseQuantity"
            class="change-quantity-btn"
            src="@/assets/icons/minus.svg"
            alt="minus-sing"
          />
          <span class="fs-5">{{ itemQuantity }}</span>
          <img
            @click="handelIncreaseQuantity"
            class="change-quantity-btn"
            src="@/assets/icons/plus.svg"
            alt="plus-sing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (max-width: 48rem) {
  .cart-item {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  h5 {
    font-size: 15px !important;
  }

  .cart-item p {
    font-size: 14px !important;
  }
}

.delete-btn {
  transition: all 0.35s ease;
  border: 1px solid transparent;
  padding: 2px;
  border-radius: 5px;
}

.delete-btn:hover {
  border-color: red;
}

.cart-item:not(:last-child) {
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
}

.cart-item-img {
  width: 124px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
}

.value {
  color: hsla(0, 0%, 0%, 0.6);
}

.change-quantity-btn {
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.35s ease;
}

.change-quantity-btn:hover {
  background: #d0d0d0;
}
</style>
