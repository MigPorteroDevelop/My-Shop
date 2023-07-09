<script setup>
import products from '@/assets/products.json'

</script>

<template>
    <section id="products" class="flex flex-wrap gap-10 py-5 justify-center bg-orange-200">
        <div v-for="product in products" :key="product.id">
            <div id="product-card" class="p-4 border-2">
                <div id="product-image" class="w-40 h-40">
                    <img :src="product.photo">
                </div>
                <div id="product-info" class="text-center my-5">
                    <h5 class="font-bold mb-2">{{ product.name }}</h5>
                    <h6>{{ product.price }}</h6>
                </div>
                <div class="flex items-center">
                    <button class="bg-softGreen hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>