<script setup>
import navbar from './components/navbar.vue'
</script>

<template>
  <navbar></navbar>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <main class="flex-1 p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
