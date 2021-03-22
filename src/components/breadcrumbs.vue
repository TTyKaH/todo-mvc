<template>
  <div class="breadcrumbs">
    <router-link v-for="b in breadcrumbs" :key="b.name" :to="b.path">
      {{b.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      let res = [];
      if (this.$route.path !== "/") {
        res.push({
          name: "Home",
          path: "/",
        });
      }
      res.push({
        name: this.$route.name,
        path: this.$route.path,
      });
      return res;
    },
  },
};
</script>

<style lang='scss'>
.breadcrumbs {
  a {
    &:after {
      content: "/";
    }
    &:last-child:after {
      content: none;
    }
  }
}
</style>