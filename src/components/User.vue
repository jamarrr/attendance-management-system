<script setup lang="ts">
import Navigation from './Navigation.vue'
</script>

<template>
  <div class="user-container">
    <div class="user-img" />
    <Navigation text="Admin" is-user />
  </div>
</template>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}

.user-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: gray;
}
</style>
