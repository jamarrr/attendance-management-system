<script setup lang="ts">
import NavBar from './components/layout/navbar/index.vue'
import FilterActions from './components/layout/sidebar/FilterActions.vue'
import SearchFilterSection from './components/layout/sidebar/SearchFilterSection.vue'
import TitleSection from './components/layout/sidebar/TitleSection.vue'
import { ref } from 'vue'

const activeTab = ref('logs')
const updateActiveTab = (value: string) => (activeTab.value = value)
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="content">
    <aside>
      <!-- Attendance management section -->
      <TitleSection :active-tab="activeTab" @set-active-tab="updateActiveTab" />
      <!-- Filters -->
      <SearchFilterSection v-if="activeTab === 'logs'" />
      <!-- Actions -->
      <FilterActions v-if="activeTab === 'logs'" is-export-disabled />
    </aside>
  </div>
</template>

<style scoped>
.content {
  display: flex;
}
</style>
