import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

export const BASE_URL_API = process.env.BASE_URL_API || 'https://reqres.in/api';
