import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    basket: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('@/assets/products.json');
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getAllProducts() {
      return this.products;
    }
  },
});