import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  private readonly page: Page;
  private readonly cartBadge: Locator;
  private readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async addToCart(productName: string) {
    const productButton = this.page.locator(this.getAddToCartSelector(productName));
    await productButton.click();
  }

  async removeFromCart(productName: string) {
    const productButton = this.page.locator(this.getRemoveFromCartSelector(productName));
    await productButton.click();
  }

  async getCartBadge(): Promise<string> {
    return this.cartBadge.innerText();
  }

  private getAddToCartSelector(productName: string) {
    return `#add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}`;
  }

  private getRemoveFromCartSelector(productName: string) {
    return `#remove-${productName.toLowerCase().replace(/\s+/g, '-')}`;
  }

  async clickCartButton() {
    await this.cartButton.click();
  }
}
