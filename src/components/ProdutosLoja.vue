<template>
    <div v-for="item in products" :key="item.id" :value="item.id">
        <li>
         {{ item.title }} {{ item.price }} 
       </li>
       <img :src="item.image" alt="">
    </div>
</template>

<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import { useProductsStore } from '../stores/products';


const store = useProductsStore()
const products = computed(() => store.products)


onMounted(() => {
    store.listaProducts()
})
</script>

<style>

</style>