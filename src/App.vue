<template>
  <div class="app" id="app">
    <div class="user-window">
      <div class="user">
        {{ currentUser.name || "anonimous" }}
      </div>
      <authorization />
    </div>
    <sorter v-model="tasks" />
    <add-task @add="add"></add-task>
    <div class="tasks-list">
      <task v-for="(t, idx) in paginatedTasks" :key="idx" :task="t" @task-del="deleteTask(idx)" />
    </div>
    <pagination :tasks="tasks" v-model="paginatedTasks" />
  </div>
</template>

<script>
import authorization from "./components/authorization.vue";
import sorter from "./components/sorter.vue";
import task from "./components/task.vue";
import tasks from "./collections/tasks.js";
import pagination from "./components/pagination.vue";
import addTask from "./components/add-task.vue";

export default {
  components: {
    authorization,
    sorter,
    task,
    pagination,
    addTask,
  },
  data() {
    return {
      tasks: tasks,
      paginatedTasks: [],
      showCreationForm: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },
    add(task) {
      this.tasks.push(task);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/theme.scss";
</style>