import { defineStore } from 'pinia';
import productsBase from '@/assets/productsBase.json';

export const useShopProducts = defineStore('shopProducts', {

  state: () => ({
    productsCart: []
  }),
  actions: {
    increment(index) {
      if (this.productsCart[index]) {
        this.productsCart[index].items++;
      } else {
        this.productsCart[index] = productsBase.products[index];
        this.productsCart[index].items = 1;  
      }
    },
    decrement(index) {
      if (this.productsCart[index].items > 0) {
        this.productsCart[index].items--;
        if (this.productsCart[index].items === 0) {
          delete this.productsCart[index];
        }
      }
    },
  },
});
