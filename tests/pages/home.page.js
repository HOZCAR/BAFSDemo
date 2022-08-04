// @ts-check
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    constructor(page){
        this.page = page;
        this.registerLink = page.locator('a', { hasText: 'register' });
        this.userInput = page.locator('[name=username]');
        this.passwordInput = page.locator('[name=password]');
        this.loginButton = page.locator('[value="Log In"]');
    }

    async goto(){
        await this.page.goto('/');
    }

    async navigateToRegister(){
        await this.registerLink.click();
    }
    
    async login(user, pass){
        await this.userInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}