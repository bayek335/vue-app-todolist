<template>
  <div class="card">
    <div class="card-head">
      <slot name="heading"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-foot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--light);
  color: var(--white);
  border-radius: 1rem;
  padding: 0.75rem;
  box-shadow: 0 0px 2px var(--prim-color);
}
.card-head {
  display: flex;
  overflow-x: hidden;
  padding: 0 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.15rem;
}
.card-body {
  max-height: 6rem;
  overflow-y: hidden;
  font-size: 0.9rem;
  padding: 0.5rem;
  word-spacing: 5px;
  margin-top: 0.25rem;
  line-height: 1.1rem;
}
.card-foot {
  padding: 0 0.5rem;
  margin-top: 2rem;
  font-size: 0.75rem;
}
</style>
