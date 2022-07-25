const KEY = process.env.REACT_APP_TOKEN_KEY;

export function isLogged() {
  return !!localStorage.getItem(KEY);
}

export function getToken() {
  return localStorage.getItem(KEY);
}

export function removeToken() {
  return localStorage.removeItem(KEY);
}

export function setToken(token) {
  if (!token) return;

  localStorage.setItem(KEY, token);
}
