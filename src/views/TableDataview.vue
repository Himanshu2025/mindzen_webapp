<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from '@/components/ui/table'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@/components/ui/menubar'

const columns = ref([
  { label: 'Name', field: 'name' },
  { label: 'Age', field: 'age' },
  { label: 'Gender', field: 'gender' },
  { label: 'Anxiety Level', field: 'anxietyLevel' },
  { label: 'Depression Level', field: 'depressionLevel' },
  { label: 'Has Counselor', field: 'hasCounselor' },
  { label: 'Number of Sessions', field: 'numberOfSessions' },
  { label: 'Mental Health Diagnosis', field: 'mentalHealthDiagnosis' }
])

const table1Data = ref([])

onMounted(() => {
  axios
    .get('/MentalHealthdata.json') // Fetch from the public directory
    .then((response) => {
      table1Data.value = response.data.table1Data // Accessing the array inside the JSON
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})
// Set the data directly
</script>

<template>
  <div>
    <div>
      <!-- Menu bar from shadcn-vue -->
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <router-link to="/SendEmail">Email Service</router-link>
            </MenubarItem>
            <MenubarItem>
              <router-link to="/Tabledata">User profile data</router-link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Table class="w-full table-fixed">
        <TableCaption>Mental Health Status and Support Data</TableCaption>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Anxiety Level</TableCell>
            <TableCell>Depression Level</TableCell>
            <TableCell class="px-4 py-2">Has Counselor</TableCell>
            <TableCell class="px-4 py-2">Number of Sessions</TableCell>
            <TableCell class="px-4 py-2">Mental Health Diagnosis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow v-for="row in table1Data" :key="row.name">
            <TableCell>{{ row.name }}</TableCell>
            <TableCell>{{ row.age }}</TableCell>
            <TableCell>{{ row.gender }}</TableCell>
            <TableCell>{{ row.anxietyLevel }}</TableCell>
            <TableCell>{{ row.depressionLevel }}</TableCell>
            <TableCell>{{ row.hasCounselor }}</TableCell>
            <TableCell>{{ row.numberOfSessions }}</TableCell>
            <TableCell>{{ row.mentalHealthDiagnosis }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
