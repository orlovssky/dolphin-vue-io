import { RootStateType } from '@/store/types';
import { GetterTree }    from 'vuex';

import { MainStateType } from './state';

const getters: GetterTree<MainStateType, RootStateType> = {
  profile: (state: MainStateType) => state.profile,
};

export default getters;