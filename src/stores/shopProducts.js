import { defineStore } from 'pinia';
import productsBase from '@/assets/productsBase.json';

//const totalPrice += this.productsCart[index].items.price;

export const useShopProducts = defineStore('shopProducts', {

  state: () => ({
    productsCart: []
  }),
  actions: {
    increment(index) {
      // Si existe un producto, y los items del carrito son menores o igual al stock
      if (this.productsCart[index] && this.productsCart[index].items <= productsBase.products.stock) {
        //Se añade un item más
        this.productsCart[index].items++;
        // Se guarda en la variable la suma del precio de los items
        this.totalPrice += this.productsCart[index].items.price;
        //Si existe un producto, y el numero de items es igual al sotck del producto
      } if (this.productsCart[index] && this.productsCart[index].items == productsBase.products.stock) {
        alert("No hay mas stock disponible")

      } else {
        // Crea el index del producto en el array
        this.productsCart[index] = productsBase.products[index];
        // Añade un item del producto
        this.productsCart[index].items = 1;
      }
      console.log(this.productsCart)
    },
    decrement(index) {
      // Si hay mas de 0 items del producto
      if (this.productsCart[index].items > 0) {
        // Se quita un item 
        this.productsCart[index].items--;

        // Se guarda en la variable la resta del precio de los items
        this.totalPrice -= this.productsCart[index].items.price;

        // Si la cantidad de items de un producto llega a 0
        if (this.productsCart[index].items === 0) {
          // Se borra el producto del array
          delete this.productsCart[index];
        }
      }
    },
  },
});
