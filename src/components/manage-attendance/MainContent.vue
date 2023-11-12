<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'
import NoItemsComponent from './NoItemsComponent.vue'
import TableHeader from './TableHeader.vue'

defineProps({
  activeLogsButton: { type: String, default: 'active' },
  activeTab: { type: String, required: true },
  logsData: {
    type: Object as PropType<LogsData>,
    required: true
  }
})

const emit = defineEmits<{
  (eventName: 'set-selected-log-button', value: 'active' | 'deleted'): string
}>()

const updateActiveLogsButton = (value: 'active' | 'deleted') => {
  emit('set-selected-log-button', value)
}
</script>

<template>
  <main>
    <div class="table-header">
      <TableHeader :active-tab="activeTab" />
      <div class="table-header-btns" v-if="activeTab === 'logs'">
        <button
          class="active-logs"
          :class="{ active: activeLogsButton === 'active' }"
          @click="() => updateActiveLogsButton('active')"
        >
          Active Logs
          <font-awesome-icon
            v-if="activeLogsButton === 'active'"
            icon="check"
          />
        </button>
        <button
          class="deleted-logs"
          :class="{ active: activeLogsButton === 'deleted' }"
          @click="() => updateActiveLogsButton('deleted')"
        >
          Deleted Logs
          <font-awesome-icon
            v-if="activeLogsButton === 'deleted'"
            icon="check"
          />
        </button>
      </div>
    </div>
    <div class="table-data">
      <div class="content">
        <NoItemsComponent
          :title="
            activeTab === 'logs'
              ? 'No attendance logs to show'
              : 'There are no exported items to show on your end.'
          "
          :description="
            activeTab === 'logs'
              ? 'Get started by searching for the logs.'
              : 'Search for the logs and click Export to generate the file here.'
          "
        />
      </div>
      <div class="table-footer">
        <div class="page-size">
          Items per page
          <select>
            <option value="10">10</option>
          </select>
        </div>
        <div class="table-pagination">
          <button>
            <font-awesome-icon icon="angles-left" />
          </button>
          <button>
            <font-awesome-icon icon="caret-left" />
          </button>

          <div class="pages">
            Page
            <input
              type="text"
              :value="logsData?.current_page"
              :disabled="logsData?.totalRows === 0"
            />
            of {{ logsData?.total_pages }}
          </div>

          <button>
            <font-awesome-icon icon="caret-right" />
          </button>
          <button>
            <font-awesome-icon icon="angles-right" />
          </button>
        </div>
        <div class="table-row-count">
          Showing
          {{
            logsData && logsData?.totalRows > 0
              ? logsData?.per_page * logsData?.current_page
              : 0
          }}
          of {{ logsData?.totalRows }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 62.75px);
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 1.5rem;
  width: 100%;
  gap: 1rem;
}

.table-header {
  box-sizing: border-box;
  width: calc(100% - 1.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.table-header-btns {
  box-sizing: border-box;
  display: flex;
}

.table-header-btns button {
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  width: auto;
  display: flex;
  flex-wrap: auto;
  gap: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #17ad49;
  background-color: transparent;
  align-items: center;
  white-space: nowrap;
  padding: 4% 3%;
}

.table-header-btns button.active-logs {
  color: #17ad49;
  padding: 6px, 8px, 6px, 8px;
  border-radius: 0.25rem 0 0 0.25rem;
}

.table-header-btns button.deleted-logs {
  color: #17ad49;
  padding: 6px, 8px, 6px, 8px;
  border-radius: 0 0.25rem 0.25rem 0;
}

.table-header-btns button.active {
  border: none;
  background-color: #17ad49;
  color: white;
}

.table-data {
  flex: 1;
  width: 100%;
  border: 1px solid #c3cdc9;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.table-data .content {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-footer {
  height: auto;
  border-top: 1px solid #c3cdc9;
  padding-inline: 1rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  line-height: 24px;
  color: #3c5b51;
}

.table-footer .page-size {
  width: auto;
  display: flex;
  gap: 0.5rem;
}

.table-footer .page-size select,
.table-footer .table-pagination input {
  outline: none;
  border-radius: 4px;
  border: 1px solid #a5b3af;
  color: #3c5b51;
}

.table-footer .table-pagination .pages input {
  padding-block: 0.25rem;
  text-align: center;
  width: clamp(3rem, 3rem, 4rem);
}

.table-footer .table-pagination {
  display: flex;
  gap: 8px;
}

.table-footer .table-pagination button {
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  color: #3c5b51;
}

.disabled {
  cursor: default;
  color: #c3cdc9;
}
</style>
