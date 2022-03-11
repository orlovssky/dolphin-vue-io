import { RootStateType }       from '@/store/types';
import { Module }              from 'vuex';

import actions                 from './actions';
import getters                 from './getters';
import mutations               from './mutations';
import state, { MainStateType }from './state';

const main: Module<MainStateType, RootStateType> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default main;