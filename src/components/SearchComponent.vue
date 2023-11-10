<template>
  <form class="form">
    <span>
      <searchIcon />
    </span>
    <input class="input-search" type="text" id="" placeholder="Search notes" />
  </form>
</template>

<script>
import searchIcon from "./icons/searchIcon.vue";

export default {
  components: {
    searchIcon,
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--light);
  border-radius: 1rem;
  box-shadow: 0 0 2px var(--prim-color);
  padding: 0.25rem 0;
  margin-top: 1.25rem;
}
span {
  font-size: 0.75rem;
  display: flex;
  text-align: center;
  margin-left: 0.75rem;
}
.input-search {
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--white);
  font-size: 1rem;
  margin: 0 0.5rem;
}
</style>
