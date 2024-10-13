<template>
  <userMenu />
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
      <h1 class="text-2xl font-bold mb-4 text-center">Sign in</h1>
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
        @click="signin"
        class="w-full bg-red-600 hover:bg-red-600 text-white p-3 rounded-lg font-semibold transition-all"
      >
        Sign in
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input/Input.vue'
import userMenu from '@/components/userMenu.vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const adminEmail = 'admin@mindzen123.com' // Hardcode the admin email here

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    if (email.value === adminEmail) {
      router.push('/adminDashboard')
    } else {
      // Redirect to regular user dashboard
      router.push('/userDashboard')
    }
  } catch (error) {
    console.log(error.code)
  }
}
</script>
