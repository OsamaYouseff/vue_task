<script setup lang="ts"></script>

<template>
  <div
    class="h-100 d-flex flex-column justify-content-center align-items-center"
    style="min-width: 100%; min-height: 60vh"
  >
    <h1 class="text-danger fs-1">Error 404 😢</h1>
    <h2 class="text-danger fs-1">Page not found</h2>
    <RouterLink
      class="text-decoration-none px-4 py-2 border rounded mt-3"
      to="/"
    >
      Go Home</RouterLink
    >
  </div>
</template>
