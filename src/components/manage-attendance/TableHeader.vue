<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({ activeTab: { type: String, default: 'logs' } })
</script>

<template>
  <div v-if="activeTab === 'logs'" class="table-header--logs">
    <font-awesome-icon icon="calendar" />
    <h5>Date Range</h5>
  </div>
  <div v-else class="table-header--files">
    <h3>Exported Files</h3>
    <p>No file to download</p>
  </div>
</template>

<style scoped>
.table-header--logs {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #17ad49;
}

.table-header--files {
  font-family: 'Rubik', sans-serif;
}

.table-header--logs h5 {
  font-family: 'Rubik', sans-serif;
  color: #00291b;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
</style>
