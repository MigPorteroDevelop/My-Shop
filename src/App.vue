<script setup>
import Header from './components/Header.vue'
import ProductsList from './components/ProductsList.vue'
import Basket from './components/Basket.vue'
</script>

<template class="container">
  <div>
    <Header />
  </div>
  <div class="flex justify-between">
    <div class="w-1/2">
      <ProductsList />
    </div>
    <div>

    </div>
    <div class="w-1/5">
      <Basket />
    </div>
  </div>
</template>