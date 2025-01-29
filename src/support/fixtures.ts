import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export type PageFixture = {
  page: Page;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  checkoutPage: CheckoutPage;
};

export const pageFixture = {
  page: undefined as unknown as Page,
  loginPage: undefined as unknown as LoginPage,
  inventoryPage: undefined as unknown as InventoryPage,
  checkoutPage: undefined as unknown as CheckoutPage,
};
