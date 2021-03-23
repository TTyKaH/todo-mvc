<template>
  <div class="wrap tasks">
    <div class="flex menu">
      <div class="flex jus-con-center" style="padding-left: 8px">
        <router-link to="/add-new-task" class="btn button button-txt">Add new task</router-link>
      </div>
      <sorter v-model="tasks" />
    </div>
    <transition-group name="smooth-side">
      <task v-for="(t, idx) in paginatedTasks" :key="idx" :task="t" @task-del="deleteTask(idx)" />
    </transition-group>
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
