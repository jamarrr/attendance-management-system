<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import DatePicker from '../../../components/common/DatePicker.vue'
import SelectedFilter from './SelectedFilter.vue'
import DropdownComponent from '../../../components/common/DropdownComponent.vue'
import {
  CompanyIcon,
  DepartmentIcon,
  LocationIcon,
  EmployeeIcon
} from '../../../utils/icons'
import FILTER_OPTIONS from '../../../utils/data/filter-options.json'
import {
  getCompanyDepartments,
  getCompanyDepartment,
  getAllLocations,
  getDepartmentLocations,
  getAllEmployees,
  getDepartmentEmployees
} from '../../../utils/filterFunctions'

const isShowFilters = ref(false)

/**
 * State for selected filters
 */
const companyName = ref('')
const departmentName = ref('')
const locationName = ref('')
const employeeName = ref('')

/**
 * State for options that will be used for the filter dropdown
 */
const companyOptions = ref<String[]>([])
const departmentOptions = ref<String[]>([])
const locationOptions = ref<String[]>([])
const employeeOptions = ref<String[]>([])

/**
 * Check selected company and populate department options using it
 */
watch(companyName, (newCompanyName, _) => {
  const deps = getCompanyDepartments(newCompanyName)

  departmentName.value = ''
  departmentOptions.value = deps
})

/**
 * Check selected department and populate location options using it
 */
watch(departmentName, (newDepartmentName, _) => {
  /**
   * Get departments from selected company
   */
  const departments = getCompanyDepartment(companyName.value)

  const locations =
    newDepartmentName === 'ALL'
      ? getAllLocations()
      : getDepartmentLocations(departments, newDepartmentName)
  const employees =
    newDepartmentName === 'ALL'
      ? getAllEmployees()
      : getDepartmentEmployees(departments, newDepartmentName)

  // Reset value of selected location and employee
  locationName.value = ''
  employeeName.value = ''

  // Assign new options to dropdown depending on the selected department
  locationOptions.value = locations
  employeeOptions.value = employees
})

onMounted(() => {
  /**
   * Extract company names from the FILTER_OPTIONS variable
   */
  companyOptions.value = FILTER_OPTIONS.map((option) => option.company)
})
</script>

<template>
  <section class="filter-section">
    <label>DATE RANGE</label>

    <DatePicker title="Date From" />
    <DatePicker title="Date To" />

    <div class="filter-title">
      <label>FILTERS</label>
      <button @click="isShowFilters = !isShowFilters">
        {{ isShowFilters ? 'Hide All' : 'Show All' }}
      </button>
    </div>

    <div v-if="!isShowFilters" class="selected-filters">
      <SelectedFilter
        :icon="CompanyIcon"
        :selected-item="companyName"
        no-selected-item-msg="No selected Company"
      />
      <SelectedFilter
        :icon="DepartmentIcon"
        :selected-item="departmentName"
        no-selected-item-msg="No selected Department"
      />
      <SelectedFilter
        :icon="LocationIcon"
        :selected-item="locationName"
        no-selected-item-msg="No selected Location"
      />
      <SelectedFilter
        :icon="EmployeeIcon"
        :selected-item="employeeName"
        no-selected-item-msg="No selected Employee"
      />
    </div>

    <div class="filter-selection" v-else>
      <DropdownComponent
        title="Company"
        no-selected-item-msg="Select Company"
        :selected-value="companyName"
        :options="companyOptions"
        @selected-option="(value: string) => companyName = value"
      />
      <DropdownComponent
        title="Department"
        no-selected-item-msg="Select Department"
        :selected-value="departmentName"
        :options="departmentOptions"
        :has-all="departmentOptions.length > 1"
        @selected-option="(value: string) => departmentName = value"
      />
      <DropdownComponent
        title="Location"
        no-selected-item-msg="Select Location"
        no-items-msg="No Location"
        :selected-value="locationName"
        :options="locationOptions"
        :has-all="locationOptions.length > 1"
        @selected-option="(value: string) => locationName = value"
      />
      <DropdownComponent
        title="Employee"
        no-selected-item-msg="Select Employee"
        no-items-msg="No Employee"
        :selected-value="employeeName"
        :options="employeeOptions"
        :has-all="employeeOptions.length > 1"
        @selected-option="(value: string) => employeeName = value"
      />
    </div>
  </section>
</template>

<style scoped>
.filter-section {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-family: 'Rubik', sans-serif;
  width: 354px;
  padding: 24px 32px;
  border-right: 1px solid #c3cdc9;
  color: #00291b;
}

.filter-section label {
  font-weight: 500;
}

.filter-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.filter-title button {
  border: none;
  background-color: transparent;
  font-family: 'Rubik', sans-serif;
  color: #0f6eeb;
  cursor: pointer;
}

.filter-title button:hover {
  color: #0f6eebbd;
}

.selected-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-selection {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
