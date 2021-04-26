<template>
  <div @mouseover="lostModal" class="bg">
    <open-button v-if="!isVisable" @click="toggleVis"></open-button>
    <teleport to="body">
      <modal-box
        @visable="toggleVis"
        @is-picked="togglePicked"
        :is-visable="isVisable"
        :picked="isPicked"
      ></modal-box>
    </teleport>
  </div>
</template>

<script>
import OpenButton from "./components/OpenButton.vue";
import ModalBox from "./components/ModalBox.vue";
export default {
  components: { OpenButton, ModalBox },
  data() {
    return {
      isVisable: false,
      isPicked: false,
    };
  },
  methods: {
    lostModal(e) {
      if (!e.target.classList.contains("modal")) this.isPicked = false;
    },
    toggleVis() {
      this.isVisable = !this.isVisable;
    },
    togglePicked(val) {
      this.isPicked = val;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

body {
  position: relative;
  font-family: "Roboto", sans-serif;
}
.bg {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}
</style>
