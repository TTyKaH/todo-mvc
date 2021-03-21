<template>
  <div class="input-fields">
    <div class="input-field">
      <input class="task-input" v-model="task.userName" type="text" placeholder="Name" />
      <input class="task-input" v-model="task.email" type="text" placeholder="Email" />
      <input class="task-input" v-model="task.name" type="text" placeholder="Task title" />
      <textarea class="task-input task-desc" v-model="task.desc" type="text" placeholder="Task description" />
    </div>
    <div>
      <button class="btn-add" @click="add()">Add</button>
      <router-link to="/" class="btn-add">Close</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: { userName: "", email: "", name: "", desc: "" },
    };
  },
  methods: {
    add() {
      if (this.task.userName === "") return false;
      if (this.task.email === "") return false;
      if (this.task.name === "") return false;
      this.$store.commit("addTask", this.task);
      this.$router.push("/");
    },
    click() {
      console.log(this.$router);
    },
  },
};
</script>