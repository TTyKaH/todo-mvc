<template>
  <div>
    <router-link to="/add-new-task" class="btn">Add new task</router-link>
    <sorter v-model="tasks" />
    <task v-for="(t, idx) in paginatedTasks" :key="idx" :task="t" @task-del="deleteTask(idx)" />
    <pagination :tasks="tasks" v-model="paginatedTasks" />
  </div>
</template>

<script>
import task from "@/components/task.vue";
import pagination from "@/components/pagination.vue";
import sorter from "@/components/sorter.vue";

export default {
  components: {
    task,
    pagination,
    sorter,
  },
  data() {
    return {
      paginatedTasks: [],
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    deleteTask(idx) {
      this.$store.commit("delTask", idx);
    },
  },
};
</script>
