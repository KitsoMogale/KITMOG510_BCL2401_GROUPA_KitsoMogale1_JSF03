import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ProductDetailView from './components/pages/ProductDetailView.vue'
import pinia from "./store";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/products/:id", component: ProductDetailView },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).use(pinia).mount("#app");
