import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  validateStatus: () => true  // This allows all response statuses
});
