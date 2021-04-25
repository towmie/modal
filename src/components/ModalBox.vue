<template>
  <div
    class="modal"
    @mousedown="dragStart"
    @mousemove="dragging"
    @mouseup="drop"
  >
    <p class="heading">
      Hello World!
      <button @click="toggleModalVis" class="close">Close</button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    toggleModalVis() {
      this.$store.dispatch("toggleVis");
    },

    dragStart(e) {
      this.$store.dispatch("modalIsPicked", true);
      this.pickedX = e.offsetX;
      this.pickedY = e.offsetY;
    },
    dragging(e) {
      const el = document.querySelector(".modal");

      if (this.isPicked) {
        el.style.top = e.clientY - this.pickedY + "px";
        el.style.left = e.clientX - this.pickedX + "px";
      }
    },
    drop() {
      this.$store.dispatch("modalIsPicked", false);
    },
  },
  computed: {
    isPicked() {
      return this.$store.getters.getIspicked;
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  left: 50%;
  top: 30%;
  cursor: grab;
  background-color: #fff;
  border-radius: 5px;
  color: rgb(12, 2, 107);
  padding: 20px;
  width: 300px;
  height: 40px;
}
.modal:active {
  cursor: grabbing;
}
</style>
