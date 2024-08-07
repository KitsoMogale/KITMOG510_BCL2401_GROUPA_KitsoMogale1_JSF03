import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ProductDetailView from './components/pages/ProductDetailView.vue'
import Home from './components/pages/Home.vue'
import login from './components/pages/login.vue'
import pinia from "./store";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/product/:id", component: ProductDetailView },
    { path: "/login", component: login }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).use(pinia).mount("#app");
