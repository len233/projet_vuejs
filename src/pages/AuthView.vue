  <template>
    <main>
      <div v-if="!user">
        <h1>{{ isRegisterMode ? 'Inscription' : 'Connexion' }}</h1>
  
        <form v-if="!isRegisterMode" @submit.prevent="handleLogin">
          <div>
            <label for="identifier">Nom d'utilisateur ou Email</label>
            <input type="text" id="identifier" v-model="identifier" required />
          </div>
          <div>
            <label for="password">Mot de passe</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div v-if="loginError" class="error-message">
            <p>Nom d'utilisateur ou mot de passe incorrect.</p>
          </div>
          <div>
            <button type="submit">Se connecter</button>
          </div>
        </form>
  
        <form v-if="isRegisterMode" @submit.prevent="handleRegister">
          <div>
            <label for="username">Nom d'utilisateur</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="password">Mot de passe</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div>
            <button type="submit">S'inscrire</button>
          </div>
        </form>
  
        <button class="switch-form" @click="toggleForm">
          {{ isRegisterMode ? 'Déjà un compte ? Se connecter' : 'Pas encore de compte ? S\'inscrire' }}
        </button>
      </div>
  
      <div v-if="user">
        <h2>Bienvenue, {{ user.username }}!</h2>
        <button @click="handleLogout">Se déconnecter</button>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useAuthStore } from '../store/authStore';

  const username = ref(''); 
  const password = ref('');
  const email = ref('');
  const identifier = ref(''); 
  const isRegisterMode = ref(false);
  const user = ref(null); 
  const loginError = ref(false); 

  const authStore = useAuthStore();
  const login = () => {
    if (username.value) authStore.login(username.value);
  };
  
  const exampleUser = {
    username: 'len',
    email: 'len@projet.com',
    password: '1234',
  };
  
  onMounted(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user.value = JSON.parse(storedUser);
    }
  });
  
  const toggleForm = () => {
    isRegisterMode.value = !isRegisterMode.value;
  };
  
  const handleLogin = () => {
    if ((identifier.value === exampleUser.username || identifier.value === exampleUser.email) && password.value === exampleUser.password) {
      user.value = { username: exampleUser.username, email: exampleUser.email };
      localStorage.setItem('user', JSON.stringify(user.value));
      loginError.value = false; 
    } else {
      loginError.value = true;
    }
  };
  
  const handleRegister = () => {
    if (username.value && email.value && password.value) {
      user.value = { username: username.value, email: email.value };
      localStorage.setItem('user', JSON.stringify(user.value));
    }
  };
  
  const handleLogout = () => {
    user.value = null;
    localStorage.removeItem('user');
  };
  </script>
  