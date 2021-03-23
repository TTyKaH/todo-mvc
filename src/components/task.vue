<template>
  <div class="task">
    <div class="task-header">
      <div class="for-whom">
        <div class="name">
          {{ task.userName }}
        </div>
        <div class="email">
          <p>
            {{ task.email }}
          </p>
        </div>
      </div>
      <div class="control">
        <input class="status" type="checkbox" v-if="currentUserIsAdmin" v-model="task.isDone" />
        <button class="task-btn" v-if="currentUserIsAdmin" @click="switchEdit()">
          edit
        </button>
        <button @click="taskDel()" class="task-btn">del</button>
      </div>
    </div>
    <div class="task-content">
      <div class="task-title">
        {{ task.name }}
      </div>
      <div v-if="isEditing">
        <textarea class="editArea" v-model="task.desc"></textarea>
        <div class="flex">
          <button class="button" @click="switchEdit()">accept</button>
          <button class="button" @click="abortEdit()">abort</button>
        </div>
      </div>
      <div class="task-desc" v-else>
        {{ task.desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      isEditing: false,
      descBuffer: "",
    };
  },
  computed: {
    currentUserIsAdmin() {
      return true;
      // !!! Пользователь всегда админ
      // return this.$store.state.user.admin !== undefined;
    },
  },
  methods: {
    taskDel() {
      this.$emit("task-del");
    },
    switchEdit() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.descBuffer = this.task.desc;
      }
    },
    abortEdit() {
      this.isEditing = false;
      this.task.desc = this.descBuffer;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss"; // для доступа к константам
.task-content {
  width: 100%;
}

.editArea {
  width: 100%;
  height: 125px;
}
</style>
