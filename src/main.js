import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './assets/css/styles.css';
import './assets/css/navbar.css';
import './assets/css/home.css';
import './assets/css/chefs.css';
import './assets/css/auth.css';
import './assets/css/cart.css';
import './assets/css/details.css';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');

// createApp(App).mount('#app')
