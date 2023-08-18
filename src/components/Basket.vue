<script setup>
import { useShopProducts } from '@/stores/shopProducts.js';

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
    <div class="flex flex-wrap gap-10 py-5 justify-center bg-softPink">
      <h1 class="text-6xl text-center">Basket</h1>
    </div>
    <div class="m-auto flex">
      <div v-for="(productCart, index) in store.productsCart" :key="productCart.id">
        <div id="product-card" class="p-4 border-2">
          <div id="product-image" class="w-40 h-40">
            <img :src="productCart.photo">
          </div>
          <div id="product-info" class="text-center my-5">
            <h5 class="font-bold mb-2">{{ productCart.name }}</h5>
            <h6>{{ productCart.price + " €" }}</h6>
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
      <div>
        <p> {{ productCart.totalPrice + " €" }}</p>
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