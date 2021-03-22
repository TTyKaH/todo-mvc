<template>
  <div class="authorization">
    <div class="sign">
      <input v-model="user.login" type="text" placeholder="Login" />
      <input v-model="user.password" type="password" placeholder="Password" />
      <div>
        <button class="button" @click="signIn()">Sign-in</button>
        <router-link class="button" to="/">Cancel</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      // без логики проверки пароля, только простое сравнение
      // нет возможности разлогиниться, а так же не убираются поля sig-in или sig-up после входа в профиль
      let registered = this.$store.state.registered;
      if (this.user.login === "" || this.user.password === "") {
        return console.log("Login or password fields are empty!");
      }
      for (const u of registered) {
        if (this.user.login !== u.login) {
          return new Error("wrong login");
        }
        if (this.user.password !== u.password) {
          return new Error("wrong password");
        }
        this.$store.commit("setUser", u);
        console.log("Logged in");
        this.$router.push("/");
      }
    },
  },
};
</script>
