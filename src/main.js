import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueFacebookChat from 'vue-facebook-chat';
createApp(App).use(router).mount('#app');
createApp(App).use(VueFacebookChat);