<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <RouterView />
  <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" />
</template>
