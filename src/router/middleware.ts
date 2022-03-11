import { RouteLocationNormalized } from 'vue-router';

const token = localStorage.getItem('anty-remote-api-token');

const notAuthenticated = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function): void => {
  if (!token) {
    return next();
  }
  return next({ name: 'Home' });
};
const authenticated = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function): void => {
  if (token) {
    return next();
  }
  return next({name: 'SignIn'});
};