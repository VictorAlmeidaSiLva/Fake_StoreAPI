import { defineStore } from 'pinia'
import { api } from '../api'


export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products:''
  }),
  getters: {
  },
  actions: {
    async listaProducts() {
      const res = await api.get(`/products/`)
      this.products = res.data
    }
  }
})

