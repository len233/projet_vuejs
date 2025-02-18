import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    panier: []
  }),
  actions: {
    ajouter(plat) {
      this.panier.push(plat);
    },
    retirer(index) {
      this.panier.splice(index, 1);
    }
  },
  getters: {
    total(state) {
      return state.panier.reduce((acc, plat) => acc + plat.price, 0).toFixed(2); 
    }
  }
});
