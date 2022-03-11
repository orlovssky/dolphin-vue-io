import { createI18n } from 'vue-i18n';

import enUS           from './messages/en-US.json';
import ruRU           from './messages/ru-RU.json';
import zhCN           from './messages/zh-CN.json';

const messages = {
  'en-US': enUS,
  'ru-RU': ruRU,
  'zh-CN': zhCN,
};

const i18n = createI18n({
  legacy: false,
  locale: 'ru-RU',
  messages,
});

export default i18n;