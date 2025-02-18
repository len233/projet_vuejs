<template>
    <div class="chefs-container">
      <h1 class="title">Nos Cuisiniers</h1>
      <div class="chef-cards">
        <div v-for="chef in chefs" :key="chef.id" class="chef-card-wrapper">
          <router-link :to="'/chef/' + chef.id" class="chef-card-link">
            <div class="chef-card">
              <div class="chef-image">
                <img :src="chef.photo" alt="Chef photo" />
              </div>
              <div class="chef-info">
                <h2>{{ chef.name }}</h2>
                <div class="specialites">
                  <span v-for="(specialite, index) in chef.specialites" :key="index" class="badge">
                    {{ specialite }}
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import ChefCard from '../components/ChefCard.vue';
  
  const chefs = ref([]);
  
  onMounted(() => {
    chefs.value = [
      { id: 1, name: 'Chef Pierre', specialites: ['Pizza', 'Pasta'], photo: '' },
      { id: 2, name: 'Chef Marie', specialites: ['Sushi', 'Ramen'], photo: '' },
      { id: 3, name: 'Chef Jean', specialites: ['Tacos', 'Burritos'], photo: '' },
    ];
  });
  </script>