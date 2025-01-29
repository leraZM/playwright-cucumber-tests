import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium } from '@playwright/test';
import { pageFixture } from './fixtures';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  await browser.close();
});

Before(async () => {
  context = await browser.newContext();

  const page = await context.newPage();
  pageFixture.page = page;
  pageFixture.loginPage = new LoginPage(page);
  pageFixture.inventoryPage = new InventoryPage(page);
  pageFixture.checkoutPage = new CheckoutPage(page);
});

After(async ({ pickle, result }) => {
  if (result?.status == Status.FAILED) {
    await pageFixture.page.screenshot({
      path: `./src/ui-tests/report/screenshots/${pickle.name}.png`,
      type: 'png',
    });
  }

  await pageFixture.page.close();
  await context.close();
});
