<template>
  <section class="title-section">
    <h1>Manage Attendance</h1>
    <p>
      Attendance management is where you can generate, add, edit, and export the
      logs of the employees.
    </p>
    <div class="btn-container">
      <button>
        <span class="active"><font-awesome-icon icon="calendar" /></span>
        Attendance Logs
      </button>
      <button>
        <span><font-awesome-icon icon="download" /></span>Exported Files
      </button>
    </div>
  </section>
</template>

<style scoped>
.title-section {
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  width: 354px;
  padding: 2.25rem;
  border-right: 1px solid #c3cdc9;
  color: #00291b;
}

.title-section h1 {
  padding-bottom: 4%;
}

.title-section p {
  font-size: 14px;
}

.btn-container {
  display: flex;
  padding-block: 1rem;
  flex-wrap: wrap;
  gap: 10px;
}

.btn-container button {
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  text-align: left;
}

.btn-container button span.active {
  color: #17ad49;
}

.btn-container button span {
  color: #788e86;
}
</style>
