<template>
  <userMenu />
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
      <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
      <Input
        type="text"
        placeholder="Email"
        v-model="email"
        class="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="password"
        placeholder="Password"
        v-model="password"
        class="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button
        @click="register"
        class="w-full bg-red-600 hover:bg-red-600 text-white p-3 rounded-lg font-semibold transition-all"
      >
        Register
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import userMenu from '@/components/userMenu.vue'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Input } from '@/components/ui/input'
const email = ref('')
const password = ref('')

const router = useRouter()
const auth = getAuth()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Firebase Register Successful!')
      router.push('/userdashboard')
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>
