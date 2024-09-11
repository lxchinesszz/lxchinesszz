import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import VUI from './index.ts';

let app = createApp(App);
app.use(VUI);
app.mount('#app');
