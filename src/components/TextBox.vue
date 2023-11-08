<template>
  <div class="input-group">
    <input
      type="text"
      placeholder="Search Employee..."
      class="employee-search-input"
    />
    <font-awesome-icon icon="magnifying-glass" />
  </div>
</template>

<style scoped>
.input-group {
  padding: 8px;
  color: #dddddd;
  border: 1px solid #dddddd;
  border-radius: 4px;
  display: flex;
  gap: 10px;
}

.input-group input {
  width: 141px;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  color: #dddddd;
  font-family: 'Rubik', sans-serif;
}

.employee-search-input::placeholder {
  color: #dddddd;
  font-family: 'Rubik', sans-serif;
}
</style>
