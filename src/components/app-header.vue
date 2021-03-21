<template>
  <div class="user-window">
    <div>
      <div class="user">
        {{ currentUser ? currentUser.name : "anonimous" }}
      </div>
      <!-- <div class="bread-crambs">
        {{ breadCrumbs }}
      </div> -->
      <div class="bread-cramb">
        <div v-for="cramb in breadCrumbs" :key="cramb">
          <router-link to="/" class="rout-link">{{ cramb }}</router-link>
        </div>
      </div>
    </div>
    <div class="authorization">
      <button v-if="currentUser" @click="signOut()">Sign out</button>
      <div v-else class="lgn-rg">
        <button @click="click()">TEST</button>
        <router-link to="/sign-in">Sign-in</router-link>
        <router-link to="/sign-up">Sign-up</router-link>
      </div>
    </div>
  </div>
  <!-- $route использовать для формирования строки breadcrambs -->
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: ["/home"],
      // breadCrumbsList: [],
    };
  },
  // mounted() {
  //   this.updateList();
  // },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
    // breadCrumbs() {
    //   return this.$router.history.current.path;
    // },
  },
  watch: {
    $route(to, from) {
      // проверка на то, что я уже и так тут - иначе стакуются ссылки (которые пусты)
      this.breadCrumbs.push(to.name);
      console.log(from);
    },
  },
  methods: {
    signOut() {
      this.$store.commit("setUser", null);
    },

    click() {
      // console.log(this.$router.history.current.path);
      // console.log(this.$router.history.router.history.current.path);
      // console.log(this.$route.meta.breadCrumb);
      console.log(this.$router);
    },
  },
};
</script>

<style>
</style>
