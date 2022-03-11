import { createStore } from 'vuex';

import main            from './modules/main';

export const store = createStore({
  modules: {
    main,
  },
});