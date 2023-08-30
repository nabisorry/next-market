import axios from 'axios';

// 임시
export const API_BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'api/proxy';

export const API_PRODUCT_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';

export const API_USER_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';

export const authAxios = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const userAxios = axios.create({
  baseURL: `${API_USER_URL}/users`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const productAxios = axios.create({
  // API 다른 도메인 테스트
  baseURL: `${API_PRODUCT_URL}/products`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const purchaseAxios = axios.create({
  baseURL: `${API_BASE_URL}/purchases`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
