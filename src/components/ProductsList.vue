<script setup>
import { useShopProducts } from '@/stores/shopProducts.js';
import productsBase from '@/assets/productsBase.json';

// Desde aquí accedemos a todas las funciones de la store.

// Metemos los datos de la store en una variable.
const store = useShopProducts();

const increment = (index) => {
  store.increment(index);
};

const decrement = (index) => {
  store.decrement(index);
};
</script>

<template>
  <section id="products" class="flex flex-wrap gap-10 py-5 justify-center bg-orange-200">
    <!--Accedemos a los datos directamente desde aqui con store.eventProducts-->
    <div v-for="(eventProduct, index) in productsBase.products" :key="eventProduct.id">
      <div id="product-card" class="p-4 border-2">
        <div id="product-image" class="w-40 h-40">
          <img :src="eventProduct.photo">
        </div>
        <div id="product-info" class="text-center my-5">
          <h5 class="font-bold mb-2">{{ eventProduct.name }}</h5>
          <h6>{{ eventProduct.price + " €" }}</h6>
        </div>
        <div class="flex items-center">
          <button v-if="!store.productsCart[index]" @click="increment(index)"
            class="bg-softGreen hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
            Add to cart
          </button>
          <div class="m-auto flex" v-else>
            <button @click="decrement(index)"
              class="border-2 border-black rounded-full w-6 h-6 flex items-center justify-center">-</button>
            <div class="px-4">
              <input type="number" v-model="store.productsCart[index].items" class="border rounded w-12 text-center" />
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
