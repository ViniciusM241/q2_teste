import { getUserByToken } from '~/views/Login/store/actions';
import { getToken } from '~/boot/auth';

export default (next, redirect, { dispatch })  => {
  return () => {
    const token = getToken();

    dispatch(getUserByToken(token));

    return next();
  };
}
