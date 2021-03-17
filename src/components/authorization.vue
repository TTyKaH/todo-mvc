<template>
  <div class="authorization">
    <div v-if="!showSignIn && !showSignUp" class="lgn-rg">
      <button @click="switchSignIn()">Sign-in</button>
      <button @click="switchSignUp()">Sign-up</button>
    </div>
    <div v-if="showSignIn" class="sign">
      <input v-model="user.login" type="text" placeholder="Login" />
      <input v-model="user.password" type="password" placeholder="Password" />
      <div>
        <button @click="signIn()">Sign-in</button>
        <button @click="switchSignIn()">Cancel</button>
      </div>
    </div>
    <div v-if="showSignUp" class="sign">
      <input v-model="user.name" type="text" placeholder="Name" />
      <input v-model="user.login" type="text" placeholder="Login" />
      <input v-model="user.password" type="text" placeholder="Password" />
      <div>
        <button @click="signUp()">Sign-up</button>
        <button @click="switchSignUp()">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSignIn: false,
      showSignUp: false,
      user: {
        name: "",
        login: "",
        password: "",
      },
    };
  },
  methods: {
    switchSignIn() {
      this.showSignIn = !this.showSignIn;
    },
    switchSignUp() {
      this.showSignUp = !this.showSignUp;
    },
    // как сохранить изменения? к примеру при регистрации
    // signIn() {
    //   this.$store.commit("setUser", this.user);
    // },
    // signUp() {
    //   this.$store.commit("setUser", this.user);
    // },
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
        return (this.showSignIn = !this.showSignIn);
      }
    },
    signUp() {
      let registered = this.$store.state.registered;
      if (this.user.login === "" || this.user.password === "") {
        return new Error("Login or password fields are empty!");
      }
      let existing = registered.find((u) => this.user.login === u.login);
      if (existing) return new Error("This login is already taken!");
      this.$store.commit("signUp", this.user);
      this.$store.commit("setUser", this.user);
    },
  },
};
</script>
