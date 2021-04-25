"use strict";

export default {
  toggleVis(context) {
    context.commit("toggleVis");
  },
  modalIsPicked(context, payload) {
    context.commit("modalIsPicked", payload);
  },
};
