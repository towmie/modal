<template>
  <button @click="toggleModalVis" class="open">Открыть окно</button>
</template>

<script>
export default {
  methods: {
    toggleModalVis() {
      this.$store.dispatch("toggleVis");
    },
  },
};
</script>

<style scoped>
.open {
  padding: 10px 20px;

  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
}
</style>
