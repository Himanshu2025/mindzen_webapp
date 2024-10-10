<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'
const userEmail = ref(null)
const router = useRouter()
onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail.value = user.email
    } else {
      userEmail.value = null
    }
  })
})

const logout = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      userEmail.value = null
      router.push('/Firelogin')
    })
    .catch((error) => {
      console.error('Error logging out:', error)
    })
}
</script>

<template>
  <nav class="flex justify-between flex-wrap bg-white p-6">
    <h2
      class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      MindZen
    </h2>
    <div v-if="userEmail" class="text-sm text-gray-700">
      Logged in as <span class="font-bold">{{ userEmail }}</span>
    </div>
    <div v-else class="text-sm text-gray-700">Not logged in</div>
    <Button @click="logout">Logout</Button>
  </nav>
</template>
