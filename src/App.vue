<template>
  <div class="app" id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from "@/components/app-header";

export default {
  components: {
    appHeader,
  },
  data() {
    return {
      showCreationForm: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/theme.scss";
</style>
