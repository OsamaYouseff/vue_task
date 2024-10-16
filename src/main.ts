import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "primeicons/primeicons.css"; // PrimeIcons

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(createPinia());

app.mount("#app");
