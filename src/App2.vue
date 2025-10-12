<script setup>
import { ref, onMounted } from "vue";

let message = "You did it!";
function onClick() {
  alert("Button clicked!");
}
let status = ref(false);
let text = ref("test");
let link = "https://vuejs.org";
function toggleStatus() {
  status.value = !status.value;
  text.value = text.value === "test" ? "changed" : "test";
}
let tasks = ref([
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
]);
let newTask = ref("");
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push({
      id: tasks.value.length + 1,
      title: newTask.value,
      completed: false,
    });
    newTask.value = "";
  }
};
const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.slice(0, 5); // Load first 5 tasks from API
  } catch (error) {
    console.error("Error occurred during component mounting:", error);
  }
});
</script>

<template>
  <form @submit.prevent="addTask">
    <input class="border p-2" v-model="newTask" /><br />
    <button class="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
      Add Task
    </button>
  </form>
  <h1>{{ message }}</h1>
  <p class="text-green-500">Tailwind CSS is working!</p>
  <article class="font-bold text-lg">This is looking good!</article>
  <button @click="onClick">Click Me</button>
  <p v-if="status">User is active</p>
  <p v-else>User is inactive</p>
  <p>{{ text }}</p>
  <a :href="link">Vue.js Documentation</a>
  <br />
  <button @click="toggleStatus">Toggle Status</button>
  <ul>
    <li
      v-for="task in tasks"
      :key="task.id"
      @click="deleteTask(task.id)"
      class="cursor-pointer"
    >
      {{ task.title }} - {{ task.completed ? "Done" : "Pending" }}
    </li>
  </ul>
</template>

<style scoped></style>
