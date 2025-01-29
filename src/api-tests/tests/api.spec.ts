import { test, expect } from '@playwright/test';
import { ApiResponseSchema } from '../support/schemas/get-single-user-schema';
import { registerRequestBody } from '../support/data/register-payload';
import { RegisterResponseSchema } from '../support/schemas/register-schema';
import { BASE_URL_API } from '../support/constants';
import { LoginResponseSchema } from '../support/schemas/login-schema';
import { validateSchema } from '../support/utils/schema-validator';
import { unsuccessfulLoginRequestBody } from '../support/data/unsuccessful-login-payload';
import { apiClient } from '../support/apiClient';

test.describe('API Tests', () => {
  test('GET - Single User', async () => {
    const userId = 2;
    const response = await apiClient.get(`${BASE_URL_API}/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Object);
    expect(response.data.data.id).toBe(userId);
    const isValid = validateSchema(ApiResponseSchema, response.data);
    expect(isValid).toBe(true);
  });

  test('POST - Register Successful', async () => {
    const response = await apiClient.post(`${BASE_URL_API}/register`, registerRequestBody);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Object);
    const isValid = validateSchema(RegisterResponseSchema, response.data);
    expect(isValid).toBe(true);
  });

  test('POST - Login Successful', async () => {
    const response = await apiClient.post(`${BASE_URL_API}/login`, registerRequestBody);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Object);
    const isValid = validateSchema(LoginResponseSchema, response.data);
    expect(isValid).toBe(true);
  });

  test('POST - Login Unsuccessful', async () => {
    const response = await apiClient.post(`${BASE_URL_API}/login`, unsuccessfulLoginRequestBody);
    expect(response.status).toBe(400);
    expect(response.data).toBeInstanceOf(Object);
    expect(response.data.error).toBe('Missing password');
  });

});
