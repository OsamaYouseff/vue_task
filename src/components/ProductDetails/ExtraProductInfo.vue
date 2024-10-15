<script setup lang="ts">
import ReviewBox from "./ReviewBox.vue";

const reviewsData = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 4,
    description: `
    "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
    As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    date: "August 14, 2023",
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    description: `
    "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.
    Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
    date: "August 15, 2023",
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 5,
    description: `
    "This t-shirt is a must-have for anyone who appreciates good design.
    The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    date: "August 16, 2023",
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 4,
    description: `
    "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear.
    It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    date: "August 17, 2023",
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 3,
    description: `
    "This t-shirt is a fusion of comfort and creativity. The fabric is soft,
    and the design speaks volumes about the designer's skill.
    It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    date: "August 18, 2023",
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 4,
    description: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy.
    The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
    date: "August 19, 2023",
  },
];
</script>
<template>
  <section class="container-lg">
    <!-- Navigation Header -->
    <div
      class="navigation-header d-flex justify-content-between align-items-center"
      style="border-bottom: 1px solid hsla(0, 0%, 0%, 0.1)"
    >
      <div class="nav-section">Product Details</div>
      <div class="nav-section active">Rating & Reviews</div>
      <div class="nav-section">FAQs</div>
    </div>
    <div class="nav-section-container">
      <div
        class="section-header d-flex align-items-center justify-content-between my-3"
      >
        <h2 class="fs-4 fw-semibold text-capitalize text-black">
          All Reviews <span class="fw-normal text-muted fs-6"> (451) </span>
        </h2>

        <!-- controls -->
        <div class="controls d-flex gap-2 mb-3">
          <button
            class="btn settings-btn rounded-circle"
            style="width: 48px; height: 48px"
          >
            <img src="@/assets/icons/settings.svg" alt="settings-img" />
          </button>
          <button
            class="btn filter-btn d-none d-sm-flex rounded-pill fw-semibold d-flex align-items-center justify-content-evenly gap-2 px-3"
            style="font-size: 14px; width: 120px"
          >
            Latest
            <img src="@/assets/icons/chevron-down.svg" alt="chevron-down-img" />
          </button>

          <button
            class="btn add-review-btn bg-black text-white rounded-pill fs-6 px-4 py-2"
          >
            Write a Review
          </button>
        </div>
      </div>
      <!-- Reviews -->
      <div class="reviews d-flex flex-column justify-center gap-5">
        <div class="d-flex gap-3 flex-wrap">
          <ReviewBox
            v-for="review in reviewsData"
            :key="review.id"
            :review="review"
          />
        </div>

        <!-- Show more -->
        <button class="btn bg-white text-black rounded-pill py-2 px-2 mb-5">
          Load More Reviews
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nav-section {
  text-align: center;
  flex-grow: 1;
  padding: 15px 0px;
  color: hsla(0, 0%, 0%, 0.6);
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.nav-section:hover {
  background: #f8f7f7;
}

.nav-section.active {
  border-bottom: 1px solid #000;
  color: hsla(0, 0%, 0%, 1);
}

.controls button {
  background: hsla(0, 0%, 94%, 1);
}
button {
  height: 52px;
  width: 218px;
  font-size: 16px;
  margin: 0 auto;
  border-color: #ececec;
}

@media (max-width: 767px) {
  section {
    padding-left: 0;
    padding-right: 0;
  }

  .nav-section {
    font-size: 14px;
  }
  h2 {
    font-size: 14px !important;
  }
  .controls button {
    padding: 4px 10px !important;
    font-size: 14px !important;
  }
  button {
    width: 100%;
  }
}
</style>
