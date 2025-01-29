import axios from 'axios';
import { BASE_URL_API } from './constants';

export const apiClient = axios.create({
  baseURL: BASE_URL_API,
  validateStatus: () => true  // This allows all response statuses
});
