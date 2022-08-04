// @ts-check
const { test, expect } = require('@playwright/test');
const { RegisterPage } = require("../pages/register.page");
const { Utils } = require("../utils/Utils");

test.describe("Home Page", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("/parabank/register.htm");
      });

      test("User is able to navigate to register page", async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL("/parabank/register.htm");
      });

      test("User is able to register to the page", async ({ page }) => {
        //generate random user data
        const utils = new Utils();
        let firstName = utils.generateString(6);
        let lastName = utils.generateString(6);
        let street = utils.generateString(10);
        let city = utils.generateString(4);
        let state = utils.generateString(3);
        let zipCode = utils.generateInt(999, 99);
        let phoneNumber = utils.generateInt(999999, 99999);
        let ssn = utils.generateInt(999999, 99999);
        let username = utils.generateString(6);
        let password = utils.generateString(8);
        const registerPage = new RegisterPage(page);
        await registerPage.register(firstName, lastName, street, city, state, zipCode, phoneNumber, ssn, username, password);
        await registerPage.validateRegistration(page);
      });
});