<script setup lang="ts">
import { RouterView } from 'vue-router';
import MobileMenu from './components/Navigation/MobileMenu.vue';
import Navbar from "./components/Navigation/Navbar.vue";
</script>

<template>
  <main
    class="bg-gray-900 text-md text-gray-200 min-h-screen scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-gray-800">
    <Navbar />
    <MobileMenu />

    <RouterView />
  </main>
</template>