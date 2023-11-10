<template>
  <div class="add-note">
    <form class="form" @submit.prevent="addNote">
      <input type="text" placeholder="Title" autofocus v-model="title" />
      <textarea
        rows="10"
        placeholder="Enter a text here"
        v-model="content"
      ></textarea>
      <button class="btn-save-note" type="submit">Done</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    addNote() {
      console.log(this.title);
      console.log(this.content);
    },
  },
};
</script>
<style scoped>
.add-note {
  display: block;
  margin-top: 2rem;
}
.form {
  display: flex;
  flex-direction: column;
}
input {
  font-weight: 500;
}
input,
textarea {
  background-color: transparent;
  border: none;
  outline: none;
  width: 100;
  color: var(--white);
}
input::placeholder,
textarea::placeholder {
  color: #999;
}
textarea {
  padding-top: 1rem;
  column-span: 50;
  font-size: 0.9rem;
}

.btn-save-note {
  position: absolute;
  right: 1.5rem;
  bottom: 10%;
  padding: 0.25rem 1rem;
  font-size: 0.9rem;
  background-color: var(--white);
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  color: var(--prim-color);
  transition: all ease 300ms;
}
.btn-save-note:hover {
  background-color: var(--prim-color);
  color: var(--white);
}
</style>
