<template>
  <div class="input-fields">
    <div class="input-field">
      <input class="task-input grey-brd" v-model="task.userName" type="text" placeholder="Name" />
      <input class="task-input grey-brd" v-model="task.email" type="text" placeholder="Email" />
      <input class="task-input grey-brd" v-model="task.name" type="text" placeholder="Task title" />
      <textarea class="task-input grey-brd task-desc-input" v-model="task.desc" ref="textarea" @input="textAreaAdjust()" type="text" placeholder="Task description" />
    </div>
    <div>
      <button class="button btn-add button-txt button-white" @click="add()">Add</button>
      <router-link to="/" class="button btn-add button-txt button-white">Close</router-link>
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
    // TODO: реализовать динамическую высоту при помощи ref передаваемого в метод
    // не смог правильно передать аргумент
    textAreaAdjust() {
      this.$refs.textarea.style.height = "1px";
      this.$refs.textarea.style.height =
        25 + this.$refs.textarea.scrollHeight + "px";
    },
  },
};
</script>