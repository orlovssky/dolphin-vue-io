import {
  ProfileModel,
  ProfileKeyValueModel,
} from '@/models/main';

import { MainStateType } from './state';
import * as types        from './types';

const mutations = {
  [types.SET_PROFILE_PROPERTY](state: MainStateType, payload: ProfileKeyValueModel) {
    const key = payload.key as keyof ProfileModel;
    state.profile[key] = payload.value;
  },
};

export default mutations;