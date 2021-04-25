"use strict";

export default {
  toggleVis(state) {
    state.visible = !state.visible;
  },

  modalIsPicked(state, payload) {
    state.isPicked = payload;
    console.log(state.isPicked);
  },
};
