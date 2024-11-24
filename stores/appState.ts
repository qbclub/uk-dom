// stores/counter.ts
import { defineStore } from "pinia";

export const useAppStore = defineStore("appSate", {
  state: () => ({
    activeMenu: 0,
    activeSubMenuRoute: "/info/houses",
  }),
  actions: {},
  getters: {},
});
