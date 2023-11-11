<script setup lang="ts">
import { ref } from 'vue'
import Navigation from './Navigation.vue'
import TextBox from '../../../components/common/TextBox.vue'
import User from './User.vue'

const dropdowns = ref([
  'My Requests',
  'My Team',
  'Company',
  'Administration Tools',
  'Maintenance'
])
</script>

<template>
  <nav>
    <img src="/sprout-logo.png" alt="sprout-logo" />
    <div class="nav-actions">
      <Navigation v-for="dropdown in dropdowns" :text="dropdown" />
      <TextBox />
      <User />
    </div>
  </nav>
</template>

<style scoped>
nav {
  box-sizing: border-box;
  width: 100%;
  padding: 1% 1% 1% 2%;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
}

.nav-actions {
  display: flex;
  flex: 1;
  gap: 10px;
  align-items: center;
  justify-content: right;
  color: #dddddd;
  font-family: 'Open Sans', sans-serif !important;
}
</style>
