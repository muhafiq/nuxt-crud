<template>
  <main
    class="min-h-screen bg-white flex flex-col items-center justify-center gap-4"
  >
    <h1 class="text-3xl font-bold">Auth & CRUD Operation With Nuxt 3!</h1>
    <div class="flex justify-center items-center gap-4">
      <NuxtLink
        class="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-md focus-visible:outline-none whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
        to="/signup"
        >Start From Here!</NuxtLink
      >
      <NuxtLink
        class="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-md focus-visible:outline-none whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
        to="/dashboard"
        >Go to Dashboard</NuxtLink
      >
    </div>
  </main>
</template>
