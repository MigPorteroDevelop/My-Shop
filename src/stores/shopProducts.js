import { defineStore } from 'pinia';
import productsBase from '@/assets/productsBase.json'

export const useProductStore = defineStore('product', {
  state: () => ({
    basket: [],
    products: productsBase.products
  }),
  actions: {
  }
});