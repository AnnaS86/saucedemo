const LoginPage = require('./../po/pages/login.page');
const InventoryPage = require('./../po/pages/inventory.page');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('UC-2 Handling Latency (Wait Strategies)', () => {
    beforeEach(async () => {
         await loginPage.open();
         await loginPage.loginForm.usernameInput.setValue('');
         await loginPage.loginForm.passwordInput.setValue('');
    });

    it('login with performance_glitch_user, reset app state, and logout successfully', async () => {
        //Autorization
        await loginPage.loginForm.usernameInput.setValue('performance_glitch_user');
        await loginPage.loginForm.passwordInput.setValue('secret_sauce');
        await loginPage.loginForm.loginButton.click();
        await inventoryPage.header.burgerButton.waitForDisplayed({ timeout: 6000 });
        //Burger Menu
        await inventoryPage.header.burgerButton.click();
        await inventoryPage.sideMenu.item('reset').waitForDisplayed({ timeout: 6000 });
        //Reset
        await inventoryPage.sideMenu.item('reset').click();
        const shoppingCartBadge = await inventoryPage.header.cartBadge;
        await expect(shoppingCartBadge).not.toBeDisplayed();
        //Logout
        await inventoryPage.sideMenu.item('logout').click();
        //Form is Visible
        const loginForm = await $('div[data-test="login-container"]');
        await expect(loginPage.loginForm.rootEl).toBeDisplayed();
    });
});