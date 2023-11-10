<template>
  <main class="body-content">
    <RouterLink v-for="(note, index) in notes" :to="'/notes/' + index">
      <CardComponent>
        <template #heading>{{ note.title }}</template>
        <template #body>{{ note.note }}</template>
        <template #foot>{{ note.date }}</template>
      </CardComponent>
    </RouterLink>
  </main>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";

const notes = [
  {
    title: "Conclusion of Harry Poter books",
    note: "Harry Potter book ia a bok that explain a magical world which part i like best is at the village",
    date: "November 2",
  },
  {
    title: "Github",
    note: "GitHub excels in segmenting its release notes and adopting different approaches. While their latest update is short and includes screenshots, previous updates have featured many clearly defined explanations of the issue and what was affected. The frequency of release notes is very short, – with multiple updates happening in one day at times.",
    date: "November 5",
  },
  {
    title: "My Portfolio",
    note: "My note for my next portfolio is tell about designing the database structure. Before i created the algoritma of the website i will build a database structure first",
    date: "November 7",
  },
];

export default {
  components: {
    CardComponent,
  },

  data() {
    return {
      notes: notes,
    };
  },
};
</script>

<style scoped>
.body-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  font-size: 1rem;
  margin: 1.5rem 0;
}

a {
  text-decoration: none;
}
</style>
