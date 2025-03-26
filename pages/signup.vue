<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <main class="min-h-screen flex justify-center items-center">
    <AuthSignupForm />
  </main>
</template>
