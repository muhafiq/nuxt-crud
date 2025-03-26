<script setup></script>

<template>
  <!-- Component: Basic side navigation menu -->
  <!-- Mobile trigger -->
  <!-- <button
    title="Side navigation"
    type="button"
    class="fixed z-40 self-center order-10 visible block w-10 h-10 bg-white rounded opacity-100 lg:hidden left-6 top-6"
    aria-haspopup="menu"
    aria-label="Side navigation"
    aria-expanded="false"
    aria-controls="sidebar"
  >
    <div
      class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    >
      <span
        aria-hidden="true"
        class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
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
  </button> -->

  <!-- Side Navigation -->
  <aside
    id="sidebar"
    aria-label="Side navigation"
    class="fixed top-0 bottom-0 left-0 z-40 flex flex-col transition-transform -translate-x-full bg-white border-r w-72 sm:translate-x-0 border-r-slate-200"
  >
    <NuxtLink
      aria-label="logo"
      class="flex items-center gap-2 p-6 text-xl font-medium whitespace-nowrap focus:outline-none"
      to="/"
    >
      CRUD
    </NuxtLink>
    <nav
      aria-label="side navigation"
      class="flex-1 overflow-auto divide-y divide-slate-100"
    >
      <div>
        <ul class="flex flex-col flex-1 gap-1 py-3">
          <li class="px-3">
            <NuxtLink
              to="/dashboard"
              class="flex items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-blue-500 hover:bg-blue-50 focus:bg-blue-50 aria-[current=page]:text-blue-500 aria-[current=page]:bg-blue-50"
            >
              <div class="flex items-center self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  aria-label="Dashboard icon"
                  role="graphics-symbol"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <div
                class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate"
              >
                Dashboard
              </div>
            </NuxtLink>
          </li>
          <li class="px-3">
            <div
              class="cursor-pointer flex items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-blue-500 hover:bg-blue-50 focus:bg-blue-50 aria-[current=page]:text-blue-500 aria-[current=page]:bg-blue-50"
            >
              <div class="flex items-center self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  aria-label="Dashboard icon"
                  role="graphics-symbol"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div
                class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate"
              >
                <AuthLogoutForm>
                  <button class="cursor-pointer" type="submit">Logout</button>
                </AuthLogoutForm>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </aside>

  <!-- Backdrop -->
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-30 transition-colors bg-slate-900/20 sm:hidden"
  ></div>
  <!-- End Basic side navigation menu -->
</template>
