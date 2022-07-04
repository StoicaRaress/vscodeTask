import { test, expect, type Page, chromium } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://very-important.vercel.app/');
  });

test("Check Main Page Elements", async ({ page }) => {
    // Click nav:has-text("Project SocratesEmployee management system documentation")
    await page.locator('nav:has-text("Project SocratesEmployee management system documentation")').click();
    // Check Introduction page
    await page.locator('text=Introduction').first().click();
    await expect(page).toHaveURL('https://very-important.vercel.app/');

    


})