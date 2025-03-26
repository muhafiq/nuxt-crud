<script setup>
const menus = ref([
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
]);

const open = ref(false);

const auth = useTokenStore();
</script>

<template>
  <header
    class="relative z-20 w-full border-b shadow-lg border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden"
  >
    <div
      class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]"
    >
      <nav
        aria-label="main navigation"
        class="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
        role="navigation"
      >
        <NuxtLink
          aria-label="WindUI logo"
          aria-current="page"
          class="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
          to="/"
        >
          <h1 class="text-2xl font-bold">CRUD</h1>
        </NuxtLink>
        <button
          class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
          :class="[
            open
              ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0'
              : '',
          ]"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="() => (open = !open)"
        >
          <div
            class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
          </div>
        </button>
        <!-- Navigation links -->
        <ul
          v-show="!auth.token.value"
          :class="[
            open
              ? 'visible opacity-100 backdrop-blur-sm'
              : 'invisible opacity-0',
          ]"
          role="menubar"
          aria-label="Select page"
          class="absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100"
        >
          <li
            v-for="menu in menus"
            :key="menu.name"
            role="none"
            class="flex items-stretch"
          >
            <NuxtLink
              role="menuitem"
              aria-haspopup="false"
              class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-8"
              :to="menu.href"
            >
              <span>{{ menu.name }}</span></NuxtLink
            >
          </li>
        </ul>
        <div class="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
          <a
            v-show="auth.token.value"
            href="#"
            class="relative inline-flex items-center justify-center w-10 h-10 text-white rounded-full"
          >
            <img
              src="https://i.pravatar.cc/40?img=35"
              alt="user name"
              title="user name"
              width="40"
              height="40"
              class="max-w-full rounded-full"
            />
            <span
              class="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 p-1 text-sm text-white bg-pink-500 border-2 border-white rounded-full"
            >
              <span class="sr-only"> 7 new emails </span>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
