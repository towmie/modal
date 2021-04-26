"use strict";

export default {
  toggleVis(context, payload) {
    context.commit("toggleVis", payload);
  },
  modalIsPicked(context, payload) {
    context.commit("modalIsPicked", payload);
  },
};
