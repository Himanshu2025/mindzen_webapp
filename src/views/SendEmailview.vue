<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'

import router from '@/routes'
import axios from 'axios'
import { ref } from 'vue'

const to = ref('')
const subject = ref('')
const body = ref('')
const attachment = ref(null)
const message = ref('')

const onFileChange = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    const result = reader.result

    if (typeof result === 'string') {
      const base64String = result.split(',')[1]
      attachment.value = {
        filename: file.name,
        type: file.type,
        content: base64String
      }
    } else {
      console.error('Unexpected result type:', typeof result)
    }
  }

  reader.readAsDataURL(file)
}

const sendEmail = async () => {
  try {
    console.log(body.value) // This will check if the body content is captured
    const recipientEmails = to.value.split(',').map((email) => email.trim())
    await axios.post('https://us-central1-mindzen-2a3e3.cloudfunctions.net/sendEmail', {
      to: to.value,
      subject: subject.value,
      text: body.value, // Ensure the body is being passed correctly
      attachment: attachment.value
    })
    message.value = 'Email sent successfully!'
  } catch (error) {
    message.value = 'Failed to send email.'
  }
}
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <router-link to="/SendEmail">Email Service</router-link>
        </MenubarItem>
        <MenubarItem>
          <router-link to="/Tabledata01">User profile data</router-link>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
  <div class="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg space-y-4">
    <h2 class="text-2xl font-bold mb-4">Send an Email</h2>

    <form @submit.prevent="sendEmail" class="space-y-4">
      <Input v-model="to" placeholder="Recipient Emails" label="To" required class="w-full" />

      <Input v-model="subject" placeholder="Subject" label="Subject" required class="w-full" />

      <Textarea
        v-model="body"
        placeholder="Email Body"
        label="Message"
        required
        class="w-full"
        rows="5"
      />

      <div class="flex items-center space-x-2">
        <label class="text-sm font-medium">Attachment:</label>
        <input
          type="file"
          @change="onFileChange"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </div>

      <Button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Send Email
      </Button>
    </form>

    <p v-if="message" class="mt-4 text-center text-lg font-medium">
      {{ message }}
    </p>
  </div>
</template>
