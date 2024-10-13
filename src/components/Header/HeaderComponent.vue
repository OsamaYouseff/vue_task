<script setup lang="ts">
import MenuDrawer from "./MenuDrawer.vue";
</script>

<template>
  <div class="container-lg">
    <header class="d-flex align-items-center justify-content-between py-2">
      <div class="d-flex align-items-center gap-3">
        <MenuDrawer />
        <!-- logo -->
        <RouterLink class="logo fs-2 text-decoration-none text-black" to="/"
          >SHOP.CO
        </RouterLink>
      </div>

      <!-- nav -->
      <nav class="d-none d-sm-none d-md-block">
        <ul class="d-flex gap-3 align-items-center list-unstyled m-0 p-0">
          <li>
            <RouterLink to="/"
              >Shop <i class="bi bi-chevron-down"></i
            ></RouterLink>
          </li>
          <li><RouterLink to="/">On Sale</RouterLink></li>
          <li><RouterLink to="/">New Arrivals</RouterLink></li>
          <li><RouterLink to="/">Brands</RouterLink></li>
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
        <img src="@/assets/icons/search-icon.svg" alt="cart-icon" />
        <img src="@/assets/icons/cart.svg" alt="cart-icon" />
        <img src="@/assets/icons/user.svg" alt="user-icon" />
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  gap: 40px;
}

.logo {
  font-weight: 900;
}

li {
  cursor: pointer;
}

input {
  background: #f0f0f0;
  padding-left: 40px;
}

.bi-search {
  left: 15px !important;
  color: #909090;
  font-weight: bold;
}

a {
  color: #000;
  font-size: 18px;
  text-decoration: none;
}

.offcanvas {
  background: #f0f0f0;
  padding: 20px;
}

.btn-close {
  font-size: 20px;
}

img {
  cursor: pointer;
}
</style>
