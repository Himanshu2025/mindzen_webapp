<script setup></script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <a href> <router-link to="/signin"> Login</router-link> </a>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <a href><router-link to="/userDashboard"> Dashboard </router-link> </a>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <a href> Logout </a>
    </div>
  </nav>
</template>
