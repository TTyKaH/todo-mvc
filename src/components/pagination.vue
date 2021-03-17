<template>
  <div class="pagination">
    <button v-if="currentPage > 1" @click="prev()">prev</button>
    <button v-for="(p, idx) in pages" :key="idx" @click="setPage(p)">
      {{ p }}
    </button>
    <button v-if="currentPage < pages.length" @click="next()">next</button>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.setPage(this.currentPage);
  },
  data() {
    return {
      limit: 6,
      availableLimits: [10, 20, 50, 100],
      offset: 0,
      currentPage: 1,
    };
  },
  computed: {
    pages() {
      let res = [];
      let pagesNum = Math.ceil(this.tasks.length / this.limit - 1);
      // в условии добавил "-1"
      for (let i = 0; i <= pagesNum; i++) {
        res.push(i + 1);
      }
      return res;
    },
  },
  watch: {
    tasks() {
      this.setPage(this.currentPage);
    },
  },
  methods: {
    next() {
      if (this.currentPage === Math.ceil(this.tasks.length / this.limit)) {
        return;
      }
      this.setPage(this.currentPage + 1);
    },
    prev() {
      if (this.currentPage === 1) {
        return;
      }
      this.setPage(this.currentPage - 1);
    },
    setPage(p) {
      this.currentPage = p;
      let offset = (this.currentPage - 1) * this.limit;
      this.$emit("input", [...this.tasks].splice(offset, this.limit));
    },
  },
};
</script>

// должна быть связана с tasks
// должен быть фильтр массив