<template>
  <div>
    <div v-if="products">
      <div v-for="item in products" :key="item.id" :value="item.id">
        <li>{{ item.title }} {{ item.price }}</li>
        <img :src="item.image" alt="" />
      </div>
    </div>
    <div v-else> <div class="d-flex justify-content-center " >
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useProductsStore } from "../stores/products";

const store = useProductsStore();
const products = computed(() => store.products);

onMounted(() => {
  store.listaProducts();
});
</script>

<style>
</style>