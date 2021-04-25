<template>
  <div>
    <div
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
export default {};
</script>

<style scoped></style>
