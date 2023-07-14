import { defineStore } from 'pinia';
import productsBase from '@/assets/productsBase.json';

export const useShopProducts = defineStore('shopProducts', {

  state: () => ({
    eventProducts: productsBase.products,
    // Crear un array 'showButton' que se inicializa como un array vacío.
    // Utilizado para controlar la visibilidad de los botones.
    showButton: []
  }),
  actions: {
    // Definir la función 'changeButton' que oculta un botón.
    // Toma un 'id' como argumento y lo agrega al array 'showButton'.
    // Esto significa que cuando se llama a esta función con un 'id' 
    // de producto específico, el botón correspondiente a ese producto se ocultará.
    changeButton(id) {
      this.showButton.push(id);
    },
    // Definir la función 'isButtonVisible' que verifica si el botón debe mostrarse.
    // Toma un 'id' como argumento y devuelve 'true' si el 'id' no está incluido en el array 'showButton',
    // lo que significa que el botón correspondiente a ese 'id' debe mostrarse. En caso contrario, devuelve 'false'.
    // El uso del return debe a la necesidad de utilizar su resultado de la función en la plantilla.
    isButtonVisible(id) {
      return !this.showButton.includes(id);
    },
    // Definir la función 'increment' que incrementa la cantidad de items de un producto.
    // Toma un índice como argumento y aumenta en 1 la propiedad 'items' del producto 
    // correspondiente en el array 'eventProducts'. 
    increment(index) {
      this.eventProducts[index].items++;
    },
    // Definir la función 'decrement' que disminuye la cantidad de items de un producto.
    // Toma un índice como argumento y disminuye en 1 la propiedad 'items' del producto correspondiente 
    // en el array 'eventProducts'.
    // Si la cantidad llega a cero, se muestra nuevamente el botón llamando a 'showButton.value' 
    // y eliminando el 'id' del producto del array 'showButton'.
    decrement(index) {
      if (this.eventProducts[index].items > 0) {
        this.eventProducts[index].items--;
        // Si la cantidad llega a cero, mostrar el botón nuevamente.
        if (this.eventProducts[index].items === 0) {
          this.showButton = this.showButton.filter((itemId) => itemId !== this.eventProducts[index].id);
          // Restablecer la cantidad de items a 1 cuando el botón se muestra nuevamente.
          this.eventProducts[index].items = 1;
        }
      }
    },
  },
});
