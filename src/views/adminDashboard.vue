<script setup>
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import { isTemplateSpan } from 'typescript'
import InputText from 'primevue/inputtext'
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-slate-300 p-6">
    <span class="font-semibold text-xl"> MindZen Admin</span>
    <div>Admin profile</div>
    <div>logout</div>
    <div></div>
  </nav>
  <div class="grid grid-cols-2 gap-4">
    <div class="col-start-1">hi</div>
    <div class="col-start-2">active users</div>
  </div>
  <div>
    <Button
      label="Search"
      icon="pi pi-search"
      unstyled
      pt:root="bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2"
      pt:label="text-white font-bold text-lg"
      pt:icon="text-white text-xl"
    ></Button>
  </div>
</template>
