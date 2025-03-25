<template>
  <footer class="text-slate-500">
    <div class="py-4 text-sm border-t border-slate-200 bg-slate-100">
      <div class="container px-6 mx-auto">
        <div
          class="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12"
        >
          <NuxtLink
            class="flex items-center col-span-1 gap-2 text-base font-medium leading-6 whitespace-nowrap focus:outline-none md:col-span-4 lg:col-span-6"
            to="/"
          >
            CRUD
          </NuxtLink>
          <nav
            class="col-span-3 md:col-span-4 lg:col-span-6"
            aria-labelledby="subfooter-links-3-sub"
          >
            <h3 class="sr-only" id="subfooter-links-3-sub">Get in touch</h3>
            <ul class="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
              <li class="leading-6">
                <a
                  href="javascript:void(0)"
                  class="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                >
                  T&C
                </a>
              </li>
              <li class="leading-6">
                <a
                  href="javascript:void(0)"
                  class="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                >
                  Privacy</a
                >
              </li>
              <li class="leading-6">
                <a
                  href="javascript:void(0)"
                  class="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
