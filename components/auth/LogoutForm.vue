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
    <slot></slot>
  </form>
</template>
