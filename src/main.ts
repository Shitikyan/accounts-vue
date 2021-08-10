import { createApp } from "vue";
import App from "./app/index.vue";
import router from "./router";
import PrimeVue from "primevue/config";

createApp(App).use(router).use(PrimeVue).mount("#app");
