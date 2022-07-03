<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand" @click="collapseNavbar">ProjectName</router-link>
      <button
        :class="['navbar-toggler', !navbarExpanded && 'collapsed']"
        type="button"
        aria-controls="navbarDefault"
        :aria-expanded="navbarExpanded"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarDefault" :class="['collapse navbar-collapse', navbarExpanded && 'show']">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="collapseNavbar">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" @click="collapseNavbar">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navbarExpanded = ref(false)

const toggleNavbar = () => {
  navbarExpanded.value = !navbarExpanded.value
}

const collapseNavbar = () => {
  navbarExpanded.value = false
}
</script>
