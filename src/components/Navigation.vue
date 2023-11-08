<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
  isUser: { type: Boolean, default: false }
})
</script>

<template>
  <!-- Navigation Item -->
  <div class="dropdown" :class="{ user: isUser }">
    {{ text }} <font-awesome-icon icon="caret-down" />
  </div>
</template>

<style scoped>
.dropdown {
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.user {
  color: #2fc7e2;
  font-family: 'Rubik', sans-serif;
}
</style>
