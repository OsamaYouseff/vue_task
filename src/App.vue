<script setup lang="ts">
import SignUpBar from "../src/components/SignUpBar.vue";
import HeaderComponent from "../src/components/Header/HeaderComponent.vue";
import FooterComponent from "../src/components/FooterComponent.vue";
</script>

<template>
  <SignUpBar />
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
