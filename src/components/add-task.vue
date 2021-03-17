<template>
  <div class="add-task">
    <div class="input-fields" v-if="showCreationForm">
      <div class="input-field">
        <input class="task-input" v-model="task.userName" type="text" placeholder="Name" />
        <input class="task-input" v-model="task.email" type="text" placeholder="Email" />
        <input class="task-input" v-model="task.name" type="text" placeholder="Task title" />
        <textarea class="task-input task-desc" v-model="task.desc" type="text" placeholder="Task description" />
      </div>
      <div>
        <button class="btn-add" @click="add()">Add</button>
        <button class="btn-add" @click="switchCreation()">Close</button>
      </div>
    </div>
    <button v-else @click="switchCreation()" class="btn">Add new task</button>
  </div>
</template>

<script>
const defaultTask = {
  userName: "",
  email: "",
  name: "",
  desc: "",
};
export default {
  name: "add-task",
  data() {
    return {
      showCreationForm: false,
      task: { ...defaultTask },
    };
  },
  methods: {
    switchCreation() {
      this.showCreationForm = !this.showCreationForm;
    },
    add() {
      if (this.task.userName === "") return false;
      if (this.task.email === "") return false;
      if (this.task.name === "") return false;
      this.$emit("add", { ...this.task });
      this.task = { ...defaultTask };
      this.showCreationForm = !this.showCreationForm;
    },
  },
};
</script>