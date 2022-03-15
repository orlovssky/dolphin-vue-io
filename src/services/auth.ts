import { SignInUserModel } from '@/models/auth';
import { api, endpoints }  from '@/plugins/axios';

export async function signInUserApi(user: SignInUserModel): Promise<{ data: { data: { access_token: string } } }> {
  return await api.post(`${endpoints.signIn}`, user);
}