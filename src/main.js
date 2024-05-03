import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import './style.css';
import Buefy from '@ntohq/buefy-next';
import '@ntohq/buefy-next/dist/buefy.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: ToDo },
    { path: '/login', component: Login },
    { path: '/register', component: Register }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(Buefy);
app.use(pinia);
app.mount('#app');