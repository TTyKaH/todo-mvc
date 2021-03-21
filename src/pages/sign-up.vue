<template>
  <div class="authorization">
    <div class="sign">
      <input v-model="user.name" type="text" placeholder="Name" />
      <input v-model="user.login" type="text" placeholder="Login" />
      <input v-model="user.password" type="text" placeholder="Password" />
      <div>
        <button @click="signUp()">Sign-up</button>
        <router-link to="/">Cancel</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        login: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      let registered = this.$store.state.registered;
      if (this.user.login === "" || this.user.password === "") {
        return new Error("Login or password fields are empty!");
      }
      let existing = registered.find((u) => this.user.login === u.login);
      if (existing) return new Error("This login is already taken!");
      this.$store.commit("signUp", this.user);
      this.$store.commit("setUser", this.user);
      this.$router.push("/");
    },
  },
};
</script>
