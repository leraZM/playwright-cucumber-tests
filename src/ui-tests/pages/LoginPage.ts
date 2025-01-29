import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../support/constants';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async open() {
    const baseUrl = process.env.BASE_URL || BASE_URL;
    await this.page.goto(baseUrl);
  }

  async fillUsername(username: string) {
    await this.usernameField.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async getErrorMessage() {
    return this.errorMessage.innerText();
  }
}
