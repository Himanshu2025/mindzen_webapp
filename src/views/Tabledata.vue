<script setup lang="ts">
import adminMenu from '@/components/adminMenu.vue'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'
import axios from 'axios'
import jsonToCsvExport from 'json-to-csv-export'
import { computed, onMounted, ref } from 'vue'

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

const currentPage = ref(1)
const itemsPerPage = ref(10)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return table1Data.value.slice(start, start + itemsPerPage.value)
})

// Total pages for pagination
const totalPages = computed(() => Math.ceil(table1Data.value.length / itemsPerPage.value))

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const exportToCsv = () => {
  const csvData = table1Data.value.map((row) => ({
    Name: row.name,
    Age: row.age,
    Gender: row.gender,
    'Anxiety Level': row.anxietyLevel,
    'Depression Level': row.depressionLevel,
    'Has Counselor': row.hasCounselor,
    'Number of Sessions': row.numberOfSessions,
    'Mental Health Diagnosis': row.mentalHealthDiagnosis
  }))

  jsonToCsvExport({ data: csvData, filename: 'MentalHealthData.csv' })
}
</script>

<template>
  <adminMenu />
  <div class="flex justify-end my-4">
    <Button @click="exportToCsv">Export Data to CSV</Button>
  </div>
  <div>
    <!-- Table -->
    <Table>
      <TableCaption></TableCaption>
      <TableHead>
        <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Gender</TableCell>
        <TableCell>Anxiety Level</TableCell>
        <TableCell>Depression Level</TableCell>
        <TableCell>Has Counselor</TableCell>
        <TableCell>Number of Sessions</TableCell>
        <TableCell>Mental Health Diagnosis</TableCell>
      </TableHead>
      <TableBody>
        <TableRow v-for="row in paginatedData" :key="row.name">
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

    <div class="flex justify-between items-center mt-4">
      <Button @click="previousPage" :disabled="currentPage === 1">Previous</Button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <Button @click="nextPage" :disabled="currentPage === totalPages">Next</Button>
    </div>
  </div>
</template>
