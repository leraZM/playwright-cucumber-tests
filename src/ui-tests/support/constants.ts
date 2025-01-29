import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

export const BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com/';
