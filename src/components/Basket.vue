<script setup>
import { useShopProducts } from '@/stores/shopProducts.js';

const store = useShopProducts();

const increment = (id) => {
  store.increment(id);
};

const decrement = (id) => {
  store.decrement(id);
};

const deleteProduct = (id) => {
  store.deleteProduct(id);
};

const totalPrice = store.controlPrices;

</script>

<template>
  <section>
    <div class="flex flex-wrap gap-10 py-5 justify-center bg-softPink">
      <h1 class="text-6xl text-center">Basket</h1>
    </div>
    <div class="m-auto grid grid-cols-1">
      <div v-for="product in store.productsCart">
        <div v-if="product">
          <div id="product-card" class="p-4 border-2 border-cyan-300">
            <div id="product-image" class="w-40 h-40">
              <img :src="product.photo">
            </div>
            <div>
              <button @click="deleteProduct(product.id)"
                class="border-2 border-black rounded-full w-6 h-6 flex items-center justify-center">-</button>
            </div>
            <div id="product-info" class="text-center my-5">
              <h5 class="font-bold mb-2">{{ product.name }}</h5>
              <h6>{{ product.price + " €" }}</h6>
            </div>
            <div class="flex items-center pb-5">
              <div class="m-auto flex">
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
      </div>
      <div class="my-10 text-lg font-bold text-center border-2 border-cyan-300">
        <p>Total price: {{ totalPrice() }}</p>
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