<template>
  <div class="container-fluid">
    <div class="row" v-if="products">
      <div class="card" v-for="item in products" :key="item.id" :value="item.id">
        <div class="imgProducts">
          <img class="img" :src="item.image" alt="" />
        </div>
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
  width: 300px;
  height: 500px;
  text-align: justify;
;
}
.title {
  color: black;
}

.img {
  padding: 0.5rem;
  float: left;
  width: 200px;
  height: 200px;  
  background-size: cover;
}

.imgProducts {
  display: flex;
  justify-content: center;
}

</style>