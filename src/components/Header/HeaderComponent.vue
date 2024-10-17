<script setup lang="ts">
import { onMounted, ref } from "vue";
import MenuDrawer from "./MenuDrawer.vue";
import { useCartStore } from "@/stores/cartStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
const cartItemsNumber = ref<number>(cart.value.cartItemsNum || 0);

onMounted(() => {
  cartStore.getCart();
});

watch(
  () => cart.value,
  (newCart) => {
    cartItemsNumber.value = newCart.cartItemsNum;
  }
);
</script>

<template>
  <div class="container-lg px-0">
    <header class="d-flex align-items-center justify-content-between py-3">
      <div class="d-flex align-items-center gap-3">
        <MenuDrawer />
        <!-- logo -->
        <RouterLink class="logo fs-2 text-decoration-none text-black" to="/"
          >SHOP.CO
        </RouterLink>
      </div>

      <!-- nav -->
      <nav class="d-none d-sm-none d-md-block">
        <ul class="d-flex align-items-center gap-3 list-unstyled m-0 p-0">
          <li>
            <RouterLink to="#"
              >Shop
              <img
                src="@/assets/icons/chevron-down.svg"
                alt="chevron-down-img"
              />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="#">On Sale </RouterLink>
          </li>
          <li><RouterLink to="#">New Arrivals</RouterLink></li>
          <li><RouterLink to="#">Brands</RouterLink></li>
        </ul>
      </nav>

      <!-- search -->
      <div
        class="w-25 position-relative flex-grow-1 d-none d-sm-none d-md-block"
      >
        <input
          type="text"
          class="form-control rounded-pill pl-4"
          placeholder="Search for products..."
        />
        <i
          class="bi bi-search position-absolute top-50 start-0 translate-middle-y"
        ></i>
      </div>

      <!-- icons -->
      <div class="d-flex gap-3 align-items-center text-black">
        <img
          class="d-sm-block d-md-none"
          src="@/assets/icons/search-icon.svg"
          alt="cart-icon"
        />
        <RouterLink class="cart-icon position-relative" to="/cart"
          ><img src="@/assets/icons/cart.svg" alt="cart-icon" />
          <span
            class="position-absolute"
            style="
              width: 0.9375rem;
              height: 0.9375rem;
              display: flex;
              justify-content: center;
              align-items: center;
              top: 0;
              right: -0.5rem;
              background: #ff3333;
              color: white;
              font-size: 0.625rem;
              border-radius: 50%;
            "
            >{{ cartItemsNumber }}</span
          >
        </RouterLink>
        <RouterLink to="/"
          ><img src="@/assets/icons/user.svg" alt="user-icon" />
        </RouterLink>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  gap: 2.5rem;
}

@media (max-width: 61.9375rem) {
  header {
    padding: 0 0.3125rem;
  }
}

.logo {
  font-weight: 900;
}

li a {
  cursor: pointer;
}

li a {
  font-size: 16px !important;
  transition: all 0.35s ease-in-out;
  border-bottom: 1px solid transparent;
}
li:hover a {
  border-color: #180400;
}

input {
  background: #f0f0f0;
  padding-left: 2.5rem;
}

.bi-search {
  left: 0.9375rem !important;
  color: #909090;
  font-weight: bold;
}

a {
  color: #000;
  font-size: 1.125rem;
  text-decoration: none;
}

.offcanvas {
  background: #f0f0f0;
  padding: 1.25rem;
}

.btn-close {
  font-size: 1.25rem;
}

img {
  cursor: pointer;
}
</style>
