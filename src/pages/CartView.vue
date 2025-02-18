<template>
    <div class="cart-container">
      <h1 class="page-title">Mon Panier</h1>
      <ul class="cart-list">
        <li v-for="(plat, index) in cartStore.panier" :key="index" class="cart-item">
          <span class="plat-name">{{ plat }}</span>
          <button @click="cartStore.retirer(index)" class="remove-button">❌</button>
        </li>
      </ul>
      <div v-if="cartStore.panier.length === 0" class="empty-cart-message">
        Votre panier est vide. Ajoutez des plats pour commander !
      </div>
      <div class="checkout-button-container">
        <button v-if="cartStore.panier.length > 0" class="checkout-button">
          Passer à la commande
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '../store/cartStore';
  const cartStore = useCartStore();
  </script>
  