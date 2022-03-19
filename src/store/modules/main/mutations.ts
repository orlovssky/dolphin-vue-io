import {
  ProfileModel,
  ProfileKeyValueModel,
  SnackbarModel,
} from '@/models/main';

import { MainStateType } from './state';
import * as types        from './types';

const mutations = {
  [types.SET_PROFILE_PROPERTY](state: MainStateType, payload: ProfileKeyValueModel) {
    const key = payload.key as keyof ProfileModel;
    state.profile[key] = payload.value;
  },

  [types.SET_SNACKBAR](state: MainStateType, payload: SnackbarModel) {
    state.snackbar = payload;
  },

  [types.CLEAR_SNACKBAR](state: MainStateType) {
    state.snackbar = {
      show: false,
      color: '',
      message: '',
    };
  },
};

export default mutations;