import { createRouter, createWebHistory } from "vue-router";

import NotesView from "../views/NotesView.vue";
import TasksView from "../views/TasksView.vue";
import AddNoteView from "../views/AddNoteView.vue";
import AddTaskView from "../views/AddTaskView.vue";
const routes = [
  {
    path: "/",
    name: "notes",
    component: NotesView,
  },
  {
    path: "/notes/add",
    name: "add_note",
    component: AddNoteView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },

  {
    path: "/tasks/add",
    name: "add_task",
    component: AddTaskView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
