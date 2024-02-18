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
    checkStockBySku(sku) {
      // 15
      const skuParams = sku.split('-');
      const id = skuParams[0];
      const color = skuParams[1] == undefined ? undefined : skuParams[1];

      for (let i in productsBase.products) {
        if (productsBase.products[i].id == id) {
          if( color!==undefined ) {
            // recorremos los colores
            // color.stock
            // return otra cosa
          }
          return productsBase.products[i].stock;
        }
      }
      return false;
    },
    increment(id, color = undefined) {

      //Si existe un producto y los items del carrito son menores o igual al stock.
      //Utilizamos la función "getProductById" para tener el id exacto y accedemos a su stock.
      if ( this.checkStock(id, color) ) {
        //Se añade un item más
        this.productsCart[id].items++;

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

        // Si la cantidad de items de un producto llega a 0
        if (this.productsCart[id].items === 0) {
          // Se borra el producto del array
          this.deleteProduct(id);
        }
      }
    },
    generateSku ( id, color = undefined ) {
      return color==undefined ? id : id + '-' + color;
    },
    checkStock(id, color = undefined) {
      let sku = this.generateSku( id, color );

      console.dir( this.getProductBySku(sku).stock );


// return;

      return this.productsCart[id] && this.productsCart[id].items < this.getProductBySku(id).stock
    },
    deleteProduct(id) {
      delete this.productsCart[id];
    },
    controlPrices() {

      // Sumamos los precios de los productos que hay dentro
      let price = 0;
      for (let i in this.productsCart) {
        price += this.productsCart[i].price * this.productsCart[i].items;
      }
      return price;

    }
  }
});
