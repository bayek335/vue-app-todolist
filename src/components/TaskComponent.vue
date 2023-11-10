<template>
  <div class="form" @submit.prevent>
    <input type="checkbox" name="" id="" />
    <span><slot></slot></span>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--light);
  border-radius: 1rem;
  box-shadow: 0 0 1px var(--prim-color);
  padding: 1rem 0;
  margin-top: 0.5rem;
  padding-right: 1rem;
}
.form:first-child {
  margin-top: 1.25rem;
}

.form input {
  margin-left: 1rem;
  margin-right: 0.5rem;
}
.form span {
  height: 1.25rem;
  font-size: 0.9rem;
  overflow: hidden;
}
</style>
