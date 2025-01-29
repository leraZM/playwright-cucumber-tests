import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../support/fixtures';
import { verifyPage } from '../support/utils';

Given('I am on the login page', async function () {
  await pageFixture.loginPage.open();
  expect(await pageFixture.page.title()).toContain('Swag Labs');
});

When('I enter a username {string}', async function (username: string) {
  await pageFixture.loginPage.fillUsername(username);
});

When('I enter a password {string}', async function (password: string) {
  await pageFixture.loginPage.fillPassword(password);
});

When('I click on the login button', async function () {
  await pageFixture.loginPage.clickLoginButton();
});

Then('I am on the inventory page', async function () {
  await verifyPage('inventory.html', 'Products');
});

Then('I should see the {string}', async function (expectedResult: string) {
  if (expectedResult === 'inventory page') {
    const url = pageFixture.page.url();
    expect(url).toContain('inventory.html');
  } else if (expectedResult === 'error message') {
    const errorMessage = await pageFixture.loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface:');
  } else {
    throw new Error(`Unknown expected result: ${expectedResult}`);
  }
});
