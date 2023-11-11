<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  activeTab: { type: String, default: 'logs' }
})

const emits = defineEmits<{
  (eventNamme: 'set-active-tab', value: string): string
}>()

const setActiveTab = (tabName: string) => {
  emits('set-active-tab', tabName)
}
</script>

<template>
  <section class="title-section">
    <h1>Manage Attendance</h1>
    <p>
      Attendance management is where you can generate, add, edit, and export the
      logs of the employees.
    </p>
    <div class="btn-container">
      <button
        :class="{ active: activeTab === 'logs' }"
        @click="setActiveTab('logs')"
      >
        <span><font-awesome-icon icon="calendar" /></span>
        Attendance Logs
      </button>
      <button
        :class="{ active: activeTab === 'exportFiles' }"
        @click="setActiveTab('exportFiles')"
      >
        <span><font-awesome-icon icon="download" /></span>Exported Files
      </button>
    </div>
  </section>
</template>

<style scoped>
.title-section {
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  width: 354px;
  padding: 24px 32px;
  border-right: 1px solid #c3cdc9;
  border-bottom: 1px solid #c3cdc9;
  color: #00291b;
}

.title-section h1 {
  padding-bottom: 4%;
}

.title-section p {
  font-size: 14px;
}

.btn-container {
  display: flex;
  padding-top: 1rem;
  flex-wrap: wrap;
  gap: 10px;
}

.btn-container button {
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  background: none;
  text-align: left;
}

.btn-container button.active span {
  color: #17ad49;
}

.btn-container button.active {
  background-color: #e6ffee;
}

.btn-container button span {
  color: #788e86;
}
</style>
