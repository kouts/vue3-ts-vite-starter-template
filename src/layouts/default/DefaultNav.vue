<template>
  <nav class="fixed start-0 top-0 z-20 w-full border-b border-slate-200 bg-white">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 md:justify-normal md:py-4">
      <router-link to="/" class="flex items-center space-x-3 no-underline rtl:space-x-reverse">
        <span class="self-center whitespace-nowrap text-2xl font-semibold text-slate-600">ProjectName</span>
      </router-link>
      <div class="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 md:hidden"
          aria-controls="navbar-sticky"
          :aria-expanded="navbarExpanded"
          @click="toggleNavbar"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        id="navbar-sticky"
        :class="['w-full items-center justify-between md:order-1 md:ml-8 md:flex md:w-auto', { hidden: !navbarExpanded }]"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-slate-100 bg-slate-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-slate-700 dark:bg-slate-800 md:dark:bg-slate-900"
        >
          <li>
            <router-link
              to="/"
              class="block rounded px-3 py-2 no-underline hover:text-emerald-600 md:bg-transparent md:p-0 md:hover:text-emerald-600"
              :active-class="activeClass"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="block rounded px-3 py-2 no-underline hover:text-emerald-600 md:bg-transparent md:p-0 md:hover:text-emerald-600"
              :active-class="activeClass"
            >
              About
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navbarExpanded = ref(false)
const activeClass = 'bg-emerald-600 text-white hover:text-white md:!text-emerald-500'

const toggleNavbar = () => {
  navbarExpanded.value = !navbarExpanded.value
}
</script>
