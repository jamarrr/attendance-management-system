<script setup lang="ts">
import LOGS_DATA from './utils/data/logs.json'

import MainContent from './components/manage-attendance/MainContent.vue'
import NavBar from './components/layout/navbar/index.vue'
import FilterActions from './components/layout/sidebar/FilterActions.vue'
import SearchFilterSection from './components/layout/sidebar/SearchFilterSection.vue'
import TitleSection from './components/layout/sidebar/TitleSection.vue'
import { ref } from 'vue'

const activeTab = ref('logs')
const activeLogsButton = ref<'active' | 'deleted'>('active')

const updateActiveTab = (value: string) => (activeTab.value = value)
const updateActiveLogsButton = (value: 'active' | 'deleted') =>
  (activeLogsButton.value = value)
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
    <MainContent
      @set-selected-log-button="updateActiveLogsButton"
      :active-logs-button="activeLogsButton"
      :active-tab="activeTab"
      :logs-data="LOGS_DATA"
    />
  </div>
</template>

<style scoped>
.content {
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
}
</style>
