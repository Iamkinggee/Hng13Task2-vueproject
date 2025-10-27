import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css'; // Tailwind / global styles

createApp(App).use(router).mount('#app');
