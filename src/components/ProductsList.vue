<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import productsBase from '@/assets/productsBase.json'

// Crear una variable reactiva llamada 'eventProducts' que almacena la lista de productos.
// 'reactive' se utiliza para convertir el objeto en un objeto reactivo de Vue, lo que permite 
// el seguimiento de los cambios en sus propiedades.
const eventProducts = reactive(productsBase.products);

// Crear una variable de referencia llamada 'showButton' que se inicializa como un array vacío.
// Utilizada para controlar la visibilidad de los botones.
const showButton = ref([]);

// Definir la función 'changeButton' que oculta un botón.
// Toma un 'id' como argumento y lo agrega al array 'showButton'.
// Esto significa que cuando se llama a esta función con un 'id' 
// de producto específico, el botón correspondiente a ese producto se ocultará.
const changeButton = (id) => {
  showButton.value.push(id);
}

// Definir la función 'isButtonVisible' que verifica si el botón debe mostrarse.
// Toma un 'id' como argumento y devuelve 'true' si el 'id' no está incluido en el array 'showButton',
// lo que significa que el botón correspondiente a ese 'id' debe mostrarse. En caso contrario, devuelve 'false'.
const isButtonVisible = (id) => {
  return !showButton.value.includes(id);
}

// Definir la función 'increment' que incrementa la cantidad de items de un producto.
// Toma un índice como argumento y aumenta en 1 la propiedad 'items' del producto 
// correspondiente en el array 'eventProducts'.
const increment = (index) => {
  eventProducts[index].items++;
};

// Definir la función 'decrement' que disminuye la cantidad de items de un producto.
// Toma un índice como argumento y disminuye en 1 la propiedad 'items' del producto correspondiente 
// en el array 'eventProducts'.
// Si la cantidad llega a cero, se muestra nuevamente el botón llamando a 'showButton.value' 
// y eliminando el 'id' del producto del array 'showButton'.
const decrement = (index) => {
  if (eventProducts[index].items > 0) {
    eventProducts[index].items--;

    // Si la cantidad llega a cero, mostrar el botón nuevamente
    if (eventProducts[index].items === 0) {
      showButton.value = showButton.value.filter((id) => id !== eventProducts[index].id);
    }
  };
};
</script>


<template>
  <section id="products" class="flex flex-wrap gap-10 py-5 justify-center bg-orange-200">
    <div v-for="(eventProduct, index) in eventProducts" :key="eventProduct.id">
      <div id="product-card" class="p-4 border-2">
        <div id="product-image" class="w-40 h-40">
          <img :src="eventProduct.photo">
        </div>
        <div id="product-info" class="text-center my-5">
          <h5 class="font-bold mb-2">{{ eventProduct.name }}</h5>
          <h6>{{ eventProduct.price }}</h6>
        </div>
        <div class="flex items-center">
          <button v-if="isButtonVisible(eventProduct.id)" @click="changeButton(eventProduct.id)"
            class="bg-softGreen hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
            Add to cart
          </button>
          <div class="m-auto flex" v-else>
            <button @click="decrement(index)"
              class="border-2 border-black rounded-full w-6 h-6 flex items-center justify-center">-</button>
            <div class="px-4">
              <input type="number" v-model="eventProduct.items" class="border rounded w-12 text-center" />
            </div>
            <button @click="increment(index)"
              class="border-2 border-black rounded-full w-6 h-6 flex items-center justify-center">+</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
input[type="number"].border.rounded.w-12.text-center::-webkit-inner-spin-button,
input[type="number"].border.rounded.w-12.text-center::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
