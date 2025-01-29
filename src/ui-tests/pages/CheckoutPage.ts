import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  private readonly page: Page;
  private readonly firstNameField: Locator;
  private readonly lastNameField: Locator;
  private readonly checkoutButton: Locator;
  private readonly postalCodeField: Locator;
  private readonly continueButton: Locator;
  private readonly itemName: Locator;
  private readonly itemPrice: Locator;
  private readonly itemQuantity: Locator;
  private readonly itemSubtotal: Locator;
  private readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.postalCodeField = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.itemName = page.locator('[data-test="inventory-item-name"]');
    this.itemPrice = page.locator('[data-test="inventory-item-price"]');
    this.itemQuantity = page.locator('[data-test="item-quantity"]');
    this.itemSubtotal = page.locator('[data-test="subtotal-label"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async fillFirstName(firstName: string) {
    await this.firstNameField.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameField.fill(lastName);
  }

  async fillPostalCode(postalCode: string) {
    await this.postalCodeField.fill(postalCode);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async getItemName() {
    return this.itemName.innerText();
  }

  async getItemPrice() {
    return this.itemPrice.innerText();
  }

  async getItemQuantity() {
    return this.itemQuantity.innerText();
  }

  async getItemSubtotal() {
    return this.itemSubtotal.innerText();
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }
}
