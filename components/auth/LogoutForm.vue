<script setup>
const { isSubmitting, errors, handleSubmit } = useLogoutForm();
const auth = useTokenStore();

const submitForm = handleSubmit(async (values) => {
  auth.removeToken();

  await navigateTo("/login");
});
</script>

<template>
  <form @submit.prevent="submitForm">
    <button
      type="submit"
      class="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-md focus-visible:outline-none whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
    >
      Logout
    </button>
  </form>
</template>
