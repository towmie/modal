<template>
  <div @mouseover="lostModal" class="bg">
    <button @click="toggleModal" v-if="!visible">Push</button>
    <div
      v-else
      class="modal"
      @mousedown="dragStart"
      @mousemove="dragging"
      @mouseup="drop"
    >
      hahahahaha
      <button @click="toggleModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      picked: false,
      pickedX: null,
      pickedY: null,
    };
  },
  methods: {
    toggleModal() {
      this.visible = !this.visible;
    },
    dragStart(e) {
      const el = document.querySelector(".modal");
      el.style.position = "absolute";
      this.picked = true;
      this.pickedX = e.offsetX;
      this.pickedY = e.offsetY;
    },
    lostModal(e) {
      if (!e.target.classList.contains("modal")) this.picked = false;
      console.log(this.picked);
    },
    dragging(e) {
      const el = document.querySelector(".modal");

      if (this.picked) {
        el.style.top = e.clientY - this.pickedY + "px";
        el.style.left = e.clientX - this.pickedX + "px";
      }
    },
    drop() {
      this.picked = false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.bg {
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal {
  cursor: grab;
  background-color: rgb(136, 26, 26);
  color: #fff;
  padding: 20px;
  width: 300px;
  height: 40px;
}
.modal:active {
  cursor: grabbing;
}
</style>
