import axios from 'axios';

// 임시
export const API_BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'api/proxy';

export const authAxios = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    Origin: '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const userAxios = axios.create({
  baseURL: `${API_BASE_URL}/users`,
  headers: {
    Origin: '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const productAxios = axios.create({
  // API 다른 도메인 테스트
  baseURL: `http://localhost:8000/products`,
  headers: {
    Origin: '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const purchaseAxios = axios.create({
  baseURL: `${API_BASE_URL}/purchases`,
  headers: {
    Origin: '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
