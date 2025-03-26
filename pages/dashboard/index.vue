<script setup>
definePageMeta({ middleware: "auth" });
</script>

<template>
  <main class="min-h-screen">
    <h1>CRUD Operation With Nuxt 3!</h1>
    <NuxtLink to="/signup">Start From Here!</NuxtLink>
  </main>
</template>
