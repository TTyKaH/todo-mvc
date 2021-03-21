<template>
  <div class="user-window">
    <div>
      <div class="user">
        {{ currentUser ? currentUser.name : "anonimous" }}
      </div>
      <div class="bread-crumb">
        <!-- not use "class" attribute -->
        <div v-for="(breadcrumb, idx) in breadCrumbList" :key="idx" @click="routeTo(idx)" :class="{'linked': !!breadcrumb.link}">
          {{breadcrumb.name}}
          <div class="space-crutch">.</div>
          <div v-if="breadcrumb.link">/</div>
          <div class="space-crutch">.</div>
        </div>
      </div>
    </div>
    <div class="authorization">
      <button v-if="currentUser" @click="signOut()">Sign out</button>
      <div v-else class="lgn-rg">
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
      breadCrumbList: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  // how i can understand, it need for case, when i update page
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
      if (this.breadCrumbList[pRouteTo].link)
        this.$router.push(this.breadCrumbList[pRouteTo].link);
    },
    updateList() {
      this.breadCrumbList = this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style>
</style>
