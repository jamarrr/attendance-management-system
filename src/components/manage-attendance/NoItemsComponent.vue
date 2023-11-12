<script setup lang="ts">
import { NoItemsIcon } from '../../utils/icons'
import { defineProps } from 'vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>
<template>
  <div>
    <img :src="NoItemsIcon" alt="no-items-img" />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
div {
  font-family: 'Rubik', sans-serif;
  text-align: center;
}
</style>
