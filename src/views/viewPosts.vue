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
          <CardDescription>Posted on: {{ formatDate(post.createdAt._seconds) }}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{{ post.content }}</p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import userMenu from '@/components/userMenu.vue'
</script>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      postCount: 0
    }
  },
  methods: {
    formatDate(seconds) {
      const date = new Date(seconds * 1000)
      return date.toLocaleString() // Formats the date in a readable string
    },
    async fetchPosts() {
      try {
        // Fetch posts and post count using axios
        const postsResponse = await axios.get('https://getallposts-eopph4f32q-uc.a.run.app')
        this.posts = postsResponse.data.posts

        const countResponse = await axios.get('https://countposts-eopph4f32q-uc.a.run.app/')
        this.postCount = countResponse.data.postCount
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
