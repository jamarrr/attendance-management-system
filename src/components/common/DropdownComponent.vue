<script setup lang="ts">
import { computed, defineEmits } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  selectedValue: { type: String, default: '' },
  noItemsMsg: { type: String },
  noSelectedItemMsg: { type: String, required: true },
  options: {
    type: Array<String>,
    default: []
  },
  hasAll: { type: Boolean, default: false }
})
const emits = defineEmits<{
  (eventName: 'selected-option', value: string): string
}>()

const isOptionsEmpty = computed(
  () =>
    ['Employee', 'Location'].includes(props.title) &&
    props.options?.length === 0
)

const updateDropdownProp = (e: Event) => {
  emits('selected-option', (e.target as HTMLSelectElement).value)
}
</script>

<template>
  <fieldset :class="{ disabled: isOptionsEmpty }">
    <legend>{{ title }}</legend>
    <select
      :class="{ disabled: isOptionsEmpty }"
      :value="isOptionsEmpty ? 'no-items' : props.selectedValue"
      :disabled="isOptionsEmpty"
      @change="updateDropdownProp"
    >
      <option value="" selected hidden>{{ noSelectedItemMsg }}</option>
      <option value="no-items" hidden>
        {{ noItemsMsg }}
      </option>
      <option v-if="hasAll" value="ALL">ALL</option>
      <option v-for="option in options" :value="option">
        {{ option }}
      </option>
    </select>
  </fieldset>
</template>

<style scoped>
fieldset {
  display: flex;
  width: 100%;
  border: 1px solid #c3cdc9;
  border-radius: 4px;
}

fieldset select {
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Rubik', sans-serif;
}

fieldset.disabled,
select.disabled {
  background-color: #f0f2f2;
}

legend {
  font-size: 12px;
  color: #879a94;
}
</style>
