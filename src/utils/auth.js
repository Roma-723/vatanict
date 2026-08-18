const API_URL = process.env.REACT_APP_API_URL || '';
const TOKEN_KEY = 'vatan_admin_token';

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

export function getAuthHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function login(username, password) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid username or password');
  }

  const data = await response.json();
  setToken(data.token);
  return data;
}

export async function verifyAuth() {
  const token = getToken();
  if (!token) {
    return false;
  }

  const response = await fetch(`${API_URL}/api/auth/verify`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    clearToken();
    return false;
  }

  return true;
}

export function logout() {
  clearToken();
}
