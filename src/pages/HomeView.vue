   <template>
    <div class="home-container">
      <div class="banner">
        <div class="banner-content">
          <h1 class="banner-title">Bienvenue chez HomeMade</h1>
          <p class="banner-subtitle">Des plats faits maison préparés par nos chefs renommés.</p>
          <button @click="goToChefs" class="cta-button">Voir nos chefs</button>
        </div>
      </div>
  
      <div class="highlights">
        <h2 class="section-title">Pourquoi choisir HomeMade ?</h2>
        <div class="highlights-cards">
          <div class="card">
            <h3>Qualité garantie</h3>
            <p>Des ingrédients frais et locaux, sélectionnés avec soin.</p>
          </div>
          <div class="card">
            <h3>Chefs renommés</h3>
            <p>Des plats créés par les meilleurs talents culinaires.</p>
          </div>
          <div class="card">
            <h3>Livraison rapide</h3>
            <p>Profitez de vos plats en un rien de temps chez vous.</p>
          </div>
        </div>
      </div>
  
      <div class="featured-menu">
        <h2 class="section-title">Notre menu du jour</h2>
        <div class="menu-items">
          <div class="menu-item" v-for="(dish, index) in featuredDishes" :key="index">
            <img :src="dish.image" :alt="dish.name" class="menu-item-image">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
            <span>{{ dish.price }} €</span>
          </div>
        </div>
      </div>
  
      <footer class="footer">
        <p>&copy; 2025 HomeMade. Tous droits réservés.</p>
        <div class="footer-info">
          <div>
            <h4>Horaires</h4>
            <p>Lundi - Dimanche : 9h - 22h</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>contact@homemade.com</p>
            <p>+33 6 12 34 56 78</p>
          </div>
          <div>
            <h4>Suivez-nous</h4>
            <p>Facebook | Instagram | Twitter</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        featuredDishes: [
          {
            name: "Lasagnes maison",
            description: "Des lasagnes fraîches avec une sauce riche et savoureuse.",
            price: 12.5,
            image: "",
          },
          {
            name: "Salade César",
            description: "Une salade fraîche et croquante avec une touche gourmande.",
            price: 8.9,
            image: "",
          },
          {
            name: "Tiramisu",
            description: "Un dessert italien classique pour terminer sur une note douce.",
            price: 6.5,
            image: "",
          },
        ],
      };
    },
    methods: {
      goToChefs() {
        this.$router.push("/chefs");
      },
    },
  };
  </script>
  