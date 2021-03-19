<template>
  <div class="app" id="app">
    <app-header></app-header>
    
    <router-view></router-view>

    
    <!-- <sorter v-model="tasks" /> -->
    <!-- <div class="tasks-list">
      <task v-for="(t, idx) in paginatedTasks" :key="idx" :task="t" @task-del="deleteTask(idx)" />
    </div>
    <pagination :tasks="tasks" v-model="paginatedTasks" /> -->
  </div>
</template>

<script>
// import sorter from "./components/sorter.vue";
// import task from "./components/task.vue";
// import pagination from "./components/pagination.vue";
import appHeader from "@/components/app-header";

export default {
  components: {
    appHeader,
  },
  data() {
    return {
      // tasks: tasks,
      // paginatedTasks: [],
      showCreationForm: false,
    };
  },
  
  methods: {
    
  },
};
</script>

<style lang="scss">
@import "@/assets/css/theme.scss";
</style>
