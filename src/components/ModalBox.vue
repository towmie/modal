<template>
  <transition>
    <div
      v-if="isVisable"
      class="modal"
      @mousedown="dragStart"
      @mousemove="dragging"
      @mouseup="drop"
    >
      <span class="text">Hello World!</span>
      <button @click="toggleModalVis" class="close"></button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["isVisable", "notPicked"],
  methods: {
    toggleModalVis() {
      this.$emit("visable");
    },

    dragStart(e) {
      // this.notPicked = true;
      this.$emit("isPicked", true);
      console.log(this.notPicked);
      // this.$store.dispatch("modalIsPicked", true);
      this.pickedX = e.offsetX;
      this.pickedY = e.offsetY;
    },
    dragging(e) {
      const el = document.querySelector(".modal");

      if (this.notPicked) {
        el.style.top = e.clientY - this.pickedY + "px";
        el.style.left = e.clientX - this.pickedX + "px";
      }
    },
    drop() {
      this.$emit("isPicked", false);

      // this.$store.dispatch("modalIsPicked", false);
    },
  },
  computed: {
    isPicked() {
      return this.$store.getters.getIspicked;
    },
    visability() {
      return this.$store.getters.getVisability;
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
  padding: 2px;

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
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: all 0.3s ease-in;
  /* animation: fade 0.3s ease-out; */
}
.v-enter-to {
  opacity: 1;
}
.v-leave-active {
  opacity: 1;
}
.v-leave-active {
  transition: all 0.3s ease-out;
  /* animation: fade 0.3s ease-in; */
}
.v-leave-active {
  opacity: 0;
}

/* @keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */
</style>
