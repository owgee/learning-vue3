<script>
export default {
  data() {
    return {
      name: 'OG',
      status: 'pending',
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https://google.com'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'active'
      } else {
        this.status = 'active'
      }

    }
  }
}
</script>
<template>
  <h1> {{ name }}</h1>
  <p v-if="status=='active'"> User is active</p>
  <p v-else> User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Go to Google</a>
  <button @click="toggleStatus">Change status</button>
</template>
