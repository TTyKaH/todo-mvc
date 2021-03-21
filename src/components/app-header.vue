<template>
  <div class="user-window">
    <div>
      <div class="user">
        {{ currentUser ? currentUser.name : "anonimous" }}
      </div>
      <div class="bread-cramb">
        <div v-for="(breadcrumb, idx) in breadCrambList" :key="idx" @click="routeTo(idx)" :class="{'linked': !!breadcrumb.link}">
          {{breadcrumb.name}}
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
</template>

<script>
export default {
  data() {
    return {
      breadCrambList: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    },
  },
  methods: {
    signOut() {
      this.$store.commit("setUser", null);
    },
    routeTo(pRouteTo) {
      if (this.breadCrambList[pRouteTo].link)
        this.$router.push(this.breadCrambList[pRouteTo].link);
    },
    updateList() {
      this.breadCrambList = this.$route.meta.breadcramb;
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
