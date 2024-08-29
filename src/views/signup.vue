<script>
import { ref } from 'vue'

const data = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
      <!-- Form Section -->
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">MindZen</h1>
        <p class="text-gray-800 font-semibold mb-8">Create your account</p>
        <form @submit.prevent="signUp">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="username"
              id="username"
              required
              v-model="data.username"
              placeholder="himanshu2025"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="himanshu@gmail.com"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div></div>
          <div class="mb-2 flex justify-between items-center">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          </div>
          <input
            type="password"
            id="password"
            v-model="password"
            min-length="4"
            max-length="10"
            placeholder="Enter your password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
          <div class="mb-2 flex justify-between items-center">
            <label for="password" class="block text-sm font-medium text-gray-700">
              Confirm Password</label
            >
          </div>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Confirm password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
          <label class="mb-4 text-sm text-black-500"> Already have an account? </label>
          <a href="#" class="text-sm text-red-500 mb-6">Sign in</a>
          <button
            type="submit"
            class="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign up
          </button>
        </form>
      </div>

      <!-- Image Section -->
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
