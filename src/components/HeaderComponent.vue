<template>
  <header>
    <nav>
      <RouterLink @click="setActiveLink('notes')" to="/" :class="notes">
        <span><noteIcon /></span>
        Notes
      </RouterLink>
      <RouterLink @click="setActiveLink('tasks')" to="/tasks" :class="tasks">
        <span><tasksIcon /></span>
        Tasks
      </RouterLink>
    </nav>
    <div>
      <SearchComponent
        v-if="this.$route.name == 'notes' || this.$route.name == 'tasks'"
      />
    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import noteIcon from "./icons/noteIcon.vue";
import tasksIcon from "./icons/tasksIcon.vue";
import addIcon from "./icons/addIcon.vue";
import SearchComponent from "./SearchComponent.vue";

let tasks = "";
let notes = "active";
const path = window.location.pathname;
if (path != "/") {
  tasks = "active";
  notes = "";
}
export default {
  components: {
    RouterLink,
    noteIcon,
    tasksIcon,
    addIcon,
    SearchComponent,
  },
  data() {
    return {
      notes: notes,
      tasks: tasks,
    };
  },
  methods: {
    setActiveLink(v) {
      if (v == "notes") {
        this.notes = "active";
        this.tasks = "";
      } else {
        this.tasks = "active";
        this.notes = "";
      }
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
nav span {
  display: block;
  margin: 0;
  text-align: center;
  fill: var(--white);
  font-size: 1.15rem;
}
nav a {
  color: var(--white);
  text-decoration: none;
  font-size: 0.9rem;
  margin: 0 1rem;
}
nav a.active,
nav .active span {
  color: #ffc107;
  fill: #ffc107;
}
</style>
