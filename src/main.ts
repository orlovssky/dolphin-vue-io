import '@/assets/styles/index.scss';
import App           from '@/App.vue';
import i18n          from '@/plugins/i18n';
import router        from '@/router';
import { store }     from '@/store';
import { createApp } from 'vue';

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app');