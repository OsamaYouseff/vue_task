<script setup lang="ts">
import { ref } from "vue";
const itemAmount = ref<number>(10);
</script>
<template>
  <div
    class="cart-item d-flex gap-3 justify-center align-items-center"
    style="min-width: 330px"
  >
    <div class="cart-item-img">
      <img class="w-100" src="@/assets/images/13.png" alt="product-img" />
    </div>
    <div class="cart-body flex-grow-1">
      <div class="flex-grow-1 mb-2">
        <div class="w-100 d-flex justify-content-between align-items-center">
          <h5 class="cart-item-title fs-4">T-Shirt with Tape Details</h5>
          <img
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
        <div class="price fw-semibold fs-4">$120</div>
        <!-- control quantity -->
        <div
          class="quantity d-flex gap-4 align-items-center justify-content-center px-3 py-1"
          style="background: #f0f0f0; border-radius: 62px"
        >
          <img
            @click="--itemAmount"
            class="change-quantity-btn"
            src="@/assets/icons/minus.svg"
            alt="minus-sing"
          />
          <span class="fs-5">{{ itemAmount }}</span>
          <img
            @click="itemAmount++"
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
