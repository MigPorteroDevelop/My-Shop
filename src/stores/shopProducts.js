import { defineStore } from 'pinia';

export const useShopProducts = defineStore('shopProducts', {
  state: () => ({
    productsCart: {},
    priceCart: [],
    dataProducts: {}
  }),
  getters: {
    totalItemsInCart() {
      // Adds up the number of items for each product in the cart
      // Convert the object to an array and use reduce to iterate over it and sum (accumulator, current element of the array). 
      return Object.values(this.productsCart).reduce((total, product) => {
        // Adds the quantity of items for each product to the accumulator, starting from 0.
        return total + product.items
      }, 0)
    }
  },
  actions: {
    setProducts(newProducts) {
      this.dataProducts = newProducts;
    },
    // Here we check the position of the product in the array.
    // If it matches, we return true.
    getProductById(id) {
      for (let i in this.dataProducts) {
        if (this.dataProducts[i].id == id) {
          return this.dataProducts[i];
        }
      }
      return false;
    },
    increment(id) {
      // If a product exists and the items in the cart are less than or equal to the stock.
      // We use the "getProductById" function to get the exact id and access its stock.
      if (this.productsCart[id] && this.productsCart[id].items < this.getProductById(id).stock) {
        // Adds one more item
        this.productsCart[id].items++

        // If a product exists and the number of items equals the product's stock
      } else if (
        this.productsCart[id] && this.productsCart[id].items == this.getProductById(id).stock
      ) {
        alert('No more available')
      } else {
        // If the product is not in the cart, it creates the product's id in the array
        // and assigns the product's id to the array's id
        this.productsCart[id] = this.getProductById(id)

        // Adds one item of the product
        this.productsCart[id].items = 1
      }
    },
    decrement(id) {
      // If there are more than 0 items of the product
      if (this.productsCart[id].items > 0) {
        // Removes one item
        this.productsCart[id].items--

        // If the quantity of items for a product reaches 0
        if (this.productsCart[id].items === 0) {
          // Deletes the product from the array
          this.deleteProduct(id)
        }
      }
    },
    deleteProduct(id) {
      delete this.productsCart[id]
    },
    controlPrices() {
      this.priceCart = Object.values(this.productsCart).map(
        (product) => product.price * product.items
      )

      // Adds up the prices of the products inside
      let price = 0
      for (let i = 0; i < this.priceCart.length; i++) {
        price += this.priceCart[i]
      }

      return price
    }
  }
})
