<script setup>
import { ref } from 'vue'
import imageSrc from '@/assets/pexels-olly-3765030.jpg'

const signUpdata = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const clearForm = () => {
  signUpdata.value = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
}

const submittedCards = ref([])

const signUp = () => {
  validateName(true)
  validatePassword(true)
  if (!errors.value.username && !errors.value.password) {
    submittedCards.value.push({ ...signUpdata.value })
    clearForm()
  }
}

const errors = ref({
  username: null,
  email: null,
  password: null,
  reason: null
})

// Username validation
const validateName = (blur) => {
  if (signUpdata.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

// Password validation
const validatePassword = (blur) => {
  const password = signUpdata.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}

// validate confirm password
const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg flex w-full max-w-7xl">
      <!-- Form -->
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2 text-black">MindZen</h1>
        <p class="text-gray-800 font-semibold mb-8">Create your account</p>
        <form @submit.prevent="signUp">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              required
              v-model="signUpdata.username"
              @blur="() => validateName(true)"
              @input="() => validateName(false)"
              placeholder="himanshu2025"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
            <div v-if="errors.username" class="text-sm font-light text-red-500">
              {{ errors.username }}
            </div>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="signUpdata.email"
              placeholder="himanshu@gmail.com"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div class="mb-2 flex justify-between items-center">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          </div>
          <input
            type="password"
            id="password"
            v-model="signUpdata.password"
            @blur="() => validatePassword(true)"
            @input="() => validatePassword(false)"
            placeholder="Enter your password"
            class="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
          <div v-if="errors.password" class="text-sm font-light text-red-500">
            {{ errors.password }}
          </div>
          <div class="mb-2 flex justify-between items-center">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700"
              >Confirm Password</label
            >
          </div>
          <input
            type="password"
            id="confirmPassword"
            v-model="signUpdata.confirmPassword"
            placeholder="Confirm password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
          <div v-if="errors.confirmPassword" class="text-danger">
            {{ errors.confirmPassword }}
          </div>
          <label class="mb-4 text-sm text-black"> Already have an account? </label>
          <router-link to="/signin">
            <a href="#" class="text-sm text-red-500 mb-6">Sign in</a>
          </router-link>

          <button
            type="submit"
            class="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign up
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
