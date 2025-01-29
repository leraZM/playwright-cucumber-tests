import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../support/fixtures';

Given(
  'I am logged in as {string} with password {string}',
  async function (username: string, password: string) {
    await pageFixture.loginPage.open();
    await pageFixture.loginPage.fillUsername(username);
    await pageFixture.loginPage.fillPassword(password);
    await pageFixture.loginPage.clickLoginButton();
  }
);

When('I click the add to cart button for {string}', async function (productName: string) {
  await pageFixture.inventoryPage.addToCart(productName);
});

Then('I see the cart badge with the count {string}', async function (count: string) {
  const badgeCount = await pageFixture.inventoryPage.getCartBadge();
  expect(badgeCount).toBe(count);
});
