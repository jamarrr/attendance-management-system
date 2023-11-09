<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import TitleSection from './components/manage-attendance/TitleSection.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="content">
    <aside>
      <!-- Attendance management section -->
      <TitleSection />
      <!-- Filters -->
      <section></section>
      <!-- Actions -->
      <section></section>
    </aside>
  </div>
</template>

<style scoped>
.content {
  display: flex;
}
</style>
