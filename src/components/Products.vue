<script setup>
import { useShopProducts } from '../stores/shopProducts.js';
import { ref, watchEffect, watch } from 'vue';
import categorySelector from './smallComponents/categorySelector.vue';

// From here we access all the functions of the store.
// We put the data of the store in a variable
const store = useShopProducts();

const increment = (index) => {
  store.increment(index);
};

const decrement = (index) => {
  store.decrement(index);
};

const deleteProduct = (id) => {
  store.deleteProduct(id);
};

const products = ref([]);
const categories = ref([]);
const error = ref(null);

const parseImage = (images) => {
  if (images.length <= 0) {
    return 'https://i.pinimg.com/originals/89/8b/29/898b29a34ea47362b0d3a1b260d9725b.jpg';
  }
  //console.log(images[0]);
  try {
    const jsonParsed = JSON.parse(images[0]);
    if (!Array.isArray(jsonParsed)) {
      return 'https://i.pinimg.com/originals/89/8b/29/898b29a34ea47362b0d3a1b260d9725b.jpg';
    }
    const firstImage = jsonParsed[0];

    if (firstImage.includes("http://") || firstImage.includes("https://") || firstImage.includes("//")) {
      return firstImage;
    } else {
      return "//" + firstImage;
    }
  } catch (e) {
    //console.error("Error parsing JSON from images", e);
    return 'https://i.pinimg.com/originals/89/8b/29/898b29a34ea47362b0d3a1b260d9725b.jpg';
  }
}

watchEffect(async () => {
  try {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const dataProducts = data.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: parseImage(product.images),
      stock: 20,
    }));

    products.value = dataProducts;
    //console.log(products.value);

    store.setProducts(dataProducts);
  } catch (err) {
    //console.log('Error caught:', err);
    error.value = err.message;
  }
});

watchEffect(async () => {
  const categoriesUrl = 'https://api.escuelajs.co/api/v1/categories';
  const response = await fetch(categoriesUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  categories.value = await response.json();
});

const filters = ref({
  title: null,
  category: null
});

// Este watch observa cambios en los filtros y actualiza la lista de productos
watch(filters, async (newFilters) => {
  let query = '';
  if (newFilters.category) {
    query = `?categoryId=${newFilters.category}`;
  }
  const newUrl = `https://api.escuelajs.co/api/v1/products${query}`;
  try {
    const response = await fetch(newUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    products.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch filtered products:', error);
  }
});
</script>

<template>
  <section id="products">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div id="categorySelector" class="mb-4">
        <ul class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center pb-5" id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          data-tabs-active-classes="text-softPink hover:text-softPink dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          data-tabs-inactive-classes="dark:border-transparent text-softPink hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist">
          <li v-for="category in categories" :value="category.id" :key="category.id" class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-softPink hover:border-softPink"
              id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab"
              aria-controls="profile" aria-selected="false">{{ category.name }}</button>
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-16">
        <div v-for="(product, index) in products" :key="product.id" class="group cursor-pointer">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            id="productCard">
            <img class="h-full w-full object-cover object-center group-hover:opacity-75" :src="product.image">
          </div>
          <div class="flex justify-between items-center p-2">
            <div class="flex flex-col">
              <h3 class="pr-5 text-sm text-gray-700 h-12">{{ product.title }}</h3>
              <p class="text-lg pt-3 font-medium text-gray-900">{{ product.price + " €" }}</p>
            </div>
            <div>
              <!--If there are no product items, this button is displayed and 
              the "increment" function starts working -->
              <button v-if="!store.productsCart[product.id]" @click="increment(product.id)"
                class="bg-softGreen hover:bg-softPink text-white font-bold p-3 rounded-full mx-auto">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </button>
              <!--If there is at least one item, these buttons with the functions 
              "increment" and "decrement" are displayed.-->
              <div v-else>
                <div class="m-auto flex border border-2 rounded">
                  <button @click="decrement(product.id)"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <div class="m-1">
                    <input type="number" v-model="store.productsCart[product.id].items"
                      class="border rounded w-12 text-center" />
                  </div>
                  <button @click="increment(product.id)"><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <div class="text-center">
                  <button @click="deleteProduct(product.id)">
                    <p class="hover:text-softPink hover:uppercase hover:font-semibold">Remove</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#productCard {
  img {
    transition: transform .3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
}

input[type="number"].border.rounded.w-12.text-center::-webkit-inner-spin-button,
input[type="number"].border.rounded.w-12.text-center::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>