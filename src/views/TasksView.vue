<template>
  <div class="tasks">
    <TaskComponent>Take a bath before breakfast</TaskComponent>
  </div>

  <div class="edit-task">
    <form @submit.prevent class="form">
      <input type="text" value="test" autofocus />
      <button>Done</button>
    </form>
  </div>
</template>

<script>
import TaskComponent from "../components/TaskComponent.vue";
export default {
  components: {
    TaskComponent,
  },
};
</script>

<style scoped>
.edit-task {
  display: none;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  background-color: var(--light);
  border-bottom-right-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  width: 96%;
  padding: 0 1rem;
  padding-bottom: 2rem;
  box-shadow: 0 0 5px var(--prim-color);
}
.edit-task.active {
  display: block;
}
.edit-task .form {
  background-color: transparent;
  box-shadow: none;
  display: block;
  padding: 0;
  text-align: right;
}
.edit-task input {
  display: block;
  width: 100%;
  margin: 0;
  background-color: transparent;
  font-size: 1rem;
  border: none;
  outline: none;
  color: var(--white);
}
button {
  margin-top: 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  padding: 0.25rem 1rem;
  border: none;
  background-color: var(--second-color);
  color: var(--white);
  transition: all ease 300ms;
}
button:hover {
  background-color: var(--prim-color);
}
</style>
