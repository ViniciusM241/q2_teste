import { isLogged as hasToken } from '~/boot/auth';

function isLogged(next, redirect) {
  return () => {
    const token = hasToken();

    if (!token) {
      alert('Login necessário');

      return redirect('/login');
    } else {
      return next();
    }
  };
}

export default isLogged;
