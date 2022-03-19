import { ProfileModel, SnackbarModel } from '@/models/main';

export type MainStateType = {
  profile: ProfileModel;
  snackbar: SnackbarModel
};

const state: MainStateType = {
  profile: {
    theme: 'dark',
  },
  snackbar: {
    show: false,
    color: '',
    message: '',
  }
};

export default state;