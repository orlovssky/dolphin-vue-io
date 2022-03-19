export interface ProfileModel {
  theme: string;
}
export interface ProfileKeyValueModel {
  key: string;
  value: keyof ProfileModel;
}
export interface SnackbarModel {
  show: boolean,
  color: string,
  message: string,
}