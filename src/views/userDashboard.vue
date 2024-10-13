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
    <div class="bg-white p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            :class="
              cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')
            "
            :disabled="submitted"
          >
            <CalendarIcon class="mr-2 h-4 w-4" />
            {{ value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date' }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar v-model="value" initial-focus :disabled="submitted" />
        </PopoverContent>
      </Popover>
      <div class="px-6">
        <Button @click="submitDate" :disabled="submitted">Submit</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Alert } from '@/components/ui/alert'
import userMenu from '@/components/userMenu.vue'
const df = new DateFormatter('en-US', {
  dateStyle: 'long'
})

const value = ref<DateValue>()
const submitted = ref(false)

const submitDate = () => {
  if (value.value) {
    alert(`You selected appointement date as ${df.format(value.value.toDate(getLocalTimeZone()))}`)
    submitted.value = true
  } else {
    alert('Please select a date first.')
  }
}
</script>
