import { defineStore } from "pinia";

export const useActiveLinkStore = defineStore("activeLink", {
  state: () => {
    return {
      activeLink: "",
    };
  },
  actions: {
    setActiveLink(val) {
      this.activeLink = val;
    },
  },
});
