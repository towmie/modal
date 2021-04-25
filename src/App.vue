<template>
  <div @mouseover="lostModal" class="bg">
    <open-button v-if="!visability"></open-button>
    <teleport to="body" v-else>
      <modal-box></modal-box>
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
      pickedX: null,
      pickedY: null,
    };
  },
  methods: {
    lostModal(e) {
      if (!e.target.classList.contains("modal"))
        this.$store.dispatch("modalIsPicked", false);
    },
  },
  computed: {
    visability() {
      return this.$store.getters.getVisability;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  position: relative;
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
