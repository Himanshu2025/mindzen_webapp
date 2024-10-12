<template>
  <userMenu></userMenu>

  <div class="grid grid-cols-1 gap-4 p-4">
    <div class="bg-white p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to MindZen
      </h1>
    </div>

    <div class="bg-white p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
      <h2
        class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        Book an appointment with is now
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
