<script setup>
import { useShopProducts } from '@/stores/shopProducts.js';
import productsBase from '@/assets/productsBase.json';

const store = useShopProducts();
const increment = (index) => {
  store.increment(index);
};

const decrement = (index) => {
  store.decrement(index);
};
</script>

<template>
  <section>
    <div class="bg-softPink flex py-5 justify-center">
      <h1 class="text-6xl text-center">Basket</h1>
    </div>
    <div v-if="!store.productsCart[index]" class="italic text-center text-lg p-10">
      No products in the basket
    </div>
    <div class="m-auto flex" v-else>
      <div v-for="(eventProduct, index) in productsBase.products" :key="index">
        <div id="product-card" class="p-4 border-2">
          <div id="product-image" class="w-40 h-40">
            <img :src="eventProduct.photo">
          </div>
          <div id="product-info" class="text-center my-5">
            <h5 class="font-bold mb-2">{{ eventProduct.name }}</h5>
            <h6>{{ eventProduct.price + " €" }}</h6>
          </div>
          <div class="flex items-center">
            <div class="m-auto flex">
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