  <template>
    <nav class="navbar">
      <router-link to="/" class="navbar-link">Accueil</router-link>
      <router-link to="/chefs" class="navbar-link">Cuisiniers</router-link>
      <router-link to="/cart" class="navbar-link cart-link">
        🛒 Panier ({{ cartStore.panier.length }})
      </router-link>
      <router-link v-if="!authStore.user" to="/auth" class="navbar-link login-link">Connexion</router-link>
      
      <button v-else @click="authStore.logout()" class="logout-button">Déconnexion</button>
    </nav>
  </template>
  
  <script setup>
  import { useCartStore } from '../store/cartStore';
  import { useAuthStore } from '../store/authStore';
  
  const cartStore = useCartStore();
  const authStore = useAuthStore();
  </script>
  
  
