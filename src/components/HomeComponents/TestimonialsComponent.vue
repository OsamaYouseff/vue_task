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
    id: 4,
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
      <div class="row d-flex align-items-end">
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
    <div class="blur-bg">
      <div
        class="customer-testimonials d-flex justify-content-center flex-nowrap gap-2"
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

/* .blur-bg {
  position: relative;
  width: 100vw;

  filter: blur(8px);

  margin-bottom: 450px;
  z-index: -1;
}
.customer-testimonials {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
} */

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
