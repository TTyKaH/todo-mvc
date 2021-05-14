<template>
  <div class="bg-header">
    <div class=" wrap user-window">
      <div class="flex">
        <div>
          <div class="user">
            {{ currentUser ? currentUser.name : "Anonymous" }}
          </div>
        </div>
        <Breadcrumbs />
      </div>
      <div class="authorization">
        <button class="button" v-if="currentUser" @click="signOut()">Sign out</button>
        <div v-else class="lgn-rg">
          <router-link class="button" to="/sign-in">Sign-in</router-link>
          <router-link class="button" to="/sign-up">Sign-up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/breadcrumbs";

export default {
  components: { Breadcrumbs },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    signOut() {
      this.$store.commit("setUser", null);
    },
  },
};
</script>
