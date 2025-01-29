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
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.checkoutButton = page.locator('#checkout');
    this.postalCodeField = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.itemName = page.locator('.inventory_item_name');
    this.itemPrice = page.locator('.inventory_item_price');
    this.itemQuantity = page.locator('.cart_quantity');
    this.itemSubtotal = page.locator('.summary_subtotal_label');
    this.finishButton = page.locator('#finish');
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
