<template>
  <div class="bread-crumb">
    <div v-for="(breadcrumb, idx) in breadCrumbList" :key="idx" @click="routeTo(idx)" :class="{'linked': !!breadcrumb.link}">
      {{breadcrumb.name}}
      <div v-if="breadcrumb.link" class="space-crutch">.</div>
      <div v-if="breadcrumb.link">/</div>
      <div v-if="breadcrumb.link" class="space-crutch">.</div>
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