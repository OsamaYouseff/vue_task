<script setup lang="ts"></script>
<template>
  <section class="container-lg mb-5">
    <div class="p-5">
      <h2 class="text-center fw-bolder mb-5 fs-1">BROWSE BY DRESS STYLE</h2>
      <div
        class="div d-flex flex-wrap justify-content-center"
        style="gap: 20px"
      >
        <div class="img-container casual d-md-w-100" style="width: 36%">
          <span class="style">casual</span>
        </div>
        <div class="img-container formal d-md-w-100" style="width: 60%">
          <span class="style">formal</span>
        </div>
        <div class="img-container party d-md-w-100" style="width: 60%">
          <span class="style">party</span>
        </div>
        <div class="img-container gym d-md-w-100" style="width: 36%">
          <span class="style">gym</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: #f2f0f1;
  border-radius: 40px;
}

.img-container {
  max-height: 289px;
  min-height: 289px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fcfcfc !important;
  position: relative;
}
@media (max-width: 767px) {
  section > div {
    padding: 10px !important;
  }
  .img-container {
    width: 100% !important;
  }
  h2 {
    font-size: 37px !important;
    font-weight: bolder !important;
    padding: 30px;
    margin-bottom: 0 !important;
  }
}

.img-container.casual {
  background: no-repeat url("@/assets/images/11.png");
  background-position: 45% 40%;
}
.img-container.formal {
  background: no-repeat url("@/assets/images/10.png");
  background-position: -14% 26%;
  background-size: 170%;
}
.img-container.party {
  background: no-repeat url("@/assets/images/9.png");
  background-position: 364% 56%;
  background-size: 95%;
}
.img-container.gym {
  background: no-repeat url("@/assets/images/12.png");
  background-position: -198% 39%;
  background-size: 107%;
}

.style {
  position: absolute;
  top: 35px;
  left: 70px;
  transform: translate(-50%, -50%);
  color: #000;
  font-size: 30px;
  font-weight: 600;
}
</style>
