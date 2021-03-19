<template>
    <div class="user-window">
      <div class="user">
        {{ currentUser.name || "anonimous" }}
      </div>
      <authorization />
    </div>
</template>

<script>
import authorization from "@/components/authorization.vue";

export default ({
  components: {
    authorization,
  },
  props: [],
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
})
</script>

<style>
</style>
