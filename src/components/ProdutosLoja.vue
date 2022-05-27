<template>
  <div class="container-fluid">
    <div class="row" v-if="products">
      <div class="card btn btn-primary" v-for="item in products" :key="item.id" :value="item.id">
        <img :src="item.image" alt="" />
        <div class="card-body">
          <p class="card-title"><span class="title">{{ item.title }}</span></p>
          <p class="card-text title">
            ${{ item.price }}
          </p>
        </div>
        <a href="#" class="btn btn-primary">Buy</a>
      </div>
    </div>
    <div v-else>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
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
.card {
  border-radius: 5px;
  padding: 30px;
  margin: 30px;
  width: 200px;
  height: 600px;
  text-align: justify;
}
.title {
  color: black;
}
</style>