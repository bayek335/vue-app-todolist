<template>
  <div class="wrapper">
    <HeaderComponent />
    <AddComponent
      v-if="this.$route.name == 'notes' || this.$route.name == 'tasks'"
    />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import AddComponent from "./components/AddComponent.vue";

export default {
  components: {
    HeaderComponent,
    AddComponent,
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 576px;
  padding: 2rem 1.25rem;
  background-color: var(--second-color);
  height: 100vh;
  width: 100vw;
}
</style>
