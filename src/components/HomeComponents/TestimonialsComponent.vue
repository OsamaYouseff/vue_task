<script setup lang="ts">
import TestimonialBox from "./TestimonialBox.vue";

const TestimonialData = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    description: `
    "I'm blown away by the quality and style of the clothes I received from Shop.co.
    From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    description: `
    "Finding clothes that align with my personal style used to be a challenge
      until I discovered Shop.co. The range of options they offer is truly
      remarkable, catering to a variety of tastes and occasions.”`,
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    description: `
    "As someone who's always on the lookout for unique fashion pieces,
    I'm thrilled to have stumbled upon Shop.co. The selection of clothes
    is not only diverse but also on-point with the latest trends.”`,
  },
  {
    id: 4,
    name: "Mooen J.",
    rating: 5,
    description: `
    "I'm blown away by the quality and style of the clothes I received from Shop.co.
    From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    id: 5,
    name: "Mooen J.",
    rating: 5,
    description: `
    "I'm blown away by the quality and style of the clothes I received from Shop.co.
    From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
];
</script>
<template>
  <section class="container-lg mb-5">
    <div class="d-flex justify-content-between mb-5">
      <h2>OUR HAPPY CUSTOMERS</h2>
      <div class="row d-flex align-items-end px-1">
        <img
          class="arrow"
          src="@/assets/icons/left-arrow.svg"
          alt="left-arrow-icon"
        />
        <img
          class="arrow"
          src="@/assets/icons/right-arrow.svg"
          alt="right-arrow-icon"
        />
      </div>
    </div>
    <div class="wrapper">
      <div
        class="customer-testimonials position-relative d-flex justify-content-center flex-nowrap"
        style="gap: 24px"
      >
        <TestimonialBox
          v-for="testimonial in TestimonialData"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 40px;
  font-weight: 700;
  color: #000000;
}

@media (max-width: 768px) {
  h2 {
    font-size: 35px;
    max-width: 260px !important;
  }
}

.customer-testimonials::before,
.customer-testimonials::after {
  content: "";
  position: absolute;
  top: 0;
  width: 30%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 22;
}
.customer-testimonials::before {
  left: -30%;
}
.customer-testimonials::after {
  right: -30%;
}

@media (max-width: 768px) {
  .wrapper {
    overflow: hidden;
  }

  .customer-testimonials::before,
  .customer-testimonials::after {
    display: none;
  }
}

.arrow {
  cursor: pointer;
  width: 45px;
  height: 45px;
  transition: all 0.35s ease-in-out;
  border: 1px solid transparent;
  margin: 0 1px;
  border-radius: 4px;
}

.arrow:hover {
  border-color: #000;
}
</style>
