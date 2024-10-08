<script setup>
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <a href><router-link to="/userDashboard"> Dashboard </router-link> </a>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <a href> Logout </a>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <a href> <router-link to="/Firelogin"> Sign in</router-link> </a>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <a href> <router-link to="/Fireregister"> Register</router-link> </a>
    </div>
    <div>
      <p>Logged in as {{}}</p>
    </div>
  </nav>
</template>
