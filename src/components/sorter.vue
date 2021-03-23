<template>
  <div class="sorter">
    <div class="button-txt">sort:</div>
    <div>
      <button @click="sortBy('userName')" class="button button-txt">name</button>
      <button @click="sortBy('email')" class="button button-txt">email</button>
      <button @click="sortBy('isDone')" class="button button-txt">stasus</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    compare(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    },
    sortBy(field) {
      this.$emit(
        "input",
        this.value.sort((a, b) => this.compare(a[field], b[field]))
      );
    },
  },
};
</script>