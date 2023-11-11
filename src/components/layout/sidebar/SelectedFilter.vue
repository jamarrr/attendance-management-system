<script setup lang="ts">
defineProps({
  icon: { type: String, required: true },
  selectedItem: { type: String, default: '' },
  noSelectedItemMsg: { type: String, required: true }
})
</script>
<template>
  <div class="selected-filter">
    <img :src="icon" :alt="icon" />
    <label>{{ selectedItem !== '' ? selectedItem : noSelectedItemMsg }}</label>
  </div>
</template>

<style scoped>
.selected-filter {
  width: 100%;
  display: flex;
  gap: 16px;
  color: #3c5b51;
}

.selected-filter label {
  font-size: 12px;
}
</style>
