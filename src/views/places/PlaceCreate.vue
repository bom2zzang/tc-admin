<script setup lang="ts">
import { ref } from 'vue'
import { addPlace } from '@/composables/places.js'

const name = ref('')
const region = ref('')
const description = ref('')

const submit = async () => {
  await addPlace({
    name: name.value,
    region: region.value,
    description: description.value,
    monthId: '2025-05',
  })
  alert('등록 완료!')
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="장소명" />
    <input v-model="region" placeholder="지역" />
    <textarea v-model="description" placeholder="설명"></textarea>
    <button type="submit">등록</button>
  </form>
</template>
