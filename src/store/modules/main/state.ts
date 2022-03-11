import { ProfileModel } from '@/models/main';

export type MainStateType = {
  profile: ProfileModel;
};

const state: MainStateType = {
  profile: {
    theme: 'dark',
  },
};

export default state;