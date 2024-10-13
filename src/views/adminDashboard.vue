<script setup lang="ts">
import adminMenu from '@/components/adminMenu.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import type { DateRange } from 'radix-vue'
import { ref, type Ref } from 'vue'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const newTodo = ref('')
const todos = ref<string[]>([])

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push(newTodo.value.trim())
    newTodo.value = ''
  }
}

const removeTodo = (index: number) => {
  todos.value.splice(index, 1)
}
const value = ref({
  start,
  end
}) as Ref<DateRange>
</script>

<template>
  <adminMenu></adminMenu>
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl space-y-4 p-4">
    Welcome to the admin dashboard
  </h1>
  <RangeCalendar v-model="value" class="rounded-md border" />
  <div class="mt-4 space-y-2">
    <p class="text-lg font-semibold">To-Do</p>

    <div class="flex space-x-2">
      <Input type="text" v-model="newTodo" placeholder="Enter a new task" class="w-full" />
      <Button @click="addTodo" class="bg-black text-white">Add</Button>
    </div>

    <ul class="mt-4 space-y-1">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="flex justify-between items-center bg-gray-100 p-2 rounded"
      >
        <span>{{ todo }}</span>
        <Button @click="removeTodo(index)" variant="destructive" class="text-black">Done</Button>
      </li>
    </ul>
  </div>
</template>
