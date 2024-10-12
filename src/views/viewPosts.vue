<template>
  <userMenu></userMenu>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <h1 class="text-3xl font-bold">Posts</h1>

    <div class="my-4">
      <p class="text-lg font-semibold">Total Posts: {{ postCount }}</p>
    </div>

    <div class="space-y-4">
      <Card v-for="post in posts" :key="post.id">
        <CardHeader>
          <CardTitle>{{ post.title }}</CardTitle>
          <CardDescription>Posted on: {{ formatDate(post.createdAt.seconds) }}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{{ post.content }}</p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import userMenu from '@/components/userMenu.vue'
import axios from 'axios'

// Firestore setup
const db = getFirestore()
const postsCollection = collection(db, 'posts')

const posts = ref([])
const postCount = ref(0)

const formatDate = (seconds) => {
  const date = new Date(seconds * 1000)
  return date.toLocaleString()
}

const fetchPosts = async () => {
  try {
    const querySnapshot = await getDocs(postsCollection)
    posts.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const fetchPostCount = async () => {
  try {
    const response = await axios.get('https://countposts-eopph4f32q-uc.a.run.app')
    postCount.value = response.data.postCount
  } catch (error) {
    console.error('Error fetching post count:', error)
  }
}

onMounted(() => {
  fetchPosts()
  fetchPostCount()
})
</script>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
