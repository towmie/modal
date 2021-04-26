"use strict";

export default {
  toggleVis(state, payload) {
    state.visible = payload;
  },

  modalIsPicked(state, payload) {
    state.isPicked = payload;
  },
};
