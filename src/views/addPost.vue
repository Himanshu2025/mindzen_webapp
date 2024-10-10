<script setup>
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase/init.js'
import userMenu from '@/components/userMenu.vue'
const title = ref('')
const content = ref('')

const addPost = async () => {
  try {
    if (!title.value || !content.value) {
      alert('Both title and content are required.')
      return
    }

    await addDoc(collection(db, 'posts'), {
      title: title.value,
      content: content.value,
      createdAt: new Date()
    })

    title.value = ''
    content.value = ''
    alert('Post added successfully!')
  } catch (error) {
    console.error('Error adding post: ', error)
  }
}
</script>

<template>
  <userMenu />
  <div class="max-w-lg mx-auto p-6 shadow-md rounded-lg bg-white space-y-4">
    <h2 class="text-2xl font-bold mb-4">Create a Post</h2>
    <form @submit.prevent="addPost" class="space-y-4">
      <div>
        <label for="title" class="text-sm font-medium">Title:</label>
        <Input v-model="title" id="title" placeholder="Enter the post title" required />
      </div>
      <div>
        <label for="content" class="text-sm font-medium">Content:</label>
        <Textarea
          v-model="content"
          id="content"
          placeholder="Enter the post content"
          required
          rows="5"
        />
      </div>
      <Button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg">
        Add Post
      </Button>
    </form>
  </div>
</template>
