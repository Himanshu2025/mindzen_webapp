<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import jsonToCsvExport from 'json-to-csv-export'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@/components/ui/table'
import adminMenu from '@/components/adminMenu.vue'
const table2Data = ref([])

onMounted(() => {
  axios
    .get('/Behaviourdata.json')
    .then((response) => {
      table2Data.value = response.data.table2Data
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})

const currentPage = ref(1)
const itemsPerPage = ref(10)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return table2Data.value.slice(start, start + itemsPerPage.value)
})

const totalPages = computed(() => Math.ceil(table2Data.value.length / itemsPerPage.value))

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

// CSV export logic
const exportToCsv = () => {
  const csvData = table2Data.value.map((row) => ({
    Name: row.name,
    'Participated in School Programs': row.participatedInSchoolPrograms,
    'Knows About Crisis Hotline': row.knowsAboutCrisisHotline,
    'Physical Activity Hours Per Week': row.physicalActivityHoursPerWeek,
    'Has Regular Sleep': row.hasRegularSleep,
    'Access to Mental Health Apps': row.accessToMentalHealthApps,
    'Social Media Use (hours)': row.socialMediaUse
  }))

  jsonToCsvExport({ data: csvData, filename: 'BehavioralData.csv' })
}
</script>
<template>
  <adminMenu />
  <div class="flex justify-end my-4">
    <Button @click="exportToCsv">Export Data to CSV</Button>
  </div>

  <Table>
    <TableHead>
      <TableCell>Name</TableCell>
      <TableCell>Participated in School Programs</TableCell>
      <TableCell>Knows About Crisis Hotline</TableCell>
      <TableCell>Physical Activity Hours Per Week</TableCell>
      <TableCell>Has Regular Sleep</TableCell>
      <TableCell>Access to Mental Health Apps</TableCell>
      <TableCell>Social Media Use (hours)</TableCell>
    </TableHead>
    <TableBody>
      <TableRow v-for="row in paginatedData" :key="row.name">
        <TableCell>{{ row.name }}</TableCell>
        <TableCell>{{ row.participatedInSchoolPrograms }}</TableCell>
        <TableCell>{{ row.knowsAboutCrisisHotline }}</TableCell>
        <TableCell>{{ row.physicalActivityHoursPerWeek }}</TableCell>
        <TableCell>{{ row.hasRegularSleep }}</TableCell>
        <TableCell>{{ row.accessToMentalHealthApps }}</TableCell>
        <TableCell>{{ row.socialMediaUse }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div class="flex justify-between items-center mt-4">
    <Button @click="previousPage" :disabled="currentPage === 1">Previous</Button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <Button @click="nextPage" :disabled="currentPage === totalPages">Next</Button>
  </div>
</template>

<style scoped>
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
