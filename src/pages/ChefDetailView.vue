<template>
    <div class="chef-details-container">
      <div class="chef-header">
        <img :src="chef.photo" alt="Chef Photo" class="chef-photo" />
        <div class="chef-info">
          <h1 class="chef-name">{{ chef.name }}</h1>
          <p class="chef-bio">{{ chef.bio }}</p>
          <blockquote class="chef-quote">"{{ chef.quote }}"</blockquote>
        </div>
      </div>
      <h2 class="subtitle">Spécialités du Chef</h2>
      <ul class="specialites-list">
        <li v-for="plat in chef.specialites" :key="plat" class="specialite-item">
          <span class="plat-name">{{ plat }}</span>
          <button @click="ajouterAuPanier(plat)" class="add-to-cart-button">
            ➕​
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useCartStore } from '../store/cartStore';
  
  const props = defineProps(['id']);
  const chef = ref({});
  const cartStore = useCartStore();
  
  onMounted(() => {
    const chefs = [
      { 
        id: 1, 
        name: 'Chef Pierre', 
        specialites: ['Pizza', 'Pasta'],
        bio: "Chef Pierre est un passionné de cuisine italienne avec plus de 20 ans d'expérience dans les cuisines des meilleurs restaurants de la région.",
        quote: "La cuisine, c'est l'art de transformer des ingrédients simples en moments mémorables.",
        photo: ''
      },
      { 
        id: 2, 
        name: 'Chef Marie', 
        specialites: ['Sushi', 'Ramen'],
        bio: "Chef Marie, experte en cuisine japonaise, a perfectionné son art dans les plus grandes écoles culinaires d'Asie.",
        quote: "L'essence de la cuisine japonaise réside dans la simplicité et la pureté des saveurs.",
        photo: ''
      },
      { 
        id: 3, 
        name: 'Chef Jean', 
        specialites: ['Tacos', 'Burritos'],
        bio: "Chef Jean est un maître des saveurs mexicaines et a grandi dans un restaurant familial où la passion pour la cuisine s'est transmise de génération en génération.",
        quote: "La cuisine mexicaine, c'est l'explosion de saveurs et de couleurs à chaque bouchée.",
        photo: ''
      },
    ];
    chef.value = chefs.find(c => c.id == props.id);
  });
  
  const ajouterAuPanier = (plat) => {
    cartStore.ajouter(plat);
  };
  </script>
  