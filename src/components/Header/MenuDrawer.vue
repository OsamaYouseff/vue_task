<script setup lang="ts"></script>
<template>
  <div class="d-sm-block d-md-none">
    <button
      class="menu-icon navbar-toggler py-1 px-2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <img src="@/assets/icons/menu.svg" alt="menu-icon" />
    </button>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <button
        type="button"
        class="btn-close mb-3"
        style="font-size: 20px"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>

      <div class="links h-100">
        <ul
          class="h-50 d-flex gap-3 align-items-center flex-column justify-content-around list-unstyled m-0 p-0"
        >
          <li>
            <RouterLink to="/"
              >Shop <i class="bi bi-chevron-down"></i
            ></RouterLink>
          </li>
          <li><RouterLink to="/">On Sale</RouterLink></li>
          <li><RouterLink to="/">New Arrivals</RouterLink></li>
          <li><RouterLink to="/">Brands</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #000;
  font-size: 18px;
  text-decoration: none;
}

.offcanvas {
  background: #f0f0f0;
  padding: 20px;
}

li {
  cursor: pointer;
  border: 1px solid rgb(183, 159, 159);
  padding: 10px;
  width: 100%;
  text-align: center;
  border-radius: 6px;
}
</style>
