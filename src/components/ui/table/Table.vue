<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, required: false }
})
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table :class="cn('w-full caption-bottom text-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
<style>
table {
  width: 100%;
  table-layout: fixed;
}
th,
td {
  text-align: left;
  padding: 8px;
}
</style>
