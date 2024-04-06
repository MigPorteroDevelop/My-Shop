<script setup>
import { useShopProducts } from '../stores/shopProducts.js';
import productsBase from '../assets/productsBase.json';

// From here we access all the functions of the store.
// We put the data of the store in a variable
const store = useShopProducts();

const increment = (index) => {
    store.increment(index);
};

const decrement = (index) => {
    store.decrement(index);
};
</script>

<template>
    <section id="products">
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-16">
                    <div v-for="(product, index) in productsBase.products" :key="product.id" class="group cursor-pointer">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img class="h-full w-full object-cover object-center group-hover:opacity-75" :src="product.photo">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price + " €" }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>