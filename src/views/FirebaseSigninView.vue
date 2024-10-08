<template>
  <userMenu />
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
  <Button @click="signin">Sign in</Button>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import userDashboard from './userDashboard.vue'
import adminDashboard from './adminDashboard.vue'
import { Button } from '@/components/ui/button'
import userMenu from '@/components/userMenu.vue'

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
