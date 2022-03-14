import { NavigationGuard } from 'vue-router';

interface Middleware {
  notAuthenticated: NavigationGuard;
  authenticated: NavigationGuard;
}

const token = localStorage.getItem('dolphin-api-token');

const middleware: Middleware = {
  notAuthenticated: (to, from, next) => {
    if (!token) return next();
    return next({ name: 'Main' });
  },

  authenticated: (to, from, next) => {
    if (token) return next();
    return next({ name: 'SignIn' });
  }
};

export default middleware;