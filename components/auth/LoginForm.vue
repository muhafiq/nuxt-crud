<script setup>
const { form, errors, isSubmitting, handleSubmit } = useLoginForm();

const submitForm = handleSubmit(async (values) => {
  console.log(values);
  await navigateTo("/dashboard");
});
</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="lg:w-80 p-6 bg-gray-100 rounded-md shadow"
  >
    <div class="text-center">
      <h1 class="font-bold text-xl">Login</h1>
    </div>
    <div class="relative my-6">
      <input
        v-model="form.email"
        id="email"
        type="email"
        placeholder="Email"
        class="bg-white relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      />
      <label
        for="email"
        class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        Email
      </label>
      <span v-if="errors.email" class="text-red-500 text-xs">
        {{ errors.email[0] }}
      </span>
    </div>
    <div class="relative my-6">
      <input
        v-model="form.password"
        id="password"
        type="password"
        placeholder="Password"
        class="bg-white relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      />
      <label
        for="password"
        class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        Password
      </label>
      <span v-if="errors.password" class="text-red-500 text-xs">
        {{ errors.password[0] }}
      </span>
    </div>
    <button
      type="submit"
      class="cursor-pointer inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
    >
      <span>Login</span>
    </button>
  </form>
</template>
