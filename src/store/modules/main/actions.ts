import { ProfileKeyValueModel, SnackbarModel } from '@/models/main';
import { RootStateType }                       from '@/store/types';
import { ActionTree }                          from 'vuex';

import { MainStateType }                       from './state';
import * as types                              from './types';

const actions: ActionTree<MainStateType, RootStateType> = {
  setProfileProperty ({ commit }, data: ProfileKeyValueModel) {
    commit(types.SET_PROFILE_PROPERTY, data);
  },
  
  setSnackbar ({ commit }, data: SnackbarModel) {
    commit(types.SET_SNACKBAR, data);
  },

  clearSnackbar ({ commit }) {
    commit(types.CLEAR_SNACKBAR);
  },
};

export default actions;