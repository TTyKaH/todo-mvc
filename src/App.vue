<template>
  <div class="app" id="app">
    <app-header></app-header>
    <transition name="smooth-up">
      <router-view></router-view>
    </transition>
  </div>
</template>

// TODO: проблемы со скролом при работе с роутингом

<script>
import appHeader from "@/components/app-header";

export default {
  components: {
    appHeader,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/theme.scss";
</style>
