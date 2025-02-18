<template>
  <div class="cart-container">
    <h1 class="page-title">Mon Panier</h1>
    <ul class="cart-list">
      <li v-for="(plat, index) in cartStore.panier" :key="index" class="cart-item">
        <span class="plat-name">{{ plat.name }} - <span class="plat-price">{{ plat.price }}€</span></span>
        <button @click="cartStore.retirer(index)" class="remove-button">❌</button>
      </li>
    </ul>
    <div v-if="cartStore.panier.length === 0" class="empty-cart-message">
      Votre panier est vide. Ajoutez des plats pour commander !
    </div>
    <div v-if="cartStore.panier.length > 0" class="total-price">
      <p>Total : {{ total }}€</p>
    </div>
    <div class="checkout-button-container">
      <button v-if="cartStore.panier.length > 0" class="checkout-button">
        Passer à la commande
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../store/cartStore';
const cartStore = useCartStore();

const total = computed(() => {
  return cartStore.panier.reduce((acc, plat) => acc + plat.price, 0).toFixed(2);
});
</script>
