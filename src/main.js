import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
//
createApp(App).use(router).mount('#app')


// import buildApp from './app';
//
// const { app, router } = buildApp();
//
// router.isReady()
//     .then(() => {
//         app.mount('#app', true);
//     });
