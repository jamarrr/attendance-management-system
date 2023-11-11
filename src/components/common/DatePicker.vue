<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  dateValue: {
    type: String,
    default: new Date().toISOString().substring(0, 10)
  }
})
</script>

<template>
  <fieldset class="date">
    <legend>{{ title }}</legend>
    <input type="date" :value="dateValue" />
  </fieldset>
</template>

<style scoped>
.date {
  width: 100%;
  border-radius: 4px;
  color: #879a94;
  border: 1px solid #c3cdc9;
}

.date legend {
  font-size: 12px;
}

.date input {
  width: 100%;
  border: none;
  font-size: 16px;
  outline: none;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
}

.date input::-webkit-calendar-picker-indicator {
  opacity: 0.4;
  cursor: pointer;
}
</style>
