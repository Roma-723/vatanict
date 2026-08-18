import { clearToken, getAuthHeaders } from './auth';

const API_URL = process.env.REACT_APP_API_URL || '';

export class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized');
    this.name = 'UnauthorizedError';
  }
}

export async function submitFormRequest(type, data) {
  const response = await fetch(`${API_URL}/api/submissions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type,
      name: data.name,
      phonenumber: data.phonenumber,
      email: data.email,
      company: data.company,
      message: data.message,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response.json();
}

export async function fetchSubmissions(type) {
  const query = type ? `?type=${type}` : '';
  const response = await fetch(`${API_URL}/api/submissions${query}`, {
    headers: getAuthHeaders(),
  });

  if (response.status === 401) {
    clearToken();
    throw new UnauthorizedError();
  }

  if (!response.ok) {
    throw new Error('Failed to load submissions');
  }

  return response.json();
}
