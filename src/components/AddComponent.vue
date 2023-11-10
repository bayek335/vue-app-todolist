<template>
  <div class="add">
    <RouterLink class="" :to="this.$route.name + '/add'">
      <addIcon />
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

import addIcon from "./icons/addIcon.vue";
export default {
  components: {
    addIcon,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.add a {
  position: absolute;
  right: 1.5rem;
  bottom: 10%;
  background-color: #ffc107;
  border-radius: 2rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  font-size: 1.75rem;
  justify-content: center;
  align-items: center;
}
</style>
