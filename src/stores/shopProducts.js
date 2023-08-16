import { defineStore } from 'pinia';
import productsBase from '@/assets/productsBase.json';

export const useShopProducts = defineStore('shopProducts', {

  state: () => ({
    productsCart: []
  }),
  actions: {
    increment(index) {
      // Si existe un producto
      if (this.productsCart[index]) {
        //se añade un item más
        this.productsCart[index].items++;
        console.log(this.productsCart[index].items)
      } else {
        // Crea el index del producto en el array
        this.productsCart[index] = productsBase.products[index];
        // Añade un item del producto
        this.productsCart[index].items = 1;  
        console.log(this.productsCart[index])
      }
    },
    decrement(index) {
      // Si hay mas de 0 items del producto
      if (this.productsCart[index].items > 0) {
        // Se quita un item 
        this.productsCart[index].items--;
        // Si la cantidad de items de un producto llega a 0
        if (this.productsCart[index].items === 0) {
          // Se borra el producto del array
          delete this.productsCart[index];
        }
      }
    },
  },
});
