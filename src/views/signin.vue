<script setup>
import imageSrc from '@/assets/pexels-olly-3765030.jpg'
import { mapActions } from 'vuex'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
      <div class="w-full lg:w-1/2 pr-8">
        <h1 class="text-3xl font-bold mb-2">MindZen</h1>
        <p class="text-gray-800 font-semibold mb-8">Sign in</p>
        <form @submit.prevent="signIn">
          <div class="mb-4">
            <div class="mb-6 flex justify-between items-center">
              <label for="password" class="block text-sm font-medium text-gray-700">Username</label>
            </div>
            <input
              type="text"
              id="username"
              required
              v-model="username"
              @blur="() => validateName(true)"
              @input="() => validateName(false)"
              placeholder="himanshu2025"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div class="mb-6 flex justify-between items-center">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          </div>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />

          <label class="text-sm text-black-500"> Don't have an account? </label>
          <router-link to="/signup">
            <a href="#" class="text-sm text-red-500 mb-6">Sign up</a>
          </router-link>
          <button
            type="submit"
            class="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in
          </button>
        </form>
      </div>

      <div class="hidden lg:block lg:w-1/2 pl-8">
        <img
          :src="imageSrc"
          alt="MindZen"
          class="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
