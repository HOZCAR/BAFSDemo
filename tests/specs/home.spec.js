// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');

test.describe("Home Page", () => {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto("/parabank/index.htm");
    });
  
    test("main navigation", async ({ page }) => {
      // Assertions use the expect API.
      await expect(page).toHaveURL("/parabank/index.htm");
    });

    test("User is able to login from home page", async ({ page }) => { 
        const homePage = new HomePage(page);
        homePage.login('HOZKAR', 'somePass1');
        await expect(page).toHaveURL("/parabank/overview.htm");
    });
});