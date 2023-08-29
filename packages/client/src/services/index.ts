import axios from 'axios';

// 임시
export const API_BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'api/proxy';

export const authAxios = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const userAxios = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
