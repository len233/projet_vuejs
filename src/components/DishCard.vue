<template>
    <div class="dish-card">
      <h4>{{ dish }}</h4>
      <button @click="cartStore.ajouter(dish)">Ajouter au panier</button>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '../store/cartStore';
  
  defineProps(['dish']);
  const cartStore = useCartStore();
  </script>
  
  <style scoped>
  .dish-card {
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    text-align: center;
  }
  </style>
  