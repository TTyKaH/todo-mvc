<template>
  <div>
    <add-task @add="add"></add-task>
    <sorter v-model="tasks" />
    <task
      v-for="(t, idx) in paginatedTasks"
      :key="idx"
      :task="t"
      @task-del="deleteTask(idx)"
    />
    <pagination :tasks="tasks" v-model="paginatedTasks" />
  </div>
</template>

<script>
import task from "@/components/task.vue";
import pagination from "@/components/pagination.vue";
import sorter from "@/components/sorter.vue";
import tasks from "@/collections/tasks.js";
import addTask from "@/components/add-task.vue";


export default {
  components: {
    task,
    pagination,
    sorter,
    addTask
  },
  data() {
    return {
      tasks,
      paginatedTasks: [],
    };
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
