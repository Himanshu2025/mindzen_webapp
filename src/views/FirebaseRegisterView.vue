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
        class="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition-all"
      >
        Register
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import Checkbox from 'primevue/checkbox'
import userMenu from '@/components/userMenu.vue'
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
