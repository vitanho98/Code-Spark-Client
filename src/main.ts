import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-green/theme.css';
import './assets/base.css';

import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
