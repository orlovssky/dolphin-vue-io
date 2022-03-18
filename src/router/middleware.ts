import { getApiToken }     from '@/helpers/apiToken';
import { NavigationGuard } from 'vue-router';

interface Middleware {
  notAuthenticated: NavigationGuard;
  authenticated: NavigationGuard;
}

const middleware: Middleware = {
  notAuthenticated: (to, from, next) => {
    if (!getApiToken()) return next();
    return next({ name: 'Main' });
  },

  authenticated: (to, from, next) => {
    if (getApiToken()) return next();
    return next({ name: 'SignIn' });
  }
};

export default middleware;