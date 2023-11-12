<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isSearchDisabled: { type: Boolean, default: false },
  isExportDisabled: { type: Boolean, default: false }
})
</script>

<template>
  <section>
    <button
      class="search"
      :class="{ disabled: isSearchDisabled }"
      :disabled="isSearchDisabled"
    >
      <font-awesome-icon icon="magnifying-glass" /> Search
    </button>
    <button
      class="export"
      :class="{ disabled: isExportDisabled }"
      :disabled="isExportDisabled"
    >
      <font-awesome-icon icon="download" /> Export
    </button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px 32px;
  border-top: 1px solid #c3cdc9;
}

.search,
.export {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  gap: 16px;
  padding: 16px;
  width: 100%;
  border: none;
  border-radius: 4px;
}

.search {
  color: white;
  background: #17ad49;
}

.search:hover {
  background: #17ad49ea;
  cursor: pointer;
}

.export {
  color: #17ad49;
  border: 1px solid #17ad49;
  background: transparent;
}

.export.disabled {
  cursor: default;
  color: #c3cdc9;
  border: 1px solid #c3cdc9;
}

.search.disabled {
  cursor: default;
  background-color: #c3cdc9;
}
</style>
