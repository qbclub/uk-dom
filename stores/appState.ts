// stores/counter.ts
import { defineStore } from "pinia";

export const useAppStore = defineStore("appSate", {
  state: () => ({
    activeMenu: 0,
    activeMenuRoute: '/',
    activeSubMenuRoute: '/info/documents',

  }),
  actions: {},
  getters: {},
});
