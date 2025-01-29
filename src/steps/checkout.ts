import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../support/fixtures';
import { verifyPage } from '../support/utils';

When('I click the shopping cart icon', async function () {
  await pageFixture.inventoryPage.clickCartButton();
});

When('I click the checkout button', async function () {
  await pageFixture.checkoutPage.clickCheckoutButton();
});

When('I see the checkout page', async function () {
  await verifyPage('checkout-step-one.html', 'Checkout: Your Information');
});

When('I enter the first name {string}', async function (firstName: string) {
  await pageFixture.checkoutPage.fillFirstName(firstName);
});

When('I enter the last name {string}', async function (lastName: string) {
  await pageFixture.checkoutPage.fillLastName(lastName);
});

When('I enter the postal code {string}', async function (postalCode: string) {
  await pageFixture.checkoutPage.fillPostalCode(postalCode);
});

When('I click the continue button', async function () {
  await pageFixture.checkoutPage.clickContinueButton();
});

When('I see the checkout overview page', async function () {
  await verifyPage('checkout-step-two.html', 'Checkout: Overview');
});

When('I see the item {string}', async function (productName: string) {
  const itemName = await pageFixture.checkoutPage.getItemName();
  expect(itemName).toBe(productName);
});

When('I see the price {string}', async function (price: string) {
  const itemPrice = await pageFixture.checkoutPage.getItemPrice();
  expect(itemPrice).toBe(price);
});

When('I see the quantity {string}', async function (quantity: string) {
  const itemQuantity = await pageFixture.checkoutPage.getItemQuantity();
  expect(itemQuantity).toBe(quantity);
});

When('I see the subtotal {string}', async function (subtotal: string) {
  const itemSubtotal = await pageFixture.checkoutPage.getItemSubtotal();
  expect(itemSubtotal).toContain(subtotal);
});

When('I click the finish button', async function () {
  await pageFixture.checkoutPage.clickFinishButton();
});

Then('I see the checkout complete page', async function () {
  await verifyPage('checkout-complete.html', 'Checkout: Complete!');
});
