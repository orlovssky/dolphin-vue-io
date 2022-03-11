export interface ProfileModel {
  theme: string;
}
export interface ProfileKeyValueModel {
  key: string;
  value: keyof ProfileModel;
}