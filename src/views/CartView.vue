<script setup lang="ts">
import CartItem from "../components/Cart/CartItem.vue";
</script>

<template>
  <section>
    <div class="container-lg">
      <!-- path navigation -->
      <div class="path d-flex align-items-center gap-2">
        <router-link style="color: hsla(0, 0%, 0%, 0.6) !important" to="/"
          >Home
        </router-link>
        <img src="../assets/icons/next-arrow.svg" alt="" />
        <router-link class="text-black" to="/cart">Cart</router-link>
      </div>

      <!-- header -->
      <h1 class="fw-bolder mb-3">YOUR CART</h1>

      <div class="pb-5 d-flex gap-3 flex-wrap justify-content-between">
        <!-- Cart content -->
        <div class="cart-content d-flex flex-column justify-content-center">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <!-- Order summary -->
        <div class="order-summary">
          <h3 class="mb-2">Order Summary</h3>
          <!-- Subtotal -->
          <div
            class="d-flex justify-content-between flex-column gap-4 pt-2 py-3 mb-3"
            style="border-bottom: 1px solid hsla(0, 0%, 0%, 0.1)"
          >
            <div class="d-flex justify-content-between">
              <p class="price-category">Subtotal</p>
              <p class="price-amount">$565</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="price-category">Discount <span>-(20%)</span></p>
              <p class="text-danger price-amount" style="color: #ff3333">
                -$113
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="price-category">Delivery Fee</p>
              <p class="price-amount">$15</p>
            </div>
          </div>
          <div class="total d-flex justify-content-between mb-3">
            <p>Total</p>
            <p class="price-amount">$120</p>
          </div>
          <!-- Promo code -->
          <div
            class="promo-code d-flex justify-content-between align-items-center gap-2 mb-3"
          >
            <div class="input-container w-100">
              <img src="@/assets/icons/discount.svg" alt="mail-icon" />
              <input
                class="w-100 h-100 rounded-pill border-0 pl-4"
                type="text"
                placeholder="Add promo code"
              />
            </div>
            <button class="apply-btn bg-black text-white">Apply</button>
          </div>
          <!-- Checkout -->
          <button
            class="btn checkout-btn bg-black text-white d-flex justify-content-center align-items-center gap-2"
          >
            <span> Go to Checkout </span>
            <img
              class="arrow-icon text-white"
              src="@/assets/icons/right-arrow-w.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section .path {
  border-top: 1px solid hsla(0, 0%, 0%, 0.1);
  padding: 15px 0px;
}

a {
  text-decoration: none;
}

.cart-content {
  width: 58.5%;
}

.order-summary {
  width: 40%;
  max-height: fit-content;
}

.cart-content,
.order-summary {
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  flex-flow: 1;
  min-width: 380px;
  padding: 20px;
}

@media (max-width: 1200px) {
  .cart-content,
  .order-summary {
    width: 100% !important;
  }
  .cart-content {
    padding: 4px 10px;
  }

  .order-summary {
    padding: 15px;
  }
}

.price-category {
  color: hsla(0, 0%, 0%, 0.6);
}
.price-amount {
  font-weight: 600;
}

.input-container {
  position: relative;
  height: 46px;
}

input {
  background: #f5f5f5;
  padding-left: 50px;
}

.input-container img {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.apply-btn {
  min-width: 119px;
  max-width: 119px;
}
.checkout-btn {
  width: 100% !important;
  font-size: 15px;
}

.checkout-btn img {
  width: 16px;
}

.apply-btn,
.checkout-btn {
  height: 48px;
  border-radius: 62px;
  padding: 4px 10px;
}
</style>
