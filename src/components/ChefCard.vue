<template>
    <div class="card">
      <h3>{{ chef.name }}</h3>
      <p>Spécialités : {{ chef.specialites.join(', ') }}</p>
      <router-link :to="'/chef/' + chef.id">Voir détails</router-link>
    </div>
  </template>
  
  <script setup>
  defineProps(['chef']);
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background: #fff;
  }
  </style>
  