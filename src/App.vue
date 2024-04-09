<script setup>
import { RouterView } from "vue-router";
import Header from './components/Header.vue'
</script>

<template class="container">
  <div>
    <Header />
  </div>
  <div>
    <RouterView />
  </div>
</template>