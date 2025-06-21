<script setup>
import { ref, onMounted } from 'vue'
import { getPlacesByMonth } from '@/composables/places.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const places = ref([])

onMounted(async () => {
  places.value = await getPlacesByMonth('2025-05')
})
</script>

<template>
  <div>
    <h2>Place</h2>
    <button @click="router.push({ name: 'places-write' })">등록</button>
    <ul>
      <li v-for="place in places" :key="place.id">{{ place.name }} ({{ place.region }})</li>
    </ul>
  </div>
</template>
