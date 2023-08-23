import { defineStore } from 'pinia';
import productsBase from '@/assets/productsBase.json';

export const useShopProducts = defineStore('shopProducts', {

  state: () => ({
    productsCart: []
  }),
  actions: {
    //Aquí comprobamos que la posición del producto en el array. 
    //Si coincide, devolvemos true.
    getProductById(id) {
      for (let i in productsBase.products) {
        if (productsBase.products[i].id == id) {
          return productsBase.products[i];
        }
      }
      return false;
    },
    increment(id) {
      //Si existe un producto y los items del carrito son menores o igual al stock.
      //Utilizamos la función "getProductById" para tener el id exacto y accedemos a su stock.
      if (this.productsCart[id] && this.productsCart[id].items < this.getProductById(id).stock) {
        //Se añade un item más
        this.productsCart[id].items++;

        // Se guarda en la variable la suma del precio de los items
        //this.totalPrice += this.productsCart[id].items.price;

        //Si existe un producto, y el numero de items es igual al stock del producto
      } else if (this.productsCart[id] && this.productsCart[id].items == this.getProductById(id).stock) {
        alert("No hay mas stock disponible.")

      } else {
        // Si el producto no esta en el carrito crea el id del producto en el array 
        // y asigna el id dentro del array al id de producto 
        this.productsCart[id] = this.getProductById(id);

        // Añade un item del producto
        this.productsCart[id].items = 1;
      }
    },
    decrement(id) {
      // Si hay mas de 0 items del producto
      if (this.productsCart[id].items > 0) {
        // Se quita un item 
        this.productsCart[id].items--;

        // Se guarda en la variable la resta del precio de los items
        //this.totalPrice -= this.productsCart[id].items.price;

        // Si la cantidad de items de un producto llega a 0
        if (this.productsCart[id].items === 0) {
          // Se borra el producto del array
          delete this.productsCart[id];
        }
      }
    }
  }
});
