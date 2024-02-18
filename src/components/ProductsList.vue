<script setup>
import { ref } from 'vue';
import { useShopProducts } from '@/stores/shopProducts.js';
import productsBase from '@/assets/productsBase.json';
import colorPicker from './colorPicker.vue';

// Desde aquí accedemos a todas las funciones de la store.

// Metemos los datos de la store en una variable.
const store = useShopProducts();
const ComponentColorPicker = ref(null);

const increment = (index) => {

  // const color = ComponentColorPicker.color;
  const color = 'red';
  // console.dir(ComponentColorPicker)
  store.increment(index, color);
};

const decrement = (index) => {
  store.decrement(index);
};
</script>

<template>
  <section id="products" class="flex flex-wrap gap-10 py-5 justify-center bg-orange-200">
    <!--Accedemos a los datos-->
    <div v-for="(product, index) in productsBase.products" :key="product.id">
      <div id="product-card" class="p-4 border-2">
        <div id="product-image" class="w-40 h-40">
          <img :src="product.photo">
        </div>
        <div v-if="product.colors" class="py-4">
          <colorPicker ref="ComponentColorPicker" :colors="product.colors"/>
        </div>
        <div id="product-info" class="text-center my-5">
          <h5 class="font-bold mb-2">{{ product.name }}</h5>
          <h6>{{ product.price + " €" }}</h6>
        </div>
        <div class="flex items-center">
          <!--Si no hay items del producto se muestra este botón
          y entra en funcionamiento la función "increment"-->
          <button v-if="!store.productsCart[product.id]" @click="increment(product.id)"
            class="bg-softGreen hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
            Add to cart
          </button>
          <!--Si hay como mínimo un item, se muestran estos botones con las funciones
            "increment" y "decrement"-->
          <div class="m-auto flex" v-else>
            <button @click="decrement(product.id)"
              class="border-2 border-black rounded-full w-6 h-6 flex items-center justify-center">-</button>
            <div class="px-4">
              <input type="number" v-model="store.productsCart[product.id].items"
                class="border rounded w-12 text-center" />
            </div>
            <button @click="increment(product.id)"
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
