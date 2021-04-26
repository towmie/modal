<template>
  <div
    class="modal"
    @mousedown="dragStart"
    @mousemove="dragging"
    @mouseup="drop"
  >
    <span class="text">Hello World!</span>
    <button @click="toggleModalVis" class="close"></button>
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
  cursor: grab;
  position: absolute;
  left: calc(50% - 170px);
  top: 30%;
  padding: 20px;

  max-width: 300px;
  width: 100%;
  min-height: 40px;

  background-color: #fff;
  border-radius: 5px;
  color: rgb(12, 2, 107);
  text-align: center;
}
.modal:active {
  cursor: grabbing;
}

.text {
  font-size: 20px;
}

.close {
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;

  background-color: transparent;
  background-image: url(./../assets/close.svg);
  background-size: 15px 15px;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 3px;
  border: none;
  transition: all 0.2s ease-out;
}
.close:hover {
  background-color: #d8f1fe;
  background-image: url(./../assets/close-hover.svg);
}
</style>
