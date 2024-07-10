<script setup>
import {ref, onMounted} from "vue";
// ref helps supporting reactivity - much like useState in React
const name = ref('OG');
const status = ref('pending');
const tasks = ref(['Task one', 'Task two', 'Task three']);
const newTask = ref('');
const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'active'
  } else {
    status.value = 'active'
  }
};
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log(error)
  }

})


// data() {
//   return {
//     name: 'OG',
//     status: 'pending',
//     tasks: ['Task one', 'Task two', 'Task three'],
//     link: 'https://google.com'
//   }
// },
// methods: {
//   toggleStatus() {
//     if (this.status === 'active') {
//       this.status = 'pending'
//     } else if (this.status === 'pending') {
//       this.status = 'active'
//     } else {
//       this.status = 'active'
//     }
//
//   }
// }
//}
</script>
<template>
  <h1> {{ name }}</h1>
  <p v-if="status=='active'"> User is active</p>
  <p v-else> User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" v-model="newTask" id="newTask">
    <button type="submit">Submit</button>
  </form>
  <br>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task"><span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <button @click="toggleStatus">Change status</button>
</template>
