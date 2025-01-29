import { expect } from 'playwright/test';
import { pageFixture } from './fixtures';

export async function verifyPage(urlContains: string, headingText: string) {
  expect(pageFixture.page.url()).toContain(urlContains);

  const heading = pageFixture.page.getByText(headingText);
  expect(await heading.isVisible()).toBe(true);
}
