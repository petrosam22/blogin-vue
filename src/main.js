// import { createApp } from 'vue';
// import store from './store/store';
// import App from './App.vue';

// const app = createApp(App);

// app.use(store);

// app.mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
