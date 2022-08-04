// @ts-check
const { expect } = require('@playwright/test');
exports.RegisterPage = class RegisterPage{
    constructor(page){
        this.page = page;
        this.firstNameInput = page.locator('[name="customer.firstName"]');
        this.lastNameInput = page.locator('[name="customer.lastName"]');
        this.streetInput = page.locator('[name="customer.address.street"]');
        this.cityInput = page.locator('[name="customer.address.city"]');
        this.stateInput = page.locator('[name="customer.address.state"]');
        this.zipCodeInput = page.locator('[name="customer.address.zipCode"]');
        this.phoneNumberInput = page.locator('[name="customer.phoneNumber"]');
        this.ssnInput = page.locator('[name="customer.ssn"]');
        this.usernameInput = page.locator('[name="customer.username"]');
        this.passwordInput = page.locator('[name="customer.password"]');
        this.confirmPasswordInput = page.locator('[name=repeatedPassword]');
        this.registerButton = page.locator('[value=Register]');
    }

    async register(firstName, lastName, street, city, state, zipCode, phoneNumber, ssn, username, password){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.streetInput.fill(street);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.zipCodeInput.fill(String(zipCode));
        await this.phoneNumberInput.fill(String(phoneNumber));
        await this.ssnInput.fill(String(ssn));
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.registerButton.click();
    }

    async validateRegistration(page){
        await expect(page.locator('h1.title')).toContainText('Welcome');
    }
}