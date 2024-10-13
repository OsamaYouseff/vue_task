<script setup lang="ts"></script>
<template>
  <section>
    <div class="h-100 container-lg">
      <div
        class="hero-section h-100 d-flex align-items-center justify-content-between row"
      >
        <div class="content col-12 col-md-6 p-3">
          <h1 class="mb-3 fw-bold d-md-fs-5">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p class="fs-8 mb-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button class="btn bg-black text-white rounded-pill py-2 px-2 mb-5">
            Shop Now
          </button>

          <div class="stats">
            <div class="box">
              <h2>200+</h2>
              <p>International Brands</p>
            </div>
            <div class="divider"></div>
            <div class="box">
              <h2>2000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div class="divider d-md-block d-none"></div>
            <div class="box">
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div class="image col-12 col-md-6 h-100">
          <img
            class="star-icon1"
            src="@/assets/icons/star.svg"
            alt="star-icon"
          />
          <img
            class="star-icon2"
            src="@/assets/icons/star.svg"
            alt="star-icon"
          />
        </div>
      </div>
    </div>
    <div class="brands bg-black">
      <div class="container-lg d-flex justify-content-between py-4">
        <img src="@/assets/icons/brand1.png" alt="brand-logo" />
        <img src="@/assets/icons/brand2.png" alt="brand-logo" />
        <img src="@/assets/icons/brand3.png" alt="brand-logo" />
        <img src="@/assets/icons/brand4.png" alt="brand-logo" />
        <img src="@/assets/icons/brand5.png" alt="brand-logo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: #f2f0f1;
}

.content h1 {
  font-size: 4.375rem;
  width: 36.0625rem;
  letter-spacing: -0.375rem;
  word-spacing: 0.3125rem;
  line-height: 4rem;
}
.content p {
  color: #616060;
  width: 34.0625rem;
  font-size: 0.8438rem;
}

.image {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: url("@/assets/images/hero-img.jpg") no-repeat center;
  background-size: 100%;
  background-position: center 8%;
  min-height: 41.4375rem;
}

@media (max-width: 48rem) {
  .image {
    max-height: 28rem;
    min-height: 30rem;
    background-size: 110%;
  }
}

.star-icon1 {
  position: absolute;
  right: 2%;
  top: 15%;
  width: 6.25rem;
}
.star-icon2 {
  position: absolute;
  left: 5%;
  bottom: 45%;
}

button {
  height: 3.25rem;
  width: 13.125rem;
  font-size: 1rem;
}

@media (max-width: 48rem) {
  button {
    width: 100%;
  }
}

.stats {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap !important;
  max-width: 100%;
  gap: 0.625rem 0rem;
}

.box {
  max-width: 10rem;
  flex-grow: 1 !important;
  margin-bottom: 0.625rem !important;
}

.box h2 {
  font-weight: bold;
  font-size: 2.5rem;
}

.divider {
  background: #0000001a;
  min-width: 0.0625rem;
  height: 4.625rem;
}

.brands > div {
  flex-wrap: wrap;
  gap: 0.9375rem 0.625rem;
}

.brands img {
  min-width: 4.375rem;
}

@media (max-width: 48rem) {
  .brands img {
    max-width: 7.1875rem;
    min-height: 2.1875rem;
  }
}
</style>
