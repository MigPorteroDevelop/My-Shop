<script setup>
import { useShopProducts } from '../stores/shopProducts.js';
import Products from '../components/Products.vue'
import Basket from '../components/Basket.vue'

const routes = [
  {
    name: "products",
    route: "/products",
    component: Products 
  },
  {
    name: "basket",
    route: "/basket",
    component: Basket
  },
]

const store = useShopProducts();
</script>

<template>
  <nav class="bg-softGreen">
    <div class="flex flex-wrap items-center justify-between mx-auto max-w-2xl lg:max-w-7xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
    <div class="flex-1 flex justify-between lg:justify-start">
      <div class="text-white mr-6">
        <img class="m-auto" src="@/assets/mp.png" width="80" height="80" />
      </div>
      <div class="text-sm my-auto lg:flex-grow">
        <p class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white lg:mr-4">Home</p>
        <router-link to="/products" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white lg:mr-4">
          Products
        </router-link>
      </div>
    </div>
    <router-link to="/basket" class="flex justify-center items-center cursor-pointer">
        <div class="relative py-2">
          <div class="t-0 absolute left-3">
            <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{{ store.totalItemsInCart }}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="file: mt-4 h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
      </router-link>
    </div>
  </nav>
</template>
